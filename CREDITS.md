# Credits

## Authorship and creative direction

**Jesal Mehta** (@cabofcuriosity): concept, the original hand-coded p5.js sketches (*Dance of Venus* v1.0–v1.451 in 2021, *Dance of Planets* v1.0 and v1.5 DOM in 2022–2024), the choice of data sources, and the creative and design direction of every later version: purpose, audience, look, which features to build and which alternatives to reject.

## AI assistance

- **v2.0, v2.1, v2.2 (May 2026)** were generated with **Claude.ai** from the author's existing sketch. They are preserved unchanged in this repository's history.
- **The v2.2 speed fix and v3.0 (September 2026)** were implemented by an AI coding assistant working to the author's brief, decisions and reviews. [HISTORY.md](HISTORY.md) records which decisions came from the author and which were proposed or chosen during the build.

The orbital visualisation, the generalised planet model, the midpoint trail and vector export all predate the AI-assisted work (see [HISTORY.md](HISTORY.md)). The Git author field on a commit records who committed it, not a line-by-line account of who wrote what.

## Established mathematics and astronomy

Nothing here is claimed as a discovery. The tool draws on well-known material:

- the Earth–Venus 13 : 8 near-resonance and the five-fold "Dance of Venus" figure;
- circular uniform motion with sine and cosine;
- the synodic period, 1 / |1/P₁ − 1/P₂|;
- continued fractions and their convergents as best rational approximations.

## Data sources

Orbital periods and mean distances are a rounded table carried over from the 2022 sketch, which cites:

- HyperPhysics (Georgia State University): <http://hyperphysics.phy-astr.gsu.edu/hbase/kepler.html>
- NASA/JPL Education (PDF): <https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf>

The values are rounded and the orbits idealised; see the README's section on the astronomy.

## Software and fonts

| Component | Use | Licence | How it is included |
|---|---|---|---|
| [p5.js](https://p5js.org/) 1.9.0 | Canvas, draw loop and off-screen layers for the current page | LGPL-2.1 | Loaded from cdnjs at runtime; not bundled in this repository |
| p5.js 1.3.1, p5.dom.js 0.3.2, p5.sound.js 0.3.2 | Libraries the archived 2021–2024 sketches were written against | LGPL-2.1 (p5.js and its add-ons) | Loaded from cdnjs by each sketch's `run.html`; not bundled (see [archive/README.md](archive/README.md)) |
| [Space Mono](https://fonts.google.com/specimen/Space+Mono) | Interface font | SIL Open Font License 1.1 (The Space Mono Project Authors) | Loaded from Google Fonts; not bundled |
| [Rajdhani](https://fonts.google.com/specimen/Rajdhani) | Interface font | SIL Open Font License 1.1 (Indian Type Foundry) | Loaded from Google Fonts; not bundled |

Planet symbols (☿ ♀ ⊕ ♂ ♃ ♄ ♅ ♆ ♇ ☉) are standard Unicode characters drawn with the viewer's system fonts.

The GPL licence of this repository's own code doesn't change the licences of these components.

## Licences and notices in the historical sketches

Each archived sketch's original `index.html` carries the author's original notice: *"Code is copyright by Jesal Mehta, 15/01/2021. The output of this program is free to use for non-commercial purposes (for your plotters, laser engravers etc). Contact me if you need a different license."* That notice is kept as written. It applies to those historical files and their output, and is separate from whatever licence is chosen for the current code.

## Screenshots, documentation and drawings

- `docs/images/v3.0-desktop.png` is a screenshot of the author's tool, made during development in September 2026. Screenshots and documentation in this repository are © Jesal Mehta, all rights reserved.
- Drawings made with the tool belong to the person who made them, for non-commercial use only, with credit to Jesal Mehta or a tag of @cabofcuriosity when shared. See the README's licence section.
