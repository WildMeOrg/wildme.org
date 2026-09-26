#!/usr/bin/env python3
"""Refresh each Wildbook page's encounter/individual counts from its Prometheus /metrics, and report
algorithms that the Wildbook is using but the page's Algorithms section doesn't list.

The counts replace the centered stats line under the page's lead image.

Algorithms are only *reported*, never removed or added automatically. /metrics can prove an
algorithm is in use (task count > 0) but usually can't prove it's absent:
  - newer builds emit only miewId, vectorMatch, pieTwo and hotspotter gauges
  - Modified Groth and I3S never appear in /metrics
  - builds without a wildbook_tasks_miewId gauge can't report MiewID at all
vectorMatch is MiewID's fast vector-search path, so it counts as MiewID.

Usage:  python3 tools/update_stats.py [--dry-run]
"""
import html, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from update_species import ROOT, WILDBOOKS, fetch  # noqa: E402

# page heading (as written in the Algorithms section) -> metrics gauges that prove it's in use
ALGORITHMS = {
    'MIEW-ID': ('miewId', 'vectorMatch'),
    'PIE v2': ('pieTwo',),
    'HOTSPOTTER': ('hotspotter',),
}


def metric(text, name, label=None):
    pat = r'^%s%s (\S+)' % (re.escape(name), r'\{[^}]*"%s",?\}' % re.escape(label) if label else r'(?:\{[^}]*\})?')
    m = re.search(pat, text, re.M)
    return float(m.group(1)) if m else None


def counts(text):
    ind = metric(text, 'wildbook_individuals_db_count')
    enc = metric(text, 'wildbook_encounters_db_count')
    if ind is None:  # older builds: labeled rollup only
        ind = metric(text, 'wildbook_individuals_total', '*')
    if enc is None:
        enc = metric(text, 'wildbook_encounters_total', '*')
    return enc, ind


def listed_algorithms(h):
    heads = list(re.finditer(r'<h2 class="wsite-content-title">(.*?)</h2>', h, re.S))
    alg = [m for m in heads if 'Algorithm' in re.sub(r'<[^>]+>', '', m.group(1))]
    if not alg:
        return set()
    end = next((m.start() for m in heads if m.start() > alg[0].end()), len(h))
    return {re.sub(r'[\s\u200b]+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip().upper()
            for s in re.findall(r'<strong>(.*?)</strong>', h[alg[0].end():end], re.S)}


def main():
    dry = '--dry-run' in sys.argv
    for page, url in WILDBOOKS.items():
        path = os.path.join(ROOT, page + '.html')
        h = open(path, encoding='utf-8').read()
        text = fetch(url)
        if len(text) < 100:
            print('!! %s: metrics endpoint not reporting (%d bytes); page left unchanged' % (page, len(text)))
            continue
        enc, ind = counts(text)
        if not enc or not ind:
            print('!! %s: no encounter/individual totals in metrics; page left unchanged' % page)
            continue
        stats = '%s Encounters &middot; %s Individuals' % (format(int(enc), ','), format(int(ind), ','))
        line = '<div class="paragraph" style="text-align:center;">%s</div>' % stats
        new, n = re.subn(r'<div class="paragraph" style="text-align:center;">(?:&#8203;|​)*(?:[\d,]+ Sightings|[\d,]+ Encounters &middot; [\d,]+ Individuals)</div>',
                         line, h, count=1)
        if n == 0:  # no stats yet: fill the empty caption under the lead image
            new, n = re.subn(r'(<img [^>]*>\s*</a>\s*<div style="display:block;font-size:90%"></div>\s*</div></div>\s*)'
                             r'<div class="paragraph" style="text-align:center;"></div>',
                             lambda m: m.group(1) + line, h, count=1)
        if n == 0:
            print('!! %s: stats line not found' % page)
            continue
        new = re.sub(r'^description: "​?[\d,]+ Sightings"$', 'description: "%s"' % html.unescape(stats), new, count=1, flags=re.M)

        listed = listed_algorithms(h)
        missing = []
        for name, gauges in ALGORITHMS.items():
            used = sum(metric(text, 'wildbook_tasks_' + g) or 0 for g in gauges)
            if used > 0 and name.upper() not in listed and not (name == 'PIE v2' and 'PIE' in listed):
                missing.append('%s (%d tasks)' % (name, used))
        if metric(text, 'wildbook_tasks_miewId') is None:
            missing.append('MiewID usage unknown: this build has no miewId gauge')
        print('== %s: %s%s' % (page, html.unescape(stats), ('; algorithms to review: ' + ', '.join(missing)) if missing else ''))
        if not dry and new != h:
            open(path, 'w', encoding='utf-8').write(new)


if __name__ == '__main__':
    main()
