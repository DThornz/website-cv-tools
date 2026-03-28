# website-cv-tools

**Personal academic website for Dr. Asad Mirza** — Research Assistant Professor, Department of Biomedical Engineering, Florida International University.

Deployed via **GitHub Pages** · Client-side only · No backend required

🌐 **Live site:** [dthornz.github.io/website-cv-tools](https://dthornz.github.io/website-cv-tools)

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Landing page with links to all tools |
| **Curriculum Vitae** | `AsadMirza_CV_v2.html` | Full interactive academic CV |
| **FEA / CFD Calculator** | `fea-cfd-calc.html` | Engineering calculator hub |

All three pages share a consistent site-wide navigation bar.

---

## CV (`AsadMirza_CV_v2.html`)

An interactive single-page CV built with vanilla HTML/CSS/JS.

**Features:**
- Collapsible sections at three levels (Section → Group → Entry)
- Expandable publication cards with abstract, DOI, image, and video slots
- Sidebar navigation with scroll-based active highlighting
- **Expand All / Collapse All** toggle
- **⬇ Download Word CV** button — exports a pre-formatted `.docx` (embedded as base64, no server needed)
- **Accessibility settings panel** — light/dark mode, font family (Academic/Modern/Classic), font size (Small/Medium/Large)
- Keyboard: `Ctrl+Z` / `Ctrl+Y` history in the editor
- Print-friendly `@media print` styles (Times New Roman, ALL CAPS headers, Hutcheson-style academic format)
- Fully responsive (mobile collapses sidebar)

**Sections covered:**
Education · Work Experience · Publications · Conference Proceedings · Teaching · Supervision & Mentorship · Funding & Awards · Technical Skills · Service & Outreach · Career Timeline

---

## FEA / CFD Calculator (`fea-cfd-calc.html`)

A comprehensive single-page engineering calculator hub. All 25+ calculators run entirely client-side — no data is sent anywhere.

### Fluid Mechanics
| Calculator | Description |
|-----------|-------------|
| **Y+ Estimation** | First-cell wall distance for pipe, flat plate, or external body |
| **Reynolds Number** | Flow regime classification with physiological context |
| **Mach Number** | Compressibility check with speed of sound from temperature |
| **Strouhal Number** | Oscillation vs convection timescale |
| **Dean Number** | Curved pipe secondary flow detection |
| **Péclet Number** | Advection vs diffusion dominance |
| **Turbulence BCs** | k, ε, ω, νₜ from intensity + length scale (paste into ANSYS/OpenFOAM) |
| **Turbulence Intensity** | Estimate from Reynolds number (pipe or flat plate BL) |
| **Turbulent Length Scale** | Estimate from geometry type |
| **Flat Plate BL** | Blasius laminar & Schlichting turbulent δ, δ*, θ, Cƒ |
| **Pipe Entry Length** | Hydrodynamic and thermal development lengths |
| **Hagen-Poiseuille** | Laminar pipe Q↔ΔP (both modes) |
| **Darcy-Weisbach** | Turbulent pressure drop with iterated Colebrook-White friction factor |
| **Hydraulic Diameter** | Rectangle, annulus, triangle cross-sections |

### Biomedical CFD
| Calculator | Description |
|-----------|-------------|
| **Power Law** | Non-Newtonian effective viscosity (shear-thinning/thickening) |
| **Carreau Model** | Blood viscosity with Cho & Kensey (1991) default parameters |
| **Newtonian Validity** | Wall shear rate check vs 100 s⁻¹ threshold for blood |
| **Womersley Number** | Pulsatile flow inertia; reference values for major vessels |
| **Wall Shear Stress** | From flow rate or pressure drop; physiological range annotation |
| **OSI / TAWSS** | Paste WSS time series → Oscillatory Shear Index + Time-Averaged WSS |

### Structural FEA
| Calculator | Description |
|-----------|-------------|
| **Elastic Constants** | Convert any two of E, ν, G, K, λ to all others (isotropic) |
| **Von Mises Stress** | 2D stress state or principal stresses; safety factor |
| **Pressure Vessel** | Thin-wall & Lamé thick-wall (Kirchhoff-Love) with auto-classification |
| **Beam Deflection** | Cantilever, simply supported, UDL — deflection and bending stress |
| **Second Moment of Area** | Rectangle, solid circle, hollow circle cross-sections |

### Unit Converters (live, type-to-convert)
Pressure · Dynamic viscosity · Kinematic viscosity · Velocity · Length · Force · Density · Temperature (°C/°F/K/°R)

---

## Editor (`cv_editor.jsx`)

A React-based GUI editor for the CV. Run locally with any JSX-capable bundler (Vite, CRA).

**Features:**
- Sidebar tree: Section → Group → Entry with ↑↓ reorder and ✕ delete
- Rich text editing (Bold, Italic, Underline, Links) via `contentEditable`
- Image URLs (external or `src/images/`) with live preview
- YouTube embed and local video support
- **Undo / Redo** — 60-step history stack; `Ctrl+Z` / `Ctrl+Y` keyboard shortcuts
- **New entries added at top** (reverse chronological)
- **Export CV HTML** — generates and downloads `AsadMirza_CV_v2.html`
- **Export / Import JSON** — save and restore full CV data

The editor does **not** need to be deployed — run it locally, export the HTML, then commit the HTML to this repo.

---

## Repository Structure

```
website-cv-tools/
├── index.html              ← Main landing page
├── AsadMirza_CV_v2.html    ← Interactive academic CV
├── fea-cfd-calc.html       ← FEA / CFD calculator hub
├── AsadMirza_CV.docx       ← Word export (embedded in CV page)
├── cv_editor.jsx           ← React GUI editor (run locally)
├── Logo_V1.png             ← Site logo
├── README.md               ← This file
└── LICENSE                 ← Apache 2.0
```

---

## Deployment

This site is deployed on **GitHub Pages** from the `main` branch root.

To update content:
1. Run `cv_editor.jsx` locally
2. Edit CV content via the GUI
3. Click **Export CV HTML** → download `AsadMirza_CV_v2.html`
4. Commit and push to `main`
5. GitHub Pages serves the updated site within ~60 seconds

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Interactivity | Vanilla JavaScript (no frameworks on live pages) |
| Fonts | Google Fonts — DM Serif Display, DM Mono, DM Sans |
| Editor | React (JSX, useState, useRef, useEffect) |
| Word Export | docx.js (Node.js, generates `.docx` via npm) |
| Hosting | GitHub Pages |

No build step required for the deployed pages. Open any `.html` file directly in a browser or serve via any static host.

---

## Research Focus

Dr. Mirza's work spans:

- **Cardiovascular CFD/FSI** — hemodynamic biomarkers for calcific aortic valve disease (CAVD)
- **Non-Newtonian blood flow modeling** — Carreau and Quemada viscosity models for severely calcified geometries
- **Cerebrovascular transport** — nitric oxide diffusion in microvascular networks using Green's Function methods
- **Stochastic calcium signaling** — IP₃R-mediated Ca²⁺ dynamics in brain capillary endothelial cells
- **Biomedical image analysis** — SEM fiber diameter pipelines, NIfTI brain vasculature graph extraction

---

## Contact

**Dr. Asad Mirza, PhD**  
Research Assistant Professor · Biomedical Engineering  
Florida International University · Miami, FL 33174

📧 [amirza@fiu.edu](mailto:amirza@fiu.edu)  
🔗 [ORCID: 0000-0003-4515-2203](https://orcid.org/0000-0003-4515-2203)  
📑 [Google Scholar](https://scholar.google.com/citations?user=a8fYPM0AAAAJ)  
🔬 [ResearchGate](https://www.researchgate.net/profile/Asad_Mirza2)

---

*Last updated: March 2026*
