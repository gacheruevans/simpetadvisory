---
name: expert-ui-ux
description: >-
  Expert UI/UX design and design systems skill for modern web applications.
  Use this skill when designing layouts, creating design tokens, typography,
  accessible color palettes, micro-interactions, responsive mobile-first layouts,
  trust building, and conversion-focused user interfaces.
---

# Expert UI/UX Design System & Experience Engineering Skill

This skill guides the design and user experience of modern, high-converting, aesthetically premium web applications. It enforces rigorous design heuristics, accessibility standards (WCAG 2.1 AA/AAA), and visual polish.

---

## 1. Core Visual Principles & Design Philosophy

1. **Visual Hierarchy & Flow**:
   - Establish clear scanning patterns (F-pattern for text-heavy pages, Z-pattern for landing pages).
   - Differentiate scale: Page H1 (2.5rem–3.5rem) > Section H2 (1.75rem–2.25rem) > Card H3 (1.25rem–1.5rem) > Body (1rem / 16px).
   - Use spacing to convey relationships: Items closer together are perceived as related (Law of Proximity).

2. **Color Palette & Contrast Architecture**:
   - **Primary Brand Color**: The foundation of the visual identity (e.g. Deep Navy `#12243A` for authority, trust, stability).
   - **Interactive Accent / Brand Teal**: High-engagement action color (e.g. Teal `#0F766E`) for CTAs, active states, key icons.
   - **Decorative Accent / Gold**: Used sparingly for prestige, badges, key highlights (e.g. Warm Gold `#C89B3C`).
   - **Neutrals**: Crisp background (`#FFFFFF`), subtle background tint (`#F8FAFC` or `#F7F8FA`), borders (`#E2E8F0`), body text (`#334155`), muted text (`#64748B`).
   - **Contrast Guarantee**: Minimum 4.5:1 contrast for normal text and 3:1 for large text against backgrounds. Avoid low-contrast gold-on-white text; use gold for badges with dark text or borders.

3. **Typography & Readability**:
   - Use premium modern typography (Inter, Plus Jakarta Sans, Outfit, or system font stack).
   - Limit to 2 font families max (one for headings, one for body, or a single versatile typeface with balanced weights 400, 500, 600, 700).
   - Optimal line length: 50–75 characters per line for body copy.
   - Line height: 1.5–1.65 for body text, 1.15–1.25 for display headings.

4. **Spatial System & Grids**:
   - Use an 8-point spatial grid (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
   - Fluid container widths: Max-width containers (`max-w-7xl` ~1280px or `max-w-6xl` ~1152px) with responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
   - Zero horizontal scroll: Every component, table, and grid must wrap or scroll internally on viewports down to 360px.

---

## 2. Component Design Standards

### Navigation & Header
- **Desktop**: Sticky navigation bar with subtle backdrop blur (`backdrop-blur-md bg-white/90`), clear logo, organized menu items, and a distinguished high-contrast CTA button.
- **Mobile**: Hamburger toggle with smooth slide/fade mobile drawer, large touch targets (minimum 44x44px), clearly separated sections, and direct phone/WhatsApp quick actions.
- **Active State**: Clear visual indicators (underline, subtle pill background, or distinct accent color) showing the active page.

### Cards & Surfaces
- Moderate border radius (`rounded-xl` or `rounded-2xl` for cards, `rounded-lg` for form controls).
- Subtle, layered drop shadows (`shadow-sm` resting, `hover:shadow-md` or `hover:shadow-lg` on interactive cards).
- Clean 1px border (`border border-slate-200/80` or `border-slate-100`) to define bounds on light backgrounds.
- Hover lift: Subtle translation (`transition-all duration-200 hover:-translate-y-1`) for clickable service cards.

### Forms & Input Design
- **Labels**: Always visible, positioned above inputs with clear typography (`text-sm font-medium text-slate-700`).
- **Required Indicators**: Subtle asterisks (`text-rose-500`) with clear helper text.
- **Focus Rings**: High-visibility focus indicators (`focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none`).
- **Progressive Disclosure**: Show relevant conditional inputs based on selected service interest (e.g. Event details for Speaking, Staff count for Corporate Training, Existing software for Accounting/ERP consultancy).
- **Inline Validation**: Instant, friendly error states with descriptive text and accessible `aria-invalid` / `aria-describedby` attributes.

### Buttons & CTAs
- **Primary Action**: Solid accent background (Teal), high contrast white text, rounded corners, subtle shadow, clear hover and active depression states.
- **Secondary Action**: Outlined or soft tinted background (`bg-teal-50 text-teal-700 hover:bg-teal-100`).
- **Tertiary / Link Action**: Inline link with hover underline and arrow icon with micro-translation on hover (`group-hover:translate-x-1`).
- **State Feedback**: Explicit loading spinner, disabled state styling (reduced opacity, `cursor-not-allowed`), and immediate success/error feedback.

---

## 3. Accessibility (a11y) & Usability Checklist

- [ ] **Keyboard Navigability**: Every interactive element is reachable and operable via Tab, Enter, and Space.
- [ ] **Focus Visibility**: Custom focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`) are always crisp and never removed with `outline: none` without replacement.
- [ ] **Semantic Landmarks**: Correct usage of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- [ ] **Heading Order**: Strictly hierarchical `h1` -> `h2` -> `h3` with no skipping levels.
- [ ] **Screen Readers**: Meaningful `alt` text for images, `aria-label` for icon-only buttons, `aria-expanded` for accordions/drawers, and `role="alert"` for form feedback.
- [ ] **Motion Sensitivity**: Honor user preference using `@media (prefers-reduced-motion: reduce)` to disable non-essential animations.

---

## 4. Trust & Conversion Optimization (CRO)

1. **Credibility Architecture**:
   - Prominently feature company registration details, physical address, leadership bio, official contact routes.
   - Display verified partner badges (e.g. Zoho Partner) accurately without exaggerated or unverified claims.
   - Clear value propositions above the fold on all landing pages.

2. **Frictionless Lead Capture**:
   - Keep initial inquiry forms short: Name, Email, Phone (optional), Service Category, Message.
   - Clarify response expectations (e.g., "We respond within 24 business hours").
   - Offer alternative contact methods (direct phone number, official physical address, email link).
   - Post-submission reassurance: Clear `/thank-you` confirmation state explaining the immediate next steps.
