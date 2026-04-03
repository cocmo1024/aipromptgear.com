# AI Prompt Gear Template System

This repository is designed for AI-operated publishing. New pages should follow the shared frontmatter contract and the matching outline for the page type.

## Shared frontmatter

Required when possible:

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

Recommended defaults for new money pages:

- `commercialIntent: high`
- `contentStatus: seed` on first publish, then `growing`, then `cornerstone`

## Team scenario template

Use for pages like support, sales, research, or operations teams.

Sections:

1. Why this team use case matters
2. Triggers and workflow boundaries
3. What good looks like
4. Failure modes
5. Metrics and review logic
6. Related workflows and comparisons

## Workflow template

Use for operating sequences, handoff logic, or runbook pages.

Sections:

1. Workflow objective
2. Inputs and prerequisites
3. Step-by-step operating flow
4. Human review checkpoints
5. Logging and regression requirements
6. Related tooling or evaluation pages

## Tool comparison template

Use for platform, workflow, or process comparisons.

Sections:

1. What is actually being compared
2. When option A is enough
3. When option B becomes necessary
4. Buying or operating tradeoffs
5. Who should not overbuy
6. Compare next

## Evaluation template

Use for QA, scorecards, and regression operations.

Sections:

1. Why evaluation exists
2. What should be measured
3. Common failure patterns
4. Lightweight vs structured approach
5. Review cadence and update triggers
