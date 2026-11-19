# Research synthesis

## Evidence available

Audit date: November 18, 2026. The source set consists of the master build brief (B1), the two-page scope proposal (S1), and the 42-page interview guide with written participant notes (G1). The local-only audit outside this repository retains full filenames, page indexing, missing-source inventory, and excerpts. G1 uses one-based PDF pages throughout these documents.

Eight filled participant records are identifiable by interviewee role in the guide: P01 pp. 4–7; P02 pp. 8–10; P03 pp. 14–16; P04 pp. 17–20; P05 pp. 21–25; P06 pp. 26–30; P07 pp. 31–35; P08 pp. 36–39. Pages 1–3 and 11–13 are templates or blank guide material, not additional participants. Pages 40–42 contain professionalism, confidentiality, and outreach instructions. Repeated interviewer prompts were not counted as findings.

No duplicate filled interviewee record was found within this supplied guide. Deduplication against the missing archives cannot be performed. We report a source inventory of eight filled note records, not a population denominator or a percentage agreeing with a theme. These are written notes and summaries, not verified transcripts. No recordings or videos were available or watched. The guide calls a 1–10 experience rating “NPS”; these ratings are not pooled or represented as a valid NPS result.

## Key findings

1. **Guidance is useful to some users, but a mandatory conversation is divisive.** P03 prefers straightforward onboarding (pp. 15–16); P05 describes text overload and a growing chat (pp. 23–25); P06 questions the need for chat when the choices are predetermined (p. 29); P07 prefers clicking through with optional side help (pp. 34–35). Conversely, P04 liked the agent interface and wanted questions answered (pp. 19–20), and P08 found guidance helpful (p. 38). The selected design uses a direct form and optional scripted help, rather than removing support.
2. **Plan value should be inspectable before commitment.** P01 wants all alternatives, not only a recommendation (p. 7); P02 asks about price and model usage (p. 10); P05 flags the missing estimate (p. 25); P06 wants differences from their free baseline and other options (p. 29); P08 wants a plan overview and personalized reasons (p. 39).
3. **Users need to recover without repeating the journey.** P05 asks to change specific answers and reports a missing Back action (pp. 23, 25). P07 identifies the inability to change chat answers and requests progress visibility (pp. 34–35). These support an editable setup summary and one consistent navigation shell.
4. **Familiarity with coding does not imply familiarity with enterprise terms.** P03 does not understand Enterprise or Codespaces (p. 15), P04 wants explanations of unfamiliar security terms (pp. 18–20), and P08 asks for clarifying side help (pp. 38–39). The default questions are about people, workspace, plan, and access. Advanced terms appear with plain-language explanations.
5. **Speed needs an access checkpoint.** P04 likes the user experience but wants more information about what a company is granting access to (p. 19). The prototype preserves a readable review instead of claiming that fewer steps should eliminate required controls. A non-admin request branch is a design hypothesis derived from role differences; no supplied note is represented as a direct demand for this exact feature.
6. **The end should demonstrate useful work.** S1 p. 1 asks for discovery-to-first-commit and measures setup time. G1 P05 p. 24 describes uncertainty about where features are. The first-task bridge is based on that project goal and orientation need; it has not been validated in this new prototype.

## Provisional archetypes

These are synthesis categories for discussion, not the missing HW3 team archetype documents.

| Archetype | Primary need | Evidence and caution | Prototype support |
| --- | --- | --- | --- |
| Fast founder | Start working with few decisions | P03 pp. 15–16; P05 pp. 23–25 | Visual path; optional advanced section; first task |
| Plan evaluator | Understand price and alternatives | P01 p. 7; P02 p. 10; P06 p. 29 | All-plan catalog, baseline, reasons, seat estimate |
| Guided user | Clarify an unfamiliar term without losing their place | P04 pp. 18–20; P08 pp. 38–39 | Contextual help drawer with search |
| Team member needing approval | Separate evaluating a tool from buying access | Hypothesis from team roles and P04 p. 19 access concerns | Request draft; pending status; sample task |
| Solo builder | Avoid an unnecessary organization path | P05 p. 25; P07 p. 34 | Just me; individual plans |

## Competitor lessons and limitations

The missing HW4 and HW1 archives were not reviewed. Public documentation was checked separately; no enterprise account was bought, installed, authenticated, or timed.

- **Claude Code:** current managed-plan guidance allows a provisioned member to use Claude Desktop’s Code tab with the Team/Enterprise identity, or authenticate a terminal installation. Seat eligibility differs on older agreements. Lesson: distinguish an already entitled member’s first coding action from organization provisioning. This is not evidence that enterprise rollout itself is instantaneous. [Official source](https://support.claude.com/en/articles/11845131-use-claude-code-with-your-team-or-enterprise-plan), checked November 18, 2026.
- **Codex:** current guidance uses ChatGPT sign-in, separates Local from Cloud access, and requires appropriate Cloud and environment permissions. Lesson: make the next permitted action and the approval state visible. Local coding and managed cloud onboarding are different paths. [Official source](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), checked November 18, 2026.
- **Interview perspective:** P04 p. 19 describes simple personal Claude/Codex experiences but explicitly had not set up their Enterprise versions. P01 used an employer-provided account without personally setting it up. These records cannot support an observed claim that competitor Enterprise setup is faster.
- **Copilot baseline:** current quickstart documentation leads from sign-in and project connection to a coding session. The separate research prototype described by participants is not assumed to be the current production app. [Quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app).

## Gaps requiring team review

The four source archives are absent. We cannot compare both teams’ happy paths, inspect original transcripts or media, resolve conflicting aggregate counts across homework, or reproduce the original interactive flow. The prior slide specifying the practice exercise is also unavailable. This build is a functional practice draft, but does not establish completion of that unseen exercise. Final POC recommendations require the missing inputs, team review, and participant testing of this draft.
