# Design changes — Two-column portfolio CV (Variant B)

## Layout

- **Two columns**: Left sidebar 32% (desktop), right main 65–70%. Grid: `grid-template-columns: 32% 1fr`.
- **Left column**: Name, position, contacts, Skills (all groups), Additional info. Light background `--bg-sidebar` (#f8fafc light / #1c1c1c dark).
- **Right column**: About, Work Experience, Projects, Education. Main background `--bg-main`.
- **Responsive**: At 768px and below, layout becomes a single column; sidebar first, then main. Extra top padding so the fixed theme button does not cover content.
- **Print**: Two columns kept (35% / 65%), A4 `@page`, sidebar with light gray background; theme button and footer hidden.

## Design system (CSS variables)

- `--accent-color` — primary accent (blue).
- `--text-primary` / `--text-secondary` — main and muted text.
- `--bg-main` / `--bg-sidebar` — main and sidebar backgrounds.
- `--border-subtle` — light borders.
- `--accent-soft` — soft accent for badges/highlights.
- Spacing: `--space-xs` through `--space-2xl`.
- Typography: `--font-size-body` (15px), `--line-height-body` (1.65).

Legacy variables (`--resume-*`) kept as aliases so existing references keep working.

## Typography

- **Name**: ~38px (2.375rem) on desktop, bold (700), tight letter-spacing.
- **Section titles**: Uppercase, 0.6875rem, letter-spacing 0.1em, accent color.
- **Body**: 15px, line-height 1.65–1.7, secondary color for descriptions.

## Sidebar

- No heavy gray; light tint `--bg-sidebar`.
- Header: name + position + contacts stacked vertically; contact label uppercase, small.
- Skills: section title + minimal badges; no gray pills.
- Additional info: small body text.

## Skills

- Old gray pills removed.
- **skill-badge**: Small (0.75rem), subtle accent background (`--accent-soft`), no border, rounded. Hover slightly stronger accent.
- Badges wrap in a flex row with small gaps.

## Experience & projects (timeline)

- **Timeline**: Vertical line (2px) on the left, dot (8px circle) per item.
- **Role/company/date**: Role as heading; company (bold) and period on one line with middle dot.
- **Description**: Body text below.
- **Tech stack**: Separate row of small pill-style tags (accent-soft background), no commas.
- Bottom borders between items removed; spacing between items increased.

## Other

- **Theme button**: Fixed top-right; minimal hover (accent border/background).
- **Print**: A4, 1cm margin; sidebar #f5f5f5; dark theme overridden to light for print.
- **Accessibility**: Focus visible on theme/print buttons; semantic HTML and list roles unchanged.
