# Nazrul Academy website (Next.js)

Bilingual (English / বাংলা) site built with Next.js (App Router, TypeScript, Tailwind CSS 3).
It exports to plain static files, so any host (including cPanel) can serve it.

## First time
```
npm install
```
(needs Node.js 20.9 or newer)

## Edit the site: the control panel
```
npm run dev
```
- Site preview: http://localhost:3000
- **Control panel: http://localhost:3000/control-panel/** (a page of the site itself; it exists only while running on your computer and is never part of the published site)

For each page the panel has tabs:
- the page's own lists (notices, events, programs, alumni, ...) with add / delete / reorder / copy
- **All page text**: every piece of text on the page, English and Bangla side by side
- **Photos on this page**: every photo spot; upload or browse to replace a placeholder or an existing photo
- **Add images anywhere**: add a new image (with optional caption) after any section of the page
- **Browser title & description**
- **Menu, header & footer** (under "Whole site"): menu labels, header/footer text, social links, site name

Press **Save**: the preview updates immediately.

## Publish
Press **Save & build for upload** in the panel (or run `npm run build`). The finished site is the `out/` folder:
upload everything inside `out/` to your host's `public_html`.

## Where things are
- `data/*.json` - all editable content, one file per page (backups of every save go to `data/.backups/`)
- `public/assets/img/` - images (uploads go to `public/assets/img/uploads/`)
- `app/` - pages (`app/about/page.tsx`, ...); `components/` - header, footer, shared UI; `lib/` - helpers
- `app/control-panel/` and `app/api/admin/` - the control panel and its save API (`*.dev.tsx` / `*.dev.ts` files exist only in development)

## Other commands
- `npm run typecheck` - TypeScript check
