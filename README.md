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

## Site structure

`index.html` is the home page. Every page links `site.css` (theme tokens, base styles, header) and `site.js` (the Menu button on narrow screens), and repeats the same `<header class="site-head">` markup. To add a page, copy that header and add a link to the nav on every page.

The lesson pages also share `lesson.css` (layout, buttons, the step-by-step guide and its drawing marks) and `stepper.js` (the animated step-by-step player; see the comment at the top for the guide data format).

## Running locally

Open `index.html` in any modern browser. Nothing to install.
