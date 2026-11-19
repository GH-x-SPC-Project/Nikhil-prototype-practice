# Copilot Express Onboarding Prototype

**Software Product at Cal · Draft for team review**

## Design direction

I built a working Express Setup prototype for individuals and teams with fewer than 10 developers. The main path uses direct visual choices, then moves into a plan comparison, access review, and a first coding task. Help is available in a side panel without making the entire onboarding a conversation.

This direction comes from the supplied interview notes. Some people wanted a faster and more straightforward flow, while others found guidance useful. The prototype keeps both options available. It is a team-review draft; no collaborative meeting, team agreement, new participant test, or production activation has been claimed.

## Evidence behind the changes

The supplied guide contains eight filled participant note records. Repeated scripts and blank templates are excluded. The entries below are anonymized notes, not verified transcript quotations. G1 refers to the interview guide, with one-based PDF page numbers; the detailed source audit stays outside the code repository.

- **P01 wanted a full view of plans.** A short source-note excerpt reads, “Only recommended plans shown at the end, not the full list” (G1 p. 7). The notes also ask for follow-up questions without restarting.
- **P05 wanted to correct a choice.** The written note says, “Misclick -> no back button” (G1 p. 25). Other notes describe too much text and wanting to change individual answers (pp. 23–25).
- **P04 wanted explanations and company-level control.** One note says, “Link to page that explains unfamiliar terms” (G1 p. 18). The same record likes the guided interface but wants more detail about what a company allows GitHub to access or do (p. 19).
- **P07 preferred direct choices with optional support.** The notes describe not reading the chat, wanting to change earlier answers, and preferring an optional sidebar for questions (G1 pp. 34–35).
- **P08 wanted guidance and a reason for the recommendation.** Their notes request side help, an overview of plans, and a final explanation linking their selections to the suggested plan (G1 pp. 38–39).

These records support a design direction, not a claim about the percentage of users affected or a measured reduction in onboarding time. The source-note excerpts above are copied from written notes; they have not been checked against recordings.

## Competitor lessons

For Claude Code, current managed-plan guidance distinguishes access entitlement from beginning a session. A provisioned Team or Enterprise member can use Claude Desktop’s Code tab with their organization account; a terminal user authenticates through the supported subscription flow. That suggests keeping the first useful task easy to find after access is established. It does not establish that an administrator can provision an entire enterprise in the same number of steps.

For Codex, current documentation separates Local access from Cloud access and environment-management permissions. That distinction supports making an approval state explicit, with a useful next action while access is pending. A cloud environment setup and a local coding session should not be treated as the same onboarding route.

P04’s notes describe simple personal Claude/Codex setup but explicitly say they had not set up those products’ Enterprise versions (G1 p. 19). The original competitor homework archives were unavailable, so this report does not pretend to review those submissions or a purchased enterprise account.

Official references, checked November 18, 2026:

- [Claude Code with Team or Enterprise](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan)
- [Codex account access and enterprise controls](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [GitHub Copilot plans](https://docs.github.com/en/copilot/get-started/plans)
- [GitHub Copilot app quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app)

## Solution one Replace the mandatory conversation with a clear setup path

The user begins with a simple choice between their own setup and a small team. Team users select an existing fictional organization or name a new demo one. The organization definition appears next to the field, and optional access needs are collapsed until relevant. The same layout remains visible through plan selection, review, and the first task.

The help panel contains contextual explanations of organizations, seats, credits, and access. It is labeled as a scripted guide, so the prototype does not imply a live model connection. This addresses the tension between P03/P05/P07 wanting direct choices and P04/P08 valuing guidance.

The trade-off is discoverability: someone who needs help might not notice the panel. In testing, I would observe whether a confused person finds it without being prompted. The team should also check whether any required company-control step has been deferred too far.

## Solution two Make the plan recommendation inspectable and editable

The plan screen displays relevant personal or team options, with a full comparison for every currently listed plan. It explains a Free baseline and shows the reasons behind the rule-based recommendation. The Enterprise card explains the separate Enterprise Cloud prerequisite. Student and eligibility-based enterprise options open requirement information instead of a fake activation flow.

Users can change the selected seat count and see an estimated monthly total immediately. The estimate assumes the selected seats will be granted; unassigned demo slots are planning placeholders. It excludes tax, extra usage, and any separate Enterprise Cloud subscription. Assignments and invitations are presented separately, with no invitation sent.

This responds to P01’s request for alternatives, P02/P05’s pricing concerns, P06’s baseline comparison, and P08’s request for reasons. The trade-off is more information on the comparison screen. I would test whether users can explain why they chose a plan and what the estimate includes, rather than assuming that displaying more details automatically improves understanding.

## Solution three Let users change one answer without restarting

Back controls, available progress steps, and Edit links in the review screen keep earlier choices accessible. Changing a seat count or plan preserves unrelated answers. A material change clears the previous confirmation, so an older access review cannot silently apply to a newer setup.

This directly addresses the recovery issues in P05 and P07’s notes. The visible progress also answers the concern that the user does not know how many questions remain. The trade-off is that a user must review again after a meaningful edit. I would ask participants to change just one choice and observe whether the new state matches what they intended.

## Solution four Separate admin approval from trying the experience

A person who cannot manage the team’s tools can prepare a fictional access request. The resulting status remains “Admin approval pending (simulated).” The draft can be read and copied, but the prototype never sends it. The user can still try the prepared coding example while waiting.

P04’s company-access concerns support a readable checkpoint; this exact request branch remains a design hypothesis. The trade-off is that useful exploration and actual permission must remain clearly distinct. I would test whether users can identify who still needs to act and whether any real access has been granted.

## What the prototype looks like

1. **Welcome:** Start setup, Compare plans, or enter as a teammate needing approval.
2. **Workspace:** Choose Just me or My team, review organization details, and identify the demo role.
3. **Plans:** Inspect prices and reasons, compare all options, and adjust the seat estimate.
4. **Review:** Edit earlier selections, assign fictional seats where relevant, choose a demo project, and review access.
5. **First task:** Read a prepared explanation or inspect a prepared diff. The user may discard or accept the change and record a simulated commit.

Setup completion and demonstrated first value have separate labels. The first task does not call an AI model, read real files, run checks on a participant’s repository, or create a commit. It is a clear research endpoint rather than a generic dashboard.

## How I would test it

The three tasks are a founder evaluating two seats for a three-person team, a plan evaluator entering through comparison, and a teammate who needs approval. I would record completion without help, time by stage, hesitation, wrong turns, and whether users understand the plan estimate. I would also ask about plan-choice confidence and satisfaction.

The main hypothesis is that direct choices and selective editing reduce repeated work while optional support preserves useful guidance. This has not been measured with new participants. The team should confirm whether the endpoint is setup completion, a reviewed suggestion, or an actual commit before comparing times.

## Team review and submission

The next step is a real 2–4-hour working session to compare this draft with both teams’ earlier designs, add the unavailable research archives, and make actual team revisions. The session should end with an inspected recording, a consented real group photo, and named upload owners. Repository publication requires the confirmed team number and access to the exact Internal destination under GH-x-SPC-Project. The Google Doc, course upload, meeting, photo, and remote publication remain separate items until completed.
