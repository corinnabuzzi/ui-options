# Optimistic Systems — Design System

A design system distilled from the personal portfolio of **Corinna Buzzi**, a junior software developer with a linguistics background. The work is editorial, typography-driven, and quietly technical: *a fascination with systems, networks, exploration, and knowledge made visible.*

**Contenuto. Calore.** — Reserved but not cold. Serious without being heavy. The work has warmth without performing it.

---

## Sources

This system was built by reading the original portfolio codebase. The reader is encouraged to explore it for deeper fidelity:

- **GitHub — `corinnabuzzi/portfolio`** · https://github.com/corinnabuzzi/portfolio
  Vanilla HTML/CSS/JS, no frameworks or build tools. The `README.md` there is an unusually rich changelog (v0 → v16) documenting every design decision — the cycling word, the hex-decode interaction, and 5 full rewrites of the procedural network graph. Worth reading in full.
- Related repos by the same author (coursework, exercises): `corinnabuzzi/movieapp-buzzi`, `corinnabuzzi/technical-writing-pacman`, `corinnabuzzi/fe-buzzi`.

The portfolio is a single brand surface (one product: a personal site with a Home and an About page). The design system generalises its foundations, components, and signature motion into a reusable kit.

---

## Design principles

1. **Editorial, not decorative.** Typography-driven. No cards, no gradients, no shadows. Structure communicates through whitespace and hierarchy.
2. **Negative space is intentional.** The page breathes; density is reserved for the graph.
3. **Animation serves meaning.** The cycling word, the hex decode, the graph breathing — each carries semantic weight. Nothing is ornamental.
4. **The palette is strict.** Three colors plus one border gray. Blue is used sparingly and always means the same thing: *active / interactive / primary accent*.

---

## CONTENT FUNDAMENTALS

**Voice.** First person, plain, declarative. Short sentences that state things rather than sell them: *"I come home, and I study. I build things."* The copy is confident but never boastful — accomplishments are stated as facts, not achievements (*"first lines of Python at fifteen"*). It is reflective and a little literary, comfortable with a long sentence when the thought needs it.

**Tone.** Reserved warmth. It admits enthusiasm (*"I love it, and it really works"* in the source notes) without performing it. Self-aware — capable of calling its own ideas *"super cheeky"* and then cutting them. Never hype, never exclamation marks in product copy.

**Person.** "I" when speaking as the author; "you" is essentially absent — this is a portfolio, a first-person artifact, not a marketing site addressing a customer.

**Casing.** Sentence case for prose and titles. **UPPERCASE** is reserved for small UI labels (nav, eyebrows, tech tags) with wide letter-spacing (1–1.2px). Lowercase is used deliberately as a stylistic choice for roles and taglines (*"junior software developer"*, never Title Case).

**Signature phrases.** Aphoristic, parallel constructions: **"Syntax is syntax. Structure is structure."** · *"Building things that make sense."* · *"That's not a backup plan, it's the default."* The brand likes the rhythm of a clean, repeated structure.

**Technical register.** Comfortable with code vocabulary as expressive material — the cycling word rotates through *syntax, grammar, structure, logic, pattern, parsing, meaning, rule*, and hovering decodes a word into its hex ASCII. Language and computation are treated as the same thing.

**Emoji.** None. Not used anywhere, in product or source. Unicode is used only as functional punctuation — the middot `·` as a separator, an em dash `—` for asides.

**Examples to imitate**
- Role line: `junior software developer` (lowercase, factual)
- Tagline: *Building things that make sense.* (serif italic, quiet)
- Status: `in progress` · `completed` (lowercase, gray)
- Tech tag: `HTML · CSS · JavaScript` (mono, uppercase, blue)

---

## VISUAL FOUNDATIONS

**Color.** A strict three-color palette plus one structural gray. Background `#f6f4ef` — warm off-white, papery, with temperature and weight (never pure white). Text `#111` — inky near-black, ink-on-paper, never `#000`. Accent `#0000FF` — pure, aggressive blue, used *sparingly*; it always means active/interactive/primary. The only grays are the hairline border `#d0cec9` and two muted text grays (`#888`, `#bbb`). Working ratio: roughly 92% ink, 8% blue. Alternates exist (`#F7F3EC`, `#1A1714`, `#1F3DF0`) but the primaries dominate.

**Blueprint mode.** Not a separate palette — *invert the ground*. Blue field, off-white line work. Same colors, different register; references architectural blueprints and technical drawings. Applied as a scope (`.blueprint`) or component treatment, never as a full-site theme.

**Type.** A serif/sans/mono triad, each with one job. **Inter** (sans) for UI, labels, names, navigation — structure. **Lora** (serif) for body, prose, taglines — reading and warmth. **JetBrains Mono** for code, tech tags, and the decode animation — system. Display names are large and tightly tracked (72px, −2px). Body is Lora 18px at line-height 1.7 — a generous reading rhythm. Labels are uppercase Inter 600 at 1.2px tracking. *(All three are Google Fonts — served via CDN; see "Fonts" caveat below.)*

