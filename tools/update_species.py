#!/usr/bin/env python3
"""Refresh the "Species" section of each Wildbook page from that Wildbook's Prometheus /metrics.

A species is listed if it is configured in the Wildbook (appears as a species= label on
wildbook_individuals_total / wildbook_encounters_total), minus placeholder rows (genus-level
*_sp, Unknown_*, hybrids) and known bad taxonomies (see EXCLUDE / RENAME / MERGE below).

Common names and links, in priority order:
  1. whatever the page already shows for that species (hand edits survive re-runs)
  2. tools/species_names.json
  3. a Wikipedia lookup (new species; printed so a human can check it)

Usage:  python3 tools/update_species.py [--dry-run]
Snail Wildbook's section describes genera, so it is only checked, never rewritten.
"""
import html, json, os, re, sys, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAMES_FILE = os.path.join(ROOT, 'tools', 'species_names.json')
UA = {'User-Agent': 'wildme.org-species-update/1.0 (https://www.wildme.org)'}

WILDBOOKS = {  # page -> metrics endpoint (from the wildme-metrics skill registry)
    'flukebook': 'https://www.flukebook.org/metrics',
    'sharkbook': 'https://www.sharkbook.ai/metrics',
    'mantamatcher': 'https://mantamatcher.org/metrics',
    'giraffespotter': 'https://giraffespotter.org/metrics',
    'internet-of-turtles': 'https://iot.wildbook.org/metrics',
    'zebra-codex': 'https://zebra.wildme.org/metrics',
    'wildbook-for-lynx': 'https://lynx.wildbook.org/metrics',
    'giant-sea-bass': 'https://spottinggiantseabass.msi.ucsb.edu/metrics',
    'african-carnivores': 'https://africancarnivore.wildbook.org/metrics',
    'amphibians-and-reptiles': 'https://amphibian-reptile.wildbook.org/metrics',
    'spot-a-shark-usa': 'https://ncaquariums.wildbook.org/metrics',
    'whiskerbook': 'https://whiskerbook.org/metrics',
    'grouper-spotter': 'https://www.grouperspotter.org/metrics',
    'seadragonsearch': 'https://wildbook.seadragonsearch.org/metrics',
    'seal-wildbook': 'https://seals.wildme.org/metrics',
    'snail-wildbook': 'https://snails.wildme.org/metrics',
    'deerspotter': 'https://deer.wildme.org/metrics',
}
GENUS_PAGES = {'snail-wildbook'}

PLACEHOLDER = re.compile(r'_sp$|^Unknown_|Hybrid|_species$')
# Misspelled or non-standard taxonomy names in Wildbook configs -> name shown on the site
RENAME = {
    'Dugong_dugong': 'Dugong_dugon',
    'Proteo_anguinus': 'Proteus_anguinus',
    'Rucervis_eldii': 'Rucervus_eldii',
    'Pusa_saimensis': 'Pusa_hispida_saimensis',
    'Auriculela_ambusta': 'Auriculella_ambusta',
}
# Synonyms configured as separate taxonomies -> show once, under the accepted name
MERGE = {
    'Delphinus_capensis_tropicalis': 'Delphinus_tropicalis',
    'Mesoplodon_pacificus': 'Indopacetus_pacificus',
}
EXCLUDE = {'Chelonia_fauxdas'}  # not a real species


def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read().decode('utf-8', 'replace')


def configured_species(metrics_text):
    found = set(re.findall(r'^wildbook_(?:individuals|encounters)_total\{species="([^"]+)",?\}', metrics_text, re.M))
    found.discard('*')
    out, notes = set(), []
    for s in sorted(found):
        if PLACEHOLDER.search(s) or s in EXCLUDE:
            notes.append('skip ' + s)
            continue
        t = MERGE.get(s) or RENAME.get(s) or s
        if t != s:
            notes.append('%s -> %s' % (s, t))
        out.add(t)
    return out, notes


def wiki_lookup(binomial):
    try:
        j = json.loads(fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + urllib.parse.quote(binomial)))
    except Exception:
        return {'common': '', 'url': None}
    title = j.get('title', '')
    common = '' if title.replace(' ', '_').lower() == binomial.lower() else title
    return {'common': common, 'url': j.get('content_urls', {}).get('desktop', {}).get('page')}


def clean(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s)).replace('​', '')).strip()


def find_section(h):
    """Return (start, end) of the replaceable body of the Species section."""
    heads = [m for m in re.finditer(r'<h2 class="wsite-content-title">(.*?)</h2>', h, re.S)
             if re.sub(r'<[^>]+>|&#8203;|​|&nbsp;|\s', '', m.group(1)) == 'Species']
    if len(heads) != 1:
        raise ValueError('expected one Species heading, found %d' % len(heads))
    start = heads[0].end()
    tail = re.search(r'<div class="wsite-spacer" style="height:\d+px;"></div>\s*(?:</div>\s*){7}$', h[start:])
    if not tail:
        raise ValueError('could not find end of Species section')
    return start, start + tail.start()


