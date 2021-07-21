# Integrating [hgrid-css](https://github.com/ahansson/hgrid-css) in an Eleventy (11ty) project

## Documentation
https://hgrid.io/documentation/integrate/#11ty

## Repository
https://github.com/ahansson/hgrid-css-11ty

Minimal setup of 11ty with Sass compilation for `hgrid-css`. Builds final css with Autoprefixer and PostCSS minification.

## Installation

Installs the required `node_modules`, including `hgrid-css`.

```bash
npm install
```

## Development

Starts the development server with Sass compilation for **hgrid** and serves your site from the `_public` folder on localhost:8080 (if available).

```bash
npm run start
```

## Build

```bash
npm run build
```

Builds all files and copies them to the `_public` folder. This is the command you run on the server if you use hosting services like Netlify, Vercel, GitHub Pages, etc.