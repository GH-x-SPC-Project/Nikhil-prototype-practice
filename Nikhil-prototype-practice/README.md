# Copilot Express research prototype

An unofficial Software Product at Cal consulting draft for a clearer GitHub Copilot setup experience for founders and teams with fewer than 10 developers. This is an interactive research mockup, not a GitHub service. It simulates setup and a first useful coding action.

For a quick demo without installing development tools, open the included **Copilot-Express-Preview.html** in a modern browser. It contains the built app and styles in one file. The steps below are for editing and running the source project.

## Run locally

Prerequisites: Node.js **22.12 or newer** and npm **10 or newer**. Verified during development with Node **24.22.3** and npm **11.9.0**. No API keys, GitHub login, environment variables, or backend are needed.

1. Unzip the source download, or clone the user-selected public practice repository:

   ```bash
   git clone https://github.com/GH-x-SPC-Project/Nikhil-prototype-practice.git
   cd Nikhil-prototype-practice
   ```
2. Open a terminal in the extracted `copilot-express` folder or cloned `Nikhil-prototype-practice` folder, the directory containing `package.json`.
3. Install the exact locked dependencies:

   ```bash
   npm ci
   ```

4. Start the app:

   ```bash
   npm run dev -- --port 5173 --strictPort
   ```

5. Open **http://localhost:5173/** in a browser.
6. Stop the server with **Ctrl+C** in that terminal.

If port 5173 is occupied, stop the previous server or use `npm run dev -- --port 5174 --strictPort` and open http://localhost:5174/. Keep the server running while using the app. Do not open `index.html` as a filesystem URL; Vite serves the TypeScript application.

### Managed Work preview

In the managed Work environment, use its supported preview daemon instead of launching an independent server:

```bash
sites-preview start /absolute/path/to/copilot-express
```

Open the exact URL printed by that command. Use `sites-preview status` for diagnostics and `sites-preview stop` before switching to another checkout. The ordinary localhost:5173 instructions apply on your own laptop; the managed daemon may use a different port.

## Build and checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

Run all four with `npm run check`. Preview a production build with `npm run preview -- --port 4173 --strictPort`, then open http://localhost:4173/. Stop with Ctrl+C. Test results and actual clone verification are recorded in `docs/clone-verification.md` and `docs/submission-checklist.md`.

Recreate the self-contained preview with `npm run export:standalone`. The result is `dist/Copilot-Express-Preview.html`; it can be copied outside the source checkout. The Vite dist directory is excluded; a standalone HTML preview is included in this manual-upload package.

## Try the demo

- **Founder:** Start setup → My team → See plans → review the seat estimate → Review setup → acknowledge access → Confirm demo setup → Run demo task → review the diff → accept it → Record demo commit.
- **Plan evaluator:** Compare plans → Compare all plan options → choose a personal or team option → confirm workspace details → continue to review. All currently listed options are discoverable; eligibility-only products open an explanation rather than a fake purchase.
- **Team member:** Joining a team? Start here → See plans → Review access request → acknowledge access → Save demo access request → try the sample task. The status remains **Admin approval pending (simulated)**.
- **Optional guidance:** Open the setup guide from the header or sidebar. Search deterministic answers; no live AI is connected.
- **Edit one choice:** Use Back, an available progress step, or Edit in review. Editing a material choice clears confirmation and task completion, while keeping unrelated answers.
- **Reset:** Reset demo asks before clearing choices. It affects only this browser’s prototype state.

## What is implemented

- Welcome plus four task-oriented screens, with persistent navigation and plain-language labels.
- Personal/team and existing/new fictional organization paths.
- Transparent rule-based suggestions, reasons, Free baseline, all-plan comparison, and live seat-cost estimates.
- Team seat assignment using fictional identities; billed-seat estimates are separate from team size, assignments, and invitations.
- Enterprise Cloud prerequisite explanation and optional access review.
- Explicit administrator-approval branch with an unsent draft request.
- Scripted code explanation or a prepared diff with review, discard, accept, and simulated commit states.
- Responsive styles, keyboard focus states, dialog focus trapping, labeled fields, reduced-motion support, local persistence, and validation.

## Entry points

