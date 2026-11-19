# Usability testing plan

## Status

This is a plan for new participant sessions. Existing interview notes informed the draft, but no participant has been recorded testing this new implementation. Automated interaction tests and developer browser checks are not user research results.

## Task one A small founder

Scenario: You manage a three-person startup. You want to evaluate managed Copilot access for two people, understand the estimated monthly seat charge, and try a small code change.

Ask the participant to start without telling them which plan to choose. Observe whether they understand organization versus personal access, change the seat count, explain the recommendation, find the cost exclusions, review access, and complete the prepared task without assistance. Ask what they think actually changed at the finish.

## Task two A plan evaluator

Scenario: You are unsure whether to stay with an individual Free baseline, use an individual paid plan, or manage a team. Compare choices first, then pick a route that fits a fictional three-person team.

Observe whether the full comparison is discoverable, the user notices eligibility and usage differences, and they can change one answer without restarting. Ask them to explain their chosen plan, why another option was rejected, and what is still uncertain about costs.

## Task three A member without purchase authority

Scenario: You work on a team but cannot authorize purchases or change company policies. Prepare what your administrator needs and learn what a first task might look like.

Observe whether the user chooses the member role, understands the unsent draft request, sees the pending status, and can try an explanation without believing real access was granted. Ask who must act next and whether any request was actually sent.

## Measurement

| Measure | Collection | Initial hypothesis or target, not a result |
| --- | --- | --- |
| Task completion | Mark each scenario complete, assisted, or incomplete | Participants can reach the correct endpoint without moderator rescue |
| Setup time | Start at first view; stop at confirmation or saved request | Fewer irrelevant decisions reduces setup time versus the original prototype |
| Time to first useful action | Stop at reviewed explanation or simulated commit | The task bridge makes the endpoint easier to identify |
| Hesitation and backtracking | Record screen, pause reason, failed click, and return path | Back/Edit reduces repeated work; do not treat every backtrack as failure |
| Plan-choice confidence | Ask a 1–5 confidence question and request explanation | Participants can explain both the choice and the estimate |
| Satisfaction | Ask a 1–5 satisfaction question and why | Users find the direct path clear while guidance remains discoverable |
| Understanding | Ask what was purchased, sent, changed, and granted | Participants correctly identify the entire experience as simulated |

Use the same participant task and starting assumptions for variant comparison. Counterbalance order where feasible and record previous product familiarity. With a small exploratory sample, show individual outcomes and observed patterns rather than claiming a population-wide uplift or statistical significance. Do not pool the guide’s inconsistent 1–10 “NPS” labels with new satisfaction measures.

## Moderator prompts

- What do you think will happen if you continue?
- What information are you using to choose this plan?
- How would you change just the seat count?
- What does the monthly estimate include and exclude?
- Who has access now, and who needs to approve something?
- What would you do if you did not understand this term?

Follow project NDA and recording-consent procedures before involving people. Keep recordings and participant identity mappings out of the repository. Use anonymous observation IDs in a separate approved research location.
