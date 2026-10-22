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

## Edit the site visually (click to edit)
```
npm run edit
```
Then open **http://localhost:3000/visual-editor/**. Your site appears with an editing layer on top (development only, never part of the published site):
- **Text:** click any text and type. Enter finishes, Esc cancels. Use the English / বাংলা switch to edit the other language.
- **Photos:** click a photo to select it, double-click to replace it (choose an existing one or upload). Click a grey placeholder to add a photo.
- **Add a photo anywhere:** hover between sections and press "＋ Add photo here".
- **Add / copy / move / delete an entry** (notice, event, person, gallery photo...): click it, then use the buttons in the side panel. The panel also shows every field of the entry, including empty ones.
- **Page title & description:** the "Page title" button.
- **Save** (Ctrl+S), Undo / Redo (Ctrl+Z / Ctrl+Shift+Z). Adding, deleting, moving and photo changes save automatically and reload the preview.
- **Save & build for upload** writes the finished site to `out/`.
Changes go into the same `data/*.json` files as the control panel (with the same automatic backups).
Only content the page design already has can be edited or repeated: new entries copy an existing one.

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
- `npm run edit` - development server with the visual editor switched on
