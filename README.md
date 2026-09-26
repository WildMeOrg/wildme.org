# wildme.org

Source for [www.wildme.org](https://www.wildme.org), a static [Jekyll](https://jekyllrb.com/) site served by GitHub Pages. It was imported from Weebly in September 2026 and still uses the Weebly "Birdseye" theme CSS and markup.

## Layout

| Path | What it is |
|------|------------|
| `*.html` (root) | One file per page. Front matter holds title/description; the body is the page content (banner + sections). |
| `_layouts/default.html` | Page shell: `<head>` meta, then header, content, footer. |
| `_includes/weebly-header.html` | Desktop nav. **Edit the menu here** (and the mobile menu in `weebly-footer.html`). |
| `_includes/weebly-footer.html` | Footer, mobile nav, "Support Us" button, theme scripts. |
| `_includes/weebly-head.html` | Theme CSS/JS, Flipcause donate widget, social-card meta. |
| `uploads/` | Images uploaded to the Weebly site (paths kept so old image URLs still work). |
| `files/`, `assets/weebly/` | Theme stylesheet, fonts, and Weebly's JS (drives dropdown menus). |
| `tools/import_weebly.py` | One-time import script (kept for reference). Re-running it overwrites pages. |

## Editing

Edit a page's `.html` file and push to `main`. GitHub Pages rebuilds in about a minute.

Important links:
- **Account requests:** every Wildbook page's "Request an account" button links to the Mailchimp contact form
  `https://us7.list-manage.com/contact-form?u=c5af097df0ca8712f52ea1768&form_id=335cfeba915bbb2a6058d6ba705598ce`
- **Donations:** Give Lively ("Support Us") and Flipcause buttons.

## Preview locally

```bash
docker run --rm -v "$PWD":/srv/jekyll -p 4000:4000 jekyll/jekyll:pages jekyll serve
# open http://localhost:4000
```
