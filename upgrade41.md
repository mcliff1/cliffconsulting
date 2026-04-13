# Cliff Consulting: Upgrade Status and Action Plan

## Completed (Do Not Repeat)
- Dependency refresh completed with `npm update`.
- Core stack already modernized:
  - React 19
  - React DOM 19
  - React Router DOM 7
  - Vite build system
- Routing is already using modern `Routes` and `Route` patterns.
- Component architecture is already function-component based.
- Reactstrap migration already complete (project uses `react-bootstrap`).
- ESLint is already configured and in use.
- Startup debug logs removed from app entry files.
- Stale Jest config removed from `package.json` (project uses Vitest).

## Actionable Remaining Items
1. Decide PWA direction.
   - Option A: Remove legacy `src/registerServiceWorker.jsx`.
   - Option B: Implement modern Vite PWA tooling.
2. Add CI guardrails for consistency.
   - Run `npm test` and `npm run build` in CI for every PR.
3. Fix React key warning in project list rendering.
   - Current test output warns that `Projects` renders children without unique `key` props.
4. Add one accessibility/performance baseline check.
   - Run Lighthouse once per release cycle and track major regressions.

## Monthly Maintenance (Keep)
1. Run `npm outdated`.
2. Run `npm update` (or targeted upgrades as needed).
3. Run `npm test` and `npm run build`.
4. Check React, Vite, and React Router release notes for breaking changes.
5. Spot-check main routes and core pages after dependency updates.

## Notes
- This file is now a living status document.
- Any task listed under Completed should not be re-added unless there is a major-version migration.
