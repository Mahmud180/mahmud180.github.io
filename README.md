# Portfolio — Mahmud Hasan Shawon

Personal portfolio site. Broadcast & live-production work, IT/technical operations, and software projects.

Live at **https://mahmud180.github.io**

## Stack

Static multi-page site — plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies.

- Content lives in `data.js` and is rendered into each page by `script.js`.
- `partials.js` injects the shared header/footer and handles scroll and motion behaviour.
- `style.css` holds the full theme.

## Structure

```
index.html        Home
about.html        About + background
experience.html   Work history
projects.html     Project index
project.html      Project detail (?p=<slug>)
contact.html      Contact / links
data.js           All page content
script.js         Per-page rendering
partials.js       Shared nav/footer + interactions
style.css         Theme and layout
assets/           Images, covers, CV
```

## Running locally

Serve the folder over HTTP (needed so the pages can load `data.js`):

```
py -3 -m http.server 5500
```

Then open http://localhost:5500

## Editing

To change any text, edit `data.js` — the pages read from it. New images go in `assets/` and are referenced from `data.js`.
