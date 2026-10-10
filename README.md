# Jyothika A P — Personal Portfolio & Technical Field Notebook

[![Live Status](https://img.shields.io/badge/Status-Research_%26_Internships_Ready-5B3CC4?style=flat-square)](#)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.0-black?style=flat-square&logo=next.js)](#)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat-square&logo=react)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](#)

> **"I build for what matters."**  
> An independent editorial magazine crossed with an engineer's field notebook and a personal research lab. Exploring healthcare deep learning, on-device mobile cybersecurity, women's economic opportunity, and open-source quantum tooling.

---

## 🏛️ Personal Identity & Provenance

* **Name**: Jyothika A P (Jyothika Pratheep)
* **Institution**: Indian Institute of Information Technology (IIIT) Kottayam, Kerala, India
* **Degree**: Bachelor of Technology in Computer Science and Engineering (2023 – 2027)
* **Email**: [jyothikapratheep@gmail.com](mailto:jyothikapratheep@gmail.com)
* **GitHub**: [@jyothikacodes](https://github.com/jyothikacodes)
* **LinkedIn**: [in/jyothikapratheep](https://www.linkedin.com/in/jyothikapratheep/)

---

## 🔬 Flagship Projects & Research

### 1. [HIV-ESM2-Enhanced](https://github.com/jyothikacodes/HIV-ESM2-Enhanced)
* **Domain**: Computational Biology & Healthcare Deep Learning
* **Dataset**: Stanford HIV Drug Resistance Database (HIVDB) across 18 antiretroviral therapies (PI, NRTI, NNRTI).
* **Architecture**: ESM-2 650M per-residue embeddings with rare-mutation-aware multi-head attention pooling and downstream tree/neural classifiers.
* **Evaluation Integrity**: Explains the difference between earlier non-nested optimistic 0.968 target bounds and the true, unbiased **~0.9487 Mean AUC** nested cross-validation baseline on the full cohort. Features dual Tree SHAP and integrated gradient explainability.

### 2. [Shadow-Walk System](https://github.com/jyothikacodes/shadow-walk-system)
* **Domain**: Human-Centered Navigation & Real-Time Sockets
* **Problem**: Standard routing optimizes purely for distance, routing pedestrians through pitch-black alleys.
* **Architecture**: Street Vibrancy heuristic factoring in open 24/7 businesses, lighting telemetry, and verified hazards. Real-time Node.js + Socket.io emergency incident broadcast pipeline (`/report-shadow`) and Leaflet GIS console.

### 3. Ullaas
* **Domain**: Inclusive Commerce & Voice Interaction
* **Problem**: Lowering digital literacy and language barriers for regional women micro-entrepreneurs in Kerala.
* **Architecture**: Conversational, voice-first product listing pipeline in Malayalam, Hindi, and Tamil, generating structured catalog items without typing forms.

### 4. [RakshakX](https://github.com/a6hinandh/RakshakX)
* **Domain**: On-Device Cybersecurity & Edge AI
* **Context**: Developed with team InnovateX at **NMIT HACKS 2026**.
* **Architecture**: Unifies 5 mobile attack surfaces (SMS, Voice Calls, Email, Web, Messaging) with a MITRE ATT&CK-aligned `MultiChannelCorrelationEngine`. 100% on-device ONNX ML and local DNS sinkholing via Android VPN API without breaking HTTPS/TLS encryption guarantees.

### 5. JANUS (Code RAG V3)
* **Domain**: Compatibility-Aware Code Retrieval under Software Evolution
* **Scale**: 2,269 mined historical usages across 9 mature Python repositories (15,387 commits).
* **Contribution**: Discovered and eliminated query token leakage by engineering deterministic target-state AST queries. Achieved **94.6%–100% harmful code removal** with zero loss of useful old code at $k \in \{1, 3, 5\}$.

### 6. VELI-FLOW
* **Domain**: Estuarine Hydrodynamic Risk Engine
* **Context**: Developed for **Make Her Hack (CITTIC, CUSAT)**.
* **Architecture**: Evaluates Cochin Port astronomical tidal constituents ($M_2, S_2, K_1, O_1$) against Operation Breakthrough canal bottlenecks with Dijkstra dynamic flood bypassing. 17/17 automated acceptance tests verified.

---

## 🎨 Visual Identity & Design System

* **Paper & Ink Foundation**: Warm paper background (`#F7F5F0`), near-black ink (`#171717`), deep violet accents (`#5B3CC4`), lavender highlights (`#A78BFA`), and low-contrast warm borders (`#E2DDD5`).
* **Editorial Typography**: 
  * Expressive Display: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)
  * Interface & Body: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  * Field Metadata & Technical Labels: [Geist Mono](https://vercel.com/font)
* **Photographic Plates**:
  * `Plate 01`: Principal Portrait (`sittingstraight.jpeg`)
  * `Plate 02`: Technical Discourse (`sittingpose.jpeg`)
  * `Plate 03`: Ecosystem Candid (`standingpose.jpeg` at Kerala Startup Mission)
  * Signature Stamp: Personal Cartoon Logo (`melogo.jpeg`)

---

## ⚡ Quick Start

```bash
# Clone repository
git clone https://github.com/jyothikacodes/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server (port 3001)
npm run dev

# Compile production build
npm run build

# Start production server
npm start
```

Visit `http://localhost:3001` or access the dedicated executive recruiter dossier at `http://localhost:3001/resume`.

---

## 📄 License & Attribution

Designed and engineered by **Jyothika A P**. MIT License.
