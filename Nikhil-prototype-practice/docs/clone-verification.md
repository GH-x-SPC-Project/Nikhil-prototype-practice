# Clone verification

## Verification boundaries

The required destination is `GH-x-SPC-Project/team[NUMBER]-prototype` with **Internal** visibility. The actual team number and access to that organization are not confirmed. No remote URL or visibility is claimed. This verification uses a **local Git clone** and does not satisfy the separate requirement to clone the published Internal repository.

## Executed results

Verified November 18, 2026 (America/Los_Angeles), with Node 24.22.3 and npm 11.9.0.

- Source commit: `9304a8e003af1a7f5c5d3f2fb27cbf951d867758`.
- Source directory: `/workspace/scratch/8a555d648f80/copilot-express`.
- Fresh clone: `/workspace/scratch/8a555d648f80/copilot-express-clean-check`.

Commands executed:

```bash
git clone /workspace/scratch/8a555d648f80/copilot-express /workspace/scratch/8a555d648f80/copilot-express-clean-check
cd /workspace/scratch/8a555d648f80/copilot-express-clean-check
npm ci
npm run check
```

Local clone succeeded. `npm ci` installed the locked dependencies and exited 0. `npm run check` exited 0: TypeScript, ESLint, all **16 tests** in two test files, and the Vite production build passed. Installation printed registry deprecation notices; these did not fail the checks. No missing source file, secret, or environment variable was required.

The managed preview workflow from README was then used:

```bash
sites-preview stop
sites-preview start /workspace/scratch/8a555d648f80/copilot-express-clean-check
```

The supported daemon reported `http://127.0.0.1:4173/`. The previous checkout's preview was stopped first. Browser checks in the cloned app reset demo state, started the founder route, kept the existing three-person demo organization, decreased planned seats to two, confirmed the $38 seat estimate, assigned Maya, acknowledged access, confirmed setup, ran the prepared fix, reviewed the diff, accepted the example, and recorded the simulated commit. The rendered finish showed **Setup complete (simulated)** and **First useful action demonstrated**. No real account or repository was changed.

The original checkout was additionally browser-checked for plan-first comparison, the Enterprise Cloud prerequisite, the admin-pending member route with a sample explanation, optional help, and Escape dismissal. These are developer checks, not participant usability results. A visible fieldset alignment issue was fixed before this source commit was cloned and verified.

## Standalone export

`node scripts/export-standalone.mjs` succeeded using the clean clone's build. The generated `dist/Copilot-Express-Preview.html` was opened through the supported preview server. Its built app rendered and the Reset, Compare plans, and Home interactions worked. The file embeds its JavaScript and styles; opening it directly as a downloaded file remains browser-dependent and was not separately tested on a teammate's computer.

Desktop layout was inspected at 1363 × 936. Responsive styles are implemented; narrow-viewport visual testing remains pending because the supported browser API did not offer viewport resizing. No playable recording was created; exact manual recording steps and narration are in `prototype-walkthrough.md`.

Documentation was finalized after this verification; application code and locked dependencies were unchanged. The source ZIP contains the final documentation as well as the verified application.

## Required follow-up

An authorized teammate must confirm the team number and exact organization access, publish **Internal** only, verify the returned URL and visibility, and clone that remote repository into another new folder. Repeat the README install, checks, and full founder route there before marking remote clone verification done.

## November 19 practice-repository instruction

The user supplied `https://github.com/GH-x-SPC-Project/Nikhil-prototype-practice` and explicitly confirmed that it is Public. Repository metadata now confirms that destination and push permission. This replaces the earlier lack of access for the selected practice repository. The original assignment’s Internal repository remains a distinct requirement. A fresh clone of the existing public repository succeeded on November 19. Uploading the prototype through both Git trees and file-contents endpoints returned HTTP 403, “Resource not accessible by integration.” No remote file or ref was changed, and no clone of a published prototype is claimed. The local verification above remains a historical result. The prepared publishing checkout preserves the existing remote history and is ready for an authenticated push after write access is available.
