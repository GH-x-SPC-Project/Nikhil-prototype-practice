# Submission checklist

These statuses reflect observed work, not assumed team activity.

On November 19, 2026, the user selected the existing Public practice repository `GH-x-SPC-Project/Nikhil-prototype-practice`. Public visibility is explicitly authorized for this practice destination. It does not satisfy the original assignment’s separate Internal repository requirement. Historical clone results are in `clone-verification.md`; the publishing session verifies the remote after the upload.

| Item | Status | Evidence or next step |
| --- | --- | --- |
| Read master brief, supplied scope, and interview guide | done | Available source set reviewed; anonymized synthesis recorded |
| Review original transcript ZIP | blocked | Referenced archive unavailable |
| Compare both teams’ HW3 happy paths | blocked | Referenced archive unavailable |
| Review substantive HW4 and HW1 submissions | blocked | Referenced archives unavailable |
| Build complete founder route | done | Working interactive implementation and automated journey test |
| Build plan-first alternative | done | Full comparison followed by workspace confirmation |
| Build admin-pending alternative | done | Unsent request draft and persistent pending status |
| Provide Back/Edit, progress, optional help, and validation | done | Implemented and tested in relevant paths |
| Separate setup from first useful action | done | Distinct milestone labels and prepared task review |
| Source current plan data | done | Official GitHub plan snapshot, November 18, 2026 |
| Produce all requested Markdown documentation | done | README and docs folder |
| Complete the unseen prior-slide practice exactly as assigned | blocked | Prior slide unavailable; this implementation is a practice draft |
| Type-check, lint, automated tests, production build | done | `npm run check` passed: 16 automated tests, TypeScript, ESLint, and Vite build |
| Browser-check founder, evaluator, and member routes | done | Supported browser: founder fix/commit; member pending/explanation; evaluator comparison/Enterprise prerequisite |
| Validate responsive behavior on a narrow viewport | not done | Desktop verified at 1363 × 936; responsive CSS implemented, but browser API provided no viewport resizing and mobile visual QA remains pending |
| Record playable browser video | not done | Supported browser interface exposes no recording API; manual instructions supplied |
| Upload video to new homework folder | not done | Folder not identified; no course upload performed |
| Hold real 2–4-hour in-person team session | not done | Proposed three-hour agenda only |
| Take consented real meeting photo | not done | Requires actual team meeting |
| Send real photo to verified group chat | not done | No message or upload sent |
| Confirm team number | blocked | Not supplied; never infer a repository number |
| Confirm access to GH-x-SPC-Project | blocked | The selected Public practice repository is now accessible with push/admin permission; access to an exact numbered Internal submission target is not established |
| Create and push team[NUMBER]-prototype with Internal visibility | blocked | Requires confirmed team number, organization permission, and support for Internal visibility |
| Verify remote repository URL and exact visibility | blocked | No repository was published; no Public or Private fallback |
| Fresh-clone local source and run README checks | done | Separate local clone: npm ci, 16 tests, type-check, lint, build, and complete founder browser route passed; see clone-verification.md |
| Fresh-clone the required published Internal repository | blocked | Remote publication unavailable |
| Create or update the submission Google Doc | not done | Paste-ready Markdown exists; no native Doc creation claimed |
| Final teammate and PM signoff | not done | Draft awaits real collaborative review |

The local-only source audit and original research inputs are excluded from the code repository. Before publication, verify the exact audience and do not upload recordings, contact details, NDA materials, or secrets with source code.

## Public practice push attempt — November 19

The user explicitly authorized the Public practice repository. Repository metadata is readable and reports the account has push/admin permission, but the connected integration rejects both tree creation and contents writes with HTTP 403, “Resource not accessible by integration.” A fresh clone of the existing repository succeeded. No remote writes occurred. Source and documentation are prepared on the existing main history in a separate local publishing checkout. Actual publication and remote verification of the prototype remain blocked until the integration receives write permission or another authorized authenticated Git session is available.
