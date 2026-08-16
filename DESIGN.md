---
name: System Static
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444652'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747683'
  outline-variant: '#c4c6d4'
  surface-tint: '#3559b7'
  primary: '#002265'
  on-primary: '#ffffff'
  primary-container: '#003594'
  on-primary-container: '#87a4ff'
  inverse-primary: '#b4c5ff'
  secondary: '#b80045'
  on-secondary: '#ffffff'
  secondary-container: '#e21a5a'
  on-secondary-container: '#fffbff'
  tertiary: '#4e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#741f00'
  on-tertiary-container: '#ff865f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#15409e'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bc'
  on-secondary-fixed: '#400013'
  on-secondary-fixed-variant: '#910034'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#812807'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
spacing:
  unit: 4px
  gutter: 16px
  margin-page: 24px
  container-max: 1200px
---

## Brand & Style

The design system is a functional homage to mid-90s technical workstations and open-source documentation. It prioritizes information density and structural clarity over decorative flourishes, targeting a technical audience that values precision and performance.

The aesthetic combines **Minimalism** with **Brutalism**, utilizing a strict box-model layout. The interface evokes a "terminal-plus" experience—cleaner than a command line but more disciplined than modern consumer web design. Expect high-contrast interactions, sharp geometric precision, and a logical, non-hierarchical distribution of elements that mirrors the efficiency of legacy UNIX environments.

## Colors

The palette is rooted in functional neutrals with high-chroma accents that signal interaction and system status.

- **Primary (#003594):** A deep, authoritative blue used for primary actions, active navigation states, and header accents.
- **Secondary (#D70A53):** A vibrant ruby used sparingly for critical alerts, system errors, or "Debian-inspired" branding moments.
- **Neutral / Text (#1A1A1A):** Used for all primary copy and heavy borders to ensure maximum legibility.
- **Surface & Background:** A dual-tone gray system. `#F0F0F0` serves as the primary canvas, while `#CCCCCC` defines structural containers, sidebars, and disabled states.
- **Dither Pattern:** Use a 1px checkerboard CSS mask or SVG pattern of `#CCCCCC` over `#F0F0F0` to create texture in large empty areas without adding visual weight.

## Typography

This design system exclusively utilizes **JetBrains Mono** to maintain a consistent technical rhythm. The monospaced nature of the font ensures that data tables and code blocks align perfectly with UI labels.

Headlines should be set in bold with slightly tighter letter spacing to create a "blocky" visual impact. Body text maintains a standard weight for long-form legibility. Navigation and metadata should use `label-caps` to distinguish them from interactive content. All type is rendered with `font-smoothing: antialiased` to maintain the sharpness of the monospace glyphs.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, utilizing a rigid 4px baseline shift. 

- **Grid:** A 12-column system for desktop, collapsing to 1 column for mobile. Gutters are strictly 16px.
- **Margins:** Page margins are fixed at 24px, ensuring content never touches the viewport edge.
- **Boxing:** Every distinct section of the UI must be enclosed in a 1px or 2px solid `#1A1A1A` border. Do not rely on whitespace alone to separate content; use structural lines.
- **Alignment:** All elements, including icons and text baselines, must snap to the 4px grid to maintain the "programmed" feel of the interface.

## Elevation & Depth

This design system rejects shadows and blurs in favor of **Tonal Layers** and **Bold Borders**.

- **Depth through Inset:** To show "depth," use a 1px inset border or a darker background fill (`#CCCCCC`) for recessed areas like text inputs or terminal windows.
- **Active State:** Elements move "forward" by increasing border thickness from 1px to 2px, or by swapping background and foreground colors (inverse video effect).
- **Z-Index:** High-level modals or tooltips should not use shadows. Instead, use a solid 2px black border with a high-contrast "off-white" background and a 4px black "drop-block" offset (a solid black rectangle offset to the bottom-right) to simulate a physical stack.

## Shapes

The shape language is strictly **Sharp (0px)**. No rounded corners are permitted in any UI element, including buttons, inputs, cards, or selection indicators. This maintains the rigid, early-computing aesthetic and ensures a seamless transition between borders in a grid layout.

## Components

- **Buttons:** Rectangular with a 1px `#1A1A1A` border. Primary buttons use a `#003594` background with white text. Hover states should invert the colors.
- **Inputs:** White background with a 1px inset border. Focus state is indicated by a 2px solid border or a blinking block cursor.
- **Cards:** Simple containers with a 1px border. Use a `#CCCCCC` header bar (1px border at the bottom) to house titles, resembling a legacy OS window.
- **Lists:** Use a "bracket" indicator `[ ]` for checkboxes and `( )` for radio buttons. Selected states are marked with an `X` or a solid fill.
- **Status Chips:** High-contrast blocks. Use `#D70A53` for "CRITICAL" and `#003594` for "INFO".
- **Progress Bars:** Represented by a series of ASCII-style blocks `[||||||    ]` or a solid color fill within a bordered container.
- **Scanline Overlay:** Apply a global, low-opacity CSS linear gradient (1px transparent, 1px rgba(0,0,0,0.03)) to the entire screen or specific "monitor" containers to enhance the retro-hardware feel.