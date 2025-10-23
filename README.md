# TouchSpin Angular Examples

This repository contains standalone Angular CLI projects that consume `@touchspin/angular` across multiple Angular major versions. Each example is completely independent (no shared workspaces or package.json linking) so you can reproduce an end-user setup.

## Projects
- `angular-18/`
- `angular-19/`
- `angular-20/`

## Usage

```bash
cd angular-19
npm install
npm run start
```

Before running any example, make sure the library has been built:

```bash
cd ../touchspin-angular
yarn workspace @touchspin/angular build
```

Then start the Angular app on your preferred port (e.g. `npm run start -- --port 5000`).
