# Repository instructions

## Project boundaries

- This repository is a public, open-source Angular/Nx resume application.
- `db.json` contains personal resume content and is intentionally gitignored. Preserve its existing `resume.main` and `resume.sidebar` schema.
- Preserve unrelated worktree changes. Keep wording-only changes separate from layout, typography, spacing, and style changes.

## Local preview

1. Use the Node version pinned by `.nvmrc`.
2. Run `npm start`. This starts the local data service, Angular development server, and optional preview-image renderer together. The data service serves and watches `db.json` directly. Startup runs `prebuild` only to create `db.json` from `db.example.json` if it is missing; existing `db.json` content is preserved.
3. Inspect the rendered resume at `http://localhost:4200/viewer` with the browser.
4. Treat `http://localhost:8800/resume` as a diagnostic data endpoint, not the visual result.
5. When browser automation is unavailable, inspect the automatically refreshed `tmp/resume-preview.png` instead.

## Resume wording workflow

1. Read the current `db.json` and inspect a baseline of `/viewer` in the browser or `tmp/resume-preview.png`.
2. Before editing `db.json`, create a timestamped, byte-for-byte backup at `tmp/db.backup-YYYYMMDD-HHMMSS.json`. Do not overwrite an earlier backup.
3. Change wording only in `db.json`, keeping property names and ordering intact.
4. Reload `/viewer` and inspect the refreshed browser page or preview image after each focused edit. The data service watches `db.json`, so edits do not require `prebuild`.
5. Verify that the Letter-sized resume remains one page and that no text is clipped, awkwardly wrapped, or visually unbalanced.
6. Prefer content trimming over CSS or typography compression when resolving page overflow.

## Validation

- Validate JSON syntax for `db.json`.
- Confirm the local data service serves the updated `db.json` content.
- For focused wording-only changes, finish with `npm run format:check` and `git diff --check`.
- Record browser inspection separately from static validation.
