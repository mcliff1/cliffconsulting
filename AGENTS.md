# Repository Guidelines
## Project Structure & Module Organization
- **Source code:** All main React JS code is under `src/` (e.g., `App.js`, components, styles).
- **Static assets:** Images, HTML, manifest, and public files are in `public/`.
- **CSS:** Site-wide styles are located in `css/main.css` and component-scoped CSS in `src/`.
- **Tests:** Test files are centralized under `src/__tests__/` (e.g., `src/__tests__/App.test.js`).
## Build, Test, and Development Commands
- `npm install` – Install all dependencies.
- `npm start` – Start the development server with hot reload.
- `npm run build` – Build production-ready static files to `build/`.
- `npm test` – Run test suites using React’s testing setup.
## Coding Style & Naming Conventions
- **Indentation:** Use 2 spaces for JavaScript/JSX files.
- **Linting:** Enforced via ESLint (see `eslint.config.js`).
- **Naming:** Use PascalCase for React components (`MyComponent.js`), camelCase for variables and functions.
- **Formatting:** Follow the formatting rules in `.eslintrc` and default Prettier standards if configured.
## Testing Guidelines
- **Framework:** Uses React Testing Library (via `react-scripts test`).
- **Locations:** Keep all test files in `src/__tests__/`, named as `*.test.js`.
- **Coverage:** Maintain or improve existing test coverage with every change.
- **Commands:** Run `npm test` locally and ensure all tests pass before submitting.
## Commit & Pull Request Guidelines
- **Commits:** Write concise, imperative messages (e.g., `Fix header alignment bug`). Reference issues when relevant (`Fixes #123`).
- **Pull Requests:** Provide a summary, link issues, and describe all major changes. Add screenshots or testing notes for UI changes.
## Additional Notes
- **Configuration:** Review `package.json` for dependency and script management.
- **Security:** Do not commit secrets. Review dependencies for known vulnerabilities using `npm audit`.
- **Contacts:** For questions, consult `README.md` or contact maintainers listed within it.
-
## Sandbox Mode for Codex CLI

When running this repository with Codex CLI, we recommend launching in danger-full-access sandbox mode for full local development capability:

```sh
codex agent --sandbox danger-full-access --network on --approval on-request
```

Or with environment variables:

```sh
export CODEX_FILESYSTEM_SANDBOX=danger-full-access
export CODEX_NETWORK_SANDBOX=on
export CODEX_APPROVAL_POLICY=on-request
codex agent
```

**Note:** Use danger-full-access only in trusted environments. AGENTS.md recommends this mode, but actual enforcement occurs at agent launch, not from this file.
