# Student photos

Drop recipient portraits in this folder and reference them by filename from the
`photo` field in `src/data/students.js` — for example `photo: 'wanangwa-msiska.jpg'`.

Accepted formats: `.jpg`, `.jpeg`, `.png`, `.webp`. They are picked up
automatically at build time; no import statement is needed.

A student with `photo: null` (or a filename that does not resolve) falls back to
an initials avatar with their country flag, so the grid never breaks.

## Guidelines

- Square, roughly 800×800px, portrait centred.
- Get the originals from Mishma. The 2024/2025 cohort posters in the board deck
  are flattened composites — cropping portraits out of them yields low-resolution
  images with poster artwork bleeding into the edges.
- Do not add a photo until that student has consented to appear on the public
  site. See the consent note at the top of `src/data/students.js`.
