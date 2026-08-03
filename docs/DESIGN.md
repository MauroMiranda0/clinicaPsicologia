---
name: Serene Logic
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#576065'
  on-secondary: '#ffffff'
  secondary-container: '#dbe4ea'
  on-secondary-container: '#5d666b'
  tertiary: '#46566c'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6e85'
  on-tertiary-container: '#e9f0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dbe4ea'
  secondary-fixed-dim: '#bfc8ce'
  on-secondary-fixed: '#141d21'
  on-secondary-fixed-variant: '#3f484d'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  max-width: 1280px
---

## Brand & Style

The design system is engineered for a digital psychology clinic, prioritizing **emotional safety, clarity, and professional reliability**. The brand personality is empathetic yet clinical—providing a "digital sanctuary" where patients feel held and clinicians feel empowered.

The visual style follows a **Modern Corporate** approach with a lean toward **Minimalism**. By utilizing expansive white space, we reduce cognitive load for users who may be in states of distress. The interface avoids aggressive transitions or jarring high-contrast elements, opting instead for a "breathable" layout that emphasizes focus and calm.

## Colors

The palette is anchored in **Soft Blues** to evoke trust and stability. 
- **Primary Blue (#2563EB):** Used for primary actions and essential branding. It provides enough contrast for accessibility while maintaining a professional medical feel.
- **Surface Tint (#F0F9FF):** A very soft blue used for subtle highlighting, active states, and non-intrusive container backgrounds.
- **Neutrals:** The background is a crisp white (#FFFFFF) to ensure maximum legibility, supported by a scale of cool grays (Slate) for text hierarchies and borders.
- **Functional Colors:** Success (Soft Green), Warning (Soft Amber), and Error (Soft Red) should be desaturated to avoid triggering anxiety while remaining clear.

## Typography

This design system utilizes **Inter** for all roles. Inter’s tall x-height and systematic spacing provide the high legibility required for clinical documentation and patient communication.

- **Headlines:** Use Medium or SemiBold weights with slight negative letter-spacing to create a grounded, authoritative feel.
- **Body Text:** Standardized at 16px for optimal readability. Paragraphs should use generous line heights (1.5x+) to ensure text-heavy clinical notes or resources are easy to scan.
- **Labels:** Used for metadata, table headers, and small UI captions, often utilizing a slightly higher font weight to distinguish from body copy.

## Layout & Spacing

The layout utilizes a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1280px container on desktop to prevent eye strain from excessive line lengths.

- **Rhythm:** An 8px linear scale (4px, 8px, 16px, 24px, 32px, 48px, 64px) governs all padding and margins.
- **Grid:** 12 columns for desktop, 8 columns for tablet, and 4 columns for mobile. 
- **Desktop:** Large side margins (40px) create a sense of space and focus.
- **Mobile:** Margins shrink to 16px to maximize screen real estate for interactive elements.

## Elevation & Depth

To maintain a "clean and professional" atmosphere, the design system avoids heavy shadows. Depth is communicated through **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Background):** Pure white or Neutral-50.
- **Level 1 (Cards/Sections):** Subtle 1px borders (#E2E8F0) with a soft, diffused shadow (Y: 2px, Blur: 4px, 5% opacity black).
- **Level 2 (Dropdowns/Modals):** Higher elevation with more diffused shadows (Y: 8px, Blur: 16px, 10% opacity blue-tinted gray) to focus the user's attention during critical tasks like appointment booking.

## Shapes

The shape language uses **Rounded (0.5rem)** corners to soften the clinical feel, making the software feel approachable and modern rather than rigid or institutional.

- **Standard Elements:** Buttons, input fields, and cards use the base 8px (0.5rem) radius.
- **Large Elements:** Modals and containers use 16px (1rem) for a distinct "layered" appearance.
- **Interactive Small Elements:** Chips and tags may use the "Pill" style for high contrast against rectangular content.

## Components

### Buttons
- **Primary:** Solid Primary Blue with white text. High-contrast for clear calls-to-action (e.g., "Book Session").
- **Secondary:** Surface Tint background with Primary Blue text. Low-impact for secondary actions.
- **States:** Hover states should slightly darken the background; focus states must include a 2px offset ring for accessibility.

### Cards & Data Tables
- **Cards:** White background, 1px light gray border, soft elevation. Used for patient summaries and session previews.
- **Tables:** Minimalist. No vertical borders. Headers are Label-SM in a muted gray. Row height is 56px to ensure "breathing room" for clinical data.

### Inputs
- **Fields:** 8px rounded corners with a subtle 1px border. On focus, the border transitions to Primary Blue with a soft blue outer glow.
- **Feedback:** Error states must include both a color change (Soft Red) and an icon for accessibility.

### Chips & Status Indicators
- Used for "Appointment Status" (Confirmed, Pending, Cancelled). Use background colors with 15% opacity of the functional color and 100% opacity for the text to ensure legibility.

### Specialized Components
- **Mood Tracker:** A custom input component using the shape language for patients to log emotional states quickly.
- **Timeline:** A vertical line component used in patient histories to show clinical progress over time.