# ColourFun

Classroom tools for teaching colour theory. Everything is plain HTML with inline CSS and JS: no build step, no dependencies.

## Colour Wheel Schemes

**Live:** https://faelynaegolor.github.io/ColourFun/

`colour-schemes.html` generates a printable A4 "Colour Wheel Schemes" worksheet with worked examples of six schemes (monochrome, complementary, analogous, split complementary, double split complementary, triadic), all built around a base colour you pick from a 12-segment RYB wheel.

- Pick a base colour and a pattern; the sheet re-renders instantly.
- Every example can be given its own colour and pattern under **Customise each example**.
- **Randomise** picks a new base and pattern; **Randomise each example** gives every row its own.
- Your choices are remembered in the browser.
- **Print sheet** (or Ctrl+P / Cmd+P) prints the worksheet alone on one A4 page.

The wheel is fully keyboard accessible: Tab to a segment, arrow keys step around the wheel, Enter or Space selects.

## 3D Shape Shading

`shape-shading.html` teaches how to draw and shade 3D shapes (cube, cylinder, cone, sphere, pyramid, triangular prism).

- **3D playbox**: drag to turn the shape, drag the sun to move the light. Jump to top, front, side, bottom or three-quarter views. Shade as smooth tone, a 5-step value scale or pencil hatching, with optional outlines, dashed hidden edges, cast shadow and perspective.
- **Five views**: the chosen shape from every side, with what to look for in each.
- **Draw it step by step**: animated guides for the cube, cylinder, cone, sphere and pyramid, from first line to cast shadow.
- **Shading with a pencil**: the parts of light and shadow, a value scale with pencil grades, and animated hatching, cross-hatching, contour hatching, stippling, blending and scumbling swatches.

## Perspective Practiser

`perspective.html` teaches one-, two- and three-point perspective.

- **Key words**: horizon line, vanishing point, guide lines, verticals, eye level.
- **Perspective playground**: drag the horizon, the vanishing points and the boxes; resize a box with its handles. Guide lines, dashed hidden edges and shading can be toggled, and three-point can look down or up. The caption says whether the selected box is above, below or at eye level.
- **Draw it step by step**: animated guides for a 1-point box, a 1-point road, a 2-point box and a 3-point tower.
- **Find the vanishing point**: random 1- or 2-point pictures with the guides removed. Draw ruler lines along the edges, tap your guess, then check it for a star score.
- **Practice sheet**: a printable A4 landscape sheet of rectangles (1-point) or upright edges (2-point) to turn into boxes, with an optional worked example. **New layout** makes a different sheet.

## Colour Interaction

`colour-interaction.html` has interactive studies after Josef Albers' *Interaction of Color* (1963). Colour maths uses CIELAB (D65) and CIEDE2000.

- **One colour looks like two**: the same inner colour on two grounds, with a bridge, slide-together and swap reveal.
- **Two colours look like one**: adjust HSL sliders until the squares match on their grounds, then reveal the real difference (ΔE00, ΔL*, ΔC*, Δh).
- **Afterimage**: a timed stare study with a choice of shapes, colours and afterfields.
- **Colour temperature**, **value vs hue** (greyscale check of equal-value pairs) and **vibrating edges**.
- **Studio exercises**, with a printable A4 exercise sheet in three layouts.

## Value & Notan

`value-notan.html` analyses the light–dark structure of a reference photo. Photos stay in the browser; with none loaded it uses a procedurally drawn still life.

- **Views**: original, greyscale (CIELAB L*), 2- and 3-value notan, 5 values or any 2–9 values.
- **Thresholds**: set with sliders or by dragging handles on a live histogram, with auto-fit and even-step presets.
- **Squint** blur, a hue-keeping posterised colour mode, side-by-side or single view, and click/hover value readings on a 1–10 scale.
- **Output**: download the study as PNG or print it on an A4 landscape sheet with its value key.
- **Notan thumbnail sheet**: printable A4 with 6 or 9 frames in a chosen aspect ratio.

## Gesture Timer

`gesture-timer.html` runs timed drawing sessions.

- **What to draw**: your own images (files, folder or drag-and-drop, kept in the browser), generated mannequin poses, or an editable list of life prompts.
- **Sessions**: Warm-up, Class (10 × 30 s, 5 × 1 min, 3 × 5 min, 1 × 10 min), Quick sketch, Long, or custom rows.
- **Options**: shuffle, greyscale, mirror, a thirds grid, breaks and beeps.
- **Session view**: full-window, with a countdown ring and keyboard shortcuts (Space, ←/→, +, F, G, M, T, Esc). Timing is drift-free and keeps going in background tabs.
- **Summary and log**: an end-of-session summary, and a practice log with totals kept in the browser.

## Atmospheric Perspective

`atmospheric-perspective.html` covers aerial perspective.

- **Principles**: value, contrast, chroma, hue and edges, with the scattering physics (Koschmieder's model) and a short history.
- **Landscape builder**: generates layered landscapes from a seed. Controls for planes, haze, atmosphere presets (clear day, golden hour, fog, night) and local colour, plus a before/after split, edge softening, detail reduction and greyscale.
- **Colour analysis**: a table and charts of L*, C* and hue per plane, converging on the atmosphere colour.
- **Plan it step by step**: an animated guide to value bands, then colour temperature.
- **Exercise sheet**: a printable A4 value-band study from the current scene, with targets on a 1–9 scale (1 = paper white).

## Paint Mixing

`paint-mixing.html` is a subtractive paint-mixing simulator. It uses a per-channel Kubelka–Munk approximation, so results are directional, not colour-accurate.

- **Paint is not light**: additive vs subtractive mixing, and the key vocabulary.
- **Mixer**: parts of 18 common artists' pigments. Readouts for hex, hue name, value (L*/10), chroma and a greyscale check.
- **Match a target**: scored with CIEDE2000, with hints and a recipe suggester.
- **Tints, tones, shades and neutralising**: ladders for the current mix, plus warm/cool split-primary pairs.
- **Printable A4 sheets**: a mixing grid or a tint and shade ladder sheet for 3–6 chosen paints.

## Site structure

`index.html` is the home page. Every page links `site.css` (theme tokens, base styles, header) and `site.js` (the Menu button on narrow screens), and repeats the same `<header class="site-head">` markup. To add a page, copy that header and add a link to the nav on every page.

The lesson pages also share `lesson.css` (layout, buttons, the step-by-step guide and its drawing marks) and `stepper.js` (the animated step-by-step player; see the comment at the top for the guide data format).

## Running locally

Open `index.html` in any modern browser. Nothing to install.
