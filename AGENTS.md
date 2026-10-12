# Agent Instructions

Read this file before making any UI, animation, layout, or interaction changes.

## Source Of Truth

Before implementing or changing any section, read:

- `docs/storyboard/global-guardrails.md`

Before implementing or changing the opening experience, also read:

- `docs/storyboard/section-1-opening-spec.md`

These files are the source of truth for:

- goal
- visual direction
- theme
- animation and motion
- responsive behavior
- UX guardrails

## Required Rules

- Keep every section personal, cute, and romantic.
- The main theme across the whole website must stay `pink and cute`.
- Sunflower is only a surprise accent where appropriate, not the main visual identity of the whole site.
- Every section must be responsive on mobile, tablet, and desktop.
- Prioritize mobile layout and touch comfort.
- Do not replace the emotional flow with a generic landing page, business UI, or a plain login screen.
- Do not introduce flashy motion, harsh transitions, dark luxury styling, or SaaS-like UI patterns.

## Implementation Order

When working on section 1, preserve this sequence:

1. Character intro
2. Password gate
3. Sunflower bloom transition
4. Intro message and `Mulai` button

## If The Spec And Code Differ

- Follow `global-guardrails.md` and the relevant section spec unless the user gives a newer direct instruction.
- If a design or implementation decision is unclear, keep the smaller and softer option.
