# website-cv-tools

**Personal academic website for Dr. Asad Mirza** — Research Assistant Professor,  
Department of Biomedical Engineering, Florida International University.

Deployed via **GitHub Pages** · Static hosting · No backend required

**Live site:** [dthornz.github.io/website-cv-tools](https://dthornz.github.io/website-cv-tools)

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page with links to all tools |
| **Curriculum Vitae** | `AsadMirza_CV.html` | Full interactive academic CV |
| **Project Showcase** | `projects.html` | Research portfolio with modal detail cards |
| **HH Neuron Model** | `hodgkin-huxley.html` | Interactive Hodgkin–Huxley simulator |
| **Maxwell–Boltzmann Simulator** | `maxwell-boltzmann.html` | Interactive 2D ideal-gas simulation with speed distribution |
| **LBM CFD Simulator** | `LBM-cfd.html` | Interactive 2D incompressible flow solver (Lattice-Boltzmann Method) |
| **FEA / CFD Calculator** | `fea-cfd-calc.html` | Engineering calculator hub (25+ tools) |
| **Reference Validator** | [academic-ref-validator](https://dthornz.github.io/academic-ref-validator/) | Validate academic reference lists against CrossRef, EPMC, Semantic Scholar, arXiv, and more |

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
Conference Proceedings (8 Oral · 25+ Posters) · Teaching · Supervision & Mentorship ·  
Funding & Awards · Technical Skills · Service & Outreach

**Supervision & Mentorship (as of Spring 2026):**
- 4 PhD Co-Mentees (Tsoukias Lab: Khakpour, Saadat, Saha; Alevriadou co-I: Muñoz)
- 3 Undergraduate Research Interns
- 19+ Senior Design Teams (2017–2026), including:
  - **Spring 2026 Faculty Mentor** — Team F3 (IDD 2.0: Wearable Capsular Contracture Device)
  - **Spring 2026 Consulting Advisor** — Teams F5 (FMT System), F7 (ECMO Phantom), F8 (RESTORE)
  - **Fall 2025 Faculty Mentor** — Team F3 (Fully Mechanical Prosthetic Ankle)

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
- Full rate functions α/β for m, h, n gates with empirical constants on absolute voltage scale (Vrest = −65 mV)
- Parameter table with physiological interpretations
- 7 cited references (Hodgkin & Huxley 1952, Goldman UC Davis, Cambridge DAMTP, FSU Bertram, etc.)
- Scientific accuracy: species (*Loligo forbesi*), axon diameter (0.5–0.8 mm), experimental dates (1947–1952)

**Simulator features:**
- 4th-order Runge–Kutta integration (dt = 0.01 ms) on absolute voltage scale (Vrest = −65 mV, peak AP ~+40 mV)
- **Speed control** — 8 levels from ⅛× to 14×
- **Auto-pause** — halts when membrane returns to rest post-stimulus
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

## LBM CFD Simulator (`LBM-cfd.html`)

Browser-based GPU lattice Boltzmann (LBM) solver for 2D incompressible blood flow at the vessel scale. Built as an educational tool for hemodynamics, fluid mechanics, and computational methods.

**Physics & Numerics:**
- D2Q9 lattice Boltzmann with BGK single-relaxation-time collision operator
- Chapman–Enskog expansion recovering incompressible Navier–Stokes to second order
- Half-way bounce-back no-slip boundary conditions (Ladd 1994, 2nd-order accurate)
- Optional Carreau–Yasuda non-Newtonian blood rheology: μ₀ = 56 mPa·s, μ∞ = 3.45 mPa·s
- Local shear rate computed from Chapman–Enskog momentum-flux tensor (no finite differences)
- WebGL2 GPU compute via fragment shaders — one texel per cell, one draw call per timestep
- Blood properties: ρ = 1060 kg/m³; Reynolds range Re ≤ 2000

**Simulator Features:**
- Inlet BC: velocity (plug or fully-developed parabolic) or pressure
- Outlet BC: zero-gradient or fixed pressure
- Display fields: velocity |U| (m/s), pressure (Pa), vorticity (ω, 1/s)
- 6 grid resolutions: 240×96 (Coarse) → 1280×480 (Giga)
- **8 vascular preset geometries**: empty channel, sphere/disk, square block, symmetric stenosis (50%), asymmetric plaque, saccular aneurysm, Y-bifurcation, trifurcation
- Draw tools: wall pencil, erase, brush radius control
- Real-time stats: Re, FPS, step count

**Educational Content:**
- Why LBM for hemodynamics (vs. body-fitted mesh Navier–Stokes)
- D2Q9 discrete velocity set and lattice weights
- BGK collision operator and equilibrium distribution
- Streaming step (pull formulation)
- Chapman–Enskog multi-scale expansion → incompressible NS
- Viscosity from relaxation time: ν = cs²(τ − ½)Δt
- Bounce-back BC derivation (half-way interpretation)
- Carreau–Yasuda non-Newtonian closure loop
- Lattice-to-physical unit mapping
- Reynolds regimes across the vasculature with reference table
- 7 cited references (Qian 1992, Chapman 1916, Enskog 1917, Frisch/Hasslacher/Pomeau 1986, Succi 2001, Ladd 1994, Lagrava 2012)

---

## Maxwell–Boltzmann Gas Simulator (`maxwell-boltzmann.html`)

Interactive 2D ideal-gas molecular dynamics simulation demonstrating the emergence of the Maxwell–Boltzmann speed distribution from elastic hard-disk collisions. Built as an educational tool for statistical mechanics and kinetic theory.

**Simulation features:**
- Hard-disk elastic collision model with spatial-hash grid O(N) detection (scales to 800 particles at interactive frame rates)
- Speed-colored particle rendering (blue → teal → red by speed)
- Real-time speed histogram (green bars) with exponential running average (red line)
- Theoretical 2D Maxwell–Boltzmann curve (gray dashed) computed from instantaneous temperature
- Adaptive x-axis scaling based on 99th-percentile speed
- Energy controls (± thermal energy), reshuffle, reset, pause

**Educational content:**
- Full mathematical derivation of the 2D distribution from first principles (4 steps: Gaussian components → polar transform → normalization → characteristic speeds)
- Historical background: Maxwell (1860) and Boltzmann (1872) with portraits
- Correct characteristic speeds: *v*\_p = √(k\_BT/m), ⟨v⟩ = √(πk\_BT/2m), *v*\_rms = √(2k\_BT/m)
- Equipartition theorem: ⟨KE⟩ = k\_BT in 2D (2 translational DOF)
- 6 APA-format references with clickable citation highlighting
- KaTeX-rendered equations

---

## Reference Validator ([academic-ref-validator](https://github.com/DThornz/academic-ref-validator))

Client-side academic reference validation tool. Paste a reference list and validate each entry against multiple APIs — no server, no data transmitted.

**Verification sources:**
- CrossRef (DOI lookup + metadata cross-check)
- doi.org CSL-JSON content negotiation (catches redirected DOIs)
- Europe PMC, Semantic Scholar, arXiv, Google Books, Open Library (title/author text search)

**Features:**
- Detects fake DOIs, recycled/stolen DOIs (title mismatch against CrossRef record), and opaque publisher redirects
- Author cross-check, journal name normalisation, volume/page validation
- Opt-in fuzzy title matching for OCR errors, diacritics, and typos
- Three preloaded example sets: All Fake, All Fake BME, All Real BME
- Scores each reference (0–100) with pass/fail/needs-review badge and per-signal breakdown
- Styled to match this portfolio site (teal accent, DM fonts, dark mode, accessibility panel)

**Live app:** [dthornz.github.io/academic-ref-validator](https://dthornz.github.io/academic-ref-validator/)

---

## Local Development / Editor

`cv_editor.jsx` is a React-based GUI editor for the CV. Run locally with any JSX bundler (Vite, CRA).

**Features:** sidebar tree navigation · rich text editing · undo/redo (60-step, Ctrl+Z/Y) · media slots (images, YouTube, video) · Export HTML / Export JSON / Import JSON · new entries added at top (reverse chronological)

The editor does **not** need to be deployed — run locally, export `AsadMirza_CV.html`, commit to this repo.

**Editor data is kept in sync with `AsadMirza_CV.html`** and covers all sections: publications, conference proceedings (oral + poster), teaching (primary instructor + TA + course material dev), supervision (PhD co-mentees + undergrad interns + 19+ senior design teams), funding, skills, and service.

---

## Repository Structure

```
website-cv-tools/
├── index.html              ← Landing page
├── AsadMirza_CV.html       ← Interactive academic CV
├── projects.html           ← Research project showcase
├── hodgkin-huxley.html     ← HH neuron model + interactive simulator
├── maxwell-boltzmann.html  ← Maxwell–Boltzmann 2D gas simulator
├── LBM-cfd.html            ← 2D incompressible LBM CFD simulator
├── fea-cfd-calc.html       ← FEA/CFD engineering calculators
├── dissertation.html       ← PhD dissertation page
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
| Math rendering | KaTeX (simulator pages) |
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
