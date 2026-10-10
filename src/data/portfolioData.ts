export interface Project {
  id: string;
  tag: string;
  category: "HEALTH / RESEARCH" | "SAFETY / SYSTEMS" | "OPPORTUNITY / ACCESS" | "CYBERSECURITY / EDGE AI" | "CODE RAG / RESEARCH" | "HYDRODYNAMICS";
  title: string;
  tagline: string;
  problem: string;
  importance: string;
  hypothesisOrApproach: string;
  myContribution: string;
  architectureDetails: string[];
  engineeringDecisions: string[];
  evaluationAndResults: {
    label: string;
    value: string;
    detail: string;
    isVerified: boolean;
  }[];
  limitationsAndLearnings: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  verifiedStatus: string;
}

export interface FieldNote {
  id: string;
  date: string;
  category: "QUANTUM COMPUTING" | "COMPUTATIONAL BIOLOGY" | "METHODOLOGICAL RIGOR" | "OPEN SOURCE";
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
  link?: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  evidenceBadge: string;
}

export const PERSONAL_INFO = {
  name: "Jyothika A P",
  alias: "Jyothika Pratheep",
  tagline: "I BUILD FOR WHAT MATTERS.",
  subheadline:
    "Exploring how computation can solve meaningful problems—from healthcare deep learning and on-device security to women's economic opportunity and open-source quantum tooling.",
  location: "Kerala, India",
  coordinates: "9.75° N, 76.65° E",
  institution: "IIIT Kottayam",
  degree: "B.Tech in Computer Science and Engineering",
  graduationYear: "2027",
  email: "jyothikapratheep@gmail.com",
  github: "https://github.com/jyothikacodes",
  linkedin: "https://www.linkedin.com/in/jyothikapratheep/",
  availabilityStatus: "Open for AI/ML & Research Internships",
  corePhilosophy:
    "Technology is the medium; human agency, safety, and understanding are the reason. I build systems where computation has somewhere useful to go.",
};

export const IMPACT_PILLARS = [
  {
    id: "health",
    title: "HEALTH",
    tagline: "Biological sequences as computational information",
    question: "How can protein language models assist clinical decisions in HIV resistance without data leakage?",
    summary:
      "Bridging biology and machine learning by treating viral protein mutations as language embeddings, evaluating resistance across 18 antiretroviral therapies with strict nested cross-validation.",
    projectRef: "hiv-esm2",
    metric: "~0.9487 Mean AUC",
    metricLabel: "Strict Nested CV (18 Drugs)",
    accentColor: "border-emerald-700/30 text-emerald-950 bg-emerald-50/50",
  },
  {
    id: "safety",
    title: "SAFETY",
    tagline: "Context-aware mobility and dynamic risk mitigation",
    question: "What changes when pedestrian navigation prioritizes street vibrancy over shortest geometric distance?",
    summary:
      "Designing navigation algorithms that correlate commercial opening hours, street illumination, and crowd reports to route pedestrians through active, well-lit public corridors instead of isolated shortcuts.",
    projectRef: "shadow-walk",
    metric: "Real-time Sockets",
    metricLabel: "Vibrancy Heuristic + SOS Broadcast",
    accentColor: "border-amber-700/30 text-amber-950 bg-amber-50/50",
  },
  {
    id: "opportunity",
    title: "OPPORTUNITY",
    tagline: "Lowering barriers to grassroots economic agency",
    question: "How can conversational voice technology enable regional women artisans to access digital commerce?",
    summary:
      "Creating voice-first, multilingual catalog and commerce interfaces so regional micro-entrepreneurs can list and sell handcrafted goods without digital literacy or typing barriers.",
    projectRef: "ullaas",
    metric: "Voice-First UX",
    metricLabel: "Multilingual Regional Micro-Commerce",
    accentColor: "border-purple-700/30 text-purple-950 bg-purple-50/50",
  },
  {
    id: "access",
    title: "ACCESS",
    tagline: "Privacy-preserving defenses and open-source tooling",
    question: "How do we protect vulnerable users against multi-channel fraud without exfiltrating their private data?",
    summary:
      "Deploying on-device machine learning and local DNS sinkholing to intercept multi-stage phishing kill chains across SMS, voice, and web—keeping zero user data on remote servers.",
    projectRef: "rakshakx",
    metric: "100% On-Device",
    metricLabel: "Zero Cloud Exfiltration (ONNX Runtime)",
    accentColor: "border-blue-700/30 text-blue-950 bg-blue-50/50",
  },
];

