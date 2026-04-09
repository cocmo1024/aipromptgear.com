export type PromptEntry = {
	id: string;
	title: string;
	category: 'Support Ops' | 'Research' | 'PromptOps' | 'Evaluation';
	summary: string;
	bestFor: string;
	whyItWorks: string;
	sourceLabel: string;
	sourceUrl: string;
	prompt: string;
};

export const promptLibrary: PromptEntry[] = [
	{
		id: 'grounded-support-draft',
		title: 'Grounded Support Reply Draft with Gap Detection',
		category: 'Support Ops',
		summary:
			'Draft a support reply that stays grounded in approved help-center material, clearly flags unknowns, and proposes escalation when documentation is incomplete.',
		bestFor:
			'Support teams that want faster first drafts without hallucinated policy promises or invented troubleshooting steps.',
		whyItWorks:
			'This template uses explicit grounding, an allowed-actions boundary, and a required uncertainty section so the model cannot silently fill documentation gaps.',
		sourceLabel: 'OpenAI prompting guide',
		sourceUrl: 'https://developers.openai.com/api/docs/guides/prompting',
		prompt: `You are a senior support operations assistant helping draft a customer-facing response.

Use only the approved support context provided between <approved_context> tags and the ticket details provided between <ticket> tags.

Your job:
1. Draft a response the support agent can send after review.
2. Stay grounded in the approved context only.
3. If the context is incomplete, say so explicitly and recommend escalation or clarification.
4. Never invent refunds, credits, policies, product behavior, timelines, or engineering commitments.

Output format:
- Summary of customer problem
- Draft reply
- Missing information or policy gaps
- Recommended next action

Writing rules:
- Use plain language.
- Be specific about what the customer can do next.
- If the issue cannot be resolved from the approved context, say exactly what is missing.
- If escalation is needed, state which team should own it and why.

<ticket>
{{ticket_text}}
</ticket>

<approved_context>
{{approved_help_center_content}}
</approved_context>`,
	},
	{
		id: 'triage-and-routing',
		title: 'Ticket Triage and Priority Routing',
		category: 'Support Ops',
		summary:
			'Classify inbound tickets by urgency, ownership, and likely next step so teams stop treating every issue like a generic queue item.',
		bestFor:
			'Operations teams handling large inbound support volume, mixed ownership, and inconsistent severity handling.',
		whyItWorks:
			'The prompt forces structured reasoning around business impact, blocker severity, and correct owning team instead of relying on emotional wording in the ticket.',
		sourceLabel: 'Anthropic prompting best practices',
		sourceUrl: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',
		prompt: `You are a support operations triage lead.

Classify the issue described in <ticket> and return a structured routing decision.

Evaluate:
- customer impact
- business criticality
- blocked workflow or outage risk
- likelihood of billing, security, compliance, or data-loss exposure
- correct owning team

Return exactly these sections:
1. Priority: low / normal / high / urgent
2. Queue owner
3. Reason for priority
4. Reason for owner assignment
5. Suggested first response
6. Escalation required: yes / no
7. Escalation note

Rules:
- Do not confuse angry tone with high severity.
- Separate operational inconvenience from true business interruption.
- If evidence is weak, say what is missing instead of over-prioritizing.
- If the ticket mixes multiple issues, identify the primary issue first.

<ticket>
{{ticket_text}}
</ticket>`,
	},
	{
		id: 'research-synthesis',
		title: 'Research Synthesis with Evidence Table and Uncertainty Register',
		category: 'Research',
		summary:
			'Turn a set of source materials into a decision-grade synthesis that separates verified claims from open questions and conflicts.',
		bestFor:
			'Research, strategy, and market-analysis teams that need a usable brief instead of a long generic summary.',
		whyItWorks:
			'The prompt demands an evidence table, conflict notes, and an uncertainty register, which keeps the output useful for decision-makers and less likely to hide weak sourcing.',
		sourceLabel: 'Google Gemini prompting strategies',
		sourceUrl: 'https://ai.google.dev/gemini-api/docs/prompting-strategies',
		prompt: `You are a research analyst preparing a decision memo.

Review the materials in <sources> and produce a synthesis for a busy operator who needs the signal, not a long essay.

Output sections:
1. Executive summary
2. What appears strongly supported
3. What is only partially supported
4. Evidence table
5. Contradictions or disagreements across sources
6. Uncertainty register
7. Recommended next questions

Evidence table columns:
- claim
- supporting source
- confidence: high / medium / low
- why confidence is not higher

Rules:
- Do not state a claim as settled if the sources disagree.
- Quote or paraphrase only what can be tied back to a source.
- Prefer clarity over comprehensiveness.
- If a source is weak, say so.

<sources>
{{source_materials}}
</sources>`,
	},
	{
		id: 'interview-prep-contradictions',
		title: 'Interview Prep with Contradiction Tracker',
		category: 'Research',
		summary:
			'Build a sharp interview guide that focuses on unresolved assumptions, conflicting claims, and missing evidence in the current research set.',
		bestFor:
			'Teams preparing expert calls, customer interviews, or diligence conversations after desk research.',
		whyItWorks:
			'It turns prior research into a contradiction-driven question plan, which is far more valuable than a generic interview checklist.',
		sourceLabel: 'Anthropic prompt engineering overview',
		sourceUrl: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview',
		prompt: `You are preparing an expert interview guide.

Use the research notes in <research_notes> to identify what is still unresolved, contradictory, or weakly evidenced.

Return:
1. Interview objective
2. Top assumptions to test
3. Contradictions to resolve
4. Ten interview questions in priority order
5. Two follow-up questions for each high-priority question
6. What answers would materially change the recommendation

Rules:
- Do not ask broad filler questions.
- Prioritize questions that resolve uncertainty, not questions that merely gather background.
- Make each question easy to answer with direct operational detail.

<research_notes>
{{research_notes}}
</research_notes>`,
	},
	{
		id: 'prompt-release-review',
		title: 'Prompt Release Risk Review',
		category: 'PromptOps',
		summary:
			'Review a proposed prompt change before deployment and flag where the revision could damage reliability, policy compliance, or human-review pathways.',
		bestFor:
			'PromptOps teams managing versioned prompts, approvals, and production release discipline.',
		whyItWorks:
			'The prompt compares old and new versions against failure modes, approval boundaries, and rollback readiness, which makes it useful in real release reviews.',
		sourceLabel: 'OpenAI prompting guide',
		sourceUrl: 'https://developers.openai.com/api/docs/guides/prompting',
		prompt: `You are a prompt release reviewer.

Compare the current production prompt in <old_prompt> with the proposed revision in <new_prompt>.

Your goal is to identify risks before release.

Return:
1. What changed
2. Reliability risks introduced
3. Policy or safety risks introduced
4. Human-review and escalation risks
5. Regression tests that should be run before approval
6. Release recommendation: approve / revise / reject
7. Why

Rules:
- Focus on behavior changes, not wording changes alone.
- Pay special attention to grounding rules, escalation logic, confidence language, and formatting guarantees.
- If the revision expands model freedom, explain the likely failure mode.

<old_prompt>
{{current_prompt_version}}
</old_prompt>

<new_prompt>
{{proposed_prompt_version}}
</new_prompt>`,
	},
	{
		id: 'knowledge-gap-detector',
		title: 'Knowledge Base Gap Detector',
		category: 'PromptOps',
		summary:
			'Find repeated support or operations issues that current documentation does not answer cleanly, then convert them into a doc backlog with impact signals.',
		bestFor:
			'Teams trying to improve self-service, reduce repeated tickets, and prioritize knowledge work by actual operational pain.',
		whyItWorks:
			'This prompt links repeated issue patterns to missing coverage and impact, which is more actionable than a generic summarizer.',
		sourceLabel: 'Google Gemini prompt gallery',
		sourceUrl: 'https://ai.google.dev/gemini-api/prompts',
		prompt: `You are a knowledge operations analyst.

Review the support conversations in <conversation_set> and identify where the help center or internal knowledge base is failing to answer recurring issues.

Return a backlog with these fields:
- gap title
- repeated user problem
- current documentation weakness
- likely impact if fixed
- recommended content asset
- urgency: low / medium / high
- evidence snippets

Rules:
- Only flag a knowledge gap if the conversations show a repeatable pattern.
- Separate product bugs from documentation gaps.
- Recommend the smallest useful content asset first: FAQ, troubleshooting article, policy clarification, or workflow guide.

<conversation_set>
{{conversation_examples}}
</conversation_set>`,
	},
	{
		id: 'regression-case-generator',
		title: 'Regression Case Generator for Prompt Changes',
		category: 'Evaluation',
		summary:
			'Generate a strong first-pass regression pack that tests edge cases, policy boundaries, formatting promises, and escalation behavior.',
		bestFor:
			'Teams that update prompts frequently and need better eval coverage than a few happy-path examples.',
		whyItWorks:
			'The prompt explicitly asks for boundary cases, policy pressure tests, and failure-oriented examples, which usually catch more breakage than generic test prompts.',
		sourceLabel: 'OpenAI prompting guide',
		sourceUrl: 'https://developers.openai.com/api/docs/guides/prompting',
		prompt: `You are an eval designer creating a regression pack for a production prompt.

Use the prompt definition in <prompt_under_test> and the intended behavior in <behavior_spec> to generate a regression set.

Return a table with:
- test case name
- user input
- what behavior is being tested
- expected response characteristics
- failure signal
- priority: critical / important / nice-to-have

Coverage requirements:
- normal cases
- ambiguous cases
- incomplete-information cases
- policy or compliance edge cases
- formatting constraint checks
- escalation or handoff checks

Rules:
- Do not generate only happy-path tests.
- Prefer cases that would cause visible user harm if the prompt regressed.
- Make expected outcomes observable, not vague.

<prompt_under_test>
{{prompt_text}}
</prompt_under_test>

<behavior_spec>
{{behavior_specification}}
</behavior_spec>`,
	},
	{
		id: 'routing-policy-drafter',
		title: 'Model Routing Policy Drafter',
		category: 'Evaluation',
		summary:
			'Draft a practical model-routing policy that ties task type, latency sensitivity, cost ceilings, and review requirements to the correct model tier.',
		bestFor:
			'Teams moving beyond a single default model and trying to decide where premium reasoning is worth the spend.',
		whyItWorks:
			'This prompt forces routing logic to be explicit about task classes, error tolerance, and escalation, which prevents vague “use the best model” habits.',
		sourceLabel: 'OpenAI prompting guide',
		sourceUrl: 'https://developers.openai.com/api/docs/guides/prompting',
		prompt: `You are designing a model-routing policy for an AI operations team.

Use the constraints in <routing_context> to propose a routing policy.

Return:
1. Recommended task classes
2. Suggested model tier for each task class
3. Why that tier is appropriate
4. When premium reasoning is justified
5. When lower-cost models are sufficient
6. Cases that always require human review
7. Metrics to monitor after rollout

Rules:
- Tie every routing recommendation to business impact, latency, or failure cost.
- Do not recommend premium models by default.
- If the context is missing key constraints, identify them explicitly.

<routing_context>
{{routing_context}}
</routing_context>`,
	},
];
