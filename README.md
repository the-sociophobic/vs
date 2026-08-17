# Вишнёвый Сад

React + Sass + Bootstrap site. Black background, white text, Roboto Flex font,
a scrolling "running line" at the top and bottom edges, and 4 configurable
cards in the middle.

## Setup

```bash
yarn install
yarn dev
```

## Structure

- `src/components/RunningLine` — one continuous marquee that runs clockwise around all four edges of the viewport (top → right → bottom → left), each edge clipped at a 45° miter so it meets the next like a picture-frame corner. No border lines — the scrolling text is the frame. Props: `text`, `speed` (seconds per loop, per edge), optional `children` (rendered centered, static, on top of the bottom edge — used for the footer link). Frame thickness is controlled by the `--rl-thickness` CSS variable set in `src/styles/main.sass`, and page content is padded by that same variable so it never sits under the frame.
- `src/components/Card` — bordered card. Props: `ratio` ('WxH' string, default `'487x242'`), `pic`, `button1` / `button2` (`{ label, url }`, open in a new tab, omitted if no label), `hidden` (renders just an empty white-bordered box).
- `src/App.jsx` — holds the `cardsData` array (JSON-like config) for the 4 cards at the top of the file. Fill in real `pic`, `ratio`, `button1`, `button2` values there.

Styles are written in the Sass indented syntax (`.sass`, no braces or semicolons), not `.scss`.

## Deploy to GitHub Pages

The repo is expected at `the-sociophobic/vs`, published to
`https://the-sociophobic.github.io/vs`.

```bash
yarn deploy
```

This runs `vite build` (via `predeploy`) and publishes `dist/` to the
`gh-pages` branch using the `gh-pages` package. Make sure the repo's
GitHub Pages settings point at the `gh-pages` branch.
