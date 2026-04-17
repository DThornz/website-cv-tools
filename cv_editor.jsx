import { useState, useRef, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
//  INITIAL CV DATA  (pre-loaded with Asad's full CV)
// ─────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 9);

const INITIAL_DATA = {
  hero: {
    name: "Asad Mirza", degrees: "PhD",
    title: "Research Assistant Professor",
    department: "Department of Biomedical Engineering",
    institution: "Florida International University",
    address: "10555 West Flagler Street, Miami, FL 33174",
    email: "amirza@fiu.edu", orcid: "0000-0003-4515-2203",
    logoUrl: "https://raw.githubusercontent.com/DThornz/CV/refs/heads/gh-pages/Logo_V1.png",
    links: [
      { id: uid(), label: "✉ amirza@fiu.edu", url: "mailto:amirza@fiu.edu" },
      { id: uid(), label: "⌥ github/DThornz", url: "https://github.com/DThornz" },
      { id: uid(), label: "🔗 ORCID", url: "https://orcid.org/0000-0003-4515-2203" },
      { id: uid(), label: "📑 Scholar", url: "https://scholar.google.com/citations?user=a8fYPM0AAAAJ" },
      { id: uid(), label: "🔬 ResearchGate", url: "https://www.researchgate.net/profile/Asad_Mirza2" },
    ],
    statement: "Biomedical engineer and early-stage investigator specializing in <strong>computational fluid dynamics (CFD)</strong>, <strong>fluid-structure interaction (FSI)</strong>, and <strong>multiscale physiological modeling</strong>. PhD research centered on identifying hemodynamic biomarkers of calcific aortic valve disease (CAVD) using patient-specific FSI simulations. Current work spans cerebrovascular network modeling, stochastic calcium signaling in brain capillary endothelial cells, and biomedical image analysis pipelines.",
    stats: [
      { id: uid(), num: "10+", label: "Publications" },
      { id: uid(), num: "1", label: "Patent" },
      { id: uid(), num: "30+", label: "Conf. Abstracts" },
      { id: uid(), num: "8yr", label: "Teaching" },
      { id: uid(), num: "600+", label: "Students" },
      { id: uid(), num: "$28K+", label: "Fellowships" },
    ]
  },
  sections: [
    {
      id: "education", icon: "🎓", title: "Education", subtitle: "2 degrees · Florida International University", defaultOpen: true,
      subsections: [{
        id: uid(), title: "", defaultOpen: true,
        entries: [
          {
            id: uid(), year: "2018–2024", title: "Ph.D. — Biomedical Engineering",
            subtitle: "Florida International University · Miami, FL · GPA: 3.84/4.0",
            badges: [{ id: uid(), text: "Dissertation Year Fellowship", type: "award" }, { id: uid(), text: "McNair Scholar", type: "first" }],
            abstract: "Major Professor: Dr. Sharan Ramaswamy · Defense: June 26, 2024<br><br>Dissertation: <em>\"Computational Model for Aortic Valve Calcification Prediction Through Hemodynamic Biomarkers\"</em><br><br>Cardiovascular disease persists as the primary global cause of mortality, with calcific aortic valve disease (CAVD) emerging as a significant subset. Proposed hemodynamic biomarkers (TAWSS, OSI) detectable before symptomatic onset. Demonstrated that non-Newtonian fluid models are required for accurate FSI simulation of severely calcified valves. Developed parameterized patient-specific valve models enabling high-throughput simulation across 50+ virtual geometries.",
            metaItems: [{ id: uid(), label: "Major Professor", value: "Dr. Sharan Ramaswamy" }, { id: uid(), label: "Defense Date", value: "June 26, 2024" }, { id: uid(), label: "GPA", value: "3.84 / 4.0" }],
            links: [{ id: uid(), text: "📄 Key Publication", url: "https://doi.org/10.3390/bioengineering11100955" }],
            images: [], videos: [], notes: ""
          },
          {
            id: uid(), year: "2014–2017", title: "B.S. — Biomedical Engineering",
            subtitle: "Florida International University · Miami, FL · GPA: 3.74/4.0",
            badges: [{ id: uid(), text: "Dean's List (4 years)", type: "award" }, { id: uid(), text: "Presidential Scholarship", type: "award" }, { id: uid(), text: "McNair Scholar", type: "first" }],
            abstract: "Capstone: <em>\"System for Whole Field Fluorescent Microscopy Imaging In-Vivo\"</em><br><br>Novel dual-modality imaging system for studying epilepsy mechanisms. Features a synchronized fast CMOS camera for VSDI and a slower CCD for calcium imaging. Custom MATLAB GUI controls cameras and a motorized XY stage holding a rat with a 1 mm² exposed cranial window. Team: Asad Mirza, Juan Pinzon, Natalia Fuenzalida, Edwin Robledo. Faculty Advisor: Dr. Wei-Chiang Lin. Sponsor: Dr. Jorge J. Riera's Neuronal Mass Dynamics Laboratory.<br><br><strong>Award:</strong> 2nd Place Oral Presentation, Fall 2017 Senior Design Competition.",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          }
        ]
      }]
    },
    {
      id: "experience", icon: "💼", title: "Work Experience", subtitle: "Research · Teaching · Clinical", defaultOpen: true,
      subsections: [{
        id: uid(), title: "", defaultOpen: true,
        entries: [
          {
            id: uid(), year: "2024–Now", title: "Research Assistant Professor",
            subtitle: "Dept. of Biomedical Engineering · Florida International University · also: Vida Engineering LLC",
            badges: [],
            abstract: "Directing computational and experimental research across Tsoukias Vascular Physiology Lab, Hutcheson Cardiovascular Matrix Remodeling Lab, and Prasad Lab. Key projects:<br>• Multiscale modeling of nitric oxide transport in cerebral microvascular networks using Green's Function methods<br>• Patient-specific FSI simulations of asymmetric CAVD progression (NIH-funded, PI: Dr. Hutcheson)<br>• Stochastic modeling of IP₃R-mediated calcium signaling in brain capillary endothelial cells<br>• Biomedical image analysis pipelines for electrospun fiber characterization (Prasad Lab)<br>• Contributing computational expertise to SBIR/STTR proposals (&gt;$200K combined requested)",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          },
          {
            id: uid(), year: "2019–2024", title: "Graduate Research Assistant",
            subtitle: "Cardiovascular Therapeutics Lab · FIU · PI: Dr. Sharan Ramaswamy",
            badges: [],
            abstract: "Pioneered computational pipeline for predicting early-stage aortic valve calcification using hemodynamic biomarkers (WSS, OSI) — published Bioengineering 2024. Engineered parameterized patient-specific aortic valve model enabling FSI simulation across 50+ virtual geometries. Validated models with Vivitro Left Heart Pulse Duplicator and nanoindentation data (R² &gt; 0.85).",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          },
          {
            id: uid(), year: "2016–2019", title: "Undergraduate Research Assistant",
            subtitle: "Vascular Physiology & Biotransport Lab · FIU · PI: Dr. Nikolaos Tsoukias",
            badges: [],
            abstract: "Developed mathematical models of pericyte electrophysiology and neurovascular coupling. COMSOL FSI simulations of brain arterioles. Presented at BMES 2018 and World Congress for Microcirculation (McNair-funded).",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          },
          {
            id: uid(), year: "2018–2022", title: "Graduate Teaching Assistant",
            subtitle: "Dept. of Biomedical Engineering · FIU · 5 courses, 40–98 students/course",
            badges: [],
            abstract: "Lead TA for BME 1054L (6 semesters). Redesigned course modules; created instructional video library. Developed Biosignal Processing module covering Fourier analysis, filtering, ECG/EEG applications. Built ANSYS CFD aneurysm module for BME 6266; pre-processed 12 patient-specific geometry files.",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          }
        ]
      }]
    },
    {
      id: "publications", icon: "📄", title: "Publications", subtitle: "1 Patent · 1 Book Chapter · 9 Journal Articles · 8 Oral · 25+ Poster Presentations", defaultOpen: true,
      subsections: [
        {
          id: uid(), title: "Patent", defaultOpen: true,
          entries: [{
            id: uid(), year: "2025", title: "Production of Enhanced Stem Cell-Based Exosomes and Uses in Scar Tissue Prevention and Treatment",
            subtitle: "Ramaswamy SD, Nevarez MP, Mirza AM, Lin Y-M, Ibarra A, Arman P. · Filed March 6, 2025",
            badges: [],
            abstract: "Patent covering novel methods for enhancing exosome production from stem cells subjected to oscillatory shear stress conditioning, and application in preventing and treating scar tissue formation.",
            metaItems: [], links: [], images: [], videos: [], notes: ""
          }]
        },
        {
          id: uid(), title: "Book Chapter", defaultOpen: true,
          entries: [{
            id: uid(), year: "2025", title: "Revolutionizing Pediatric Valve Replacement: The Future of Elastin-Rich Tissue-Engineered Solutions",
            subtitle: "Ponce Aportela C, Alvarado D, Pandya K, Herrera A, Mirza A, Ramaswamy S. · Springer, Cham",
            badges: [],
            abstract: "In: Liao J, Wong JY (eds) Integration and Bridging of Multiscale Bioengineering Designs and Tissue Biomechanics. Springer, Cham. 2025. pp. 291–307.",
            metaItems: [], links: [{ id: uid(), text: "📖 doi: 10.1007/978-3-031-81743-4_10", url: "https://doi.org/10.1007/978-3-031-81743-4_10" }],
            images: [], videos: [], notes: ""
          }]
        },
        {
          id: uid(), title: "Journal Articles", defaultOpen: true,
          entries: [
            {
              id: uid(), year: "2026", title: "Exploring the Link Between Disturbed Flow and Endothelial Cell Function in an In Vitro Arteriovenous Fistula Model",
              subtitle: "Mirza A, Xiao Z, White NA, Wen J, … Rotmans JI. · Acta Biomaterialia, 2026",
              badges: [{ id: uid(), text: "First Author", type: "first" }],
              abstract: "Co-development of a novel in vitro bypass flow model generating spatially localized regions of disturbed, physiological, and stagnant flow within the same device. CFD characterized local flow profiles. High-content imaging revealed ECs exposed to disturbed flow exhibited loss of alignment, disrupted adherens junctions, and increased activation marker expression.",
              metaItems: [{ id: uid(), label: "DOI", value: "10.1016/j.actbio.2026.01.044" }],
              links: [{ id: uid(), text: "🔗 Full Paper", url: "https://doi.org/10.1016/j.actbio.2026.01.044" }],
              images: [], videos: [], notes: "<!-- IMAGE: src/images/avf_model_schematic.png -->"
            },
            {
              id: uid(), year: "2024", title: "Computational Model for Early-Stage Aortic Valve Calcification Shows Hemodynamic Biomarkers",
              subtitle: "Mirza A, Hsu C-PD, Rodriguez A, … Hutcheson JD, Ramaswamy S. · Bioengineering, 11, 955",
              badges: [{ id: uid(), text: "First Author", type: "first" }, { id: uid(), text: "Co-Corresponding", type: "first" }],
              abstract: "FSI simulations of mildly calcified PSIS bioscaffold valves vs. healthy controls. Hydrodynamic testing showed no significant difference, yet nanoindentation revealed significant stiffness differences (p&lt;0.05). FSI demonstrated marked changes in TAWSS and OSI — supporting these as measurable pre-symptomatic biomarkers for CAVD.",
              metaItems: [{ id: uid(), label: "DOI", value: "10.3390/bioengineering11100955" }],
              links: [{ id: uid(), text: "🔗 Full Paper", url: "https://doi.org/10.3390/bioengineering11100955" }],
              images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2024", title: "A Bypass Flow Model to Study Endothelial Cell Mechanotransduction Across Diverse Flow Environments",
              subtitle: "Xiao Z, Mirza A, et al. · Materials Today Bio, p. 101121",
              badges: [],
              abstract: "Novel in vitro device generating multiple flow environments simultaneously for endothelial mechanobiology studies.",
              metaItems: [], links: [{ id: uid(), text: "🔗 doi: 10.1016/j.mtbio.2024.101121", url: "https://doi.org/10.1016/j.mtbio.2024.101121" }],
              images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2022", title: "Importance of Non-Newtonian Computational Fluid Modeling on Severely Calcified Aortic Valve Geometries",
              subtitle: "Mirza A, Ramaswamy S. · Journal of Biomechanical Engineering, 2022",
              badges: [{ id: uid(), text: "First Author", type: "first" }],
              abstract: "Demonstrated that regions of low shear rates (&lt;100 s⁻¹) in severely calcified aortic valves invalidate the Newtonian assumption. Only non-Newtonian models (Carreau, Quemada) yield accurate WSS and OSI predictions.",
              metaItems: [], links: [{ id: uid(), text: "🔗 doi: 10.1115/1.4054630", url: "https://doi.org/10.1115/1.4054630" }],
              images: [], videos: [], notes: ""
            },
            { id: uid(), year: "2022", title: "Stem Cell-Secreted Allogeneic Elastin-Rich Matrix with Subsequent Decellularization for the Treatment of Critical Valve Diseases in the Young", subtitle: "Gonzalez BA, Herrera A, …, Mirza A, Ramaswamy S. · Bioengineering, 9, 587", badges: [], abstract: "Bioreactor-based two-phase culture system in which hMSCs deposit elastin-rich ECM on PSIS scaffolds. Dynamically cultured scaffolds were decellularized to yield allogeneic ECM with ~8% elastin content, significantly enhancing collagen production by native valve interstitial cells in vitro.", metaItems: [{ id: uid(), label: "DOI", value: "10.3390/bioengineering9100587" }], links: [{ id: uid(), text: "🔗 doi: 10.3390/bioengineering9100587", url: "https://doi.org/10.3390/bioengineering9100587" }], images: [], videos: [], notes: "" },
            { id: uid(), year: "2022", title: "Valve Endothelial Cell Exposure to High Levels of Flow Oscillations Exacerbates Valve Interstitial Cell Calcification", subtitle: "Hsu C-PD, Tchir A, Mirza A, … Hutcheson JD, Ramaswamy S. · Bioengineering", badges: [], abstract: "Quantified role of oscillatory shear stress in driving maladaptive crosstalk between valve endothelial cells (VECs) and interstitial cells (VICs). VECs conditioned by highly oscillatory flow enhanced calcific signaling to VICs, underscoring the importance of flow-induced endothelial signaling in valvular disease.", metaItems: [{ id: uid(), label: "DOI", value: "10.3390/bioengineering9080393" }], links: [{ id: uid(), text: "🔗 doi: 10.3390/bioengineering9080393", url: "https://doi.org/10.3390/bioengineering9080393" }], images: [], videos: [], notes: "" },
                        {
              id: uid(), year: "2020", title: "Physiologically Relevant Fluid-Induced Oscillatory Shear Stress Stimulation of Mesenchymal Stem Cells Enhances the Engineered Valve Matrix Phenotype",
              subtitle: "Gonzalez B, Perez-Nevarez M, Mirza AM, Perez M, Ramaswamy S. · Frontiers in Cardiovascular Medicine, 2020",
              badges: [{ id: uid(), text: "Co-First Author", type: "co" }],
              abstract: "hMSC-seeded constructs exposed to oscillatory shear stress showed enhanced CD31, reduced α-SMA activation, and suppressed fibronectin — indicating a favorable valvular phenotype.",
              metaItems: [], links: [{ id: uid(), text: "🔗 doi: 10.3389/fcvm.2020.00069", url: "https://doi.org/10.3389/fcvm.2020.00069" }],
              images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2020", title: "Non-Invasive Plasmonic-Based Real-Time Characterization of Cardiac Drugs on Cardiomyocytes Functional Behavior",
              subtitle: "Mozneb M, Mirza AM, Li CZ. · Analytical Chemistry, 2020",
              badges: [],
              abstract: "SPR-based label-free platform for dynamically measuring cardiomyocyte contraction in response to cardiac drugs with high spatiotemporal resolution.",
              metaItems: [], links: [{ id: uid(), text: "🔗 doi: 10.1021/acs.analchem.9b04956", url: "https://doi.org/10.1021/acs.analchem.9b04956" }],
              images: [], videos: [], notes: ""
            },
            { id: uid(), year: "2019", title: "Elastin-Dependent Aortic Heart Valve Leaflet Curvature Changes During Cyclic Flexure", subtitle: "Tesfamariam MD, Mirza AM, Chaparro D, et al. · Bioengineering (Basel)", badges: [], abstract: "Linked elastin degradation to altered leaflet curvature under cyclic flexure — revealing a potential structural biomarker for early CAVD remodeling. Curvature mapping methodology developed and applied to both healthy and elastin-depleted tissue strips.", metaItems: [{ id: uid(), label: "DOI", value: "10.3390/bioengineering6020039" }], links: [{ id: uid(), text: "🔗 doi: 10.3390/bioengineering6020039", url: "https://doi.org/10.3390/bioengineering6020039" }], images: [], videos: [], notes: "" },
          ]
        }
      ]
    },
    {
      id: "conferences", icon: "🎙", title: "Conference Proceedings", subtitle: "8 Oral · 25+ Poster Presentations", defaultOpen: false,
      subsections: [
        {
          id: uid(), title: "Oral Presentations", defaultOpen: true,
          entries: [
            { id: uid(), year: "Feb 2026", title: "Code You Can Read: Using MATLAB Live Scripts to Teach Engineering Modeling", subtitle: "Mirza A · Faculty Innovations for Student Success Showcase 2026, FIU", badges: [{ id: uid(), text: "Invited Talk", type: "award" }], abstract: "Presented pedagogical approach to MATLAB Live Scripts for readable, approachable computational code in BME coursework.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Feb 2024", title: "FSI Models of Early-Stage Calcified Aortic Valves Show Hemodynamic Biomarkers", subtitle: "Mirza A, Ramaswamy S · Graduate Research Day 2024, FIU", badges: [{ id: uid(), text: "🥇 1st Place Oral", type: "award" }], abstract: "Oral presentation of dissertation FSI modeling findings.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Apr 2021", title: "Importance of Non-Newtonian Modeling of Blood Flow for Calcified Aortic Valves", subtitle: "Mirza AM, Barreto A, Boodooram T, Ramaswamy S · Heart Valve Society Annual Meeting 2021 (Virtual)", badges: [], abstract: "Pre-recorded oral presentation on non-Newtonian fluid modeling accuracy for severely calcified aortic valve geometries — the foundation of the 2022 J Biomech Eng publication.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Jun 2020", title: "The Effect of Pulsatility on Thrombus Risk in Trans-Aortic Stent Geometries", subtitle: "Mirza AM, Barreto A, Ramaswamy S · SB3C 2020, Virtual", badges: [], abstract: "CFD analysis of pulsatile blood flow patterns in transcatheter aortic valve replacement (TAVR) stent geometries and their relationship to thrombosis risk metrics.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Feb 2020", title: "Hydrodynamic Assessment of a Small Intestinal Submucosa Tubular Mitral Valve", subtitle: "Hsu C-PD, Mirza A, Matheny R, Ramaswamy S · ICTEHV / Heart Valve Society 2020, Abu Dhabi, UAE", badges: [], abstract: "International conference presentation on hydrodynamic performance of cylindrical PSIS-based tissue-engineered mitral valves in pulse duplicator testing.", metaItems: [], links: [], images: [], videos: [], notes: "" },
                        { id: uid(), year: "Sep 2018", title: "Requirements for Regenerative Conduction of Hyperpolarization in Cerebral Capillaries", subtitle: "Moshkforoush A, Mirza A, et al. · World Congress for Microcirculation 2018, Vancouver", badges: [], abstract: "Mathematical model analysis of conditions for electrical hyperpolarization propagation in cerebral capillary networks.", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        },
        {
          id: uid(), title: "Selected Poster Presentations", defaultOpen: false,
          entries: [
            { id: uid(), year: "Feb 2026", title: "Asymmetric Onset of Pathological Remodeling of Aortic Valve Disease", subtitle: "Garcia A, Chaparro D, Mirza A, Martin M, Hutcheson JD · Miami Heart Day 2026, FIU", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
                        { id: uid(), year: "Oct 2025", title: "A Computational Approach to Tuning Orbital Shaker Conditions for Mechanobiological Experiments", subtitle: "Mirza A, Munoz E, Alevriadou BR · BMES 2025, San Diego, CA", badges: [], abstract: "CFD-based parameter optimization for orbital shaker flow conditions.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Oct 2025", title: "Multiscale Modeling of Nitric Oxide Transport in Cerebral Microvascular Networks Using Green's Function Methods", subtitle: "Saadat M, Mirza A, Tsoukias N · BMES 2025, San Diego, CA & Graduate Research Day 2025, FIU", badges: [], abstract: "Multiscale simulation framework for NO transport in cerebral microvascular networks using Green's Function method — capturing diffusion, consumption, and production at the vessel wall and tissue scale simultaneously.", metaItems: [], links: [], images: [], videos: [], notes: "" },
                        { id: uid(), year: "Feb 2025", title: "Stochastic Modeling of IP3R-Mediated Calcium Signaling in Brain Capillary Endothelial Cells", subtitle: "Khakpour N, Mirza A, Tsoukias N · Miami Heart Day 2025 & Graduate Research Day 2025", badges: [], abstract: "CTMC-based stochastic model of IP₃R calcium channel gating in brain capillary endothelial cells.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Feb 2024", title: "Preliminary FSI Model of a Healthy vs. Severely Calcified Aortic Valve", subtitle: "Mirza A, Ramaswamy S · Heart Day 2024, FIU", badges: [{ id: uid(), text: "🥇 1st Place Poster", type: "award" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Sep 2018", title: "Multiscale Modeling of Cerebral Blood Flow", subtitle: "Mirza A, Moshkforoush A, Nelson M, Tsoukias N · World Congress for Microcirculation 2018", badges: [{ id: uid(), text: "Trainee Poster Award", type: "award" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        }
      ]
    },
    {
      id: "teaching", icon: "📚", title: "Teaching", subtitle: "Primary Instructor (2024–) · Graduate TA (2018–2023)", defaultOpen: false,
      subsections: [
        {
          id: uid(), title: "Primary Instructor — Research Assistant Professor", defaultOpen: true,
          entries: [
                        { id: uid(), year: "2024–Now", title: "BME 2740 — Biomedical Engineering Modeling and Simulation", subtitle: "~40 students/semester · MATLAB ODE/PDE modeling", badges: [], abstract: "Core undergraduate BME course covering MATLAB-based numerical methods including ODE solving (Euler, RK4, stiff solvers), PDE discretization, signal processing, and biomedical system simulation. Features MATLAB Live Scripts. Sections: Fall 2024, Spring 2025, Fall 2025, Spring 2026.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2024–Now", title: "BME 1054L — Introduction to BME Computing", subtitle: "~70 students/semester · Introductory MATLAB for BME students", badges: [], abstract: "Introductory computing covering MATLAB fundamentals, data visualization, image processing, and biomedical signal analysis. Custom Biosignal Processing module (ECG, EEG, Fourier/filtering). Sections: Spring 2025, Fall 2025, Spring 2026.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2024–Now", title: "Graduate Courses — BME 6715 & BME 6705", subtitle: "Advanced computational modeling for graduate students", badges: [], abstract: "BME 6715: Mathematical Modeling of Physiological Systems (Fall 2024, 5 students). BME 6705: Nonlinear Systems with Applications to Life Sciences (Spring 2026, 4 students).", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        },
        {
          id: uid(), title: "Graduate Teaching Assistant (2018–2023)", defaultOpen: false,
          entries: [
            { id: uid(), year: "2018–2023", title: "Lead TA — BME 1054L: Introduction to BME Computing (6 semesters)", subtitle: "Dr. Tsoukias · 51–83 students/semester", badges: [], abstract: "Redesigned course modules with video walkthroughs. Created Biosignal Processing module (Fourier, filtering, ECG/EEG). Worked with Dr. Tsoukias and Dr. Jung to overhaul course structure.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2022–2023", title: "TA — BME 2740: Modeling and Simulation", subtitle: "Dr. Tamames · 34–51 students/semester", badges: [], abstract: "Weekly office hours, MATLAB assignment grading, interactive Live Script demonstrations.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2021", title: "TA — BME 3632: Biotransport (PDE module)", subtitle: "Dr. Hutcheson · 43 students", badges: [], abstract: "2-class MATLAB PDE module for team transport projects. Wrote template code for energy/mass/momentum projects.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2020", title: "TA — BME 6266: Advanced Biofluid Mechanics (ANSYS CFD module)", subtitle: "Dr. Ramaswamy · Graduate course", badges: [], abstract: "Developed and delivered a full ANSYS Fluent CFD module for the graduate biofluid mechanics course. Pre-processed 12 patient-specific geometry files for class use; guided students in meshing, boundary condition setup, and post-processing hemodynamic outputs including WSS and pressure gradients.", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        }
      ]
    ,
        {
          id: uid(), title: "Course Material Development", defaultOpen: true,
          entries: [
            {
              id: uid(), year: "2024–2025", title: "Hodgkin–Huxley Interactive Neuron Model",
              subtitle: "For BME 2740 & BME 6715 · FIU BME",
              badges: [{ id: uid(), text: "Nobel (1952) Model", type: "first" }, { id: uid(), text: "RK4 · Canvas API", type: "award" }],
              abstract: "Browser-based interactive implementation of the Hodgkin–Huxley (1952) neuron model. Features 4th-order Runge–Kutta integration (dt=0.01 ms) with real-time plots of V(t), gating variables m/h/n, ionic currents I_Na/I_K/I_L, steady-state curves (x∞ vs V), time constants (τx vs V), and V–n phase portrait. Students adjust all HH parameters, apply channel blockers (TTX/TEA), scale kinetics by temperature (Q10=3), and explore threshold, refractory period, and tonic firing.",
              metaItems: [], links: [{ id: uid(), text: "🧠 Open Interactive Simulator", url: "hodgkin-huxley.html" }],
              images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2025", title: "Maxwell–Boltzmann Gas Simulator (2D)",
              subtitle: "Educational tool · FIU BME",
              badges: [{ id: uid(), text: "Canvas API · Chart.js · KaTeX", type: "award" }],
              abstract: "Browser-based 2D ideal-gas molecular dynamics simulation demonstrating the emergence of the Maxwell–Boltzmann speed distribution from elastic hard-disk collisions. Features spatial-hash O(N) collision detection, real-time histogram with running average and theoretical MB curve, speed-colored particle rendering, full derivation from first principles, and historical background with 6 cited references.",
              metaItems: [], links: [{ id: uid(), text: "⛛ Open Interactive Simulator", url: "maxwell-boltzmann.html" }],
              images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2026", title: "Introduction to 3D Modeling & Printing — Lecture & Assignment",
              subtitle: "For Dr. Michael C. Christie · BME 4908: Senior Design Project · FIU · Spring 2026",
              badges: [],
              abstract: "Designed a 42-slide lecture covering 3D printing technologies (FDM, SLA, SLS, bioprinting), materials selection, a step-by-step SolidWorks bone plate modeling tutorial (7 steps from sketch to STL), slicing software (OrcaSlicer), and print optimization settings. Created a companion hands-on modeling assignment for senior BME students.",
              metaItems: [], links: [], images: [], videos: [], notes: ""
            },
            {
              id: uid(), year: "2025–2026", title: "MATLAB-Based AI/ML Modules — Tutorials, Labs & Datasets",
              subtitle: "For Dr. Jessica Ramella-Roman · BME 4503C: Medical Instrumentation · FIU · Fall 2025–Fall 2026",
              badges: [{ id: uid(), text: "3 Modules", type: "first" }, { id: uid(), text: "MATLAB · ML", type: "award" }],
              abstract: "Developing three MATLAB AI/ML modules: (1) Unsupervised Learning — PCA and k-means clustering on clinical patient data; (2) Supervised Learning PPG & ECG — Decision Tree, SVM, Logistic Regression for tachycardia and AFib classification; (3) Supervised Learning PCG & PFT — cardiac sound classification and respiratory diagnosis. Each module includes a tutorial (m-file + doc), lab assignment, synthetic dataset, and instructional video.",
              metaItems: [], links: [], images: [], videos: [], notes: ""
            },
          ]
        }
      },
    {
      id: "supervision", icon: "👥", title: "Supervision & Mentorship", subtitle: "4 PhD Co-Mentees · 3 Undergraduate Researchers · 19+ Senior Design Teams", defaultOpen: false,
      subsections: [
        {
          id: uid(), title: "Graduate Research Co-Mentorship", defaultOpen: true,
          entries: [
            { id: uid(), year: "2024–Now", title: "Niloufar Khakpour — PhD Candidate, BME", subtitle: "Stochastic IP₃R Calcium Signaling · PI: Dr. Nikolaos Tsoukias", badges: [], abstract: "Co-mentoring on a stochastic CTMC model of IP₃R-mediated calcium signaling in brain capillary endothelial cells, in collaboration with Dr. Mark T. Nelson (University of Vermont). Model evaluates how channel stochasticity, store depletion, and clustering geometry govern calcium puff statistics, with implications for endothelial–smooth muscle coupling and cerebrovascular tone regulation. Resulted in BMES 2025 poster presentation.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2024–Now", title: "Mahsa Saadat — PhD Candidate, BME", subtitle: "Cerebrovascular NO Transport · PI: Dr. Nikolaos Tsoukias", badges: [], abstract: "Co-mentoring on multiscale Green's Function computational models for nitric oxide (NO) transport and consumption across 3D cerebral microvascular networks. Framework enables prediction of spatially resolved NO gradients at the network scale and evaluates how vascular geometry, flow distribution, and endothelial dysfunction alter tissue-level NO bioavailability. Resulted in BMES 2025 oral & poster presentations.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2024–Now", title: "Dabasish Kumar Saha — PhD Candidate, BME", subtitle: "Multiscale Neurovascular Coupling · PI: Dr. Nikolaos Tsoukias", badges: [], abstract: "Co-mentoring on multiscale computational models integrating endothelial and smooth muscle cell Ca²⁺ dynamics, EDH signaling, NO-mediated signaling, red blood cell tracing, 1D Poiseuille flow, and oxygen transport within 3D cerebral microvascular networks. Connects subcellular Ca²⁺-dependent signaling and vasoactivity to emergent blood flow regulation and tissue oxygenation — enabling mechanistic interpretation of how cellular-scale dysfunction propagates to organ-level fMRI signals.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2024–Now", title: "Erik Muñoz — PhD Candidate, BME", subtitle: "Orbital Shaker CFD Optimization · Co-I: Dr. B.R. Alevriadou (SUNY Buffalo)", badges: [], abstract: "Co-developing CFD/VOF multiphase models simulating flow and wall shear stress in 6-well orbital shaker plates, systematically mapping effects of orbital radius, RPM, and media height on undisturbed vs. disturbed flow generation. Provides validated guidelines for selecting shaker settings that balance biological relevance and experimental practicality. Manuscript under review, Annals of Biomedical Engineering (2026); BMES 2025 poster.", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        },
        {
          id: uid(), title: "Undergraduate Research Interns", defaultOpen: true,
          entries: [
            {
              id: uid(), year: "2024–2025", title: "Divina Campbell",
              subtitle: "Biomedical Engineering Department, Florida International University, Miami, FL",
              badges: [],
              abstract: "Undergraduate research intern in the Department of Biomedical Engineering at FIU (2024–2025).",
              metaItems: [], links: [], images: [], videos: [], notes: ""
            },
            { id: uid(), year: "2018–2021", title: "Amanda Barreto", subtitle: "Biomedical Engineering · FIU · Co-authored 2 conference abstracts", badges: [], abstract: "Research on CAVD hemodynamic modeling. Co-authored 'Importance of Non-Newtonian Modeling' and 'Constitutive Properties of Mitral Valve Tissues via Nanoindentation' (both Structural Heart 2021).", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2020–2021", title: "Tisha Boodooram", subtitle: "Biomedical Engineering · FIU", badges: [], abstract: "Contributed to non-Newtonian blood flow modeling in calcified aortic valve geometries. Co-author on Graduate Research Day 2021 abstract.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2019", title: "Sergio Rodriguez", subtitle: "Biomedical Engineering · FIU", badges: [], abstract: "Early-stage CAVD computational model development.", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        },
        {
          id: uid(), title: "Senior Design Consultation", defaultOpen: false,
          entries: [
            { id: uid(), year: "Sp 2026", title: "Spring 2026 Teams — Faculty Mentor (F3) & Consulting Advisor (F5, F7, F8)", subtitle: "Team F3: IDD 2.0 (Faculty Mentor) · Team F5: FMT System · Team F7: ECMO Phantom · Team F8: RESTORE", badges: [{ id: uid(), text: "Faculty Mentor — Team F3", type: "role" }], abstract: "Team F3 — Wearable Postoperative Device for Mitigation of Capsular Contracture (IDD 2.0)\nRole: Faculty Mentor | Sponsor: Engineering Resources Group | Alumni Mentor: Alex Guillarte\nTeam: Maria Parra, Anthony Arenas, Maria C. Gonzalez, Ashley Simpson\nContributions: Breast bag inflation simulations; DOE framework for verification testing; ESP32 firmware and PCB coding; iterative product development.\n\nTeam F5 — Automated Processing System for Optimized Microbiota Extraction\nRole: Consulting Advisor | Faculty Mentor: Dr. Jessica Ramella-Roman | Sponsor: ARDIG\nTeam: Jennifer Boquin-Ciru, Natalie Hidalgo-Gato, Marco Garcia, Camila Jacome\nContributions: MATLAB parametric analysis of stool viscosity vs. RPM effects on WSS; structural/stress/deformation FEA of coupler mechanism; mesh convergence advising.\n\nTeam F7 — Phantom Model for Cannulation Devices in Stenotic Femoral Arteries\nRole: Consulting Advisor | Faculty Mentor: Dr. Joshua Hutcheson | Sponsor: CirculaTech\nTeam: Christopher Tarafa, Oscar Rosendo, Alejandra Arrazcaeta, Rachel Puerto\nContributions: CAD geometry prep; ANSYS Fluent meshing and initial setup; instruction on blood flow simulation in stenotic vessels.\n\nTeam F8 — RESTORE: Reduced Effort System for Tibia Orthopedic Removal and Extraction\nRole: Consulting Advisor | Faculty Mentor: Dr. Shuliang Jiao | Sponsor: Shukla Medical\nTeam: Gianella Escusel, Evan Gonzalez, Moshe Huaco, Jacob Motta\nContributions: Arduino motor driver CAM control programming; circuit setup and functional testing.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Fa 2017", title: "Team 1 — System for Whole Field Fluorescent Microscopy Imaging In-Vivo", subtitle: "Senior Design Capstone · Asad Mirza (team member) · FIU BME Fall 2017", badges: [{ id: uid(), text: "2nd Place Oral", type: "award" }], abstract: "Epilepsy affects ~65 million people worldwide with no known cure. The team designed a novel dual-modality system using a synchronized CMOS camera (VSDI) and CCD camera (calcium imaging), aimed at a stereotaxic stage with a motorized XY stage. Custom MATLAB GUI enables dynamic spatial imaging across a 1 mm² cranial window.\n\nTeam: Asad Mirza, Juan Pinzon, Natalia Fuenzalida, Edwin Robledo\nFaculty Advisor: Dr. Wei-Chiang Lin\nSponsor: Dr. Jorge J. Riera's Neuronal Mass Dynamics Laboratory", metaItems: [{ id: uid(), label: "Faculty Advisor", value: "Dr. Wei-Chiang Lin" }, { id: uid(), label: "Sponsor", value: "Dr. Jorge J. Riera's Neuronal Mass Dynamics Laboratory" }], links: [], images: [], videos: [], notes: "" },
            {
              id: uid(), year: "Fa 2025", title: "Fall 2025 Teams — F2, F3, F4",
              subtitle: "Low-cost Prosthetic Hand · Mechanical Prosthetic Ankle · Hydraulic Spinal Rod Cutter",
              badges: [],
              abstract: "<strong>Team F2 — Low-cost EMG-controlled 3D-printed Prosthetic Hand</strong><br><em>Faculty: Dr. Godavarty · Sponsor: Bio Engineering Labs, Corp. · Members: Shirel Belilty Benmergui, Anja Mihajlov, Elise Minami Ino</em><br>Upper-limb amputees frequently abandon prosthetics due to discomfort, limited functionality, and high cost. This project presents a low-cost, fully 3D-printed EMG-controlled prosthetic hand featuring a single EMG sensor for open–close activation, a lightweight structure under 1 kg, and internal string-driven actuation. Total prototype cost under $1,000.<br><br><strong>Team F3 — Fully Mechanical Prosthetic Ankle: A Mobility Lifeline for Transtibial Amputees in Low Resource Environments</strong><br><em>Faculty Mentor: Dr. Asad Mirza · Sponsor: Bio Engineering Labs, Corp. · Members: Giuliana Mesa, Laura Guerrero, Nicholas Mohammed</em><br>Develops a fully mechanical, low-cost prosthetic ankle using a ball-and-socket mechanism (aluminum ball in TPU-lined socket) to deliver controlled multiaxial motion reflecting natural ankle biomechanics. A ROM limiter restricts excessive rotation for predictable, safe behavior on varied terrains without electronics or specialized components.<br><br><strong>Team F4 — Novel Hydraulic Spinal Rod Cutter for Use in Lumbar Spine Revision Surgery</strong><br><em>Faculty: Valentina Dargam · Sponsor: Shukla Medical · Members: Mia Roman, Ivan Page, Jose Acosta, Samy Mudholker, Gian-Marco Montero</em><br>Compact hydraulic spinal rod cutter with a cutting head under 20 mm in thickness delivering &gt;28 kN of cutting force while reducing user input by over 10%. Blades: 440C stainless steel; handle: 17-4 PH stainless steel. Enables precise, low-effort in-situ rod cutting within the 20 mm interpedicular space.",
              metaItems: [], links: [], images: [], videos: [], notes: ""
            },
            { id: uid(), year: "Sp 2025", title: "Spring 2025 Teams", subtitle: "Team 3: Fully Mechanical Prosthetic Ankle · Team 4: NPCore · Team 6: IUSDRx", badges: [], abstract: "Consulting across 3 senior design teams on computational and experimental design.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "Fa 2022", title: "Fall 2022 Teams", subtitle: "Team 1: Garrison Gauge · Team 3: Wearable Isoflurane Monitor · Team 7: Tremor Tranquil", badges: [], abstract: "Consulting across 3 senior design teams.", metaItems: [], links: [], images: [], videos: [], notes: "" },
            { id: uid(), year: "2017–2022", title: "Additional Consulting Engagements (12 more teams)", subtitle: "Fall 2021 · Fall 2020 · Spring 2020 · Fall 2019 · Spring 2019 · Spring 2018 · Fall 2017", badges: [], abstract: "P.R.O Scan (Fa21) · Ampoule Scoring Machine (Fa21) · Heel Pressure Relief Sock (Fa20) · Dynamic Resistance Orthosis (Fa20) · FTMS Cable Transport (Fa20) · Bite Force Recording (Sp20) · Wireless SA Node Electrode (Fa19) · Body Sway Quantifier (Fa19) · Foam Casting Pressure System (Fa19) · Garrison Gauge (Fa19) · Wearable Viscous Biologics Injector (Sp19) · Bone Tracking Registration (Sp19) · Vein Preservation System (Sp18) · Inhalable Drug Dose Monitor (Sp18) · Field Therapy Accelerator (Fa17)", metaItems: [], links: [], images: [], videos: [], notes: "" },
          ]
        }
      ]
    },
    {
      id: "funding", icon: "🏆", title: "Funding, Fellowships & Awards", subtitle: "3 Fellowships · 2 Grants · 8 Competitive Awards", defaultOpen: false,
      subsections: [{
        id: uid(), title: "", defaultOpen: true,
        entries: [
          { id: uid(), year: "2023", title: "Dissertation Year Fellowship — $17,000", subtitle: "University Graduate School, FIU", badges: [{ id: uid(), text: "Fellowship", type: "first" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2021", title: "Koerner Family Foundation Fellowship — $10,000", subtitle: "Koerner Family Foundation", badges: [{ id: uid(), text: "Fellowship", type: "first" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2023", title: "SGA Graduate Scholarship — $1,000", subtitle: "Student Government Association, FIU", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2017", title: "McNair Undergraduate Fellowship — $1,000", subtitle: "Ronald E. McNair Post-Baccalaureate Achievement Program", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Feb 2024", title: "Oral Competition — 1st Place", subtitle: "Graduate Research Day 2024, FIU", badges: [{ id: uid(), text: "🥇 Award", type: "award" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Feb 2024", title: "Poster Competition — 1st Place", subtitle: "Miami Heart Day 2024, FIU", badges: [{ id: uid(), text: "🥇 Award", type: "award" }], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Sep 2018", title: "Trainee Poster Award", subtitle: "11th World Congress for Microcirculation, Vancouver, CA", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2014–17", title: "Dean's List (4 consecutive years)", subtitle: "Florida International University", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2014", title: "FIU Presidential Scholarship", subtitle: "Florida International University", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
        ]
      }]
    },
    {
      id: "skills", icon: "⚙️", title: "Technical Skills", subtitle: "Computation · Programming · CAD · Experimental", defaultOpen: false,
      subsections: [{
        id: uid(), title: "", defaultOpen: true,
        entries: [
          { id: uid(), year: "", title: "Simulation & Computation", subtitle: "MATLAB/Simulink (Expert), ANSYS Fluent & Mechanical (Expert), COMSOL (Advanced), LS-DYNA (Intermediate)", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "", title: "Programming", subtitle: "Python (Advanced), JavaScript/HTML/CSS (Advanced), Processing/p5.js", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "", title: "MATLAB Toolboxes", subtitle: "Neural Network, Image Processing, Computer Vision, Data Acquisition, Curve Fitting", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "", title: "CAD & Design", subtitle: "SolidWorks, SpaceClaim, Blender, Adobe Photoshop, Illustrator, InDesign", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "", title: "Experimental", subtitle: "Vivitro Pulse Duplicator, Nanoindentation, Fluorescent Microscopy, Bose ElectroForce", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "", title: "Languages & Memberships", subtitle: "English (Native), Urdu (Native), Hindi (Basic) · Sigma Xi (2024–), BMES (2016–)", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
        ]
      }]
    },
    {
      id: "service", icon: "🌐", title: "Service & Outreach", subtitle: "University Service · Community Outreach · Certification", defaultOpen: false,
      subsections: [{
        id: uid(), title: "", defaultOpen: true,
        entries: [
          { id: uid(), year: "Apr–6Jul 2026", title: "PhD Qualifying Exam Committee", subtitle: "Biomedical Engineering Department, Florida International University, Miami, FL", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Mar 2026–", title: "Graduate Program Committee", subtitle: "Biomedical Engineering Department, Florida International University, Miami, FL", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Mar 2026", title: "Abstract Reviewer — URFIU Conference", subtitle: "Undergraduate Research at FIU Conference, Florida International University, Miami, FL", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Mar 2026", title: "Faculty Judge — Undergraduate Research Practice Presentations", subtitle: "Honors College, FIU (URFIU)", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "Sum 2024", title: "BME Senior Design Oral Judge", subtitle: "Biomedical Engineering Society, FIU", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2019", title: "EMBS BME Presentation — 3D Printing & Simulation", subtitle: "Pinecrest Cove Preparatory Academy, Miami, FL", badges: [], abstract: "Taught middle school students about 3D printing and BME-oriented simulations (hip implants, computer cooling).", metaItems: [], links: [], images: [], videos: [], notes: "" },
          { id: uid(), year: "2017", title: "Six Sigma — Yellow Belt Certification", subtitle: "Florida International University", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" },
        ]
      }]
    },
  ]
};

// ─────────────────────────────────────────────────────────────
//  HTML GENERATOR
// ─────────────────────────────────────────────────────────────
function generateCV(data) {
  const escHtml = (s) => String(s || "");

  const badge = (b) => {
    const cls = b.type === "first" ? "badge-first" : b.type === "co" ? "badge-co" : "badge-award";
    return `<span class="badge ${cls}">${escHtml(b.text)}</span>`;
  };

  const entryInner = (e) => {
    if (!e.abstract && !e.metaItems?.length && !e.links?.length && !e.images?.length && !e.videos?.length) return "";
    let html = `<div class="entry-inner">`;
    if (e.metaItems?.length) {
      html += `<div class="entry-meta-row">`;
      e.metaItems.forEach(m => {
        html += `<div class="entry-meta-item"><div class="entry-meta-label">${escHtml(m.label)}</div><div class="entry-meta-value">${escHtml(m.value)}</div></div>`;
      });
      html += `</div>`;
    }
    if (e.abstract) html += `<div class="entry-abstract">${e.abstract}</div>`;
    if (e.links?.length) {
      html += `<div class="entry-link-row">`;
      e.links.forEach(l => { html += `<a class="entry-link" href="${escHtml(l.url)}" target="_blank">${escHtml(l.text)}</a>`; });
      html += `</div>`;
    }
    if (e.images?.length) {
      html += `<div class="entry-media"><div class="entry-media-label">Images</div><div class="entry-img-grid">`;
      e.images.forEach(img => { html += `<img src="${escHtml(img.src)}" alt="${escHtml(img.alt)}" class="entry-img">`; });
      html += `</div></div>`;
    }
    if (e.videos?.length) {
      html += `<div class="entry-media"><div class="entry-media-label">Video</div>`;
      e.videos.forEach(v => {
        if (v.type === "youtube") {
          const vid = v.src.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1] || v.src;
          html += `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${vid}" frameborder="0" allowfullscreen></iframe></div>`;
        } else {
          html += `<video controls class="entry-video"><source src="${escHtml(v.src)}" type="video/mp4"></video>`;
        }
      });
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  };

  const entryCard = (e) => {
    const hasBody = !!(e.abstract || e.metaItems?.length || e.links?.length || e.images?.length || e.videos?.length);
    return `
<div class="entry-card${hasBody ? " open" : ""}" id="e-${e.id}">
  <button class="entry-toggle" onclick="toggleEntry(this)">
    <span class="entry-year">${escHtml(e.year)}</span>
    <div class="entry-title-col">
      <div class="entry-title">${escHtml(e.title)}</div>
      ${e.subtitle ? `<div class="entry-subtitle">${escHtml(e.subtitle)}</div>` : ""}
      ${e.badges?.length ? `<div class="entry-badges">${e.badges.map(badge).join("")}</div>` : ""}
    </div>
    ${hasBody ? `<span class="chevron-xs">▼</span>` : ""}
  </button>
  ${hasBody ? `<div class="entry-body">${entryInner(e)}</div>` : ""}
</div>`;
  };

  const subsection = (sub) => {
    const hasTitle = sub.title && sub.title.trim();
    if (!hasTitle) {
      return sub.entries.map(entryCard).join("\n");
    }
    return `
<div class="subsection-wrapper${sub.defaultOpen ? " open" : ""}" id="sub-${sub.id}">
  <button class="subsection-toggle" onclick="toggleSubsection(this)">
    <div class="subsection-title">${escHtml(sub.title)} <span class="subsection-count">(${sub.entries.length})</span></div>
    <span class="chevron-sm">▼</span>
  </button>
  <div class="subsection-body">
    <div class="subsection-inner">
      ${sub.entries.map(entryCard).join("\n")}
    </div>
  </div>
</div>`;
  };

  const section = (sec) => `
<div class="section-wrapper${sec.defaultOpen ? " open" : ""}" id="${sec.id}">
  <button class="section-toggle" onclick="toggleSection(this)">
    <div class="section-header-left">
      <div class="section-icon">${escHtml(sec.icon)}</div>
      <div>
        <div class="section-title">${escHtml(sec.title)}</div>
        <div class="section-count">${escHtml(sec.subtitle)}</div>
      </div>
    </div>
    <span class="chevron">▼</span>
  </button>
  <div class="section-body">
    <div class="section-inner">
      ${sec.subsections.map(subsection).join("\n")}
    </div>
  </div>
</div>`;

  const h = data.hero;
  const heroLinks = (h.links || []).map(l => `<a class="hero-badge" href="${escHtml(l.url)}" target="_blank">${escHtml(l.label)}</a>`).join("\n");
  const statsHtml = (h.stats || []).map(s => `<div class="stat-card"><div class="stat-num">${escHtml(s.num)}</div><div class="stat-label">${escHtml(s.label)}</div></div>`).join("\n");
  const navLinks = data.sections.map(s => `<a class="nav-link" href="#${s.id}">${escHtml(s.icon)} ${escHtml(s.title)}</a>`).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escHtml(h.name)} — Curriculum Vitae</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Lora:ital,wght@0,400;0,600;1,400&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--bg:#0d1117;--bg2:#161b22;--bg3:#1c2230;--border:#2a3548;--teal:#2dd4bf;--teal-dim:#1a8a7d;--teal-glow:rgba(45,212,191,0.10);--orange:#fb8c00;--text:#e2e8f0;--text-muted:#8b98b0;--text-dim:#566478;--accent:#64ffda;--serif:'DM Serif Display','Lora',Georgia,serif;--mono:'DM Mono','Source Code Pro',monospace;--sans:'DM Sans',system-ui,sans-serif;--base-size:15px;--radius:8px;--sp:28px 32px;--tr:0.22s cubic-bezier(0.4,0,0.2,1)}
body.light-mode{--bg:#f5f6f8;--bg2:#ffffff;--bg3:#eef0f4;--border:#d0d6e0;--teal:#0b7a6e;--teal-dim:#0b7a6e;--teal-glow:rgba(11,122,110,0.07);--orange:#c05a00;--text:#1a202c;--text-muted:#374151;--text-dim:#6b7280;--accent:#0b7a6e}
body.font-classic{--serif:'Lora',Georgia,serif;--mono:'Source Code Pro',monospace;--sans:Georgia,'Times New Roman',serif}
body.font-modern{--serif:'DM Sans',system-ui,sans-serif;--mono:'DM Mono',monospace;--sans:'DM Sans',system-ui,sans-serif}
body.size-sm{--base-size:13px}body.size-md{--base-size:15px}body.size-lg{--base-size:17px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--bg);color:var(--text);font-size:var(--base-size);line-height:1.65;transition:background var(--tr),color var(--tr);min-height:100vh}
a{color:var(--teal);text-decoration:none;transition:color var(--tr)}a:hover{color:var(--accent);text-decoration:underline}
.top-bar{position:sticky;top:0;z-index:200;background:rgba(13,17,23,0.88);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:9px 24px;transition:background var(--tr),border-color var(--tr)}
body.light-mode .top-bar{background:rgba(245,246,248,0.92)}
.top-bar-name{font-family:var(--serif);font-size:1.133em;color:var(--teal)}
.top-bar-right{display:flex;align-items:center;gap:8px}
.tb-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:99px;border:1px solid var(--border);background:var(--bg2);color:var(--text);font-family:var(--mono);font-size:0.767em;cursor:pointer;white-space:nowrap;transition:all var(--tr)}
.tb-btn:hover{border-color:var(--teal);color:var(--teal)}
.tb-btn.primary{background:var(--teal);color:#0d1117;border-color:var(--teal);font-weight:600}
body.light-mode .tb-btn.primary{color:#fff}
.layout-wrapper{display:grid;grid-template-columns:210px 1fr;max-width:1180px;margin:0 auto;padding:0 16px 80px}
#nav-sidebar{position:sticky;top:48px;height:calc(100vh - 48px);overflow-y:auto;padding:24px 0 24px 6px;scrollbar-width:none;border-right:1px solid var(--border)}
#nav-sidebar::-webkit-scrollbar{display:none}
.nav-label{font-family:var(--mono);font-size:0.667em;color:var(--text-dim);text-transform:uppercase;letter-spacing:.12em;padding:6px 14px 3px}
.nav-link{display:flex;align-items:center;gap:7px;padding:6px 14px;font-size:0.833em;color:var(--text-muted);border-radius:6px 0 0 6px;transition:all var(--tr);cursor:pointer;border:none;background:none;width:100%;text-align:left}
.nav-link:hover,.nav-link.active{color:var(--teal);background:var(--teal-glow);text-decoration:none}
.nav-link.active{border-right:2px solid var(--teal)}
.main-content{padding:0 0 0 28px;min-width:0}
.hero-canvas{position:relative;padding:44px 36px 38px;margin-bottom:6px;overflow:hidden;background:var(--bg2);border-bottom:1px solid var(--border)}
.hero-canvas::before{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 65% 90% at 85% 50%,rgba(45,212,191,0.07) 0%,transparent 70%),radial-gradient(ellipse 40% 60% at 5% 80%,rgba(251,140,0,0.04) 0%,transparent 60%)}
body.light-mode .hero-canvas::before{display:none}
.hero-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap}
.hero-left{flex:1;min-width:240px}
.hero-eyebrow{font-family:var(--mono);font-size:0.7em;color:var(--teal);letter-spacing:.14em;text-transform:uppercase;margin-bottom:8px}
h1.hero-name{font-family:var(--serif);font-size:clamp(2.533em,5vw,3.6em);line-height:1.05;margin-bottom:8px;font-weight:400}
.name-gradient{background:linear-gradient(120deg,var(--text) 30%,var(--teal) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
body.light-mode .name-gradient{-webkit-text-fill-color:var(--text);background:none}
.hero-title{font-size:1em;color:var(--text-muted);font-weight:300;margin-bottom:4px}
.hero-affil{font-size:0.833em;color:var(--text-dim);margin-bottom:18px;font-style:italic}
.hero-badges{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:18px}
.hero-badge{display:inline-flex;align-items:center;gap:5px;padding:3px 11px;border-radius:99px;background:var(--bg3);border:1px solid var(--border);font-size:0.767em;color:var(--text-muted);font-family:var(--mono);transition:all var(--tr);text-decoration:none}
.hero-badge:hover{border-color:var(--teal);color:var(--teal);text-decoration:none}
.hero-right{flex-shrink:0}
.logo-box{width:108px;height:108px;border-radius:12px;background:var(--bg3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;overflow:hidden}
.logo-box img{width:100%;height:100%;object-fit:contain}
.stats-ribbon{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);margin:18px 0 22px;overflow:hidden}
.stat-card{padding:16px 12px;text-align:center;border-right:1px solid var(--border);transition:background var(--tr)}
.stat-card:last-child{border-right:none}
.stat-card:hover{background:var(--teal-glow)}
.stat-num{font-family:var(--serif);font-size:1.733em;color:var(--teal);line-height:1;margin-bottom:3px}
.stat-label{font-size:0.667em;color:var(--text-dim);font-family:var(--mono);text-transform:uppercase;letter-spacing:.08em}
.section-wrapper{border:1px solid var(--border);border-radius:var(--radius);margin-bottom:10px;overflow:hidden;background:var(--bg2);transition:border-color var(--tr),box-shadow var(--tr)}
.section-wrapper:hover{border-color:var(--teal-dim)}
.section-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px 22px;background:none;border:none;cursor:pointer;transition:background var(--tr);text-align:left}
.section-toggle:hover{background:var(--teal-glow)}
.section-header-left{display:flex;align-items:center;gap:11px}
.section-icon{width:30px;height:30px;border-radius:7px;background:var(--bg3);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:0.867em;flex-shrink:0;transition:border-color var(--tr)}
.section-wrapper:hover .section-icon{border-color:var(--teal-dim)}
.section-title{font-family:var(--serif);font-size:1.2em;font-weight:400;color:var(--text)}
.section-count{font-family:var(--mono);font-size:0.7em;color:var(--text-dim);margin-top:1px}
.chevron{color:var(--text-dim);transition:transform var(--tr),color var(--tr);font-size:0.867em}
.section-wrapper.open>.section-toggle .chevron{transform:rotate(180deg);color:var(--teal)}
.section-body{max-height:0;overflow:hidden;opacity:0;transition:max-height 0.5s cubic-bezier(0.4,0,0.2,1),opacity 0.3s ease}
.section-wrapper.open>.section-body{max-height:99999px;opacity:1}
.section-inner{padding:var(--sp);border-top:1px solid var(--border)}
.subsection-wrapper{border:1px solid var(--border);border-radius:6px;margin-bottom:8px;overflow:hidden;background:var(--bg3);transition:border-color var(--tr)}
.subsection-wrapper:hover{border-color:var(--teal-dim)}
.subsection-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;padding:11px 18px;background:none;border:none;cursor:pointer;transition:background var(--tr);text-align:left}
.subsection-toggle:hover{background:var(--teal-glow)}
.subsection-title{font-family:var(--mono);font-size:0.733em;text-transform:uppercase;letter-spacing:.11em;color:var(--teal);display:flex;align-items:center;gap:8px}
.subsection-count{font-size:0.667em;color:var(--text-dim);font-weight:400}
.chevron-sm{font-size:0.733em;color:var(--text-dim);transition:transform var(--tr),color var(--tr)}
.subsection-wrapper.open>.subsection-toggle .chevron-sm{transform:rotate(180deg);color:var(--teal)}
.subsection-body{max-height:0;overflow:hidden;opacity:0;transition:max-height 0.45s cubic-bezier(0.4,0,0.2,1),opacity 0.28s ease}
.subsection-wrapper.open>.subsection-body{max-height:99999px;opacity:1}
.subsection-inner{padding:14px 18px;border-top:1px solid var(--border)}
.entry-card{border:1px solid rgba(42,53,72,0.7);border-radius:6px;margin-bottom:7px;overflow:hidden;background:var(--bg2);transition:border-color var(--tr)}
.entry-card:hover{border-color:var(--teal-dim)}
.entry-card:last-child{margin-bottom:0}
.entry-toggle{width:100%;display:flex;align-items:flex-start;gap:10px;padding:10px 14px;background:none;border:none;cursor:pointer;transition:background var(--tr);text-align:left}
.entry-toggle:hover{background:var(--teal-glow)}
.entry-year{font-family:var(--mono);font-size:0.7em;color:var(--teal);padding-top:2px;flex-shrink:0;min-width:42px}
.entry-title-col{flex:1;min-width:0}
.entry-title{font-size:0.867em;font-weight:500;color:var(--text);line-height:1.45}
.entry-subtitle{font-size:0.767em;color:var(--text-dim);margin-top:2px;font-style:italic}
.entry-badges{display:flex;gap:5px;margin-top:5px;flex-wrap:wrap}
.badge{padding:2px 7px;border-radius:99px;font-size:0.667em;font-family:var(--mono)}
.badge-first{background:rgba(45,212,191,0.1);color:var(--teal);border:1px solid rgba(45,212,191,0.25)}
.badge-co{background:rgba(251,140,0,0.1);color:var(--orange);border:1px solid rgba(251,140,0,0.25)}
.badge-award{background:rgba(250,204,21,0.1);color:#d4a000;border:1px solid rgba(250,204,21,0.25)}
.chevron-xs{font-size:0.667em;color:var(--text-dim);transition:transform var(--tr),color var(--tr);flex-shrink:0;padding-top:3px}
.entry-card.open>.entry-toggle .chevron-xs{transform:rotate(180deg);color:var(--teal)}
.entry-body{max-height:0;overflow:hidden;opacity:0;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1),opacity 0.25s ease}
.entry-card.open>.entry-body{max-height:99999px;opacity:1}
.entry-inner{padding:14px 16px 16px 58px;border-top:1px solid rgba(42,53,72,0.5)}
.entry-abstract{font-size:0.867em;color:var(--text-muted);line-height:1.7;margin-bottom:12px}
.entry-meta-row{display:flex;gap:24px;flex-wrap:wrap;margin-bottom:10px}
.entry-meta-item{font-size:0.8em}
.entry-meta-label{color:var(--text-dim);font-family:var(--mono);font-size:0.667em;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1px}
.entry-meta-value{color:var(--text-muted)}
.entry-link-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
.entry-link{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:6px;font-size:0.767em;font-family:var(--mono);background:var(--bg3);border:1px solid var(--border);color:var(--teal);transition:all var(--tr)}
.entry-link:hover{border-color:var(--teal);background:var(--teal-glow);text-decoration:none}
.entry-media{margin-top:14px}
.entry-media-label{font-family:var(--mono);font-size:0.667em;color:var(--text-dim);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
.entry-img{max-width:100%;border-radius:6px;border:1px solid var(--border);margin-bottom:8px;display:block}
.entry-img-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:8px}
.video-embed{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:6px;border:1px solid var(--border);margin-bottom:8px}
.video-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%}
.entry-video{max-width:100%;border-radius:6px;border:1px solid var(--border);margin-bottom:8px}
.highlight-box{background:linear-gradient(135deg,rgba(45,212,191,0.06) 0%,transparent 60%);border:1px solid rgba(45,212,191,0.18);border-radius:var(--radius);padding:16px 20px;margin-bottom:18px;font-size:0.9em;color:var(--text-muted);line-height:1.75}
body.light-mode .highlight-box{background:rgba(11,122,110,0.05)}
.highlight-box strong{color:var(--teal)}
.sub-divider{font-family:var(--mono);font-size:0.7em;color:var(--teal);text-transform:uppercase;letter-spacing:.12em;margin:20px 0 12px;display:flex;align-items:center;gap:8px}
.sub-divider::after{content:'';flex:1;height:1px;background:var(--border)}
.sub-divider:first-child{margin-top:0}
.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}
.skill-group-title{font-family:var(--mono);font-size:0.7em;color:var(--text-dim);text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px}
.skill-item{margin-bottom:9px}
.skill-name-row{display:flex;justify-content:space-between;font-size:0.867em;color:var(--text-muted);margin-bottom:4px}
.skill-name-row span:last-child{font-family:var(--mono);font-size:0.7em;color:var(--text-dim)}
.skill-bar{height:3px;background:var(--border);border-radius:99px;overflow:hidden}
.skill-bar-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--teal-dim),var(--teal));transition:width 0.8s cubic-bezier(0.4,0,0.2,1)}
.tags-list{display:flex;flex-wrap:wrap;gap:6px}
.tag{padding:3px 9px;border-radius:6px;background:var(--bg3);border:1px solid var(--border);font-size:0.767em;color:var(--text-muted);font-family:var(--mono)}
.award-entry{display:grid;grid-template-columns:88px 1fr;gap:0 14px;padding:9px 0;border-bottom:1px solid rgba(42,53,72,0.45);align-items:start}
.award-entry:last-child{border-bottom:none}
.award-year{font-family:var(--mono);font-size:0.7em;color:var(--teal);padding-top:2px}
.award-name{font-size:0.867em;font-weight:500;color:var(--text);margin-bottom:1px}
.award-org{font-size:0.767em;color:var(--text-dim)}
.tl-entry{display:grid;grid-template-columns:120px 1fr;gap:0 18px;padding:16px 0;border-bottom:1px solid rgba(42,53,72,0.5)}
.tl-entry:last-child{border-bottom:none;padding-bottom:0}
.tl-entry:first-child{padding-top:0}
.tl-date{font-family:var(--mono);font-size:0.7em;color:var(--text-dim);padding-top:2px;line-height:1.5}
.tl-role{font-weight:600;color:var(--text);font-size:0.9em;margin-bottom:1px}
.tl-org{font-size:0.833em;color:var(--teal);margin-bottom:3px;font-style:italic}
.tl-details{font-size:0.833em;color:var(--text-muted);line-height:1.6}
.cv-footer{margin-top:36px;padding:20px 0 0;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-family:var(--mono);font-size:0.7em;color:var(--text-dim)}
#settings-btn{position:fixed;bottom:24px;right:24px;z-index:300;width:44px;height:44px;border-radius:50%;background:var(--teal);color:#0d1117;border:none;cursor:pointer;font-size:1.2em;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(45,212,191,0.35);transition:all var(--tr)}
body.light-mode #settings-btn{color:#fff}
#settings-btn:hover{transform:scale(1.08)}
#settings-panel{position:fixed;bottom:78px;right:24px;z-index:300;background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:20px 22px;width:250px;box-shadow:0 8px 40px rgba(0,0,0,0.4);transition:all 0.25s ease;opacity:0;transform:translateY(10px) scale(0.96);pointer-events:none}
#settings-panel.open{opacity:1;transform:translateY(0) scale(1);pointer-events:all}
.sp-title{font-family:var(--serif);font-size:1em;color:var(--text);margin-bottom:16px}
.sp-label{font-family:var(--mono);font-size:0.667em;text-transform:uppercase;letter-spacing:.1em;color:var(--text-dim);margin-bottom:8px}
.sp-row{margin-bottom:18px}
.sp-toggle-row{display:flex;align-items:center;justify-content:space-between}
.sp-toggle-label{font-size:0.867em;color:var(--text-muted)}
.toggle-switch{position:relative;width:42px;height:22px}
.toggle-switch input{opacity:0;width:0;height:0}
.toggle-slider{position:absolute;inset:0;border-radius:99px;background:var(--border);cursor:pointer;transition:background var(--tr)}
.toggle-slider::before{content:'';position:absolute;width:16px;height:16px;border-radius:50%;left:3px;top:3px;background:var(--text-muted);transition:transform var(--tr),background var(--tr)}
input:checked+.toggle-slider{background:var(--teal)}
input:checked+.toggle-slider::before{transform:translateX(20px);background:#fff}
.sp-font-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.sp-font-btn,.sp-size-btn{padding:6px 4px;border-radius:6px;border:1px solid var(--border);background:var(--bg3);color:var(--text-muted);font-size:0.733em;cursor:pointer;transition:all var(--tr);text-align:center}
.sp-font-btn:hover,.sp-font-btn.active,.sp-size-btn:hover,.sp-size-btn.active{border-color:var(--teal);color:var(--teal);background:var(--teal-glow)}
.sp-size-row{display:flex;align-items:center;gap:8px}
.sp-size-btn{flex:1}
@media(max-width:768px){.layout-wrapper{grid-template-columns:1fr}#nav-sidebar{display:none}.main-content{padding:0}.tl-entry,.award-entry{grid-template-columns:1fr}.entry-inner{padding-left:14px!important}}
@media print{@page{margin:1in;size:letter}*{box-shadow:none!important;animation:none!important;transition:none!important}body{background:#fff!important;color:#000!important;font-family:'Times New Roman',serif!important;font-size:11pt!important}.top-bar,#nav-sidebar,#settings-btn,#settings-panel{display:none!important}.layout-wrapper{display:block!important;padding:0!important;max-width:100%!important}.main-content{padding:0!important}.hero-canvas{text-align:center;background:#fff!important;border:none!important;padding:0 0 18pt!important}.hero-canvas::before{display:none!important}h1.hero-name{font-family:'Times New Roman',serif!important;font-size:16pt!important;font-weight:bold;text-transform:uppercase}.name-gradient{-webkit-text-fill-color:#000!important;background:none!important}.stats-ribbon{display:none!important}.section-wrapper{background:#fff!important;border:none!important;border-radius:0!important;margin-bottom:0!important}.section-toggle{padding:12pt 0 3pt!important;border-bottom:2px solid #000;margin-bottom:6pt;background:none!important}.section-icon,.chevron{display:none!important}.section-title{font-family:'Times New Roman',serif!important;font-size:12pt!important;font-weight:bold;text-transform:uppercase;color:#000}.section-body,.subsection-body,.entry-body{max-height:none!important;overflow:visible!important;opacity:1!important;display:block!important}.section-inner{padding:6pt 0 0!important;border-top:none!important}.subsection-wrapper{background:#fff!important;border:none!important}.subsection-toggle{padding:6pt 0 2pt!important;background:none!important}.subsection-title{font-family:'Times New Roman',serif!important;font-size:11pt!important;font-style:italic;font-weight:bold;text-transform:none!important;color:#000}.chevron-sm,.chevron-xs{display:none!important}.subsection-inner{padding:4pt 0!important;border-top:none!important}.entry-card{background:#fff!important;border:none!important}.entry-toggle{padding:4pt 0!important;background:none!important}.entry-year,.entry-title,.entry-subtitle{color:#000;font-family:'Times New Roman',serif!important}.entry-title{font-size:11pt;font-weight:normal}.entry-badges{display:none!important}.entry-inner{padding:3pt 0 4pt 40pt!important;border-top:none!important}.entry-abstract{font-family:'Times New Roman',serif!important;font-size:10.5pt;color:#000}.entry-link-row,.entry-media,.video-embed,.entry-video{display:none!important}.highlight-box{background:none!important;border:none!important;border-bottom:1px solid #000;padding:0 0 8pt!important;font-family:'Times New Roman',serif}.cv-footer{border-top-color:#000;color:#000;font-family:'Times New Roman',serif!important}}
</style>
</head>
<body class="light-mode size-md">
<div class="site-nav">
  <a class="site-nav-logo" href="index.html">A.Mirza <span>/</span> site</a>
  <a class="site-nav-link" href="index.html">Home</a>
  <a class="site-nav-link curr" href="AsadMirza_CV.html">CV</a>
  <a class="site-nav-link" href="projects.html">Projects</a>
  <a class="site-nav-link" href="hodgkin-huxley.html">HH Model</a>
  <a class="site-nav-link" href="fea-cfd-calc.html">FEA / CFD</a>
</div>

<div class="top-bar">
  <div class="top-bar-name">${escHtml(h.name)}, ${escHtml(h.degrees)}</div>
  <div class="top-bar-right">
    <button class="tb-btn" onclick="toggleAll()" id="all-btn">⊞ Expand All</button>
    <button class="tb-btn primary" onclick="printCV()">⬇ Download Word CV</button>
  </div>
</div>
<div class="layout-wrapper">
<nav id="nav-sidebar">
  <div class="nav-label">Navigate</div>
  ${navLinks}
</nav>
<main class="main-content">
<div class="hero-canvas">
  <div class="hero-top">
    <div class="hero-left">
      <div class="hero-eyebrow">Curriculum Vitae · ${escHtml(h.title)}</div>
      <h1 class="hero-name"><span class="name-gradient">${escHtml(h.name)}</span></h1>
      <div class="hero-title">${escHtml(h.department)} · ${escHtml(h.institution)}</div>
      <div class="hero-affil">${escHtml(h.address)} &nbsp;·&nbsp; ORCID: ${escHtml(h.orcid)}</div>
      <div class="hero-badges">${heroLinks}</div>
    </div>
    <div class="hero-right">
      <div class="logo-box">
        <img src="${escHtml(h.logoUrl)}" alt="${escHtml(h.name)} Logo" onerror="this.parentElement.innerHTML='<span style=\\'font-family:var(--serif);font-size:2.533em;color:var(--teal)\\'>AM</span>'">
      </div>
    </div>
  </div>
</div>
<div class="stats-ribbon">${statsHtml}</div>
<div class="highlight-box">${h.statement}</div>
${data.sections.map(section).join("\n")}
<div class="cv-footer">
  <span>${escHtml(h.name)}, ${escHtml(h.degrees)} &nbsp;·&nbsp; ${escHtml(h.title)}, ${escHtml(h.institution)} BME &nbsp;·&nbsp; ${escHtml(h.email)}</span>
  <span>Last updated: ${new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})}</span>
</div>
</main>
</div>
<button id="settings-btn" onclick="toggleSettings()" title="Accessibility Settings">⚙</button>
<div id="settings-panel">
  <div class="sp-title">Display Settings</div>
  <div class="sp-row">
    <div class="sp-label">Color Mode</div>
    <div class="sp-toggle-row">
      <span class="sp-toggle-label">Dark Mode</span>
      <label class="toggle-switch"><input type="checkbox" id="theme-toggle" onchange="toggleTheme(this)" checked><span class="toggle-slider"></span></label>
    </div>
  </div>
  <div class="sp-row">
    <div class="sp-label">Font Style</div>
    <div class="sp-font-grid">
      <button class="sp-font-btn active" onclick="setFont('default',this)">Academic</button>
      <button class="sp-font-btn" onclick="setFont('font-modern',this)">Modern</button>
      <button class="sp-font-btn" onclick="setFont('font-classic',this)">Classic</button>
    </div>
  </div>
  <div class="sp-row">
    <div class="sp-label">Font Size</div>
    <div class="sp-size-row">
      <button class="sp-size-btn" onclick="setSize('size-sm',this)">Small</button>
      <button class="sp-size-btn active" onclick="setSize('size-md',this)">Medium</button>
      <button class="sp-size-btn" onclick="setSize('size-lg',this)">Large</button>
    </div>
  </div>
</div>
<script>
function toggleSection(btn){btn.closest('.section-wrapper').classList.toggle('open');updateAllBtn()}
function toggleSubsection(btn){btn.closest('.subsection-wrapper').classList.toggle('open')}
function toggleEntry(btn){btn.closest('.entry-card').classList.toggle('open')}
var allExpanded=false;
function toggleAll(){var s=document.querySelectorAll('.section-wrapper');allExpanded=!allExpanded;s.forEach(function(x){allExpanded?x.classList.add('open'):x.classList.remove('open')});updateAllBtn()}
function updateAllBtn(){var t=document.querySelectorAll('.section-wrapper').length,o=document.querySelectorAll('.section-wrapper.open').length;allExpanded=o===t;document.getElementById('all-btn').textContent=allExpanded?'⊟ Collapse All':'⊞ Expand All'}
function printCV(){document.querySelectorAll('.section-wrapper,.subsection-wrapper,.entry-card').forEach(function(el){el.classList.add('open')});setTimeout(function(){window.print()},300)}
function toggleSettings(){document.getElementById('settings-panel').classList.toggle('open')}
document.addEventListener('click',function(e){var p=document.getElementById('settings-panel'),b=document.getElementById('settings-btn');if(p.classList.contains('open')&&!p.contains(e.target)&&e.target!==b)p.classList.remove('open')});
function toggleTheme(cb){document.body.classList.toggle('light-mode',!cb.checked)}
var fontClasses=['font-classic','font-modern'];
function setFont(cls,btn){document.body.classList.remove.apply(document.body.classList,fontClasses);if(cls!=='default')document.body.classList.add(cls);document.querySelectorAll('.sp-font-btn').forEach(function(b){b.classList.remove('active')});btn.classList.add('active')}
var sizeClasses=['size-sm','size-md','size-lg'];
function setSize(cls,btn){document.body.classList.remove.apply(document.body.classList,sizeClasses);document.body.classList.add(cls);document.querySelectorAll('.sp-size-btn').forEach(function(b){b.classList.remove('active')});btn.classList.add('active')}
var allSections=document.querySelectorAll('.section-wrapper[id]'),navLinks=document.querySelectorAll('#nav-sidebar .nav-link');
if('IntersectionObserver' in window){var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){navLinks.forEach(function(l){l.classList.remove('active')});var al=document.querySelector('#nav-sidebar .nav-link[href="#'+e.target.id+'"]');if(al)al.classList.add('active')}})},{rootMargin:'-25% 0px -65% 0px'});allSections.forEach(function(s){obs.observe(s)})}
</script>
</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────
//  DOWNLOAD HELPERS
// ─────────────────────────────────────────────────────────────
function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 800);
}

// ─────────────────────────────────────────────────────────────
//  RICH TEXT EDITOR
// ─────────────────────────────────────────────────────────────
function RichText({ value, onChange, placeholder = "Write here…", minH = 80 }) {
  const ref  = useRef(null);
  const last = useRef(value);

  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
      last.current = value;
    }
  }, [value]);

  const exec = (cmd, val = null) => { document.execCommand(cmd, false, val); ref.current.focus(); };

  const handleInput = () => {
    const html = ref.current.innerHTML;
    if (html !== last.current) { last.current = html; onChange(html); }
  };

  const insertLink = () => {
    const url = prompt("Enter URL:", "https://");
    if (url) exec("createLink", url);
  };

  const S = styles;
  return (
    <div style={S.rtWrap}>
      <style>{`[contenteditable]:empty:before { content: attr(data-placeholder); color: #94a3b8; pointer-events: none; }`}</style>
      <div style={S.rtBar}>
        {[["Bold","B","bold"],["Italic","I","italic"],["Underline","U","underline"]].map(([t,l,c]) => (
          <button key={c} title={t} style={S.rtBtn} onMouseDown={e=>{e.preventDefault();exec(c)}}>{l}</button>
        ))}
        <button title="Link" style={S.rtBtn} onMouseDown={e=>{e.preventDefault();insertLink()}}>🔗</button>
        <button title="Remove formatting" style={S.rtBtn} onMouseDown={e=>{e.preventDefault();exec("removeFormat")}}>✕</button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onBlur={handleInput}
        data-placeholder={placeholder}
        style={{ ...S.rtArea, minHeight: minH }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  FIELD COMPONENTS
// ─────────────────────────────────────────────────────────────
function Field({ label, value, onChange, multi = false, hint }) {
  const S = styles;
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>{label}{hint && <span style={S.fieldHint}> — {hint}</span>}</label>
      {multi
        ? <textarea style={S.textarea} value={value || ""} rows={3} onChange={e => onChange(e.target.value)} />
        : <input style={S.input} value={value || ""} onChange={e => onChange(e.target.value)} />
      }
    </div>
  );
}

function BadgeEditor({ badges, onChange }) {
  const S = styles;
  const add = () => onChange([...badges, { id: uid(), text: "New Badge", type: "first" }]);
  const del = (id) => onChange(badges.filter(b => b.id !== id));
  const upd = (id, k, v) => onChange(badges.map(b => b.id === id ? { ...b, [k]: v } : b));
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>Badges</label>
      {badges.map(b => (
        <div key={b.id} style={S.inlineRow}>
          <input style={{ ...S.input, flex: 1 }} value={b.text} onChange={e => upd(b.id, "text", e.target.value)} />
          <select style={S.select} value={b.type} onChange={e => upd(b.id, "type", e.target.value)}>
            <option value="first">Teal</option>
            <option value="co">Orange</option>
            <option value="award">Gold</option>
          </select>
          <button style={S.iconBtn} onClick={() => del(b.id)}>🗑</button>
        </div>
      ))}
      <button style={S.addSmBtn} onClick={add}>+ Add Badge</button>
    </div>
  );
}

function LinksEditor({ links, onChange }) {
  const S = styles;
  const add = () => onChange([...links, { id: uid(), text: "Link text", url: "https://" }]);
  const del = (id) => onChange(links.filter(l => l.id !== id));
  const upd = (id, k, v) => onChange(links.map(l => l.id === id ? { ...l, [k]: v } : l));
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>Links</label>
      {links.map(l => (
        <div key={l.id} style={S.inlineRow}>
          <input style={{ ...S.input, flex: 1 }} placeholder="Label" value={l.text} onChange={e => upd(l.id, "text", e.target.value)} />
          <input style={{ ...S.input, flex: 2 }} placeholder="https://…" value={l.url} onChange={e => upd(l.id, "url", e.target.value)} />
          <button style={S.iconBtn} onClick={() => del(l.id)}>🗑</button>
        </div>
      ))}
      <button style={S.addSmBtn} onClick={add}>+ Add Link</button>
    </div>
  );
}

function MetaEditor({ metaItems, onChange }) {
  const S = styles;
  const add = () => onChange([...metaItems, { id: uid(), label: "Label", value: "Value" }]);
  const del = (id) => onChange(metaItems.filter(m => m.id !== id));
  const upd = (id, k, v) => onChange(metaItems.map(m => m.id === id ? { ...m, [k]: v } : m));
  return (
    <div style={S.fieldWrap}>
      <label style={S.fieldLabel}>Meta Info Rows</label>
      {metaItems.map(m => (
        <div key={m.id} style={S.inlineRow}>
          <input style={{ ...S.input, flex: 1 }} placeholder="Label" value={m.label} onChange={e => upd(m.id, "label", e.target.value)} />
          <input style={{ ...S.input, flex: 2 }} placeholder="Value" value={m.value} onChange={e => upd(m.id, "value", e.target.value)} />
          <button style={S.iconBtn} onClick={() => del(m.id)}>🗑</button>
        </div>
      ))}
      <button style={S.addSmBtn} onClick={add}>+ Add Row</button>
    </div>
  );
}

function MediaEditor({ images, videos, onImgChange, onVidChange }) {
  const S = styles;
  const addImg = () => onImgChange([...images, { id: uid(), src: "", alt: "", caption: "" }]);
  const delImg = (id) => onImgChange(images.filter(i => i.id !== id));
  const updImg = (id, k, v) => onImgChange(images.map(i => i.id === id ? { ...i, [k]: v } : i));
  const addVid = () => onVidChange([...videos, { id: uid(), src: "", type: "youtube" }]);
  const delVid = (id) => onVidChange(videos.filter(v => v.id !== id));
  const updVid = (id, k, val) => onVidChange(videos.map(vid => vid.id === id ? { ...vid, [k]: val } : vid));
  return (
    <div>
      <div style={S.fieldWrap}>
        <label style={S.fieldLabel}>Images <span style={S.fieldHint}>— URL (external) or src/images/filename.jpg (GitHub)</span></label>
        {images.map(img => (
          <div key={img.id} style={{ marginBottom: 6 }}>
            <div style={S.inlineRow}>
              <input style={{ ...S.input, flex: 3 }} placeholder="Image URL or src/images/..." value={img.src} onChange={e => updImg(img.id, "src", e.target.value)} />
              <input style={{ ...S.input, flex: 2 }} placeholder="Alt text" value={img.alt} onChange={e => updImg(img.id, "alt", e.target.value)} />
              <button style={S.iconBtn} onClick={() => delImg(img.id)}>🗑</button>
            </div>
            {img.src && <img src={img.src} alt={img.alt} style={{ maxWidth: 180, maxHeight: 100, borderRadius: 4, marginTop: 4, border: "1px solid #ddd" }} onError={e => e.target.style.display="none"} />}
          </div>
        ))}
        <button style={S.addSmBtn} onClick={addImg}>+ Add Image</button>
      </div>
      <div style={S.fieldWrap}>
        <label style={S.fieldLabel}>Videos <span style={S.fieldHint}>— YouTube URL or src/videos/file.mp4</span></label>
        {videos.map(v => (
          <div key={v.id} style={S.inlineRow}>
            <input style={{ ...S.input, flex: 3 }} placeholder="YouTube URL or src/videos/..." value={v.src} onChange={e => updVid(v.id, "src", e.target.value)} />
            <select style={S.select} value={v.type} onChange={e => updVid(v.id, "type", e.target.value)}>
              <option value="youtube">YouTube</option>
              <option value="local">Local file</option>
            </select>
            <button style={S.iconBtn} onClick={() => delVid(v.id)}>🗑</button>
          </div>
        ))}
        <button style={S.addSmBtn} onClick={addVid}>+ Add Video</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  HERO EDITOR
// ─────────────────────────────────────────────────────────────
function HeroEditor({ hero, onChange }) {
  const S = styles;
  const upd = (k, v) => onChange({ ...hero, [k]: v });
  const updLink = (id, k, v) => upd("links", hero.links.map(l => l.id === id ? { ...l, [k]: v } : l));
  const addLink = () => upd("links", [...hero.links, { id: uid(), label: "New Link", url: "https://" }]);
  const delLink = (id) => upd("links", hero.links.filter(l => l.id !== id));
  const updStat = (id, k, v) => upd("stats", hero.stats.map(s => s.id === id ? { ...s, [k]: v } : s));
  const addStat = () => upd("stats", [...hero.stats, { id: uid(), num: "0", label: "New" }]);
  const delStat = (id) => upd("stats", hero.stats.filter(s => s.id !== id));

  return (
    <div style={S.editorPanel}>
      <div style={S.editorHeader}><span>🏠 Hero / Header</span></div>
      <div style={S.editorBody}>
        <div style={S.twoCol}>
          <Field label="Name" value={hero.name} onChange={v => upd("name", v)} />
          <Field label="Degrees (suffix)" value={hero.degrees} onChange={v => upd("degrees", v)} />
        </div>
        <Field label="Title" value={hero.title} onChange={v => upd("title", v)} />
        <div style={S.twoCol}>
          <Field label="Department" value={hero.department} onChange={v => upd("department", v)} />
          <Field label="Institution" value={hero.institution} onChange={v => upd("institution", v)} />
        </div>
        <div style={S.twoCol}>
          <Field label="Address" value={hero.address} onChange={v => upd("address", v)} />
          <Field label="Email" value={hero.email} onChange={v => upd("email", v)} />
        </div>
        <div style={S.twoCol}>
          <Field label="ORCID" value={hero.orcid} onChange={v => upd("orcid", v)} />
          <Field label="Logo Image URL" value={hero.logoUrl} onChange={v => upd("logoUrl", v)} hint="src/images/Logo_V1.png or external URL" />
        </div>
        {hero.logoUrl && <img src={hero.logoUrl} alt="Logo preview" style={{ width: 80, height: 80, objectFit: "contain", border: "1px solid #ddd", borderRadius: 8, marginBottom: 12 }} onError={e => e.target.style.display="none"} />}

        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>Profile Statement <span style={S.fieldHint}>— supports HTML tags</span></label>
          <RichText value={hero.statement} onChange={v => upd("statement", v)} minH={80} />
        </div>

        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>Header Links / Badges</label>
          {hero.links.map(l => (
            <div key={l.id} style={S.inlineRow}>
              <input style={{ ...S.input, flex: 1 }} placeholder="Label (emoji ok)" value={l.label} onChange={e => updLink(l.id, "label", e.target.value)} />
              <input style={{ ...S.input, flex: 2 }} placeholder="URL" value={l.url} onChange={e => updLink(l.id, "url", e.target.value)} />
              <button style={S.iconBtn} onClick={() => delLink(l.id)}>🗑</button>
            </div>
          ))}
          <button style={S.addSmBtn} onClick={addLink}>+ Add Link</button>
        </div>

        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>Stats Bar</label>
          {hero.stats.map(s => (
            <div key={s.id} style={S.inlineRow}>
              <input style={{ ...S.input, flex: 1 }} placeholder="Number" value={s.num} onChange={e => updStat(s.id, "num", e.target.value)} />
              <input style={{ ...S.input, flex: 2 }} placeholder="Label" value={s.label} onChange={e => updStat(s.id, "label", e.target.value)} />
              <button style={S.iconBtn} onClick={() => delStat(s.id)}>🗑</button>
            </div>
          ))}
          <button style={S.addSmBtn} onClick={addStat}>+ Add Stat</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION EDITOR
// ─────────────────────────────────────────────────────────────
function SectionEditor({ section, onChange }) {
  const S = styles;
  const upd = (k, v) => onChange({ ...section, [k]: v });
  return (
    <div style={S.editorPanel}>
      <div style={S.editorHeader}><span>{section.icon} Section Settings</span></div>
      <div style={S.editorBody}>
        <div style={S.twoCol}>
          <Field label="Icon (emoji)" value={section.icon} onChange={v => upd("icon", v)} />
          <Field label="Title" value={section.title} onChange={v => upd("title", v)} />
        </div>
        <Field label="Subtitle" value={section.subtitle} onChange={v => upd("subtitle", v)} hint="shown in collapsed view" />
        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>
            <input type="checkbox" checked={section.defaultOpen} onChange={e => upd("defaultOpen", e.target.checked)} style={{ marginRight: 6 }} />
            Open by default when CV loads
          </label>
        </div>
        <div style={{ marginTop: 8, padding: "10px 14px", background: "#f0f9ff", borderRadius: 6, fontSize: 13, color: "#0369a1" }}>
          💡 Click a subsection or entry in the sidebar to edit its content.
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SUBSECTION EDITOR
// ─────────────────────────────────────────────────────────────
function SubsectionEditor({ sub, onChange }) {
  const S = styles;
  const upd = (k, v) => onChange({ ...sub, [k]: v });
  return (
    <div style={S.editorPanel}>
      <div style={S.editorHeader}><span>📂 Subsection Settings</span></div>
      <div style={S.editorBody}>
        <Field label="Subsection Title" value={sub.title} onChange={v => upd("title", v)} hint="leave blank to hide the subsection header" />
        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>
            <input type="checkbox" checked={sub.defaultOpen} onChange={e => upd("defaultOpen", e.target.checked)} style={{ marginRight: 6 }} />
            Open by default
          </label>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  ENTRY EDITOR (the main one)
// ─────────────────────────────────────────────────────────────
function EntryEditor({ entry, onChange }) {
  const S = styles;
  const upd = (k, v) => onChange({ ...entry, [k]: v });
  return (
    <div style={S.editorPanel}>
      <div style={S.editorHeader}><span>✏️ Edit Entry</span></div>
      <div style={S.editorBody}>
        <div style={S.twoCol}>
          <Field label="Year / Date" value={entry.year} onChange={v => upd("year", v)} hint='e.g. "2024" or "Feb 2024"' />
          <div />
        </div>
        <Field label="Title" value={entry.title} onChange={v => upd("title", v)} />
        <Field label="Subtitle" value={entry.subtitle} onChange={v => upd("subtitle", v)} hint="italic line under title" />
        <BadgeEditor badges={entry.badges || []} onChange={v => upd("badges", v)} />
        <div style={S.fieldWrap}>
          <label style={S.fieldLabel}>Body / Abstract <span style={S.fieldHint}>— rich text, supports bold/italic/links</span></label>
          <RichText value={entry.abstract} onChange={v => upd("abstract", v)} placeholder="Entry body text…" minH={100} />
        </div>
        <MetaEditor metaItems={entry.metaItems || []} onChange={v => upd("metaItems", v)} />
        <LinksEditor links={entry.links || []} onChange={v => upd("links", v)} />
        <MediaEditor
          images={entry.images || []} videos={entry.videos || []}
          onImgChange={v => upd("images", v)} onVidChange={v => upd("videos", v)}
        />
        <Field label="Developer Notes" value={entry.notes} onChange={v => upd("notes", v)} multi hint="not shown in CV — for your reference" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SIDEBAR TREE
// ─────────────────────────────────────────────────────────────
function Sidebar({ data, selected, onSelect, onData }) {
  const S = styles;
  const [expanded, setExpanded] = useState({ hero: true });
  const tog = (id) => setExpanded(p => ({ ...p, [id]: !p[id] }));

  const moveSection = (idx, dir) => {
    const arr = [...data.sections];
    const to = idx + dir;
    if (to < 0 || to >= arr.length) return;
    [arr[idx], arr[to]] = [arr[to], arr[idx]];
    onData({ ...data, sections: arr });
  };
  const moveEntry = (si, subi, ei, dir) => {
    const arr = data.sections.map((s, i) => i !== si ? s : {
      ...s, subsections: s.subsections.map((sub, j) => j !== subi ? sub : {
        ...sub, entries: (() => { const e = [...sub.entries]; const to = ei + dir; if (to < 0 || to >= e.length) return e; [e[ei], e[to]] = [e[to], e[ei]]; return e; })()
      })
    });
    onData({ ...data, sections: arr });
  };
  const addSection = () => {
    const ns = { id: uid(), icon: "📌", title: "New Section", subtitle: "Add subtitle", defaultOpen: false, subsections: [{ id: uid(), title: "", defaultOpen: true, entries: [] }] };
    onData({ ...data, sections: [ns, ...data.sections] });
  };
  const delSection = (id) => { onData({ ...data, sections: data.sections.filter(s => s.id !== id) }); };
  const addSubsection = (si) => {
    const nsub = { id: uid(), title: "New Subsection", defaultOpen: true, entries: [] };
    onData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: [nsub, ...s.subsections] }) });
  };
  const delSubsection = (si, subi) => {
    onData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: s.subsections.filter((_, j) => j !== subi) }) });
  };
  const addEntry = (si, subi) => {
    const ne = { id: uid(), year: new Date().getFullYear().toString(), title: "New Entry", subtitle: "", badges: [], abstract: "", metaItems: [], links: [], images: [], videos: [], notes: "" };
    onData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: s.subsections.map((sub, j) => j !== subi ? sub : { ...sub, entries: [ne, ...sub.entries] }) }) });
    onSelect({ type: "entry", si, subi, ei: 0 }); // new entry is first (top)
  };
  const delEntry = (si, subi, ei) => {
    onData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: s.subsections.map((sub, j) => j !== subi ? sub : { ...sub, entries: sub.entries.filter((_, k) => k !== ei) }) }) });
    if (selected?.type === "entry" && selected.si === si && selected.subi === subi && selected.ei === ei) onSelect(null);
  };

  const isSelected = (type, ...ids) => {
    if (!selected || selected.type !== type) return false;
    if (type === "hero") return true;
    if (type === "section") return selected.si === ids[0];
    if (type === "sub") return selected.si === ids[0] && selected.subi === ids[1];
    if (type === "entry") return selected.si === ids[0] && selected.subi === ids[1] && selected.ei === ids[2];
    return false;
  };

  return (
    <div style={S.sidebar}>
      <div style={S.sidebarTitle}>CV Structure</div>

      {/* HERO */}
      <div style={{ ...S.sidebarItem, ...(isSelected("hero") ? S.sidebarItemActive : {}) }} onClick={() => onSelect({ type: "hero" })}>
        🏠 Hero / Header
      </div>

      {/* SECTIONS */}
      {data.sections.map((sec, si) => (
        <div key={sec.id}>
          <div style={S.sectionNode}>
            <button style={S.expandBtn} onClick={e => { e.stopPropagation(); tog(sec.id); }}>{expanded[sec.id] ? "▼" : "▶"}</button>
            <div style={{ ...S.sidebarItem, ...S.sidebarItemSec, flex: 1, ...(isSelected("section", si) ? S.sidebarItemActive : {}) }}
              onClick={() => onSelect({ type: "section", si })}>
              {sec.icon} {sec.title}
            </div>
            <div style={S.miniActions}>
              <button style={S.miniBtn} title="Move up" onClick={e => { e.stopPropagation(); moveSection(si, -1); }}>↑</button>
              <button style={S.miniBtn} title="Move down" onClick={e => { e.stopPropagation(); moveSection(si, 1); }}>↓</button>
              <button style={{ ...S.miniBtn, color: "#ef4444" }} title="Delete section" onClick={e => { e.stopPropagation(); delSection(sec.id); }}>✕</button>
            </div>
          </div>

          {expanded[sec.id] && sec.subsections.map((sub, subi) => (
            <div key={sub.id}>
              <div style={S.subNode}>
                <div style={{ ...S.sidebarItem, ...S.sidebarItemSub, flex: 1, ...(isSelected("sub", si, subi) ? S.sidebarItemActive : {}) }}
                  onClick={() => onSelect({ type: "sub", si, subi })}>
                  {sub.title || <em style={{ opacity: 0.5 }}>Untitled group</em>}
                </div>
                <div style={S.miniActions}>
                  <button style={S.miniBtn} title="Add entry here" onClick={e => { e.stopPropagation(); addEntry(si, subi); }}>+</button>
                  <button style={{ ...S.miniBtn, color: "#ef4444" }} title="Delete subsection" onClick={e => { e.stopPropagation(); delSubsection(si, subi); }}>✕</button>
                </div>
              </div>

              {sub.entries.map((entry, ei) => (
                <div key={entry.id} style={S.entryNode}>
                  <div style={{ ...S.sidebarItem, ...S.sidebarItemEntry, flex: 1, ...(isSelected("entry", si, subi, ei) ? S.sidebarItemActive : {}) }}
                    onClick={() => onSelect({ type: "entry", si, subi, ei })}>
                    {entry.year && <span style={{ opacity: 0.55, marginRight: 5, fontSize: "0.85em" }}>{entry.year}</span>}
                    {entry.title.length > 30 ? entry.title.slice(0, 30) + "…" : entry.title}
                  </div>
                  <div style={S.miniActions}>
                    <button style={S.miniBtn} title="Move up" onClick={e => { e.stopPropagation(); moveEntry(si, subi, ei, -1); }}>↑</button>
                    <button style={S.miniBtn} title="Move down" onClick={e => { e.stopPropagation(); moveEntry(si, subi, ei, 1); }}>↓</button>
                    <button style={{ ...S.miniBtn, color: "#ef4444" }} title="Delete entry" onClick={e => { e.stopPropagation(); delEntry(si, subi, ei); }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {expanded[sec.id] && (
            <button style={S.addSubBtn} onClick={() => addSubsection(si)}>+ Add Group</button>
          )}
        </div>
      ))}

      <button style={S.addSectionBtn} onClick={addSection}>+ Add Section</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  MAIN APP
// ─────────────────────────────────────────────────────────────
export default function CVEditor() {
  const [data, setData]         = useState(INITIAL_DATA);
  const [selected, setSelected] = useState({ type: "hero" });
  const [saved, setSaved]       = useState(false);
  const [histVer, setHistVer]   = useState(0); // triggers re-render for button states
  const histStack = useRef([INITIAL_DATA]);
  const histPos   = useRef(0);
  const S = styles;

  // All mutations go through pushData so every change is undoable
  const pushData = (newData) => {
    const stack = histStack.current.slice(0, histPos.current + 1);
    stack.push(newData);
    if (stack.length > 60) stack.shift(); // cap history at 60 states
    histStack.current = stack;
    histPos.current   = stack.length - 1;
    setData(newData);
    setHistVer(v => v + 1);
  };

  const undo = () => {
    if (histPos.current <= 0) return;
    histPos.current -= 1;
    setData(histStack.current[histPos.current]);
    setHistVer(v => v + 1);
  };
  const redo = () => {
    if (histPos.current >= histStack.current.length - 1) return;
    histPos.current += 1;
    setData(histStack.current[histPos.current]);
    setHistVer(v => v + 1);
  };
  const canUndo = histPos.current > 0;
  const canRedo = histPos.current < histStack.current.length - 1;

  // Keyboard shortcuts: Ctrl+Z / Ctrl+Y (or Ctrl+Shift+Z)
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if ((e.metaKey || e.ctrlKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  // Update functions — use pushData so undo works for every field change
  const updateHero    = (h)              => pushData({ ...data, hero: h });
  const updateSection = (si, sec)        => pushData({ ...data, sections: data.sections.map((s, i) => i === si ? sec : s) });
  const updateSub     = (si, subi, sub)  => pushData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: s.subsections.map((sb, j) => j === subi ? sub : sb) }) });
  const updateEntry   = (si, subi, ei, entry) => pushData({ ...data, sections: data.sections.map((s, i) => i !== si ? s : { ...s, subsections: s.subsections.map((sb, j) => j !== subi ? sb : { ...sb, entries: sb.entries.map((e, k) => k === ei ? entry : e) }) }) });

  const exportHTML = () => {
    downloadFile(generateCV(data), "AsadMirza_CV_v2.html", "text/html");
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };
  const exportJSON = () => downloadFile(JSON.stringify(data, null, 2), "cv_data.json", "application/json");
  const importJSON = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const r = new FileReader();
    r.onload = ev => { try { pushData(JSON.parse(ev.target.result)); setSelected({ type: "hero" }); } catch { alert("Invalid JSON file"); } };
    r.readAsText(file);
    e.target.value = "";
  };

  const renderEditor = () => {
    if (!selected) return <div style={{ padding: 40, color: "#888" }}>Select something from the sidebar to edit it.</div>;
    if (selected.type === "hero") return <HeroEditor hero={data.hero} onChange={updateHero} />;
    if (selected.type === "section") return <SectionEditor section={data.sections[selected.si]} onChange={s => updateSection(selected.si, s)} />;
    if (selected.type === "sub") {
      const sub = data.sections[selected.si]?.subsections[selected.subi];
      return sub ? <SubsectionEditor sub={sub} onChange={s => updateSub(selected.si, selected.subi, s)} /> : null;
    }
    if (selected.type === "entry") {
      const entry = data.sections[selected.si]?.subsections[selected.subi]?.entries[selected.ei];
      return entry ? <EntryEditor entry={entry} onChange={e => updateEntry(selected.si, selected.subi, selected.ei, e)} /> : null;
    }
    return null;
  };

  return (
    <div style={S.app}>
      {/* TOP BAR */}
      <div style={S.topBar}>
        <div style={S.topTitle}>
          <span style={{ fontSize: 20 }}>📝</span>
          <span style={S.topTitleText}>CV Editor</span>
          <span style={{ fontSize: 12, color: "#64748b", marginLeft: 8 }}>Asad Mirza</span>
        </div>
        <div style={S.topActions}>
          {/* UNDO / REDO */}
          <div style={{ display:"flex", gap:2, background:"#f1f5f9", borderRadius:8, padding:2 }}>
            <button
              title="Undo (Ctrl+Z)"
              style={{ ...S.btn, background:"transparent", color: canUndo ? "#334155" : "#cbd5e1", padding:"7px 10px", fontSize:16 }}
              onClick={undo}
              disabled={!canUndo}
            >↩</button>
            <button
              title="Redo (Ctrl+Y)"
              style={{ ...S.btn, background:"transparent", color: canRedo ? "#334155" : "#cbd5e1", padding:"7px 10px", fontSize:16 }}
              onClick={redo}
              disabled={!canRedo}
            >↪</button>
          </div>
          <div style={{ width:1, background:"#e2e8f0", margin:"0 2px" }} />
          <label style={{ ...S.btn, background: "#f1f5f9", color: "#334155", cursor: "pointer" }}>
            📂 Import JSON <input type="file" accept=".json" onChange={importJSON} style={{ display: "none" }} />
          </label>
          <button style={{ ...S.btn, background: "#f1f5f9", color: "#334155" }} onClick={exportJSON}>⬇ Export JSON</button>
          <button style={{ ...S.btn, background: saved ? "#16a34a" : "#0f766e", color: "#fff" }} onClick={exportHTML}>
            {saved ? "✓ Downloaded!" : "⬇ Export CV HTML"}
          </button>
        </div>
      </div>

      {/* BODY */}
      <div style={S.body}>
        <Sidebar data={data} selected={selected} onSelect={setSelected} onData={pushData} />
        <div style={S.mainArea}>
          {renderEditor()}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────────────────────
const styles = {
  app:   { display:"flex", flexDirection:"column", height:"100vh", fontFamily:"system-ui,sans-serif", background:"#f8fafc", color:"#1e293b", fontSize:14 },
  topBar:{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 20px", background:"#fff", borderBottom:"1px solid #e2e8f0", gap:12, flexShrink:0 },
  topTitle:{ display:"flex", alignItems:"center", gap:8 },
  topTitleText:{ fontWeight:700, fontSize:16, color:"#0f766e" },
  topActions:{ display:"flex", gap:8, alignItems:"center" },
  btn:{ padding:"7px 14px", borderRadius:8, border:"none", fontWeight:600, cursor:"pointer", fontSize:13, transition:"opacity 0.15s", whiteSpace:"nowrap" },
  body:{ display:"flex", flex:1, overflow:"hidden" },

  sidebar:{ width:250, flexShrink:0, background:"#1e293b", color:"#e2e8f0", overflowY:"auto", display:"flex", flexDirection:"column", padding:"12px 0 20px" },
  sidebarTitle:{ fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"#64748b", padding:"0 14px 10px" },
  sidebarItem:{ flex:1, padding:"6px 10px", borderRadius:6, cursor:"pointer", fontSize:13, color:"#94a3b8", transition:"all 0.15s", userSelect:"none", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" },
  sidebarItemActive:{ background:"#0f766e33", color:"#2dd4bf", fontWeight:600 },
  sidebarItemSec:{ fontWeight:600, color:"#cbd5e1" },
  sidebarItemSub:{ color:"#94a3b8", fontStyle:"italic" },
  sidebarItemEntry:{ color:"#64748b", fontSize:12 },
  sectionNode:{ display:"flex", alignItems:"center", padding:"2px 8px" },
  subNode:{ display:"flex", alignItems:"center", padding:"1px 8px 1px 28px" },
  entryNode:{ display:"flex", alignItems:"center", padding:"1px 8px 1px 42px" },
  expandBtn:{ background:"none", border:"none", color:"#475569", cursor:"pointer", fontSize:10, padding:"2px 4px", flexShrink:0 },
  miniActions:{ display:"flex", gap:2, flexShrink:0 },
  miniBtn:{ background:"none", border:"none", color:"#475569", cursor:"pointer", fontSize:11, padding:"2px 3px", lineHeight:1 },
  addSubBtn:{ display:"block", margin:"2px 8px 2px 28px", background:"none", border:"1px dashed #334155", borderRadius:5, color:"#475569", cursor:"pointer", fontSize:11, padding:"3px 8px", textAlign:"left" },
  addSectionBtn:{ margin:"10px 12px 0", background:"none", border:"1px dashed #0f766e", borderRadius:6, color:"#0f766e", cursor:"pointer", fontSize:12, padding:"5px 10px", fontWeight:600 },

  mainArea:{ flex:1, overflowY:"auto", padding:"0" },
  editorPanel:{ display:"flex", flexDirection:"column", height:"100%" },
  editorHeader:{ padding:"14px 20px", background:"#fff", borderBottom:"1px solid #e2e8f0", fontSize:15, fontWeight:700, color:"#0f766e", position:"sticky", top:0, zIndex:10 },
  editorBody:{ padding:"20px", overflowY:"auto", flex:1 },

  fieldWrap:{ marginBottom:16 },
  fieldLabel:{ display:"block", fontSize:12, fontWeight:700, color:"#334155", marginBottom:5, textTransform:"uppercase", letterSpacing:"0.05em" },
  fieldHint:{ fontWeight:400, textTransform:"none", color:"#94a3b8" },
  input:{ width:"100%", padding:"7px 10px", border:"1px solid #e2e8f0", borderRadius:6, fontSize:13, color:"#1e293b", background:"#fff", outline:"none", transition:"border-color 0.15s" },
  textarea:{ width:"100%", padding:"7px 10px", border:"1px solid #e2e8f0", borderRadius:6, fontSize:13, color:"#1e293b", background:"#fff", outline:"none", resize:"vertical", fontFamily:"inherit" },
  select:{ padding:"7px 8px", border:"1px solid #e2e8f0", borderRadius:6, fontSize:12, color:"#1e293b", background:"#fff", cursor:"pointer" },
  inlineRow:{ display:"flex", gap:6, marginBottom:6, alignItems:"center" },
  iconBtn:{ background:"none", border:"none", cursor:"pointer", fontSize:14, padding:"2px 4px", flexShrink:0, color:"#ef4444" },
  addSmBtn:{ background:"none", border:"1px dashed #cbd5e1", borderRadius:5, color:"#64748b", cursor:"pointer", fontSize:12, padding:"4px 10px", marginTop:4 },
  twoCol:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 },

  rtWrap:{ border:"1px solid #e2e8f0", borderRadius:6, overflow:"hidden", background:"#fff" },
  rtBar:{ display:"flex", gap:4, padding:"6px 8px", background:"#f8fafc", borderBottom:"1px solid #e2e8f0" },
  rtBtn:{ background:"none", border:"1px solid #e2e8f0", borderRadius:4, cursor:"pointer", fontSize:12, padding:"2px 8px", color:"#334155", fontWeight:600, transition:"background 0.1s" },
  rtArea:{ padding:"10px 12px", outline:"none", fontSize:13, lineHeight:1.65, color:"#1e293b" },
};
