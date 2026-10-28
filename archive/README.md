# Archive: original Dance of Venus and Dance of Planets sketches

These are hand-coded p5.js sketches by Jesal Mehta, written in 2021–2022 (one file was last changed in 2024), before any AI-assisted work on the project. They were developed outside Git, as folders on the author's computer, and were copied into this repository in 2026 as ordinary files. Their commit dates are the import date; they haven't been backdated. [HISTORY.md](../HISTORY.md) explains how they lead to the current tool.

Each folder holds the original files, unchanged:

- `sketch.js`: the sketch;
- `timeStamps.js`: the original save-to-JPG helper (`s` key);
- `index.html`: the original page. It loads `libraries/p5.js`, `libraries/p5.dom.js` and `libraries/p5.sound.js`, a local copy of p5.js that is **not** included here.

Comments, parameters, bugs and unfinished experiments have been left as they were.

| Version | Approximate date | Contribution | Functionality / limitations | Dependencies |
|---|---|---|---|---|
| [Dance of Venus v1.0](dance-of-venus-v1.0/) | sketch file dated 17 Dec 2021 | The starting point: Earth and Venus on circles (radii 1 and 0.72) at relative rates 1 and 13/8, with a translucent line between them each frame. | Works. Runs indefinitely on a 600 × 600 canvas; there's no cycle end. `s` saves a JPG. | p5.js 1.3.1 (+ p5.dom 0.3.2, p5.sound 0.3.2 loaded but unused) |
| [Dance of Venus v1.4 midpoint](dance-of-venus-v1.4-midpoint/) | sketch file dated 19 Dec 2021 (folder 17 Dec) | Joins successive midpoints of the two planets instead of the planets themselves: the origin of the current *Trail* style. Explicit `deg`/`step`; stops after eight Earth orbits (about 10 s at 60 fps). | Works. A click clears and restarts while drawing; once the cycle has finished the sketch has stopped looping, so a click only clears the canvas. A commented-out `background(0,1)` shows a fade experiment that isn't active. | as above |
| [Dance of Venus v1.45 curves](dance-of-venus-v1.45-curves/) | 19 Dec 2021 | The midpoints drawn as one smooth `curveVertex` spline. The version the generalised sketch, and the current page, name as their base. | Works, but the canvas stays black until the cycle ends (about 10 s), when the whole curve appears at once. After that, a click only clears the canvas. | as above |
| [Dance of Planets v1.0](dance-of-planets-v1.0/) | 5 Jan 2022 | Generalises to any two of nine bodies: a `Planet` class, rounded periods and distances for Mercury–Pluto, HyperPhysics/JPL sources. The pair is set in code (`p1 = 6, p2 = 9`: Saturn and Pluto). | Works. Midpoint segments on a 900 × 900 canvas; draws indefinitely. Uses each planet's **period as its angular rate**, so outer planets move faster: the reversal later kept as *Classic v2 speeds*. | as above |
| [Dance of Planets v1.5 DOM](dance-of-planets-v1.5-dom/) | `sketch.js` dated 15 Jan 2024; other files 5 Jan 2022 | First on-page interface: Line/Midpoint radio buttons, Scale and Step sliders, two planet drop-downs, twinkling stars. | **Interface not connected.** The drop-downs don't change the pair (fixed at Earth and Mars in code); the radio test compares `radPlot.value` (a function) with a number, so neither choice draws anything. The sliders are read every frame, but with nothing plotted their effect can't be seen. Kept as evidence of the interface ideas, not as a working tool. | as above |

## Running a sketch

Each folder has a **`run.html`**, added in 2026 and not part of the original work. It is the original `index.html` with only the three library paths changed to the same files on cdnjs:

- `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.js`
- `https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/addons/p5.dom.js`
- `https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.8/addons/p5.sound.js`

These were checked in October 2026 to be byte-identical to the library files the original folders contained. `run.html` pins them with Subresource Integrity hashes. (The original folders paired p5.js 1.3.1 with the older p5.dom and p5.sound 0.3.2 add-ons; that combination is reproduced as it was.)

Open `run.html` in a browser with a network connection, or serve this folder with a static server (for example `python -m http.server`) and open `<folder>/run.html`. To use the untouched `index.html` instead, put p5.js 1.3.1 and the two add-ons into a `libraries/` folder next to it.

In a Chromium smoke test on 28 October 2026, every `run.html` loaded its libraries, drew without script errors, and saved a JPG on `s`.

## Not included

- **Dance of Venus v1.2** and **v1.2 v.IntroCC**: small steps between v1.0 and v1.4, summarised in [HISTORY.md](../HISTORY.md).
- **Dance of Venus v1.41 SVG** and **v1.451 curves svg**: they depend on `p5.js-svg` 1.1.1 from unpkg, whose licence and bundled dependencies haven't been reviewed for redistribution. They are described in [HISTORY.md](../HISTORY.md) instead.
- **The `libraries/` folders**: copies of p5.js and its add-ons (LGPL-2.1), available from cdnjs as above.

## Notices

Each original `index.html` ends with the author's notice: *"Code is copyright by Jesal Mehta, 15/01/2021. The output of this program is free to use for non-commercial purposes (for your plotters, laser engravers etc). Contact me if you need a different license."* These historical files remain under that notice. The GPL-3.0 licence of the current tool doesn't cover them. The date in the notice is repeated across versions made at different times and doesn't date any single sketch.
