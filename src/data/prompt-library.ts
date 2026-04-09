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
	{
		id: 'mcp-server-evaluator',
		title: 'MCP Server Evaluation Checklist',
		category: 'PromptOps',
		summary:
			'Evaluate whether a proposed MCP server or connector should be adopted, hardened, or rejected before it becomes shared agent infrastructure.',
		bestFor:
			'AI platform and internal tools teams reviewing shared tool surfaces, connector reuse, and enterprise integration risk.',
		whyItWorks:
			'The prompt forces evaluation across interoperability, permission scope, maintenance burden, and approval risk instead of letting teams approve MCP servers on novelty alone.',
		sourceLabel: 'Anthropic MCP overview',
		sourceUrl: 'https://docs.anthropic.com/en/docs/mcp',
		prompt: `You are reviewing a proposed MCP server for enterprise use.

Use the information in <server_description> and <operating_context> to assess whether the server should be approved, revised, or rejected.

Return:
1. Intended use cases
2. Shared infrastructure value
3. Security and permission concerns
4. Operational maintenance concerns
5. Approval and human-review risks
6. Recommendation: approve / revise / reject
7. Required next actions before production use

Rules:
- Do not evaluate the server only on technical capability.
- Pay attention to who can call it, what systems it touches, and who will maintain it.
- If the operating context is underspecified, name what is missing.

<server_description>
{{server_description}}
</server_description>

<operating_context>
{{operating_context}}
</operating_context>`,
	},
	{
		id: 'agent-stop-conditions',
		title: 'Agent Stop Conditions and Escalation Prompt',
		category: 'PromptOps',
		summary:
			'Define when an agent must stop, ask for review, or hand work back to a human instead of pushing forward with uncertain tool use.',
		bestFor:
			'Teams designing tool-using agents that need explicit safety, trust, or approval boundaries.',
		whyItWorks:
			'It frames escalation as a required design outcome, not a fallback after a model has already overreached.',
		sourceLabel: 'OpenAI tools for agents',
		sourceUrl: 'https://openai.com/index/new-tools-for-building-agents/',
		prompt: `You are an operational safety reviewer for an AI agent workflow.

Read the task description in <workflow> and define the stop conditions that should force the agent to pause, escalate, or request human approval.

Return:
1. Cases where the agent can proceed automatically
2. Cases where the agent must ask for clarification
3. Cases where the agent must stop and escalate
4. Tool actions that require human approval
5. Failure signals operators should monitor after launch

Rules:
- Assume that uncertainty should become visible, not hidden.
- Focus on real operating and trust boundaries, not only safety policy language.
- Prefer explicit escalation over confident guessing.

<workflow>
{{workflow_description}}
</workflow>`,
	},
	{
		id: 'deep-research-brief',
		title: 'Deep Research Brief with Claim Ledger',
		category: 'Research',
		summary:
			'Turn a research request into a high-discipline investigation brief with explicit questions, evidence requirements, and a final claim ledger.',
		bestFor:
			'Research, strategy, and diligence teams using AI for longer-form investigation and synthesis.',
		whyItWorks:
			'It prevents vague “research this for me” prompting by forcing a scope, evidence standard, and final claim log that can be reviewed.',
		sourceLabel: 'Google Gemini prompting strategies',
		sourceUrl: 'https://ai.google.dev/gemini-api/docs/prompting-strategies',
		prompt: `You are preparing a deep research brief.

Use the request in <research_request> to define a structured investigation plan before any final synthesis is written.

Return:
1. Research objective
2. Specific questions to answer
3. Evidence required for each question
4. Likely weak points or uncertainty risks
5. Suggested source categories
6. Final output structure
7. Claim ledger format the final report must use

Rules:
- Make the plan specific enough that another analyst could follow it.
- Separate factual questions from judgment questions.
- Require a final claim ledger with source-backed claims and uncertainty flags.

<research_request>
{{research_request}}
</research_request>`,
	},
	{
		id: 'agent-tool-selection',
		title: 'Agent Tool Selection and Refusal Policy',
		category: 'Evaluation',
		summary:
			'Define when an agent should use a tool, when it should decline, and when it should ask for a different route instead of making a weak call.',
		bestFor:
			'Teams building tool-using agents across support, operations, or internal knowledge systems.',
		whyItWorks:
			'The prompt turns tool use into an explicit policy decision with refusal logic, which is often what separates a reliable agent from a reckless one.',
		sourceLabel: 'Anthropic prompting best practices',
		sourceUrl: 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',
		prompt: `You are defining a tool-use policy for an AI agent.

Use the agent role in <agent_role> and the available tools in <tool_list> to create a tool selection policy.

Return:
1. When each tool should be used
2. When the agent should refuse to use a tool
3. When the agent should ask for human help instead
4. Common failure modes for each tool
5. Confidence checks the agent should run before acting

Rules:
- Do not assume every tool should be used if available.
- Tool access is not permission to act without judgment.
- Prefer a refusal policy that is explicit and reviewable.

<agent_role>
{{agent_role}}
</agent_role>

<tool_list>
{{tool_list}}
</tool_list>`,
	},
];
