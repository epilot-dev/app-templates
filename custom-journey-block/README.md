# {{name}} — Custom Journey Block

A custom journey block built with React and [concorde-elements](https://www.npmjs.com/package/@epilot/concorde-elements), bundled as a Web Component using [r2wc](https://github.com/nicknisi/r2wc).

## Development

```bash
npm install

# Local dev with Vite (hot reload)
npm run local

# Build + serve (simulates production)
npm run dev
```

The `local` script runs Vite's dev server. The `dev` script builds in watch mode and serves `dist/` — use this to test the actual bundle.

## Build

```bash
npm run build
```

Produces a single `dist/bundle.js` (UMD format) that includes all JS and CSS.

## How it works

- `src/main.tsx` — Wraps the React app as a Web Component using `r2wc`
- `src/App.tsx` — The React component (uses `@epilot/concorde-elements`)
- The web component tag is `<{{name}} />`

## Development Mode

Enable [development mode](https://docs.epilot.io/apps/building-apps/development-mode) in the App Builder to test locally without redeploying.

See: https://docs.epilot.io/apps/building-apps/components/custom-journey-block
