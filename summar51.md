# Cliff Consulting Project Summary (verified) — September 2025

This is a refined summary based on summary5.md, cross-checked against the current codebase (package.json, vite.config.mjs, src/*, and .github/workflows).

## Tech Stack (as implemented)
- React 19.1.1 (function components standard; some legacy classes remain)
- Vite 7.1.5 (dev server on port 3000 per vite.config.mjs)
- React Bootstrap 2.10.10, Bootstrap 5.3.x
- React Router DOM 7.8.0 (v6+ APIs; `<Routes>` + `element={<.../>}` in `src/App.jsx`)
- React Icons 5.x
- Testing: Vitest 3.2.4, @testing-library/react 16, jsdom
- Linting: ESLint 9 (flat config files: `eslint.config.js`/`.mjs`)
- Hosting: AWS S3 + CloudFront
- CI/CD: GitHub Actions (workflow `.github/workflows/s3-publish.yml`)
- Infra: CloudFormation (stack outputs used for CloudFront invalidation)
- DNS/SSL: Route 53 and ACM

## Repository Structure (high level)
- `src/` — App, routes, components (`App.jsx`, `Home.jsx`, `Resume.jsx`, `Projects.jsx`, `Articles.jsx`, `Contact.jsx`, `MyNav.jsx`, `Footer.jsx`, `setupTests.jsx`, `index.jsx`)
- `src/__tests__/` — component tests (Vitest/RTL)
- `public/` — static assets (favicon, manifest.json, error.html, pdf)
- `images/`, `css/` — branding and legacy styles
- `.github/workflows/` — CI (S3 publish), CodeQL
- `vite.config.mjs`, `eslint.config.*`, `package.json`

## Deployment & Operations
- GitHub Actions builds/tests, then deploys to S3 and invalidates CloudFront.
- Uses `aws-actions/configure-aws-credentials` with different creds for `master` vs `release/dev`.
- During deploy, CloudFormation stack outputs are queried to obtain the CloudFront Distribution ID.
- Historical CodePipeline/CodeBuild is no longer the active path (retained only as history in docs).

## Service Worker
- CRA-era `src/registerServiceWorker.jsx` exists but is not registered in `src/index.jsx`.
- Offline/PWA is currently disabled. For PWA, migrate to a Vite-compatible solution (Workbox or vite-plugin-pwa).

## Modernization Status (verified)
- Router is modern (v6+ patterns in `App.jsx`).
- UI library is React Bootstrap (reactstrap no longer imported here).
- Remaining class components:
  - `src/Articles.jsx` (functional refactor exists at `src/Articles.refactored.jsx`)
  - `src/Projects.jsx` (contains `ProjectItem` and `Projects` as classes)

## Local Development
- Install: `npm install`
- Dev server: `npm start` → http://localhost:3000
- Tests: `npm test`
- Build: `npm run build` (outputs `dist/`)
- Preview: `npm run preview`

## Next Actions
1. Convert `src/Articles.jsx` to the functional version in `src/Articles.refactored.jsx` (or merge changes and delete the refactor file).
2. Convert `src/Projects.jsx` and `ProjectItem` to function components.
3. If PWA is desired, add a Vite-compatible service worker and register it.
4. Optional styling modernization: adopt CSS Modules or CSS-in-JS for stronger encapsulation.

## References
- Vite: https://vitejs.dev/
- React Router: https://reactrouter.com/
- React Bootstrap: https://react-bootstrap.github.io/
- CRA docs (historical): https://github.com/facebook/create-react-app
