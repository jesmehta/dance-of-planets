# Dance of Planets: development history

This tool has two distinct phases. Jesal Mehta wrote the first in p5.js by hand, as a series of sketches from late 2021 to early 2022, with a later interface experiment. The second, in 2026, was a redevelopment with AI assistance: three page versions generated with Claude.ai in May, then a rework in September in which an AI coding assistant wrote the code under the author's direction. This document follows the work in order and keeps the two phases distinct, along with the limits of the evidence.

Selected original sketches are in [`archive/`](archive/README.md) and can be run.

## A note on dates

- **The original sketches were not kept in Git.** Their dates below come from the files' last-modified times. These are evidence, not proof: a later edit can change the time. One example is Dance of Planets v1.5 DOM, whose `sketch.js` is dated January 2024 while its other files are dated January 2022. The HTML pages of the sketches all repeat a copyright date of 15/01/2021, which doesn't match the dates of their sketch files; it isn't a reliable date for any single version.
- **The May 2026 versions (v2.0–v2.2)** were committed to Git months after they were made, in September 2026. Each commit's *author date* was set to the source file's time and its *committer date* is the day of the import. Their order was checked by content as well as by timestamp, because the v2.2 archive's internal times are earlier than v2.1's even though v2.2 is clearly the refinement.
- **The sketches in `archive/`** were added to this repository as ordinary files in 2026, without backdated commits.

## 1. Dance of Venus (December 2021)

The project began as a visualisation of the **Dance of Venus**: over about eight years, Earth goes around the Sun 8 times and Venus 13 times, so a line drawn between them at regular intervals builds up a five-fold rose. The relationship is well known in astronomy; these sketches are the author's own drawings of it.

- **Dance of Venus v1.0** (sketch dated 17 Dec 2021). Earth and Venus on circles of radius 1 and 0.72, moving at relative rates 1 and 13/8, with a translucent line drawn between them every frame. This already has the core of the current tool: two circular motions, the correct relative speed (the inner planet faster), and a connecting line. `s` saves a JPG.
- **v1.2** (17 Dec 2021). The frame count is replaced by an explicit step in degrees (`deg`, `step`), and the drawing stops after eight Earth orbits (`360*8`). This is a fixed, hand-chosen cycle for this one pair.
- **v1.4 midpoint** (sketch dated 19 Dec 2021). Instead of the planet-to-planet line, it joins successive **midpoints** of the two planets. The current *Trail* style is this idea. A commented-out `background(0,1)` points to a fading-trail experiment; it isn't a finished fade mode.
- **v1.45 curves** (19 Dec 2021). The midpoints become a smooth `curveVertex` spline. The current page's source still says it is "Based on Dance of Venus v1.45".
- **v1.41 SVG** and **v1.451 curves svg** (19 Dec 2021). The same drawings rendered to SVG through the `p5.js-svg` library: vector export was already a goal. These two are not in the archive; see [archive/README.md](archive/README.md). The file times put v1.41 after v1.451 despite the numbering, so the exact order of the variants made that day isn't certain.

A further branch, *Dance of Venus v1.2 v.IntroCC* (February 2022), draws several samples per frame and saves frames. Its name suggests a teaching or presentation use, but the files don't establish one.

## 2. Dance of Planets: any two planets (January 2022)

- **Dance of Planets v1.0** (sketch dated 5 Jan 2022), "Based on Dance of Venus v1.45". This generalises the sketch to **any pair of the nine bodies**. It adds a `Planet` class and a table of rounded orbital periods and distances for Mercury through Pluto, citing the HyperPhysics and JPL sources the current page still uses. The pair is chosen in code (`p1`, `p2`), the drawing is midpoint segments, a click restarts, and the saved JPG is named after the pair.

  This version also introduced the **speed reversal** that later became Classic mode. It assigns each planet's *period* directly as its angular rate (`avEarth = solar[p1].ov`), so an outer planet, with its longer period, moves *faster*. The Venus sketches didn't have this problem: their fixed 13/8 multiplier is the correct relationship. The reversal entered when the sketch was generalised from one hand-set ratio to a data table.

