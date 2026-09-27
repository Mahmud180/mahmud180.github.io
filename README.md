# Portfolio — Mahmud Hasan Shawon

Static site. No build step. Files: `index.html`, `style.css`, `script.js`, `data.js`, `assets/`.
All content is truthful and drawn from the real CV. To edit text, change `data.js` only.

## View locally
Open `index.html` in a browser, or from this folder run:

    py -3 -m http.server 5500

then visit http://localhost:5500

## Host FREE, forever — GitHub Pages (recommended; you already have github.com/Mahmud180)

1. Create a new public repo named **mahmud180.github.io** (exact name = your username).
2. Upload every file in this folder to the repo root (index.html must be at the top level).
3. Repo → Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/root` → Save.
4. Live in ~1 minute at:  https://mahmud180.github.io
   - Free forever, no card, no renewal. This is the "till the end of time" free option.

## Alternative: Cloudflare Pages (also free forever)
- pages.cloudflare.com → Create → connect the same repo, or drag-drop the folder.
- Free subdomain: your-project.pages.dev

## Custom domain (optional, NOT free-forever)
A real custom domain (e.g. mahmudshawon.com) is ~$1–12/year — no domain is reliably free forever
anymore (Freenom .tk/.ml is effectively dead). Both hosts above let you attach a paid domain later
for free. The github.io / pages.dev subdomain stays free forever if you don't want to pay.

## Add more images later
Drop files into `assets/` and reference them in `index.html` / `data.js`. Do NOT add any
ID/passport/certificate scans — those are private and must never go on a public site.
