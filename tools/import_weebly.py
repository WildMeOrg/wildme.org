#!/usr/bin/env python3
"""One-time import of the Weebly export (wget mirror in _original/) into this Jekyll site.

Produces: _layouts/default.html, _includes/{head,header,footer}.html, one .html page per
Weebly page (front matter + page body), and copies uploads/, files/ and Weebly CDN assets
(to assets/weebly/) with query-string suffixes stripped from filenames.
"""
import collections, glob, hashlib, os, posixpath, re, shutil, sys
from urllib.parse import unquote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORIG = os.path.join(ROOT, '_original')
SITE = 'www.wildme.org'
SKIP_PAGES = {'home-copy.html', 'scout-new.html'}  # unpublished drafts
TITLE_SUFFIX = ' - Wild Me by Conservation X Labs'

def clean_name(p):
    """'main_style.css?1786029335.css' -> 'main_style.css'; also handles wget's %3F."""
    p = unquote(p)
    return p.split('?', 1)[0]

# ---------------------------------------------------------------- asset copy
def copy_tree(src, dst):
    n = 0
    for dirpath, _, files in os.walk(src):
        for f in files:
            s = os.path.join(dirpath, f)
            rel = os.path.relpath(s, src)
            d = os.path.join(dst, clean_name(rel.replace(os.sep, '/')))
            os.makedirs(os.path.dirname(d), exist_ok=True)
            shutil.copy2(s, d)
            n += 1
    return n

# ---------------------------------------------------------------- ref mapping
def map_path(orig_rel):
    """Path relative to _original/ -> site URL, or None if we don't host it."""
    orig_rel = clean_name(orig_rel)
    if orig_rel.startswith(SITE + '/'):
        return '/' + orig_rel[len(SITE) + 1:]
    m = re.match(r'cdn\d+\.editmysite\.com/(.*)', orig_rel)
    if m:
        return '/assets/weebly/' + m.group(1)
    return None

missing_remote = collections.Counter()

def map_ref(ref, base_dir):
    """Rewrite one href/src/url() value found in a file located at base_dir (relative to _original/)."""
    r = ref.strip()
    if not r or r.startswith(('#', 'mailto:', 'tel:', 'data:', 'javascript:', '{')):
        return ref
    m = re.match(r'(?:https?:)?//(?:www\.)?wildme\.org(/.*)?$', r)
    if m:  # absolute link to our own site -> root-relative
        return m.group(1) or '/'
    m = re.match(r'(?:https?:)?//(cdn\d+\.editmysite\.com)/(.*)$', r)
    if m:
        local = os.path.join(ORIG, m.group(1), clean_name(m.group(2)))
        mapped = '/assets/weebly/' + clean_name(m.group(2))
        if os.path.exists(os.path.join(ROOT, mapped.lstrip('/'))):
            return mapped
        missing_remote[r] += 1
        return ref
    if re.match(r'^[a-z][a-z0-9+.-]*:', r, re.I) or r.startswith('//'):
        return ref  # other external URL
    if r.startswith('/'):
        path, frag = r, ''
        mapped = '/' + clean_name(path.lstrip('/').split('#')[0])
        return mapped + ('#' + r.split('#', 1)[1] if '#' in r else '')
    path, _, frag = r.partition('#')
    resolved = posixpath.normpath(posixpath.join(base_dir, unquote(path)))
    mapped = map_path(resolved)
    if mapped is None:
        return ref
    if mapped == '/index.html':
        mapped = '/'
    return mapped + ('#' + frag if frag else '')

ATTR_RE = re.compile(r'''(\s(?:href|src|data-src|poster)\s*=\s*)(["'])(.*?)\2''', re.S)
URL_RE = re.compile(r'''url\(\s*(&quot;|["']?)(.*?)\1\s*\)''', re.S)

def cf_decode(hexstr):
    key = int(hexstr[:2], 16)
    return ''.join(chr(int(hexstr[i:i + 2], 16) ^ key) for i in range(2, len(hexstr), 2))

def decode_cf_emails(text):
    """Undo Cloudflare email obfuscation that was baked into the mirrored HTML."""
    text = re.sub(r'<a href="[^"]*/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="([0-9a-f]+)">\[email&#160;protected\]</a>',
                  lambda m: '<a href="mailto:%s">%s</a>' % ((cf_decode(m.group(1)),) * 2), text)
    text = re.sub(r'<span class="__cf_email__" data-cfemail="([0-9a-f]+)">\[email&#160;protected\]</span>',
                  lambda m: cf_decode(m.group(1)), text)
    text = re.sub(r'href="[^"]*/cdn-cgi/l/email-protection#([0-9a-f]+)"', lambda m: 'href="mailto:%s"' % cf_decode(m.group(1)), text)
    return re.sub(r'<script[^>]*email-decode\.min\.js[^>]*></script>', '', text)

