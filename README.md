# website-cv-tools

**Personal academic website for Dr. Asad Mirza** — Research Assistant Professor,  
Department of Biomedical Engineering, Florida International University.

Deployed via **GitHub Pages** · Static hosting · No backend required

🌐 **Live site:** [dthornz.github.io/website-cv-tools](https://dthornz.github.io/website-cv-tools)

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page with links to all tools |
| **Curriculum Vitae** | `AsadMirza_CV.html` | Full interactive academic CV |
| **Project Showcase** | `projects.html` | Research portfolio with modal detail cards |
| **HH Neuron Model** | `hodgkin-huxley.html` | Interactive Hodgkin–Huxley simulator |
| **FEA / CFD Calculator** | `fea-cfd-calc.html` | Engineering calculator hub (25+ tools) |

All pages share a consistent site-wide navigation bar and an accessibility panel (⚙) for dark/light mode, font size, and font style — preferences saved across pages via `localStorage`.

---

## Curriculum Vitae (`AsadMirza_CV.html`)

Interactive single-page academic CV built with vanilla HTML/CSS/JS.

**Features:**
- Collapsible sections at three levels: Section → Group → Entry
- Expandable publication cards with abstract, DOI, image, and video slots
- Sidebar navigation with scroll-based active highlighting
- **Expand All / Collapse All** toggle
- **Download Word CV** button — exports a pre-formatted `.docx` (embedded base64, no server)
- **Settings panel** — light/dark mode, three font families, three font sizes
- Print-friendly `@media print` styles (Times New Roman, APA/academic format)
- Fully responsive — mobile collapses sidebar

**Sections:**
Education · Work Experience · Publications (Patent, Book Chapter, 9 Articles) ·  
Conference Proceedings · Teaching · Supervision & Mentorship · Funding & Awards ·  
Technical Skills · Service & Outreach

---

## Project Showcase (`projects.html`)

Research portfolio with filterable cards that expand into full-detail modals.

- Filter by: CFD/FSI · FEA · Biomedical · Image/ML · Software
- Each card expands to show: description, metrics, equations, image gallery, links
- 8 projects pre-populated including CAVD hemodynamics, NO transport, calcium signaling, and more
- Media slots: YouTube embed, local image/video, or placeholder

---

## Hodgkin–Huxley Neuron Model (`hodgkin-huxley.html`)

Fully interactive browser simulation of the Nobel Prize-winning 1952 model.

**Mathematical content:**
- Complete derivation of all 4 ODEs with equivalent circuit diagram (SVG)
- Full rate functions α/β for m, h, n gates with empirical constants
- Parameter table with physiological interpretations
- 7 cited references (Hodgkin & Huxley 1952, Goldman UC Davis, Cambridge DAMTP, FSU Bertram, etc.)

**Simulator features:**
- 4th-order Runge–Kutta integration (dt = 0.01 ms)
- **Speed control** — 8 levels from ⅛× (watch the AP rise frame by frame) to 14× (rapid survey)
- **Auto-pause** — halts when membrane returns to rest post-stimulus, locks view on the AP
- 6 real-time Canvas plots: V(t), gating variables m/h/n, ionic currents INa/IK/IL, steady-state curves x∞(V), time constants τx(V), V–n phase portrait
- Stimulus modes: step / pulse train / ramp / sinusoidal
- All parameters adjustable: ḡNa, ḡK, ḡL, ENa, EK, EL, Cm, temperature (Q10 scaling)
- Channel blockers: Na⁺ (simulate TTX), K⁺ (simulate TEA)
- AP spike counter, peak voltage, firing rate readout
- **Phase Demo** preset — auto-runs and populates the V–n phase portrait with a limit-cycle orbit

---

## FEA / CFD Calculator (`fea-cfd-calc.html`)

25+ client-side engineering calculators. All run in the browser — no data sent anywhere.

### Fluid Mechanics
Y+ estimation · Reynolds / Mach / Strouhal / Dean / Péclet numbers · Turbulence inlet BCs (k, ε, ω, νₜ) · Turbulence intensity & length scale · Boundary layer (Blasius + Schlichting) · Pipe entry length · Hagen-Poiseuille (Q↔ΔP) · Darcy-Weisbach (Colebrook-White) · Hydraulic diameter

### Biomedical CFD
Power Law & Carreau viscosity models (blood, Cho & Kensey parameters) · Newtonian validity check (γ̇ threshold) · Womersley number · Wall shear stress from Q or ΔP · OSI / TAWSS from pasted time-series

### Structural FEA
Elastic constants conversion (E, ν, G, K, λ) · Von Mises + Tresca + safety factor · Pressure vessel (thin-wall + Lamé thick-wall) · Beam deflection (cantilever, simply supported, UDL) · Second moment of area

### Unit Converters (live, type-to-convert)
Pressure · Dynamic viscosity · Kinematic viscosity · Velocity · Length · Force · Density · Temperature (°C / °F / K / °R)

---

## Local Development / Editor

`cv_editor.jsx` is a React-based GUI editor for the CV. Run locally with any JSX bundler (Vite, CRA).

**Features:** sidebar tree navigation · rich text editing · undo/redo (60-step, Ctrl+Z/Y) · media slots (images, YouTube, video) · Export HTML / Export JSON / Import JSON · new entries added at top (reverse chronological)

The editor does **not** need to be deployed — run locally, export `AsadMirza_CV.html`, commit to this repo.

---

## Repository Structure

```
website-cv-tools/
├── index.html              ← Landing page (4 cards)
├── AsadMirza_CV.html       ← Interactive academic CV
├── projects.html           ← Research project showcase
├── hodgkin-huxley.html     ← HH neuron model + interactive simulator
├── fea-cfd-calc.html       ← FEA/CFD engineering calculators
├── AsadMirza_CV.docx       ← Word export (embedded in CV page)
├── cv_editor.jsx           ← React GUI editor (run locally)
├── README.md               ← This file
└── LICENSE                 ← Apache 2.0
```

---

## Deployment

Site is deployed on **GitHub Pages** from the `main` branch root.

To update content:
1. Edit `AsadMirza_CV.html` directly, or use `cv_editor.jsx` locally to export it
2. Commit changes to `main`
3. GitHub Pages rebuilds in ~60 seconds

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5, SVG |
| Styling | CSS3 (custom properties, grid, flexbox, `@media print`) |
| Interactivity | Vanilla JavaScript — Canvas API, RK4 ODE solver |
| Fonts | Google Fonts — DM Serif Display, DM Mono, DM Sans |
| Editor | React (JSX hooks) |
| Hosting | GitHub Pages |

No build step required for deployed pages. Open any `.html` file in a browser.

---

## Contact

**Dr. Asad Mirza, PhD**  
Research Assistant Professor · Biomedical Engineering  
Florida International University · Miami, FL 33174

📧 [amirza@fiu.edu](mailto:amirza@fiu.edu)  
🔗 [ORCID: 0000-0003-4515-2203](https://orcid.org/0000-0003-4515-2203)  
📑 [Google Scholar](https://scholar.google.com/citations?user=a8fYPM0AAAAJ)  
🔬 [ResearchGate](https://www.researchgate.net/profile/Asad_Mirza2)  
⌥ [GitHub](https://github.com/DThornz)

---

*Last updated: April 2026*