def current_entries(section_html):
    """{binomial: {'common', 'url'}} for what the page shows now."""
    out = {}
    for para in re.findall(r'<div class="paragraph"[^>]*>(.*?)</div>', section_html, re.S):
        for part in re.split(r'(?:<br\s*/?>\s*(?:&#8203;|​|</span>|<span>|\s)*){2,}', para):
            a = re.search(r'<a [^>]*href="([^"]+)"[^>]*>(.*?)</a>', part, re.S)
            if a:
                sci, url, common = clean(a.group(2)), html.unescape(a.group(1)), clean(part[a.end():])
            else:
                m = re.match(r'([A-Z]{3,}(?: [A-Z]{3,}){1,2})\s*(.*)', clean(part))
                if not m:
                    continue
                sci, common, url = m.group(1), m.group(2), None
            if re.fullmatch(r'[A-Z]+(?: [A-Z]+){1,2}', sci):
                out[sci.capitalize().replace(' ', '_')] = {'common': common, 'url': url}
    return out


def entry_html(binomial, info):
    sci = binomial.replace('_', ' ').upper()
    url = (info.get('url') or '').replace("'", '%27').replace('"', '%22').replace('&', '&amp;')
    name = '<a href="%s" target="_blank">%s</a>' % (url, sci) if url else sci
    return name + ('<br />' + html.escape(info['common'], quote=False) if info.get('common') else '')


def section_html(entries):
    items = [entry_html(b, i) for b, i in entries]
    if len(items) <= 2:
        return ('\n\n<div class="wsite-spacer" style="height:33px;"></div>\n\n'
                '<div class="paragraph">%s</div>\n\n' % '<br /><br />'.join(items))
    half = (len(items) + 1) // 2
    col = ('\t\t\t\t<td class="wsite-multicol-col" style="width:50%%; padding:0 15px;">\n\n'
           '<div class="paragraph">%s</div>\n\n\t\t\t\t</td>')
    return ('\n\n<div class="wsite-spacer" style="height:33px;"></div>\n\n'
            '<div><div class="wsite-multicol"><div class="wsite-multicol-table-wrap" style="margin:0 -15px;">\n'
            '\t<table class="wsite-multicol-table">\n\t\t<tbody class="wsite-multicol-tbody">\n'
            '\t\t\t<tr class="wsite-multicol-tr">\n' + col % '<br /><br />'.join(items[:half]) +
            col % '<br /><br />'.join(items[half:]) +
            '\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div></div></div>\n\n')


def main():
    dry = '--dry-run' in sys.argv
    names = json.load(open(NAMES_FILE, encoding='utf-8'))
    names_changed = False
    for page, url in WILDBOOKS.items():
        path = os.path.join(ROOT, page + '.html')
        h = open(path, encoding='utf-8').read()
        start, end = find_section(h)
        text = fetch(url)
        if len(text) < 100:
            print('!! %s: metrics endpoint not reporting (%d bytes); page left unchanged' % (page, len(text)))
            continue
        species, notes = configured_species(text)
        shown = current_entries(h[start:end])
        if page in GENUS_PAGES:
            genera_shown = set(re.findall(r'wikipedia\.org/wiki/([A-Z][a-z]+)', h[start:end]))
            missing = sorted({s.split('_')[0] for s in species} - genera_shown)
            print('== %s (genus list, not rewritten): %d species; genera missing from page: %s'
                  % (page, len(species), missing or 'none'))
            continue
        entries = []
        for b in sorted(species):
            info = shown.get(b) or names.get(b)
            if not info:
                info = names[b] = wiki_lookup(b)
                names_changed = True
                print('   NEW NAME (check): %s -> %r %s' % (b, info['common'], info['url']))
            entries.append((b, info))
        added = sorted(species - set(shown))
        removed = sorted(set(shown) - species)
        print('== %s: %d species (+%d / -%d)' % (page, len(entries), len(added), len(removed)))
        if removed:
            print('   removed: ' + ', '.join(removed))
        for n in notes:
            print('   note: ' + n)
        if not dry:
            h = h[:start] + section_html(entries) + h[end:]
            open(path, 'w', encoding='utf-8').write(h)
    if names_changed and not dry:
        json.dump(dict(sorted(names.items())), open(NAMES_FILE, 'w', encoding='utf-8'), indent=1, ensure_ascii=False)


if __name__ == '__main__':
    main()