- **Dance of Planets v1.5 DOM** (sketch dated 15 Jan 2024; its folder and other files are dated January 2022). An attempt at an on-page interface built from p5's DOM helpers: radio buttons for *InterPlanet Line* / *Inter-Planet Midpoint*, Scale and Step sliders, two planet drop-downs and twinkling stars. The controls are drawn but not connected. The drop-downs never change `p1`/`p2`, and the radio test compares `radPlot.value` (a function) with a number instead of calling `radPlot.value()`, so neither choice draws anything. (Checked by running it in 2026: see the archive notes.) The interface ideas date from before the 2026 work; the version is evidence of intent, not a working selector.

## 3. Claude.ai page versions (May 2026)

Coming back to the sketch, the author used Claude.ai to wrap it in a full HTML page with a control panel. The three versions received were kept exactly as generated:

- **v2.0** (2 May 2026): a single-file page with a left control panel, a right information panel and working selection of any two planets, including lines or midpoint trail and loop/fade modes.
- **v2.1** (2 May 2026): zoom that applies live, scroll-wheel zoom, and the midpoint trail rebased when zooming so it doesn't jump.
- **v2.2** (3 May 2026): split into separate HTML, CSS and JavaScript files; the fade amount read as a fraction instead of a whole number.

These versions developed an existing sketch family. The circular geometry, the generalised planet table, the midpoint trail and the idea of exporting the drawings were all already in the hand-coded sketches. The v2 pages also kept the generalised sketch's period-as-speed rule. The record doesn't include the full prompts or exactly what was handed to Claude.ai.

## 4. The September 2026 rework (v2.2 speed fix and v3.0)

In September 2026 the author came back to v2.2 and asked for a rethink, working with an AI coding assistant that wrote the code. The starting point, in the author's words (original spelling):

> I also think the controls arent very self explanatory - I have come back to this proj after a while and even I am a little plussed, and I know what maps to what under the hood. A fresh viewer would be lost.

And on its purpose:

> The page was initially meant as a tool to explore those realtionships, but also to appreciate the beauty of the resulting outcomes - the trails, the shapes, the harmonic spirographic art.

### What was wrong with v2.2

The review agreed on these problems. Nothing on the page said what was being drawn. Labels were implementation terms ("Step size (°/frame)", "Fade alpha"). Zoom applied live but everything else waited for a Reset button. Some controls were visible when they had no effect, and the right panel showed debug values while the interesting fact (13 : 8) was buried. The canvas was a fixed 800 × 800. In the author's framing: "Density may be the symptom, the problem/my issue is exactly what we discussed above - the controls and info are not immediatly obvious, useful, etc."

### The speed fix, isolated, with Classic kept

While reading v2.2, the assistant identified the period-as-speed reversal. It was fixed first as a **separate, small commit on the untouched v2.2 code** (angle = time ÷ period), so the change could be read on its own as one diff. A "Classic v2 speeds" checkbox restored the old behaviour exactly. Fixing it changed the shapes of drawings the author had already shared. The author asked to keep the toggle ("keep toggle for now, will help me understand the difference") and to hold a fuller discussion of the original code and the bug later. That discussion is still open, so Classic remains in the tool and the documentation doesn't go further into its mathematics.

### v3.0: decisions and who made them