def fix_refs(text, base_dir, attrs=True):
    text = decode_cf_emails(text)
    # wget turned Weebly's url(&quot;/uploads/x.jpg&quot;) into url(https://www.wildme.org/&quot;/uploads/...)
    text = re.sub(r'url\((?:https?://www\.wildme\.org/|(?:\.\./)+|/)&quot;', 'url(&quot;', text)
    if attrs:
        text = ATTR_RE.sub(lambda m: m.group(1) + m.group(2) + map_ref(m.group(3), base_dir) + m.group(2), text)
    text = URL_RE.sub(lambda m: 'url(' + m.group(1) + map_ref(m.group(2), base_dir) + m.group(1) + ')', text)
    return text

# ---------------------------------------------------------------- page parsing
def split_page(h):
    b = h.find('<body'); bw = h.find('<div class="banner-wrap'); fw = h.find('<div class="footer-wrap">')
    assert min(b, bw, fw) > 0
    return h[:b], h[b:bw], h[bw:fw], h[fw:]

def meta(h, attr, name):
    m = re.search(r'<meta %s="%s" content="([^"]*)"' % (attr, re.escape(name)), h)
    return m.group(1) if m else ''

def yaml_str(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

def strip_nav_state(s):
    s = re.sub(r'\s*wsite-nav-current', '', s)
    s = s.replace(' id="active"', '')
    return s

def raw_if_needed(s):
    return '{% raw %}' + s + '{% endraw %}' if ('{{' in s or '{%' in s) else s

def clean_head(h):
    h = h[h.find('<head>') + len('<head>'):h.rfind('</head>')]
    # charset/viewport/title/meta come from _layouts/default.html
    h = re.sub(r'<meta http-equiv="Content-Type"[^>]*>\s*<meta name="viewport"[^>]*>\s*', '', h)
    # POWr notification bar (inactive: renders at 0px height)
    h = re.sub(r'\s*<script src="https://www.powr.io/powr.js"[^>]*></script>\s*<div class="powr-notification-bar"[^>]*></div>', '\n', h)
    h = re.sub(r'div#weebly_notification-bar_\d+\s*\{[^}]*\}', '', h)
    # Weebly customer accounts (login/store) RPC setup
    h = re.sub(r'<script type="text/javascript">\s*function initCustomerAccountsModels.*?</script>', '', h, flags=re.S)
    h = re.sub(r'(<iframe id="fc-myFrame"[^>]*?)\s+src="[^"]*"', r'\1', h)
    h = h.replace('<meta property="og:image" content="/files/theme/Thumbnail.jpg">',
                  '<meta property="og:image" content="https://www.wildme.org/files/theme/Thumbnail.jpg">')
    h = h.replace('<meta name="twitter:image"content="https://www.wildme.org/#/files/theme/Thumbnail.jpg">',
                  '<meta name="twitter:image" content="https://www.wildme.org/files/theme/Thumbnail.jpg">')
    h = h.replace('<meta property="fb:app_id, article:author">\n', '')
    seen = set()
    def dedupe(m):
        if m.group(1) in seen:
            return ''
        seen.add(m.group(1))
        return m.group(0)
    return re.sub(r"<link href='(/assets/weebly/fonts/[^']+)'[^>]*/>\n?", dedupe, h)

def clean_header(h):
    return re.sub(r'^<body[^>]*>', '', h)

def clean_footer(f):
    f = re.sub(r'<script type="text/javascript">\s*var _gaq.*?</script>', '', f, flags=re.S)  # dead Universal Analytics
    f = re.sub(r'<script type="text/javascript" async=1>\s*// NOTE: keep the getElementsByTagName.*?</script>', '', f, flags=re.S)  # Weebly tracking
    f = re.sub(r'<div id="customer-accounts-app"></div>\s*', '', f)
    f = re.sub(r'<script src="/assets/weebly/js/site/main-customer-accounts-site.js"></script>\s*', '', f)
    return re.sub(r'\s*</body>\s*</html>\s*$', '', f)

def main():
    pages = sorted(p for p in glob.glob(os.path.join(ORIG, SITE, '*.html')) if os.path.basename(p) not in SKIP_PAGES)

    # 1. assets
    for d in ['uploads', 'files', 'assets/weebly']:
        shutil.rmtree(os.path.join(ROOT, d), ignore_errors=True)
    print('uploads', copy_tree(os.path.join(ORIG, SITE, 'uploads'), os.path.join(ROOT, 'uploads')))
    print('files  ', copy_tree(os.path.join(ORIG, SITE, 'files'), os.path.join(ROOT, 'files')))
    for cdn in glob.glob(os.path.join(ORIG, 'cdn*.editmysite.com')):
        print(os.path.basename(cdn), copy_tree(cdn, os.path.join(ROOT, 'assets', 'weebly')))

    # rewrite url() inside copied CSS, resolving against each file's original location
    for css in glob.glob(os.path.join(ROOT, 'files', '**', '*.css'), recursive=True) + \
               glob.glob(os.path.join(ROOT, 'assets', 'weebly', '**', '*.css'), recursive=True):
        rel = os.path.relpath(css, ROOT).replace(os.sep, '/')
        if rel.startswith('files/'):
            orig_dir = posixpath.dirname(SITE + '/' + rel)
        else:
            # which CDN host it came from doesn't matter for relative refs between CDN files
            orig_dir = posixpath.dirname('cdn2.editmysite.com/' + rel[len('assets/weebly/'):])
        with open(css, encoding='utf-8', errors='surrogateescape') as f:
            t = f.read()
        with open(css, 'w', encoding='utf-8', errors='surrogateescape') as f:
            f.write(fix_refs(t, orig_dir, attrs=False))

    # 2. choose canonical shared chunks (most common header/footer variant after removing nav state)
    parsed = {}
    for p in pages:
        with open(p, encoding='utf-8') as f:
            parsed[os.path.basename(p)] = split_page(f.read())
    def canon(i):
        c = collections.Counter(re.sub(r'wsite-page-[\w-]+', '', strip_nav_state(v[i])) for v in parsed.values())
        text, n = c.most_common(1)[0]
        print('shared part %d: %d/%d pages identical, %d variants' % (i, n, len(parsed), len(c)))
        return text
    head, header, footer = canon(0), canon(1), canon(3)
    # heads differ per page only by title/meta; normalize them out first
    def head_norm(h):
        h = re.sub(r'<title>.*?</title>', '', h, flags=re.S)
        h = re.sub(r'<meta (?:property|name)="(?:og:site_name|og:title|og:description|og:url|description|keywords)"[^>]*>\s*', '', h)
        h = re.sub(r'<iframe id="fc-myFrame"[^>]*></iframe>', '<iframe id="fc-myFrame" iframe height="580" width="925" style="border: 0;border-radius:5px 5px 5px 5px; box-shadow:0 0 8px rgba(0, 0, 0, 0.5);" scrolling="no"></iframe>', h)
        return h
    hc = collections.Counter(head_norm(v[0]) for v in parsed.values())
    head, n = hc.most_common(1)[0]
    print('head: %d/%d identical after removing title/meta, %d variants' % (n, len(parsed), len(hc)))

    base = SITE  # all pages live at the site root
    head, header, footer = (fix_refs(x, base) for x in (head, header, footer))

    # 3. write pages
    for name, (h, _, content, _) in parsed.items():
        title = re.search(r'<title>(.*?)</title>', h, re.S).group(1).strip()
        body_class = re.search(r'<body class="([^"]*)"', parsed[name][1]).group(1)
        fm = ['---', 'layout: default', 'title: ' + yaml_str(title)]
        for key, val in [('og_title', meta(h, 'property', 'og:title')),
                         ('description', meta(h, 'property', 'og:description') or meta(h, 'name', 'description')),
                         ('keywords', meta(h, 'name', 'keywords'))]:
            if val:
                fm.append('%s: %s' % (key, yaml_str(val)))
        fm.append('body_class: ' + yaml_str(' '.join(body_class.split())))
        fm.append('---')
        body = raw_if_needed(fix_refs(content, base).rstrip() + '\n')
        with open(os.path.join(ROOT, name), 'w', encoding='utf-8') as f:
            f.write('\n'.join(fm) + '\n' + body)

    # 4. write shared includes, minus Weebly-only plumbing
    head, header, footer = clean_head(head), clean_header(header), clean_footer(footer)
    os.makedirs(os.path.join(ROOT, '_includes'), exist_ok=True)
    for fname, text in [('weebly-head.html', head), ('weebly-header.html', header), ('weebly-footer.html', footer)]:
        with open(os.path.join(ROOT, '_includes', fname), 'w', encoding='utf-8') as f:
            f.write(raw_if_needed(text.strip() + '\n'))
    print('pages written:', len(parsed))
    for r, n in missing_remote.most_common():
        print('  still remote:', r, n)

if __name__ == '__main__':
    main()
