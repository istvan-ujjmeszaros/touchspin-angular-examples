# TouchSpin Angular Examples

This repository contains standalone Angular CLI projects that consume `@touchspin/angular` across multiple Angular major versions. Each example is completely independent (no shared workspaces or package.json linking) so you can reproduce an end-user setup.

## Projects
- `angular-17/`
- `angular-18/`
- `angular-19/`
- `angular-20/`

## Usage

```bash
cd angular-19
npm install
npm run start -- --port 5000
```

All projects pull `@touchspin/angular` from npm (currently `^5.1.5`), so no local build step is required.  
If you want to validate an unpublished dist build instead, point the relevant `package.json` dependency to your local path and rebuild the library before starting the app.
