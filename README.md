# Super Fashion — catalog site

Multi-page static site, no build step needed.

## Pages
- `index.html` — Home, with a preview of each category (Emerald & cream theme)
- `chaniya-choli.html` — Royal purple & gold theme
- `fusion.html` — Teal & copper theme
- `mens.html` — Charcoal & steel blue theme
- `base.css` — shared layout/structure rules used by every page (no colors)

Every page has the same left sidebar: a Home button at the top, then links
to each category. Each page defines its own color palette in a small
`<style>` block in its `<head>` (a `:root{ --wine: ...; }` block) — edit
those variables directly in the page if you want to tweak a theme.
Product photos are baked into the pages (as base64), so there's no
dependency on Google Drive staying accessible.

## Adding items later
Photos are embedded in the generated HTML, so the easiest way to add or
edit products is to tell Claude the new item (name, price, availability,
photo) and ask it to regenerate the page — or, if editing by hand, search
for the `<article class="card">` blocks in the relevant page and copy the
pattern.

## Deploy to Vercel
1. Push this folder to a GitHub repo (all files, including styles.css).
2. Go to vercel.com/new, import the repo, Framework Preset "Other", Deploy.
3. Your site goes live at a *.vercel.app link, with index.html as the homepage automatically.
