# Flavia Buzzi — "Paper & Pen" Design System

A booking-calendar app for Flavia Buzzi's Italian lessons, styled as a page from a paper planner marked up in colored pens. Every color has exactly one job; nothing is decorative.

This design system was built from a written brief only — no codebase, Figma file, or existing product was provided. All colors, type, spacing, and screens below are original interpretations of that brief (see "Content fundamentals" and "Visual foundations"). If a real codebase or Figma file exists for this product, attach it and this system should be rebuilt from that source of truth.

## Product

One surface, two audiences:
- **Student booking view** — see open/booked/unavailable slots on Flavia's calendar, request a lesson.
- **Teacher dashboard** — Flavia reviews booking requests and accepts/declines them.
- **Teacher login** — gate in front of the dashboard.

## Principles

1. Paper, not screen — warm surface, ruled lines, honest borders, never a flat white app background.
2. One pen, one meaning — each color maps to exactly one state, everywhere.
3. Two weights, no more — every action is either a solid pen press (primary) or a light mark (outline/secondary).
4. Handwritten bones, systematic skeleton — type and texture can feel a little imperfect; grid, spacing, and color logic are perfectly consistent.

## Content fundamentals

- **Tone**: short, direct, instructional rather than marketing-voiced. "Pick any open slot to request a lesson." No exclamation points, no hype.
- **Voice**: second person ("you'll get a confirmation"), quiet and matter-of-fact.
- **Casing**: sentence case for body copy and headings; UI labels, eyebrows, and metadata are ALL CAPS in mono.
- **Metadata** (timezone, duration, hours) is quiet — small, monospace, muted color — never competing with the hero title.
- **Emoji**: none. No decorative iconography beyond the state colors and hatch texture.

## Visual foundations

- **Color**: five role colors, one meaning each — ink (text/borders), blue (interactive/today), red (booked/decline), green (confirmed/accept), muted grey (inactive/metadata). Two surface tones: paper (page bg, `#FBF6EC`) and paper-raised (cards, `#FDFAF2`) — both warm ivory, never pure white on the page.
- **Type**: two roles only — Fraunces italic serif (identity moments: a person's name, a screen's hero title) and IBM Plex Mono (everything else: eyebrows, UI labels, body copy, data — all-caps/tracked for labels, regular case for body). Never mix a third family, and never use the serif for body copy or buttons. The pairing is a swappable theme token (`data-font-theme` on `:root` swaps `--font-display`/`--font-mono`; color, spacing, and radius never change): `graphic` (Instrument Serif / JetBrains Mono), `bookish` (Fraunces / IBM Plex Mono — default), `gentle` (Newsreader / Space Mono).
- **Scale**: 13 / 16 / 20 / 32 / 48px.
- **Spacing**: 8px base unit, all padding/margins multiples of 8.
- **Corners**: 6px on interactive elements (buttons, inputs, tags); cards and calendar grids stay near-square (4px) — sharp edges read as paper, rounding is reserved for things you'd press.
- **Borders**: 1px, always ink at full or reduced opacity (15% for default rules, 8% for booked-slot fill) — never a separate border-grey token.
- **Backgrounds**: flat paper color, no gradients, no imagery, no full-bleed photography. No animation beyond a simple opacity dip on press and a border-color shift on focus.
- **Hover/press**: buttons dip to 70% opacity on press; inputs swap border color to blue on focus. No shadows, no scale/bounce.
- **Texture**: one deliberate accent — a diagonal ink hatch (CSS `repeating-linear-gradient`, ~15% opacity) marks unavailable calendar slots. This is the only place texture carries meaning; nothing else in the system uses pattern, grain, gradient, or blur.
- **Shadows**: none. Cards separate from the page by border + a slightly lighter fill, not elevation.
- **Imagery**: none specified in the brief; no photography or illustration in this system.

## Iconography

No icon system, icon font, or SVG set was specified in the brief. The screens in this system use none — states are carried entirely by color, border, and the hatch texture, per the brief's "every color has exactly one job" rule. If icons are needed later (e.g. a calendar glyph, chevrons for date navigation), source them to match the mono/ink aesthetic rather than adding a mismatched set.

## Fonts

No font files were provided. Fonts are loaded from Google Fonts (`tokens/fonts.css`): **Fraunces** (display serif italic, default theme), **IBM Plex Mono** (labels/data/body, default theme), plus two alternate pairing themes — **Instrument Serif**/**JetBrains Mono** (`graphic`) and **Newsreader**/**Space Mono** (`gentle`) — switchable via `data-font-theme` on `:root`. These are close matches to the brief's typographic intent, not exact brand fonts — flag to the brand owner and swap in real font files if this becomes production-bound.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `texture.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand/texture/borders).
- `components/`
  - `forms/` — `Button`, `Input`
  - `feedback/` — `StatusTag`
  - `surfaces/` — `Card`
  - `calendar/` — `CalendarSlot`, `Legend`
- `ui_kits/booking-app/` — `index.html` (interactive: Login → Booking → Dashboard), `LoginScreen.jsx`, `BookingScreen.jsx`, `DashboardScreen.jsx`.
- `thumbnail.html` — project tile.
- `SKILL.md` — portable skill file for Claude Code.

## Intentional additions

- `Input` — not named in the brief's component list, but required for the login card; styled to the same border/radius/mono-label rules as everything else.

## Caveats

- Built from the written brief alone — no Figma, codebase, or real fonts/logo were attached.
- No logo exists in the brief; the brand name renders as plain type wherever a mark would go.
- Fonts are Google Fonts substitutes for the brief's typographic descriptions, not verified brand fonts.