**Spacing & layout.** Negative space is the primary compositional tool. A 4px base scale expands into editorial whitespace (sections breathe at 120px). Reading content sits in a narrow 750px measure; the hero is left-indented at 8vw. Density appears in exactly one place: the network graph.

**Backgrounds.** Flat warm off-white. No imagery, no full-bleed photography, no textures, no patterns, no gradients. The only "background" element is the animated network graph canvas behind the hero — line work, not fill.

**Borders.** Hairline only — `1px solid #d0cec9`, never heavier. Rules and whitespace do the work that cards and boxes would do elsewhere.

**Radii.** Square by default (`0`). Chips/swatches get `2px`. The one rounded form in the entire system is the CTA **pill** (`100px`). Nothing else rounds.

**Shadows & elevation.** None. The system is deliberately flat — there is no elevation model, no `box-shadow` anywhere, by design. "Surfaces" are defined by hairline rules and space, not depth.

**Cards.** There are no cards. Content is organised as list rows separated by hairline top-rules (see `ProjectEntry`). If you reach for a card, you are off-brand.

**Transparency & blur.** Minimal. The graph uses low-opacity blue (`rgba(0,0,255,0.08–0.22)`) for edges and node glows. No backdrop-blur, no frosted glass.

**Animation.** Calm and meaningful, never bouncy. Entrances *clip-reveal* (left-to-right `clip-path` wipe on names) or *fade-up* (12px rise + opacity). Easings: `cubic-bezier(0.16,1,0.3,1)` for reveals, `cubic-bezier(0.65,0,0.35,1)` for the name wipe, plain `ease` for fades. Three signature animations carry semantic weight: the **cycling word** (rotates through language/code terms, each resolving out of hex scramble), the **hex decode** (hover a word to see its hex ASCII), and the **graph breathing** (slow global sine-scale + per-node sine drift). Reduced-motion is honored globally. No infinite decorative loops on content.

**Hover states.** Restrained. Links and nav turn **blue**. The pill CTA inverts (transparent → ink fill, text → bg). List titles **dim to 0.7 opacity**. Footer links gain an underline (3px offset). No scale-up, no glow.

**Press states.** A subtle 1px downward nudge (`translateY(1px)`) on buttons. No color flash, no ripple.

**Imagery vibe.** There is essentially no photographic imagery — the brand is text and line. Where the graph appears, it is monochrome blue on warm ground: cool line work over a warm field.

---

## ICONOGRAPHY

The brand is **almost icon-free** — it is typographic and editorial first. Iconography is used surgically, not systematically.

- **No icon font, no icon library.** The source ships exactly one inline SVG: a small down-chevron/arrow inside the hero CTA (`See my work ↓`), drawn with `stroke-width: 1.5`, round caps and joins, `currentColor`. This thin, rounded, single-weight stroke style is the icon language: if you must add an icon, match it.
- **Recommended CDN match.** For any broader icon needs, use **[Lucide](https://lucide.dev)** — its 1.5–2px round-cap stroke style matches the existing arrow almost exactly. This is a *substitution* (the source has no icon set); flagged for the user.
- **Unicode as punctuation, not decoration.** The middot `·` separates links and tech-stack items; the em dash `—` introduces asides and date ranges. These are the brand's "icons."
- **No emoji.** Anywhere. Ever.
- **The graph is the brand mark.** In the absence of a logo, the procedural network graph is the closest thing to an identity element — knowledge made visible. There is no wordmark or logo lockup; the name set in Inter Bold *is* the logo.

`assets/palette-card.png` — the author's own palette reference image, kept for provenance.

---

## INDEX

**Root**
- `styles.css` — the entry point (consumers link this one file; it is `@import`s only).
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills manifest for downloadable use.

**`tokens/`** — CSS custom properties + fonts (all reachable from `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `animation.css` · `base.css`

**`components/`** — reusable React primitives (namespace `OptimisticSystemsDesignSystem_2913f0`)
- `core/` — **Button** (pill CTA), **Tag** (mono tech tag), **Eyebrow** (uppercase label)
- `navigation/` — **Nav** (fixed minimal nav)
- `content/` — **ProjectEntry** (editorial work row), **Footer** (hairline link footer)
- `motion/` — **CyclingWord** (hex-decode word), **NetworkGraph** (procedural breathing graph)

**`ui_kits/portfolio/`** — interactive recreation of the portfolio (Hero + Work + About, click-through nav). Also registered as a Starting Point.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/`** — `palette-card.png`.

---

## CAVEATS

- **Fonts via CDN.** Inter, Lora, and JetBrains Mono are loaded from Google Fonts rather than self-hosted, so the compiler reports zero registered webfonts (the `@font-face` rules live on Google's servers). This works for any consumer with network access. If you need offline/self-hosted fonts, ask and they can be bundled in.
- **Icons are a substitution.** The source has no icon set beyond one inline arrow; Lucide is recommended as the closest-matching CDN library.