export const FLAGSHIP_PROJECTS: Project[] = [
  {
    id: "hiv-esm2",
    tag: "PROJ-01 // HEALTHCARE DEEP LEARNING",
    category: "HEALTH / RESEARCH",
    title: "HIV-ESM2-Enhanced",
    tagline: "HIV-1 Drug Resistance Prediction with Protein Language Models and Methodological Rigor",
    problem:
      "HIV-1 mutates rapidly under antiretroviral pressure. Traditional rule-based genotypic interpretation fails to capture high-order epistatic interactions between rare amino acid mutations, while naive deep learning pipelines suffer from severe meta-learner leakage and hyperparameter bias.",
    importance:
      "Accurate computational resistance scoring across Nucleoside Reverse Transcriptase Inhibitors (NRTIs), Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs), and Protease Inhibitors (PIs) enables targeted second-line regimen selection without expensive phenotypic assays.",
    hypothesisOrApproach:
      "Leverage zero-shot contextual representations from ESM-2 (650M parameter protein language model) paired with rare-mutation-aware multi-head attention pooling and tree-based/neural ensembles evaluated under strict nested stratified cross-validation.",
    myContribution:
      "Formulated the end-to-end research methodology, extracted per-residue ESM-2 representations across 18 antiretroviral therapies from the Stanford HIVDB, designed the rare-mutation attention head, conducted post-hoc Platt scaling calibration, and implemented dual explainability via Tree SHAP and integrated gradients.",
    architectureDetails: [
      "Protein Language Backbone: ESM-2 650M per-residue embedding extraction (selected representation layers).",
      "Attention Pooling: Multi-head attention pooling with learned position embeddings to upweight rare mutation positions.",
      "Dual Classifiers: Downstream XGBoost estimators and attention-based neural networks per drug compound.",
      "Validation Protocols: 5-fold outer, 3-fold inner nested stratified CV; temporal splits; subtype generalization checks.",
      "Interpretability: Tree SHAP values correlated against known Stanford HIVDB major and accessory resistance mutations.",
    ],
    engineeringDecisions: [
      "Rejected naive CV: Earlier non-nested benchmarks reported an optimistic 0.968 AUC target bound. I enforced strict nested CV to eliminate meta-learner and hyperparameter leakage, producing the true, scientifically unbiased baseline.",
      "Dual Explainability: Validated that high-attention positions match clinically documented resistance codons (e.g., M184V in RT, PR mutations).",
      "Calibration Analysis: Implemented Brier score and reliability curves to ensure predicted resistance probabilities correspond to genuine statistical confidence.",
    ],
    evaluationAndResults: [
      {
        label: "Nested CV Mean AUC",
        value: "~0.9487",
        detail: "Unbiased nested cross-validation across 18 drugs on full Stanford HIVDB cohort",
        isVerified: true,
      },
      {
        label: "Subset Benchmark AUC",
        value: "~0.9202",
        detail: "Evaluated on controlled subset (n=250); stacked ensemble reaches ~0.9380",
        isVerified: true,
      },
      {
        label: "Drug Coverage",
        value: "18 Antiretrovirals",
        detail: "PI (Protease), NRTI (Reverse Transcriptase), and NNRTI drug classes",
        isVerified: true,
      },
      {
        label: "Target Bound Distinction",
        value: "0.968 (Optimistic Bound)",
        detail: "Identified and transparently documented as non-nested target bound in project docs",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Model is an in-silico computational screening tool, not a clinically approved diagnostic device.",
      "Extremely rare novel insertions and deletion variants outside the training manifold require conservative uncertainty bounds.",
      "Taught me that scientific integrity—reporting the unbiased 0.9487 nested score rather than cherry-picking 0.968—is the foundation of credible research.",
    ],
    technologies: ["PyTorch", "Hugging Face ESM-2 (650M)", "XGBoost", "Optuna", "SHAP", "Scikit-Learn", "BioPython"],
    githubUrl: "https://github.com/jyothikacodes/HIV-ESM2-Enhanced",
    verifiedStatus: "Individually authored research pipeline; public code & reproducible docs on GitHub",
  },
  {
    id: "shadow-walk",
    tag: "PROJ-02 // HUMAN SAFETY & SYSTEMS",
    category: "SAFETY / SYSTEMS",
    title: "Shadow-Walk System",
    tagline: "Street Vibrancy-Aware Pedestrian Navigation Engine with Real-Time Incident Telemetry",
    problem:
      "Commercial navigation systems optimize exclusively for transit efficiency: minimizing geometric meters or seconds. For late-night pedestrians—particularly women—this frequently forces routes through deserted, pitch-black alleyways, vacant industrial lots, and high-vulnerability corridors.",
    importance:
      "Physical safety in urban transit is determined by natural surveillance (eyes on the street), illumination, and communal activity. Navigation software should empower pedestrians to choose routes backed by street vitality.",
    hypothesisOrApproach:
      "Formulate a 'Street Vibrancy Index' combining live commercial operating hours (24/7 pharmacies, open storefronts), street lighting telemetry, and verified hazard density into dynamic graph traversal weights, coupled with an instant SOS dispatch server.",
    myContribution:
      "Architected the full system: designed the Street Vibrancy heuristic, built the Node.js/Socket.io backend for real-time hazard broadcast, developed the Leaflet interactive monitoring console, and implemented simulated client safety tools (fake-call deterrents and emergency triggers).",
    architectureDetails: [
      "Routing Engine: Dynamic graph cost adjustment where edge weights decrease with commercial activity and increase with darkness/hazard density.",
      "Real-Time Telemetry: Node.js + Socket.io server broadcasting `/report-shadow` SOS alerts to a central dashboard.",
      "Interactive Console: Leaflet-powered GIS dashboard visualizing safe corridors, caution thresholds, and active alert markers.",
      "Mobile Safety Simulation: Browser-based mobile simulation featuring rapid-trigger fake-call simulation and emergency coordinate sharing.",
    ],
    engineeringDecisions: [
      "Vibrancy vs Distance Tradeoff: Tuned cost penalty such that users are detoured up to 20-30% in distance if it replaces an unlit alley with a bustling, illuminated commercial arterial.",
      "Lightweight Sockets: Used lightweight event-driven WebSockets rather than polling to ensure danger zone reports update within 100ms.",
      "Privacy Considerations: Avoided persistent location tracking; coordinates are evaluated transiently during route synthesis.",
    ],
    evaluationAndResults: [
      {
        label: "Architecture",
        value: "Full-Stack Node + Socket.io",
        detail: "Event-driven danger zone emission and dynamic Leaflet routing simulator",
        isVerified: true,
      },
      {
        label: "Routing Paradigm",
        value: "Vibrancy > Efficiency",
        detail: "Evaluates 24/7 store proximity and historical illumination weights",
        isVerified: true,
      },
      {
        label: "Safety Features",
        value: "SOS + Fake-Call Deterrent",
        detail: "Working mobile simulation with rapid distress broadcast",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Real-time municipal street light telemetry is unavailable in many developing cities; system currently relies on OpenStreetMap tags and commercial business schedules as proxies.",
      "A prototype proof-of-concept demonstrating how algorithmic incentives can alter route safety; requires integration with city-scale live telemetry before production field deployment.",
    ],
    technologies: ["Node.js", "Express", "Socket.io", "Leaflet.js", "OpenStreetMap", "JavaScript", "HTML5/CSS3"],
    githubUrl: "https://github.com/jyothikacodes/shadow-walk-system",
    verifiedStatus: "Individually engineered full-stack repository; verified working code & simulation",
  },
  {
    id: "ullaas",
    tag: "PROJ-03 // INCLUSIVE COMMERCE & UX",
    category: "OPPORTUNITY / ACCESS",
    title: "Ullaas",
    tagline: "Voice-First Multilingual Marketplace for Regional Women Micro-Entrepreneurs",
    problem:
      "Millions of women artisans and self-employed makers in regional India produce exceptional textiles, handicrafts, and homemade foods. However, mainstream e-commerce platforms demand digital literacy, English proficiency, and intricate catalog spreadsheets—effectively locking them out of the digital economy.",
    importance:
      "Financial independence requires market access. When barriers to digital commerce are removed, women gain direct pricing power and economic autonomy for their families and communities.",
    hypothesisOrApproach:
      "Replace text-dense e-commerce forms with a conversational, voice-driven onboarding and inventory management pipeline in regional languages (Malayalam, Hindi, Tamil), letting makers list products simply by talking about what they made.",
    myContribution:
      "Founder and lead product designer. Defined the human-centered interaction architecture, mapped regional voice command flows, designed the audio-guided product creation workflow, and built conversational interface prototypes.",
    architectureDetails: [
      "Voice Pipeline: Audio capture mapped through speech-to-text in regional languages with contextual intent parsing.",
      "Conversational Form-Filling: Step-by-step audio prompts asking for item name, price, quantity, and materials.",
      "Micro-Commerce Backend: Simplified SKU management designed for low-volume artisanal producers without complex fulfillment logic.",
      "Accessibility-First UI: High-contrast, icon-assisted, audio-feedback visual design for varying levels of literacy.",
    ],
    engineeringDecisions: [
      "Voice Over Typing: Prioritized voice interaction as the primary input mode rather than a secondary accessibility toggle.",
      "Local Language Nuance: Designed prompting to accommodate regional dialects and colloquial pricing terms rather than formal terminology.",
      "Honest Scope: Positioned as a dedicated founder prototype and ongoing social impact initiative rather than claiming false enterprise adoption metrics.",
    ],
    evaluationAndResults: [
      {
        label: "Initiative Status",
        value: "Founder-Led Initiative",
        detail: "Conceptual design, conversational flows, and regional accessibility prototype",
        isVerified: true,
      },
      {
        label: "Input Paradigm",
        value: "Voice-First Multilingual",
        detail: "Eliminates typing and catalog spreadsheet barriers for regional makers",
        isVerified: true,
      },
      {
        label: "Core Goal",
        value: "Economic Inclusion",
        detail: "Direct market linkage without predatory intermediaries",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Regional ASR models can struggle with background noise and heavy colloquial vernacular; robust fallbacks with visual icon confirmations are essential.",
      "Technology alone does not solve logistics: physical packaging and last-mile delivery remain the primary friction points for grassroots makers.",
    ],
    technologies: ["Voice UX Design", "React", "Python / FastAPI", "Web Speech API", "Multilingual NLP Concepts"],
    githubUrl: "https://github.com/jyothikacodes",
    verifiedStatus: "Founder initiative & prototype by Jyothika; featured prominently across public profile",
  },
  {
    id: "rakshakx",
    tag: "PROJ-04 // CYBERSECURITY & EDGE AI",
    category: "CYBERSECURITY / EDGE AI",
    title: "RakshakX",
    tagline: "Pre-Action Fraud Interception Agent with On-Device Cross-Channel Threat Correlation",
    problem:
      "Modern social engineering attacks are coordinated multi-stage operations (e.g., a spoofed phone call pretending to be a bank official, immediately followed by an OTP-harvesting SMS, leading to a cloned phishing URL). Single-channel anti-spam apps inspect each channel in isolation and fail to see the kill chain.",
    importance:
      "Victims lose their life savings within seconds of clicking deceptive links or sharing OTPs. Protecting mobile endpoints requires correlating threat signals in real time without sending private user communications to cloud servers.",
    hypothesisOrApproach:
      "Build a multi-layered Android cybersecurity engine that correlates threat events across 5 surfaces (SMS, Voice Calls, Email, Web, Messaging) using a MITRE ATT&CK-aligned correlation engine, local ONNX ML models, and local DNS sinkholing via Android VPN API without MITM decryption.",
    myContribution:
      "Developed as part of team 'InnovateX' at NMIT HACKS 2026. Contributed to the AI threat classification pipeline (DistilBERT/IndicBERT for SMS/messaging phishing), cross-channel temporal risk scoring, and privacy-preserving on-device evaluation.",
    architectureDetails: [
      "Multi-Surface Protection: Unified interception across SMS, voice calls (Vosk ASR), email, web URLs, and instant messaging.",
      "MultiChannelCorrelationEngine: Detects multi-stage kill chains across time windows (e.g. `CALL_SMS_PHONE` +0.35 risk boost within 15 mins).",
      "Network Security Layer: Local DNS sinkholing via Android VPN API (TUN interface) analyzing domain reputation and typosquatting without breaking TLS encryption.",
      "Edge ML Inference: 100% on-device ONNX Runtime execution—zero user text, audio, or browsing data leaves the handset.",
    ],
    engineeringDecisions: [
      "No MITM Decryption: Purposely rejected installing a local root CA to decrypt HTTPS. Analyzing DNS metadata preserves fundamental device trust while blocking malicious domains.",
      "Temporal Kill-Chain Windows: Scaled threat scores dynamically when events from the same sender or domain occurred within tight time thresholds.",
      "Team Credit: Built collaboratively with team InnovateX at NMIT HACKS 2026; clearly distinguish team achievements from individual contributions.",
    ],
    evaluationAndResults: [
      {
        label: "Hackathon Context",
        value: "NMIT HACKS 2026",
        detail: "Developed by team InnovateX as Pre-Action Fraud Interception Agent",
        isVerified: true,
      },
      {
        label: "Inference Architecture",
        value: "100% On-Device (ONNX)",
        detail: "Local NLP & Vosk speech screening with zero cloud data exfiltration",
        isVerified: true,
      },
      {
        label: "Attack Vectors Defended",
        value: "5 Surfaces Unified",
        detail: "SMS, Voice Calls, Email, Web URLs, and Instant Messaging",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Continuous on-device ASR and VPN packet parsing can impact mobile battery life; requires aggressive duty-cycling and threshold gating.",
      "Highlighted the crucial power of multi-channel intelligence: an innocuous SMS becomes undeniably malicious when correlated with a prior suspicious call.",
    ],
    technologies: ["Android", "ONNX Runtime", "DistilBERT / IndicBERT", "Vosk ASR", "DNS Sinkholing / VPN API", "Python", "MITRE ATT&CK"],
    githubUrl: "https://github.com/a6hinandh/RakshakX",
    verifiedStatus: "Team submission by InnovateX at NMIT HACKS 2026; verified architecture & codebase",
  },
];

export const SUPPORTING_RESEARCH: Project[] = [
  {
    id: "janus",
    tag: "RES-01 // CODE RAG & SOFTWARE EVOLUTION",
    category: "CODE RAG / RESEARCH",
    title: "JANUS: Compatibility-Aware Code RAG",
    tagline: "Preventing Outdated & Incompatible Historical Code Retrieval Under Repository Evolution",
    problem:
      "When developers use AI Code RAG to retrieve examples from codebase history, relevance alone often surfaces syntactically obsolete or breaking API usages that fail against current repository signatures.",
    importance:
      "Automated coding assistants must avoid injecting deprecated or signature-mismatched code into modern repositories.",
    hypothesisOrApproach:
      "Implement compatibility-aware filtering gates comparing retrieved historical usages against current AST target signatures using both BM25 and dense latent semantic representations.",
    myContribution:
      "Personally architected and implemented V3: Repository-Scale Retrieval (`janus/retrieval/corpus.py`, `dense.py`, `evaluate.py`). Discovered and eliminated query token leakage in earlier drafts by formulating un-leaked target-state AST queries. Built multi-baseline evaluation across 2,269 historical usages and 9 mature Python repositories.",
    architectureDetails: [
      "Scale: 2,269 mined historical usages across 9 mature Python repos (15,387 commits).",
      "Un-leaked Queries: Extracted deterministic AST parameter names from current target definitions; 0/100 queries leak tokens from historical call sites.",
      "Dual Retrieval: BM25 lexical ranking + Dense semantic vector retriever.",
      "Multi-Baseline Engine: Benchmarked RAW, RECENCY, CHANGE-ONLY, STATIC-ONLY, and JANUS across k ∈ {1, 3, 5, 10}.",
    ],
    engineeringDecisions: [
      "Rigorous Leakage Invalidation: When I realized earlier draft queries derived tokens from historical calls, I invalidated those numbers and implemented strict target-state AST parsing.",
      "Preserving Useful Old Code: Designed the filter to achieve high harmful code removal without discarding valid backwards-compatible snippets.",
    ],
    evaluationAndResults: [
      {
        label: "Harmful Removal Rate",
        value: "94.6% – 100%",
        detail: "Across k=1 to k=5 on frozen 100 human-audited unique-event queries",
        isVerified: true,
      },
      {
        label: "Useful Old Code Loss",
        value: "0.0% (Zero Loss)",
        detail: "Zero loss of useful historical code at k=1, 3, 5 (retains 100% of compatible context)",
        isVerified: true,
      },
      {
        label: "Corpus Scale",
        value: "2,269 Historical Usages",
        detail: "Mined from 9 repos (urllib3, werkzeug, click, requests, flask, etc.)",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Current parser focuses on module-level functions and direct `__init__` classes with statically resolvable Python calls.",
      "Demonstrated that careful experimental design and eliminating token leakage is essential for honest empirical software engineering.",
    ],
    technologies: ["Python", "AST Parsing", "BM25", "Dense Embeddings", "Pytest", "Git Mining"],
    verifiedStatus: "Documented in JANUS research handoff (docs/contributions/JYOTHIKA.md); verified local implementation",
  },
  {
    id: "veli-flow",
    tag: "RES-02 // HYDRODYNAMICS & URBAN FLOODING",
    category: "HYDRODYNAMICS",
    title: "VELI-FLOW: Estuarine Drainage Engine",
    tagline: "Tidal-Locking Simulation and Proactive Flood Bypassing for Central Kochi",
    problem:
      "Waterlogging in Kochi is not merely a rainfall volume issue; when astronomical high tides rise above canal bed discharge levels in Vembanad Lake, gravity drainage reverses, causing culverts to backflow into street depressions within 30 minutes.",
    importance:
      "Critical urban transit arteries (KSRTC bus stand, South Railway Station) flood repeatedly. Proactive scenario forecasting can divert emergency traffic before roads submerge.",
    hypothesisOrApproach:
      "Couple 4 verified astronomical tidal constituents for Cochin Port (M2, S2, K1, O1) with localized precipitation intensity and Operation Breakthrough canal bottleneck data to dynamically compute risk and route around flooded hotspots.",
    myContribution:
      "Developed for 'Make Her Hack' at CITTIC, CUSAT. Formulated the multi-factor hydrodynamic risk index, integrated tidal harmonic parameters, and built dynamic graph rerouting to divert traffic to the western coastal ridge. Authored 17-test automated acceptance suite.",
    architectureDetails: [
      "Tidal Model: Computes instantaneous tidal height h(t) using published CSIR-NIO harmonic parameters.",
      "Compound Risk Term: S_compound = S_tide × S_rain captures non-linear tidal locking.",
      "Dynamic Dijkstra: Prohibitive traversal penalties (+50 km) applied to high-risk nodes, triggering automatic detour via Park Avenue Road.",
    ],
    engineeringDecisions: [
      "Zero Build Steps & Full Offline: Client-side engine with vendored Leaflet and GeoJSON data to ensure field deployability during power/network outages.",
      "Honest Limitations: Transparently disclosed that it is a scenario risk index rather than a full 2D Saint-Venant hydraulic solver.",
    ],
    evaluationAndResults: [
      {
        label: "Acceptance Suite",
        value: "17 / 17 Tests Passed",
        detail: "100% deterministic pass on headless acceptance test runner",
        isVerified: true,
      },
      {
        label: "Event Context",
        value: "Make Her Hack",
        detail: "CITTIC, Cochin University of Science and Technology (CUSAT), Kerala",
        isVerified: true,
      },
    ],
    limitationsAndLearnings: [
      "Simulates topographical vulnerability rather than sensor-observed water levels.",
      "Reinforced the value of physics-grounded modeling over purely black-box machine learning for urban hydrology.",
    ],
    technologies: ["JavaScript", "Leaflet.js", "Harmonic Tidal Math", "Dijkstra Rerouting", "GeoJSON", "Node.js Tests"],
    verifiedStatus: "Engineered and verified in local project directory (/home/jyothika/veli-flow); all 17 tests verified",
  },
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: "note-cirq",
    date: "OCT 2026",
    category: "QUANTUM COMPUTING",
    title: "Navigating Circuit Diagrams in Google Cirq: Parameterized Diagonal Gates",
    excerpt:
      "Notes from investigating Cirq Issue #8404 on how parameterized diagonal unitaries are rendered in text and SVG circuit representations.",
    content:
      "Quantum circuits are fundamentally matrix operations arranged across spatial qubit lines and temporal moments. While exploring the Google Cirq codebase (`jyothikacodes/Cirq` on branch `fix-8404-parameterized-diagonal-diagram`), I investigated how parameterized diagonal operators behave under diagram rendering. Unlike standard single-qubit gates, diagonal unitary gates with symbolic sympy parameters often suffer from layout truncation or misformatted ASCII representations. Working through Cirq's AST and circuit drawer showed me how much careful engineering is required to make quantum abstractions readable for human researchers. I am actively learning the mathematics of quantum state synthesis and contributing where tooling can be made clearer.",
    readTime: "3 min read",
    tags: ["Cirq", "Quantum Computing", "Python", "NISQ", "Open Source"],
  },
  {
    id: "note-biology-nlp",
    date: "SEP 2026",
    category: "COMPUTATIONAL BIOLOGY",
    title: "Why Biological Sequences Are Not Just Another Natural Language",
    excerpt:
      "Lessons from applying ESM-2 protein language models to HIV-1 protease and reverse transcriptase mutations.",
    content:
      "It is tempting to think of protein sequences as sentences: 20 amino acids instead of words, folded proteins instead of semantic concepts. But biology does not behave like human grammar. A single point mutation at residue 184 in Reverse Transcriptase (M184V) completely alters drug binding affinity while leaving the remaining 99.8% of the sequence identical. Standard global pooling averages out these localized mutational signals. In HIV-ESM2-Enhanced, we had to introduce rare-mutation-aware attention mechanisms to prevent dominant wild-type tokens from overshadowing critical resistance-conferring codons. Natural language models optimize for smooth fluency; biological models must respect sharp physical biophysics.",
    readTime: "4 min read",
    tags: ["ESM-2", "Proteomics", "Attention Pooling", "Bioinformatics"],
  },
  {
    id: "note-leakage",
    date: "OCT 2026",
    category: "METHODOLOGICAL RIGOR",
    title: "The Subtle Art of Data Leakage: What JANUS & HIV-ESM2 Taught Me About Benchmarks",
    excerpt:
      "Why vanity metrics like 0.968 AUC mean nothing if your cross-validation leaks information from future folds or test tokens.",
    content:
      "In early iterations of HIV-ESM2, standard non-nested cross-validation yielded an impressive 0.968 Mean AUC. It looked like an exceptional result—until we scrutinized the pipeline. By tuning hyperparameters across pooled validation folds, the model was quietly memorizing fold-specific distribution quirks. When we instituted a strict 5-fold outer, 3-fold inner nested CV protocol, the unbiased test AUC settled at ~0.9487. A similar revelation occurred during JANUS V3 Code RAG experiments: earlier queries inadvertently extracted tokens from the historical call site, creating an artificial self-retrieval boost. We immediately invalidated those numbers and redesigned query extraction strictly from target AST signatures. True engineering progress requires reporting the honest, un-leaked score every single time.",
    readTime: "4 min read",
    tags: ["Methodology", "Nested CV", "Code RAG", "Evaluation Integrity"],
  },
  {
    id: "note-open-source",
    date: "AUG 2026",
    category: "OPEN SOURCE",
    title: "Building in Public: Reflections from GSSoC 2026 and Collaborative Repositories",
    excerpt:
      "How open collaboration teaches code discipline far beyond individual hackathons or university assignments.",
    content:
      "Contributing to open source via GSSoC 2026 and community repositories teaches you that code is a shared communication medium. When someone else has to review your pull request, you learn to write defensive tests, document rationale, and maintain git hygiene. It shifted my perspective from 'does this code run on my laptop?' to 'can someone verify, extend, and trust this system three years from now?' That philosophy shaped how I structured HIV-ESM2-Enhanced and VELI-FLOW with reproducible documentation and deterministic acceptance suites.",
    readTime: "3 min read",
    tags: ["GSSoC 2026", "Open Source", "Software Engineering", "Collaboration"],
  },
];

export const TIMELINE_EXPERIENCE: TimelineItem[] = [
  {
    id: "iiit-kottayam",
    year: "2023 – PRESENT",
    role: "B.Tech in Computer Science and Engineering",
    organization: "Indian Institute of Information Technology (IIIT) Kottayam",
    location: "Kottayam, Kerala",
    description:
      "Deep academic coursework and practical systems development covering Algorithms, Distributed Systems, Software Architecture, Artificial Intelligence, and Quantum Information. Active builder across hackathons and research initiatives.",
    highlights: [
      "Rigorous foundations in algorithms, data structures, and computer architecture.",
      "Led technical initiatives bridging AI systems and real-world societal problem domains.",
      "Maintains active independent research repositories and collaborative open-source contributions.",
    ],
    evidenceBadge: "Academic Foundation",
  },
  {
    id: "iiitdm-kurnool",
    year: "2024",
    role: "Research Intern",
    organization: "IIITDM Kurnool",
    location: "Kurnool, Andhra Pradesh",
    description:
      "Engaged in academic research exploring computational and algorithmic problem-solving. Deepened exposure to structured experimentation, algorithmic formulation, and scientific literature review.",
    highlights: [
      "Conducted foundational research on computational methodologies.",
      "Gained hands-on experience in academic paper analysis and formal experimentation.",
      "Strengthened passion for high-rigor research at the intersection of computing and applied domains.",
    ],
    evidenceBadge: "Research Internship",
  },
  {
    id: "nmit-hacks",
    year: "2026",
    role: "Lead AI & Security Developer (Team InnovateX)",
    organization: "NMIT HACKS 2026",
    location: "Bengaluru, Karnataka",
    description:
      "Collaborated with team InnovateX to conceptualize, architect, and implement RakshakX—a pre-action fraud interception agent featuring on-device NLP, Vosk speech recognition, and MITRE ATT&CK-aligned cross-channel correlation.",
    highlights: [
      "Designed the multi-vector threat correlation engine linking SMS, voice, and web attacks.",
      "Implemented privacy-preserving local ML execution with zero cloud data exfiltration.",
      "Delivered end-to-end technical demonstration to hackathon judging panel.",
    ],
    evidenceBadge: "Hackathon Sprint (Team InnovateX)",
  },
  {
    id: "make-her-hack",
    year: "2026",
    role: "Systems & Algorithm Designer",
    organization: "Make Her Hack — CITTIC, CUSAT",
    location: "Kochi, Kerala",
    description:
      "Created VELI-FLOW, an estuarine hydrodynamic risk engine predicting tidal-locking waterlogging in Central Kochi using verified astronomical tidal constituents and Dijkstra rerouting.",
    highlights: [
      "Coupled 4 tidal harmonic constituents (M2, S2, K1, O1) with Operation Breakthrough bottlenecks.",
      "Created a 17/17 deterministic automated acceptance test suite.",
      "Engineered full zero-build, offline-capable GIS visualization.",
    ],
    evidenceBadge: "Make Her Hack Finalist Project",
  },
  {
    id: "ullaas-founder",
    year: "2024 – PRESENT",
    role: "Founder & Lead Developer",
    organization: "Ullaas Initiative",
    location: "Kerala, India",
    description:
      "Founded Ullaas to build accessible, voice-first technology that empowers regional women micro-entrepreneurs and artisans to participate directly in digital commerce without digital literacy barriers.",
    highlights: [
      "Conducted user experience discovery for grassroots women makers in Kerala.",
      "Prototyped conversational voice-first listing workflows in regional languages.",
      "Advocates for inclusive technology that expands genuine economic agency.",
    ],
    evidenceBadge: "Founder Initiative",
  },
  {
    id: "gssoc",
    year: "2026",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC 2026)",
    location: "Remote / Open Source",
    description:
      "Contributed to open-source software repositories, improving code reliability, submitting verified pull requests, and mentoring fellow contributors on git hygiene and collaborative development.",
    highlights: [
      "Merged pull requests across public developer tools and educational utilities.",
      "Practiced collaborative code review and continuous integration workflows.",
      "Active participant in developer community mentorship.",
    ],
    evidenceBadge: "Open Source Contributor",
  },
];

export const VERIFIED_SKILLS = {
  aiAndResearch: [
    "PyTorch",
    "Hugging Face (ESM-2, DistilBERT)",
    "XGBoost & Scikit-Learn",
    "Nested Cross-Validation",
    "SHAP & Explainability",
    "Optuna (Bayesian Hyperopt)",
    "ONNX Runtime (Edge ML)",
    "Bioinformatics / BioPython",
  ],
  engineeringAndSystems: [
    "TypeScript & JavaScript",
    "Next.js & React",
    "Python 3.12 (FastAPI, Flask)",
    "Node.js & Socket.io",
    "REST & WebSocket APIs",
    "Tailwind CSS",
    "Leaflet.js & GIS Data (GeoJSON)",
    "SQLite & PostgreSQL",
    "Git & Linux (Arch/Ubuntu)",
  ],
  emergingAndFoundations: [
    "Google Cirq (Quantum Circuits)",
    "AST Static Analysis (Python)",
    "MITRE ATT&CK Framework",
    "Android VPN API / DNS Sinkholing",
    "Voice UX / Speech Recognition",
  ],
};
