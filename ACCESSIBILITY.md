# Accessibility

Baseline conventions for WCAG 2.1 AA. These are enforced by structure and code review now, since there's no real content yet — as pages fill in with real copy and images, check new work against this list rather than assuming the scaffolding covers it automatically.

## What's already in place

- **Skip link.** First focusable element on every page (`src/components/skip-link.tsx`), visually hidden until it receives keyboard focus, jumps to `#main-content`.
- **One `<main id="main-content" tabIndex={-1}>` per page.** The `tabIndex={-1}` lets the skip link move focus there directly (not just scroll) without adding it to the normal tab order.
- **Landmarks.** `<header>`, `<nav>`, `<main>`, `<footer>` throughout — no generic `<div>` soup for structural regions. Every `<nav>` has a distinct `aria-label` (`Primary`, `Footer`, `On this page`) since a page can have more than one nav landmark and screen reader users need a way to tell them apart.
- **Heading hierarchy.** One `<h1>` per page. Section headings step down in order (`h2` for major sections, `h3` for cards/subsections within them) — never skipped for visual-size reasons. If a heading needs to look smaller, style it smaller; don't drop to a lower heading level just for appearance.
- **Visible keyboard focus.** Global `:focus-visible` outline (`src/app/globals.css`) using a color distinct from both brand colors, with `outline-offset` so the ring reads against the page background rather than the button's own fill — see the contrast math in `DESIGN.md`.
- **Links distinguishable without color.** Underlined by default (see `DESIGN.md`); nav chrome is the deliberate exception, since those links are identifiable by position/context rather than running inline in a sentence.
- **`aria-current="page"`** on the active item in the primary nav.
- **Color contrast.** Checked against WCAG AA in `DESIGN.md`; re-check any new color pairing there before using it.

## Conventions for content going in later

- **Alt text.** Every `<img>` (or Next.js `<Image>`) needs an `alt`:
  - Informational image (a diagram, a photo that conveys something a caption doesn't) → describe what it shows, not "image of...".
  - Purely decorative (background texture, icon next to text that already says the same thing) → `alt=""` so screen readers skip it, not a missing attribute.
  - Functional image (an icon that's the only content of a link/button) → describe the action, e.g. `alt="Search"`, not the picture.
- **Headings stay in order.** Don't introduce an `h4` under an `h2` without an `h3` between them.
- **Form fields** (if/when any are added — contact forms, newsletter signup) need a visible, associated `<label>`, not just a placeholder.
- **Don't rely on color alone** to convey meaning (e.g. a "read" vs "unread" resource list needs a text or icon difference too, not just a color swap).

## Keyboard testing checklist

Run this on any new interactive page before considering it done:

1. Tab from the top of the page. The skip link should be the first stop and visibly appear.
2. Activating the skip link should land focus in `<main>`, past the header nav.
3. Tab through the rest of the page — every interactive element (links, buttons, form fields) should get a visible focus ring, in an order that matches the visual layout.
4. Nothing should require a mouse to reach or activate.
5. No keyboard trap — you can always tab back out of any component.

## Not yet applicable

- **`prefers-reduced-motion`.** No animation exists yet. When any is added (transitions, scroll effects), it must be wrapped in a `@media (prefers-reduced-motion: no-preference)` check rather than applied unconditionally.
