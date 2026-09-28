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

## Ellipses in Perspective

`ellipses.html` covers how circles become ellipses.

- **Key terms**: ellipse, major axis, minor axis, ellipse degree (minor ÷ major = sin(degree)), eye level, central axis.
- **Eye level**: a true perspective camera draws a stack of circles or a cylinder. Drag eye level to see each ellipse's degree change. Axes, degree labels and the perspective centre can be shown.
- **Tilted axis**: rotate a cylinder and see the minor axis stay on the central axis, with near and far degrees.
- **Common mistakes**: right-vs-wrong comparisons of four classic errors.
- **Step-by-step guides**: circle in a square (8-point method), cylinder, cup or bowl, and wheel.
- **Guess the degree** game, and a printable A4 practice sheet of degree references and correctly proportioned boxes.

## Mark-making & Media

`mark-making.html` is a studio reference for drawing media.

- **Graphite grades**: 9H–9B, each with a drawn pressure, hatching and smudge swatch, plus hardness, smudging, value range and uses.
- **Media**: 12 media cards with procedurally drawn textures (charcoal, conté, pastels, graphite stick, fineliner, dip pen, brush pen, ink wash, coloured pencil). Each covers characteristics, paper, erasing/blending/fixing and safety.
- **Paper guide**: weight, tooth and surface.
- **Marks and techniques**: 13 animated technique swatches.
- **Tools**: erasers, blending tools, sharpening and fixative.
- **Test sheet**: a printable A4 media test sheet with value strips.

Grade values and textures are indicative drawings, not measurements of real products.

## Grid & Proportion

`grid-proportion.html` covers the grid method and comparative measuring.

- **Methods and step-by-step guides**: grid transfer, and measuring a figure.
- **Grid tool**: grid a reference image (or built-in sample) to A5–A1, square or custom paper. Crop to fill or fit, and set squares across or square size in cm. Options for diagonals, cell labels, greyscale, mirror, and line colour and weight.
- **Printing**: the gridded reference plus a blank grid at true size when the paper fits A4/A3 (otherwise scaled, with the real cell size stated).
- **Measuring tools**: angle, proportion (in units such as heads), and plumb and level lines.
- **Enlargement calculator**: scale factor, photocopier %, point mapping and grid spacing.

## Composition

`composition.html` lays composition guides over your own images. It treats them as analysis tools, not rules, with honest caveats.

- **Overlays**: rule of thirds, phi grid, golden spiral (4 orientations, flippable), main diagonals, reciprocal diagonals, harmonic armature, centre lines and a custom grid. Each has its own colour and opacity.
- **Crop frame**: format presets (free, 1:1, 5:4, 3:2, 4:3, 16:9, √2, 1.618). Drag, resize or use the keyboard; export the crop as PNG with or without overlays.
- **Focal point checker**: measures distances to the thirds and phi intersections.
- **Explanations**: a card for each overlay.
- **Thumbnail sheet**: a printable A4 sheet of frames in any format, with thirds or phi tick marks.

## Design Principles

`design-principles.html` supports two assignments, each of six quick abstract compositions on an A4 sheet:

- **Sheet 1**: symmetrical and asymmetrical balance, contrast of size and of colour or shape, and hierarchy by size and by colour or placement.
- **Sheet 2**: emphasis using colour and using placement, movement along a line or path and through a sequence of shapes, and unity through repeated colour and repeated shape.

The page has:

- **The brief**: the assignment text and guidelines, plus a fast working method.
- **Box timer**: 3, 5 or 8 minutes per box, stepping through the six boxes.
- **Example ideas**: an abstract example for each box that regenerates on demand. Optional notes show how each one works (axis, see-saw fulcrum, odd one out, 1-2-3 levels), with a check question per box.
- **Printable A4 sheets**: six labelled rectangles for either sheet, with optional prompts and centre marks. A "with examples" version prints the current ideas as a reference.

## Site structure

`index.html` is the home page. Every page links `site.css` (theme tokens, base styles, header) and `site.js` (the Menu button on narrow screens), and repeats the same `<header class="site-head">` markup. To add a page, copy that header and add a link to the nav on every page.

The lesson pages also share `lesson.css` (layout, buttons, the step-by-step guide and its drawing marks) and `stepper.js` (the animated step-by-step player; see the comment at the top for the guide data format).

## Running locally

Open `index.html` in any modern browser. Nothing to install.
