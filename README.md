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

Browser-based 2D compressible flow solver using the finite-volume method. Built as an educational tool for fluid mechanics, compressible flow, and numerical methods courses.

**Physics & Numerics:**
- 2D compressible Euler equations in conservation form: ∂U/∂t + ∂F/∂x + ∂G/∂y = 0
- Conserved state: (ρ, ρu, ρv, ρE) — density, x/y-momentum, total energy
- Rusanov (Local Lax-Friedrichs) flux scheme, first-order accurate
- Adaptive timestep: Δt/Δx = CFL/max(|u|+c), CFL = 0.40
- Under-relaxation blend: U_new = α·U_Rusanov + (1-α)·U_old, α ∈ [0.3, 1.0]
- Non-dimensionalization: ρ₀=1.225 kg/m³, c₀=340 m/s, p₀≈101,030 Pa

**Simulator Features:**
- Inlet Mach slider M ∈ [0.1, 2.0] with subsonic/transonic/supersonic regimes
- Outlet pressure ratio p/p₀ ∈ [0.3, 1.6] (back-pressure control)
- Display fields: velocity (m/s), pressure (Pa), density (kg/m³), Mach number
- 4 grid resolutions: 90×35 → 300×117 cells
- 1–12 substeps per frame for speed control
- Plasma colormap (dark purple → orange → yellow) with auto-scaling colorbar
- 200 stream tracers advected by velocity field
- **8 preset scenarios**: Blank, NACA 0012 at 4°, NACA 0012 at 8°, Circular Cylinder, Sphere, Square Block, Backward-Facing Step, Arterial Stenosis (50%), Convergent-Divergent Nozzle
- Draw tools: Wall pencil, Erase, Clear All, brush radius control
- Real-time stats: Δt/Δx, M_max, step count, FPS

**Educational Content:**
- Lagrangian vs. Eulerian description (referencing Price 2023)
- Derivation of the 2D Euler conservation law system
- Ideal gas equation of state and speed of sound
- Non-dimensionalization procedure
- Finite-volume cell update formula
- Rusanov flux formula with dissipation coefficient
- CFL stability analysis with critical bug explanation
- Under-relaxation theory
- Boundary condition table (inlet, outlet, slip, wall)
- Preset scenario physics explanations
- 6 APA-format references (Price, Toro, LeVeque, Anderson, Rusanov, Hirsch)

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

🌐 **Live app:** [dthornz.github.io/academic-ref-validator](https://dthornz.github.io/academic-ref-validator/)

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
