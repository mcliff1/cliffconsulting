# React Router Usage and Maintenance Guide

## Current Status (April 2026)
- Uses `react-router-dom` 7.13.1.
- Routing in `src/App.jsx` uses `Routes` and `Route` with `element={<Component />}`.
- No deprecated APIs (`Switch`, `Redirect`, `useHistory`) are present.

## Completed Upgrade Work
- Migrated to modern route declarations.
- Confirmed `BrowserRouter` setup in `src/index.jsx`.
- Removed legacy router migration steps from this guide.

## Ongoing Rules
- Keep route definitions in `src/App.jsx` using `element={<Component />}`.
- Use hooks-based navigation (`useNavigate`, `useParams`) for new features.
- Validate route behavior after any `react-router-dom` update.

## Monthly Maintenance Checklist
1. Run `npm outdated` and review `react-router-dom` changes.
2. Read the latest React Router release notes.
3. Run tests with `npm test`.
4. Run a production build with `npm run build`.
5. Smoke-test navigation for `/`, `/resume`, `/projects`, `/articles`, and `/contact`.

## Next Review Trigger
- Revisit this file when upgrading major versions of `react-router-dom`.