| File | Purpose |
| --- | --- |
| `src/main.tsx` | Application entry point |
| `src/App.tsx` | Screens, dialogs, and journey interactions |
| `src/model.ts` | Demo data, plan snapshot, recommendation rules, cost calculation, validation, and persistence |
| `src/help.ts` | Contextual scripted explanations |
| `src/styles.css` | Responsive visual system |
| `src/model.test.ts` | Eligibility, seat pricing, state invalidation, and recovery tests |
| `src/App.test.tsx` | Complete journeys and interaction tests |
| `docs/google-doc-ready.md` | Text to paste into the homework Google Doc |
| `docs/evidence-matrix.md` | Design-to-evidence traceability |

## Research limits and demo boundaries

Three inputs were supplied: the build brief, a two-page scope proposal, and a 42-page interview guide containing eight filled participant records. Four ZIP archives referenced in the brief were unavailable. There were no original transcripts, recordings, original interactive prototype, or teammate happy-path submissions to inspect. Interview evidence in the repository is anonymized **paraphrase of written notes**. It is not audio-verified verbatim. The research synthesis documents disagreements and missing inputs.

GitHub plan names, listed monthly seat prices, and base allowances were checked against [GitHub’s official plans documentation](https://docs.github.com/en/copilot/get-started/plans) on **November 18, 2026**. This is a documented snapshot, not live pricing. Flex allowances, eligibility, taxes, extra usage, and the separate Enterprise Cloud subscription can change. The estimate assumes all selected seats will be granted; unassigned demo slots are planning placeholders, not a statement that GitHub bills unassigned licenses. Credits are not guaranteed task counts.

The app never authenticates, purchases, invites, provisions, activates Copilot, reads real files, calls a model, runs checks on a user project, or commits code. Example checks shown beside the prepared diff are explicitly illustrative. Real automated tests for this prototype are separate and are run with `npm test`. Changing the current app does not demonstrate a measured improvement in user onboarding until participants test it.

No real group meeting, photo, participant test, course upload, or Google Doc creation is implied. The user selected `GH-x-SPC-Project/Nikhil-prototype-practice` and explicitly authorized its existing **Public** visibility on November 19, 2026. This is the practice destination. It does not establish completion of the original assignment’s separate `team[NUMBER]-prototype` **Internal** publication requirement. No repository visibility change is performed by this source update.

## Troubleshooting

- **Node engine errors:** install a supported Node version and run `npm ci` again.
- **Blank page after opening a file:** use the Vite URL, not a `file://` URL.
- **Unexpected old selections:** use Reset demo. State is local to the current browser and origin.
- **Storage disabled:** the app continues in memory and shows that choices last for the current session.
- **Copy request unavailable:** expand the visible draft and copy manually; the app reports a clipboard failure rather than claiming success.
- **No live Copilot result:** the tasks are intentionally scripted research examples.
- **Enterprise requirement:** use the clearly labeled demo Cloud account or choose Business; no real Cloud account is created.

## Repository publication

The current practice destination is [GH-x-SPC-Project/Nikhil-prototype-practice](https://github.com/GH-x-SPC-Project/Nikhil-prototype-practice), Public by the user’s explicit instruction on November 19, 2026. The original assignment’s Internal submission is a separate task. Read `docs/submission-checklist.md`. For that separate submission, once the actual team number and access are confirmed, an authorized teammate can use `scripts/publish-internal.sh NUMBER`. The script refuses to push to an existing repository automatically, requires active organization membership, requests Internal visibility, verifies that exact visibility, and never falls back to another audience.

Keep research inputs, recordings, credentials, participant identities, and private source mappings outside version control. The ignore rules are part of the prototype. This is a draft for the team’s real working session and signoff.

## Upload this package manually

1. Unzip GitHub-Manual-Upload.zip and open the Nikhil-prototype-practice folder.
2. On GitHub, open GH-x-SPC-Project/Nikhil-prototype-practice and choose Add file, then Upload files.
3. Drag the contents INSIDE this folder into the upload area, preserving src, docs, and scripts. Do not upload the ZIP or place the enclosing folder inside the repository. package.json and this README should be at the repository root.
4. Include .gitignore. On a Mac, press Command+Shift+Period in Finder to show hidden files before selecting the contents.
5. Use the commit message Add Copilot onboarding prototype and commit to main if permitted.

The package contains all 28 source/documentation files plus the standalone HTML preview. It excludes private source materials, credentials, dependencies, Git history, and build directories. Open Copilot-Express-Preview.html directly for a quick browser demonstration; use the Vite instructions above to edit and run the source.
