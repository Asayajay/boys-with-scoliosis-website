# Design system

Tokens live in `src/app/globals.css` (Tailwind v4 `@theme` block). View them rendered at `/style-guide` (`npm run dev`).

## Tone

The audience is split between teenage boys and their parents, often at a stressful moment (a new diagnosis, an upcoming brace fitting). The design avoids two failure modes: looking like a sterile clinical handout, and looking childish in a way a teenager would find condescending. In practice that means:

- Warm neutrals (cream/charcoal) instead of stark white/black.
- A calm teal instead of clinical blue as the primary brand color.
- A warm terracotta accent for energy and warmth, used sparingly for calls to action.
- Rounded corners throughout — soft, not sharp.
- Content written distinctly for the two audiences rather than one generic voice trying to serve both (this is a content decision, enforced by the site architecture, not a visual one).

## Color

| Token | Hex | Use |
|---|---|---|
| `background` | `#fbf7f1` | Page background |
| `surface` | `#ffffff` | Cards, raised surfaces |
| `foreground` | `#2b2620` | Body text |
| `muted` | `#6b645c` | Secondary text |
| `border` | `#ddd4c7` | Dividers, outlines |
| `subtle` | `#f1ebe0` | Section backgrounds |
| `primary` / `primary-hover` | `#1f7a6c` / `#175a50` | Links, primary actions, nav |
| `accent` / `accent-hover` | `#c84414` / `#a23710` | Calls to action, highlights |
| `gold` | `#e8b85b` | Sparingly, for secondary emphasis |
| `success` | `#4c9a6a` | Reassurance / confirmation states |
| `focus-ring` | `#1b4b91` | Keyboard focus indicator only — see accessibility notes below |

`foreground` on `background` is roughly 14:1 contrast; `primary` and `accent` both clear 4.5:1 for normal text against `background`, `surface`, and as white text on their own fill. (An earlier, brighter coral for `accent` only reached ~2.8:1 with white button text and was rejected for that reason — this terracotta shade was chosen specifically to pass AA while staying in the same warm hue family.) Any new color pairing added later should be checked against WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text and UI components) before use.

`focus-ring` only reaches 3:1 against `primary`/`accent` fills when the outline sits outside the shape (e.g. `outline-offset`) so it's contrasted against `background` instead of the button's own color — implemented in the accessibility-foundations pass, not here.

## Typography

- Headings: **Nunito** (`--font-heading`) — rounded terminals read as warm and approachable without being childish.
- Body: **Inter** (`--font-body`) — chosen purely for legibility at small sizes.
- Base body size is 18px (not the usual 16px browser default) with 1.7 line height, a small readability concession given the audience includes anxious readers and younger teens.

## Notes

- No dark mode for now — one well-considered light theme is easier to guarantee contrast on than two, and this isn't a developer tool where dark mode is expected.
- `focus-ring` is defined here as a token but not yet applied — keyboard focus styling is real interactive behavior and belongs with the rest of the accessibility foundations, not the visual design pass.