| Decision | Origin |
|---|---|
| **Recompute at the current progress instead of Reset.** Any change redraws the picture up to the same point, sorted into three tiers. | Proposed by the assistant in answer to the author's concern that continual restarting would be annoying, while still wanting the page to respond to every change. The author: "love it - recomputing for the new settings but at the current progress point is a great way to reconcile this." |
| **Split "step size" into Speed and Detail.** | Proposed by the assistant. Speed was first defined as lines per frame. During the build it was changed to orbits of the faster planet per second, because the first definition still made Detail change the drawing time, the same coupling the split was meant to remove. |
| **Plain-language controls; raw numbers moved to a muted section.** | The author's requirement. |
| **Info panel focused on the rhythm:** symmetry, synodic period, how closely the cycle closes, live orbit counts, distances. | Proposed by the assistant, agreed by the author. |
| **Cycles from continued-fraction convergents** instead of v2.2's search with a fixed absolute tolerance (which behaved very differently for a ratio near 1.6 than one near 1000). | Assistant's implementation choice. |
| **Re-rendered high-resolution PNG and direct SVG export, with a line budget.** | The author asked for SVG alongside PNG and asked whether the resolution was adequate; the assistant proposed off-screen re-rendering and a cap. The author: "agreed on the need, delivery and capping". |
| **Full-window canvas with translucent panels.** | The author: "an overlay over a full bleed canvas feels very HUD/spaceship window so works. Don't make it a cliched CRT Matrix Green etc though." Three columns kept; v2.2's palette and fonts kept ("keep current look for now"). |
| **Presets.** | The author: "Presets absolutely". |
| **Colour: single colour (default) or a gradient over time.** | The author's choice. Per-pair colours were offered and rejected as not useful. |
| **Planet and orbit indicators that never leave a trail.** | The author's request: visual representations of the planets instead of plain dots, which shouldn't themselves trail. |
| **Shareable links with encoded settings.** | The author's request. |
| **Keep p5.** | Agreed. The drawing stays recognisably the same p5 sketch, with p5's own off-screen layers. |

### Choices made during the build, reviewed afterwards

Some defaults were decided while building, then listed for the author to review:

- **Default density.** With corrected speeds, v2's density (720 lines per orbit, fully opaque) saturated into a solid white disc. Four density/opacity combinations were compared side by side, and **120 lines per orbit at 60 % opacity** was chosen as the one where the figure reads and the individual lines still show.
- **Keep drawing never resets the clock.** v2 restarted at each cycle's end; v3 lets time run on, so near-misses show as a slow rotation.
- **Corrected orbits run counter-clockwise**; Classic keeps v2's clockwise screen direction.
- **The planet table was left unchanged**, because refining it would alter every pattern; it is left for discussion.
- **The drawing centres in the free area** between the panels. Exports are always square.
- **Line weight scales with export size.**
- **A live caption** says what is being drawn; the longer explainer opens only on request.

After the build the author reviewed the result: "look feel is fine", and the build-time decisions were "all good". One observation about the Trail style was set aside for the author's own review of the original code and the speed bug, and isn't part of this public account.

### Small corrections during the build

- A CSS rule overrode the HTML `hidden` attribute, so the PNG menu wouldn't close. It was fixed with a global `[hidden]` rule.
- Switching to *Keep drawing* after a finished run left the page paused. It now carries on.

## 5. Continuity between the sketches and the current tool

| In the original sketches | In the current tool | What is new |
|---|---|---|
| Two sine/cosine positions and a connecting line (Venus v1.0) | `model.js` positions; Lines style | A shared model with automatic cycles and real time units |
| Midpoints joined step by step (Venus v1.4, v1.45) | Trail style | Rebuilt from step indices, so scrubbing, redraws and exports can reconstruct it; the v1.45 spline isn't used |
| Nine named bodies with periods and distances; a chosen pair (Planets v1.0) | The same table in `model.js`; planet selectors | Working selectors, presets and explanations |
| A hand-set eight-orbit cutoff and tunable step | Continued-fraction cycle choices, closure readout, line budget, separate Speed and Detail | Automatic, pair-dependent cycle selection |
| Translucent monochrome lines; scale and step sliders (v1.5 DOM, not wired); click to restart | Full-window interface, zoom, transport bar, gradients, changes applied at the current progress | Interaction design, responsive layout, URL state, overlays |
| JPG saving; SVG through `p5.js-svg` (v1.41, v1.451) | Re-rendered PNG up to 4096 px; SVG written directly from the segment list | Higher resolutions and a library-free SVG writer |
| Correct 13/8 in the Venus sketches; period-as-speed in the generalised sketch | Correct rates by default; the reversal kept as Classic | The generalised correction, with the old behaviour reproducible |

## 6. Version names

The hand-coded sketches are numbered v1.0–v1.5 within two families (*Dance of Venus*, *Dance of Planets*). The page versions continue from v2.0. The current release is **v3.0**. Version numbers within a family indicate a likely sequence; they don't establish exact calendar order across branches.
