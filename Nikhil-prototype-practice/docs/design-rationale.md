# Design rationale

## Problem and audience

Small founders and teams with fewer than 10 developers should be able to understand their Copilot options and reach a useful action without first learning enterprise administration. The source notes show needs for transparency and control, as well as disagreement over how much guidance is helpful. The design therefore makes the main sequence visual and keeps explanations available without a required conversation.

## Concepts considered

| Concept | Strength | Limitation in the available evidence | Decision |
| --- | --- | --- | --- |
| Guided conversation with shorter questions | Supports P04/P08 preference for guidance | Still requires the chat format rejected by P03/P05/P07 and complicates selective editing | Retain optional help, not a mandatory conversation |
| Plan catalog first for everyone | Meets P01/P06 comparison needs | Starts with many options before clarifying personal/team needs or Enterprise Cloud eligibility | Offer as an alternative entry path |
| Express setup with a visible review and first task | Combines a short direct path, inspectable options, and user control | Adds a deliberate access checkpoint and still needs validation | Selected team-review draft |

The selected model is an integrated synthesis. Neither missing team’s wireframes or archetypes were available, so this is not a claim to reproduce, evaluate, or gain approval of those designs.

## Structural improvements

1. **Move from required conversation to a task-oriented setup shell.** Workspace, Plans, Review, and First task remain in the same layout. Plain-language prompts replace broad initial categories. The help drawer supports guidance-seeking users. Evidence: G1 P03 pp. 15–16, P05 pp. 23–25, P07 pp. 34–35, balanced against P04 pp. 19–20 and P08 pp. 38–39. Risk: optional help could be missed; test whether users find it when confused.
2. **Make plan choice independently inspectable.** A recommendation includes reasons rather than an opaque score. All listed plan options are discoverable, with an eligibility explanation for Student and Copilot access. The Free baseline and Enterprise Cloud requirement are explicit. The estimate uses selected potential billed seats; real charges depend on granted licenses and terms. Evidence: P01 p. 7, P02 p. 10, P05 p. 25, P06 p. 29, P08 p. 39. Risk: choice overload and stale pricing; keep a dated official source and compare how quickly people can explain their choice.
3. **Let people change one answer.** Back, available progress steps, and Edit controls preserve unrelated choices. A material edit invalidates confirmation and previous task completion. Evidence: P05 pp. 23/25 and P07 pp. 34–35. Risk: users may not expect to review again; communicate why their newer setup needs confirmation.
4. **Separate evaluating access from granting it.** A fictional owner can confirm a demo setup; a member prepares an unsent draft and remains pending. Both can learn from the sample. Evidence: access concerns in P04 p. 19, plus a clearly labeled role hypothesis. Risk: the preview could imply actual entitlement; statuses repeatedly state simulated or pending.
5. **Finish with an observable first action.** The user reviews a scripted explanation or prepared diff, makes a choice, and reaches a distinct first-value milestone. Evidence: project North Star S1 p. 1 and orientation concerns P05 p. 24. Risk: a scripted example can feel more reliable than a model; label it and test real product activation separately.

## Screen and content decisions

| Screen | Main question and copy | Main action | Reason |
| --- | --- | --- | --- |
| Welcome | “Set up Copilot. Build your next thing.” | Start setup / Compare plans / Joining a team | Gives users intent-based entry without broad ambiguous categories |
| Workspace | “Who’s building with Copilot?” | See plans | Clarifies individual/team needs; organization definition and admin role are adjacent to choices |
| Plans | “A plan that fits the way you build.” | Review setup or confirm workspace details | Exposes prices, alternatives, reasons, and editable seat assumptions |
| Review | “Your setup. Nothing unexpected.” | Confirm demo setup / Save demo access request | Puts access and cost in an inspectable summary with Edit controls |
| First task | “Let’s make something useful.” | Run demo task; review; accept/discard; record demo commit | Distinguishes setup completion from demonstrated value |

The original concept’s chat-to-plan handoff is replaced with one stable page shell. A help drawer is called a scripted guide and answers actual contextual questions. No fake chat input or live-model claims are used. Labels define an organization where it is requested; no default hosting, identity-provider, SCIM, or Codespaces question is required.

## Scope removed or deferred

- Real authentication, billing, organization creation, invitations, policy provisioning, model requests, file access, and commits.
- Broad product-use questionnaires before users understand what is being set up.
- Advanced identity and infrastructure configuration in the primary path.
- Claims about measured speed improvement, team approval, interview percentages, or competitor enterprise setup times.

## Decisions for the team and GitHub

1. Is the POC evaluating Copilot Enterprise purchase/provisioning specifically, or is a transparent Business/personal comparison allowed within that task?
2. Which licenses, roles, and policy checks must be required in a realistic production flow?
3. Should the endpoint be prototype setup, the first reviewed suggestion, or an actual commit? Report them separately until agreed.
4. Which plans must be in the initial view, and should eligibility-based options live in the full comparison?
5. Is the member-request branch useful for our research sample? Should invitations be postponed entirely?
6. Do participants find the access review informative without losing the sense of a fast setup?

This draft’s distinctive interaction model combines a plan catalog, preserved edits, optional guidance, an access checkpoint, and a first-task bridge. It is ready for the team to critique and revise during a real working session; it is not represented as an approved team design.
