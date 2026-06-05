---
name: Cyber Volt
colors:
  surface: '#fbfbe5'
  surface-dim: '#dbdbc6'
  surface-bright: '#fbfbe5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5df'
  surface-container: '#efefd9'
  surface-container-high: '#eae9d4'
  surface-container-highest: '#e4e4ce'
  on-surface: '#1b1d0f'
  on-surface-variant: '#464932'
  inverse-surface: '#303223'
  inverse-on-surface: '#f2f2dc'
  outline: '#77795f'
  outline-variant: '#c7c9ab'
  surface-tint: '#596400'
  primary: '#596400'
  on-primary: '#ffffff'
  primary-container: '#e6ff00'
  on-primary-container: '#687400'
  inverse-primary: '#bdd200'
  secondary: '#5f5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe0'
  on-secondary-container: '#636263'
  tertiary: '#46636a'
  on-tertiary: '#ffffff'
  tertiary-container: '#d8f7ff'
  on-tertiary-container: '#567279'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8ef00'
  primary-fixed-dim: '#bdd200'
  on-primary-fixed: '#1a1e00'
  on-primary-fixed-variant: '#434b00'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#c9e8f0'
  tertiary-fixed-dim: '#adccd3'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#2f4b52'
  background: '#fbfbe5'
  on-background: '#1b1d0f'
  surface-variant: '#e4e4ce'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-performance sports and fitness applications, prioritizing speed, energy, and precision. The aesthetic is **High-Contrast / Bold**, blending athletic aggression with a clean, digital-first sensibility. It targets athletes and tech-forward enthusiasts who value intensity and clarity. 

The UI should feel "charged"—evoking the sensation of a pre-game adrenaline rush. This is achieved through the use of an electric primary accent paired with deep, structural neutrals. The visual language avoids soft gradients or organic transitions, opting instead for sharp cuts, deliberate density, and high-impact focal points.

## Colors
The palette is built on extreme contrast to ensure readability and energy during high-movement activity.

*   **Primary (Electric Yellow):** Used for critical calls to action, active states, and performance metrics. It represents energy and focus.
*   **Secondary (Deep Charcoal):** Provides the structural backbone. Used for primary text, iconography, and heavy UI components like headers or navigation bars.
*   **Background (Crisp Off-White):** Keeps the interface feeling modern and lightweight, preventing the high-voltage yellow from becoming fatiguing.
*   **Success/Error:** Use a vibrant green and a sharp red, but keep them secondary to the brand's Electric Yellow to maintain visual hierarchy.

## Typography
Montserrat is the sole typeface, utilized across its full weight range to create a rhythmic, athletic feel. 

Headlines must be dominant. Use **Heavy (900)** or **ExtraBold (800)** for primary titles, often in uppercase to mimic stadium signage and sports broadcast graphics. Body text should maintain a medium weight to ensure it isn't lost against the high-contrast background. Letter spacing should be tightened for large headings to increase "visual density" and widened for small labels to ensure legibility at a glance.

## Layout & Spacing
The layout follows a **Fluid Grid** model with high-density spacing. Use a 12-column grid for desktop and a 4-column grid for mobile.

Alignment should be rigid and geometric. Spacing units are strictly based on an 8px base to ensure mathematical precision. Use generous outer margins (`margin-desktop`) to frame the content, but tight internal gutters (`gutter`) to keep related data points feeling connected and "fast." Elements should feel like they are "docked" into a high-performance instrument cluster.

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layers** and **Hard Outlines**. 

To create depth, use solid blocks of color or subtle 1px borders in Deep Charcoal (#1A1A1B). If a shadow is absolutely necessary for functional stacking (e.g., a floating action button), use a "Hard Shadow"—a 100% opacity offset fill with 0 blur, creating a 2D-extruded effect. Surfaces do not "float"; they are "stacked" or "slotted" into the interface.

## Shapes
Shapes are defined by **Soft/Precision** geometry. A base radius of 8px (0.5rem) is used for all buttons and interactive components to strike a balance between industrial "sharpness" and modern ergonomics. 

Large containers and cards should use the same 8px radius. Do not use fully rounded "pill" shapes for buttons; the clipped corner aesthetic maintains the technical, athletic feel. Progress bars and indicators should use 0px (sharp) or 4px radii to emphasize a "digital readout" style.

## Components

*   **Buttons:** Primary buttons use a solid Electric Yellow (#E6FF00) fill with Deep Charcoal (#1A1A1B) text in Bold Uppercase. Secondary buttons are Deep Charcoal with White text. Use a 2px offset border on hover to create a "tactical" feel.
*   **Input Fields:** Use the Off-White background with a 1px Charcoal bottom border only. When focused, the border transitions to a 2px Electric Yellow line.
*   **Cards:** High-contrast containers with an 8px radius. Use a White background with a very subtle 1px Charcoal outline to separate from the Off-White page background.
*   **Chips/Tags:** Use Charcoal backgrounds with Electric Yellow text. Keep these small and uppercase for a "technical spec" look.
*   **Data Visuals:** Charts and graphs should utilize Electric Yellow as the primary data line/bar. Use a dark background (#1A1A1B) for the chart area to make the yellow "pop" like a neon display.
*   **Checkboxes/Radios:** Square-shaped (2px radius) with an Electric Yellow fill and a Charcoal checkmark when active.