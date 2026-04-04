# AI Prompt Gear Template System

This repository is designed for AI-operated publishing, but the output must read like a capable operator wrote it for a real team with a real problem. Pages are not blog filler. They are search-intent assets that must help a reader make, design, or pressure-test a workflow decision.

## Publishing bar

Every money page must do all of the following before it ships:

1. Solve one clear operational problem, not cover a broad topic casually.
2. State who the page is for, what decision it helps with, and where the advice does not fit.
3. Answer at least three high-intent search questions in the body, not just the title.
4. Include workflow detail, review logic, failure modes, and practical next steps.
5. Link the reader to adjacent pages that naturally continue the decision path.

General depth targets:

- `seed`: usually 1,200+ words with a useful framework
- `growing`: usually 1,500+ words with concrete tradeoffs and implementation detail
- `cornerstone`: usually 1,800+ words with decision support, constraints, and internal links

Do not publish:

- generic AI productivity summaries
- pages that only define terms without helping someone act
- pages that make performance claims without explaining operating conditions
- pages that sound like vendor copy instead of operator guidance

## Shared frontmatter

Use these fields on every substantive page:

- `title`
- `description`
- `referenceType`
- `adProfile`
- `commercialIntent`
- `reviewCadence`
- `primaryKeyword`
- `searchIntent`
- `decisionStage`
- `targetRoles`
- `contentStatus`
- `problemSolved`
- `readerTakeaway`
- `keyQuestions`
- `notFor`
- `updateTriggers`

Recommended defaults for new money pages:

- `commercialIntent: high`
- `contentStatus: seed` on first publish, then `growing`, then `cornerstone`

## Universal long-form structure

Use this shape unless there is a strong reason not to:

1. `Quick answer`
2. `When this page should guide your decision`
3. `Why the problem is expensive or risky`
4. `How to design or evaluate the workflow`
5. `Failure modes and poor-fit cases`
6. `Metrics, review checkpoints, or proof of success`
7. `Implementation checklist`
8. `Related pages to read next`

## Team scenario template

Use for pages like support, sales, research, or operations teams.

Required sections:

1. Quick answer and team fit
2. The queue, workflow, or throughput problem being solved
3. Workflow boundaries and what the AI should not own
4. Source, retrieval, and review model
5. Failure modes that matter to the team lead
6. Metrics and governance checkpoints
7. Rollout sequence or implementation checklist
8. Related workflows, evaluations, and tool comparisons

## Workflow template

Use for operating sequences, handoff logic, or runbook pages.

Required sections:

1. Workflow objective and trigger conditions
2. Inputs, prerequisites, and data ownership
3. Step-by-step operating flow
4. Human checkpoints and escalation boundaries
5. Logging, QA, and regression expectations
6. Where the workflow breaks down
7. Checklist for first deployment
8. Related tooling or evaluation pages

## Tool comparison template

Use for platform, workflow, or process comparisons.

Required sections:

1. What is actually being compared
2. Quick verdict by use case
3. Decision criteria table
4. When option A is enough
5. When option B becomes necessary
6. Cost, review, or operational tradeoffs
7. Who should not overbuy
8. Compare next

## Evaluation template

Use for QA, scorecards, and regression operations.

Required sections:

1. Why evaluation exists
2. What should be measured and why it matters
3. Failure taxonomy
4. Lightweight vs structured review design
5. Thresholds, escalation, and ownership
6. Review cadence and update triggers
7. What a good scorecard changes operationally
