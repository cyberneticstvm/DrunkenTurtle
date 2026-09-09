# Responsive asset replacement guide

The website is already wired to these filenames. Replace a file with another file of the same name and format; no HTML, CSS, or JavaScript changes are required.

The current responsive `logo.webp` files are optimized from `WEBSITE PNG FALLBACK AROUND. 300 X 150 PX_.svg`, which is the logo used at the top-left of the page.

## Desktop (1101px and wider)

- Folder: `assets/desktop/`
- `hero.webp`: 2048 × 768 px, landscape, WebP, ideally under 450 KB. Keep the main character between 50% and 75% of the image width so the left side remains clear for text.
- `turtle.webp`: 1200 × 941 px, transparent WebP, ideally under 350 KB.
- `logo.webp`: 600 × 300 px, transparent WebP, ideally under 80 KB. Keep the visible logo centered with minimal empty space.

## Tablet (641px–1100px)

- Folder: `assets/tablet/`
- `hero.webp`: 1600 × 1000 px, landscape, WebP, ideally under 400 KB. Place the character around 60% of the image width and preserve a darker text-safe area on the left.
- `turtle.webp`: 900 × 706 px, transparent WebP, ideally under 280 KB.
- `logo.webp`: 480 × 240 px, transparent WebP, ideally under 65 KB.

## Mobile (up to 640px)

- Folder: `assets/mobile/`
- `hero.webp`: 900 × 1200 px, portrait, WebP, ideally under 300 KB. Place the character in the lower-middle/right and preserve a dark, low-detail area across the upper 40% for the headline.
- `turtle.webp`: 700 × 549 px, transparent WebP, ideally under 220 KB.
- `logo.webp`: 360 × 180 px, transparent WebP, ideally under 50 KB.

Export all files in sRGB. Use transparent backgrounds only for `turtle.webp` and `logo.webp`. Avoid embedding text in artwork because page copy is rendered as searchable HTML.
