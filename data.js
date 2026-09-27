// ============================================================
// All content is truthful, from Mahmud Hasan Shawon's real CV.
// No invented experience. To add images: drop files in assets/
// and fill the `img` / `gallery` fields below.
// ============================================================

const PROFILE = {
  name: "Mahmud Hasan Shawon",
  role: "Broadcast & Live-Production Lead / IT & Technical Operations",
  location: "Dhaka, Bangladesh",
  photo: "assets/profile.jpeg",
  cv: "assets/Mahmud_Hasan_Shawon_CV.pdf",
  tagline: "5+ years running live esports broadcasts end to end — 50+ concurrent feeds, low-latency streaming infrastructure, and the systems that keep them online.",
  stats: [
    { num: 5, plus: true, label: "Years in live production" },
    { num: 7, plus: false, label: "Major tournaments broadcast" },
    { num: 20, plus: true, label: "Minor tournaments & events" },
    { num: 62, plus: false, label: "Peak player feeds, one event" }
  ]
};

// What I do — three core disciplines (home page).
const PILLARS = [
  {
    title: "Live Broadcast Production",
    desc: "Directing multi-source esports and tournament broadcasts from ingest to air with vMix and OBS — coordinating crews, casters, and multi-platform delivery under live pressure.",
    tags: ["vMix", "OBS", "Multi-source switching"]
  },
  {
    title: "Streaming Infrastructure",
    desc: "Building and running the streaming backbone: large-scale RTMP/SRT ingestion, SRS streaming servers, and low-latency pipelines kept stable on Linux VPS during high-stakes events.",
    tags: ["RTMP / SRT", "SRS", "Linux VPS"]
  },
  {
    title: "Software & Data",
    desc: "Developing web applications and turning gaming API data into real-time broadcast dashboards — with a Computer Science background spanning full-stack development and machine-learning research.",
    tags: ["ASP.NET Core", "Next.js", "MS SQL", "Python"]
  }
];

// Credibility strip — where the work has happened. Truthful only.
const TRUSTED = {
  orgs: ["GOAT Esports", "WarCities", "F10 Solutions"],
  tournaments: ["PMNC South Asia", "PMNC Bangladesh"]
};

// Every link — embedded across the site.
const LINKS = [
  { key: "Email", value: "mahmudshawon180@gmail.com", href: "mailto:mahmudshawon180@gmail.com" },
  { key: "Phone / WhatsApp", value: "+880 1865140294", href: "tel:+8801865140294" },
  { key: "LinkedIn", value: "linkedin.com/in/shawon47", href: "https://linkedin.com/in/shawon47" },
  { key: "GitHub", value: "github.com/Mahmud180", href: "https://github.com/Mahmud180" }
  // Facebook: add here when you provide the public profile URL ->
  // { key: "Facebook", value: "facebook.com/...", href: "https://facebook.com/..." }
];

const ABOUT = [
  "I'm a broadcast and live-production specialist with a Computer Science background — I lead live esports and tournament broadcasts from ingest to air, and I build and run the infrastructure underneath them.",
  "Day to day that means multi-source production with vMix and OBS, large-scale stream ingestion over RTMP/SRT, and keeping low-latency streaming servers stable on Linux VPS during high-pressure live events. Alongside production, I develop web applications (ASP.NET Core, Next.js, MS SQL) and turn gaming API data into real-time dashboards.",
  "I like the point where live production meets engineering — where a stream can't drop, the dashboard has to be right, and the whole thing has to survive a live audience."
];

// Life-history / journey timeline (education + career milestones, chronological).
const JOURNEY = [
  { year: "2018 – 2020", title: "Higher Secondary Certificate (Science)", org: "Dhaka City College", note: "GPA 5.00." },
  { year: "2020", title: "Entered live broadcasting", org: "WarCities", note: "Began directing live broadcasts for regional esports tournaments." },
  { year: "2021 – 2025", title: "B.Sc. in Computer Science & Engineering", org: "Hamdard University Bangladesh", note: "CGPA 3.66. Thesis on spatio-temporal deepfake detection." },
  { year: "Mar 2025 – Present", title: "Broadcast & Streaming Operations Lead", org: "GOAT Esports", note: "Leading end-to-end broadcasts for major tournaments; 50+ concurrent feeds." },
  { year: "Sep – Nov 2025", title: "Software Developer Intern", org: "F10 Solutions", note: "ASP.NET Core / Next.js / MS SQL for the Accounts Department." },
  { year: "2026", title: "IEEE research publication", org: "QPAIN 2026", note: "Co-authored deepfake-detection research (95.67% accuracy, 0.9925 AUC)." }
];

const TOURNAMENTS = [
  { name: "PMNC South Asia", role: "Live broadcast operations lead (GOAT Esports)" },
  { name: "PMNC Bangladesh", role: "Live broadcast operations lead (GOAT Esports)" }
  // Add more tournaments here as you confirm names/dates.
];

const REFERENCES = [
  { name: "Engr. Md. Monowar Hossain", title: "Associate Professor, Hamdard University Bangladesh" },
  { name: "Imran Hossain Alve", title: "Project Manager, Tencent Games" },
  { name: "Sharif Nazmus Saquib", title: "Chief Operating Officer, GOAT Esports" },
  { name: "Tanvir Islam", title: "Founder, GOAT Esports" }
  // Full contact details available on request (kept off the public site).
];

const EXPERIENCE = [
  {
    role: "Broadcast & Streaming Operations Lead",
    org: "GOAT Esports",
    dates: "Mar 2025 – Present",
    points: [
      "Lead end-to-end live broadcasts for major esports tournaments (PMNC South Asia, PMNC Bangladesh).",
      "Manage large-scale stream ingestion of 50+ concurrent player feeds over RTMP/SRT pipelines.",
      "Operate and optimize vMix and OBS for multi-source, low-latency live production.",
      "Design and maintain high-stability streaming infrastructure on Linux VPS servers.",
      "Collect, process, and structure gaming API data into real-time broadcast dashboards.",
      "Coordinate production crews and casters to ensure stable multi-platform delivery."
    ]
  },
  {
    role: "Live Broadcast & Technical Operations",
    org: "WarCities",
    dates: "Mar 2020 – Feb 2025",
    points: [
      "Directed live broadcasts for major regional tournaments over five years.",
      "Configured vMix Pro and OBS for complex multi-source productions.",
      "Managed tournament scheduling, sponsorship promotions, and technical event workflows.",
      "Delivered real-time technical support and troubleshooting for participating teams.",
      "Coordinated production crews and casters for seamless multi-platform delivery."
    ]
  },
  {
    role: "Software Developer Intern",
    org: "F10 Solutions",
    dates: "Sep 2025 – Nov 2025",
    points: [
      "Implemented and integrated software modules for the Accounts Department using ASP.NET MVC and .NET Core API.",
      "Built and connected front-end components with Next.js and managed MS SQL data workflows.",
      "Contributed to real-world application workflows and system optimization."
    ]
  },
  {
    role: "Freelance Streaming & Server Infrastructure",
    org: "Independent",
    dates: "Ongoing",
    points: [
      "Designed and managed live streaming pipelines using RTMP, SRT, and VDO.Ninja.",
      "Deployed and maintained services on Contabo VPS servers handling 30–50+ live feeds.",
      "Integrated streaming workflows with OBS and vMix, optimizing for low-latency stability."
    ]
  }
];

const SKILLS = [
  { group: "Broadcasting & Live Production", items: ["vMix", "OBS", "Multi-source switching", "Broadcast equipment", "Network monitoring"] },
  { group: "Streaming & Delivery", items: ["RTMP / SRT", "VDO.Ninja", "SRS / streaming servers", "Low-latency optimization", "Multi-platform delivery"] },
  { group: "Infrastructure", items: ["Linux", "VPS (Contabo)", "Cloud & server management", "Docker", "Uptime / reliability"] },
  { group: "Programming & Web", items: ["C#", "C", "Python", "JavaScript", "ASP.NET Core / MVC", "Next.js", "REST APIs"] },
  { group: "Databases & Data", items: ["MS SQL", "Database design", "API data processing", "Real-time dashboards"] },
  { group: "Coordination", items: ["Production & caster coordination", "Stakeholder communication", "Live technical support", "Documentation"] }
];

const EDUCATION = [
  { title: "B.Sc. in Computer Science & Engineering", org: "Hamdard University Bangladesh", dates: "Nov 2021 – Dec 2025", note: "CGPA 3.66 · Thesis: A Spatio-Temporal Model for Deepfake Detection Using CNN and Stacked Bi-LSTM Networks" },
  { title: "Higher Secondary Certificate (Science)", org: "Dhaka City College", dates: "Jun 2018 – Jun 2020", note: "GPA 5.00" },
  { title: "Research & Publication", org: "IEEE 2nd Int. Conference on Quantum Photonics, AI & Networking (QPAIN), 2026", dates: "2026", note: "Co-authored research on deepfake video detection using a hybrid VGG16 + Bi-LSTM architecture; proposed pair-aware dataset splitting to prevent data leakage." }
];
// PROJECTS_PLACEHOLDER
const PROJECTS = [
  {
    slug: "goat-broadcasting",
    title: "GOAT Esports — Tournament Broadcasting System",
    tag: "Live Infrastructure",
    short: "Streaming infrastructure for live esports tournaments — 62 concurrent players on an SRS server, with a role-based dual-dashboard monitoring system.",
    img: "assets/covers/broadcast.svg",
    overview: "The production backbone behind GOAT Esports tournament broadcasts: the ingest, monitoring, and control layer that keeps dozens of live player feeds stable and on air.",
    role: "Broadcast & Streaming Operations Lead",
    dates: "2025 – Present",
    problem: "Major tournaments need many player feeds ingested at once, monitored in real time, and switched into the broadcast without drops — all while the whole thing is live in front of an audience.",
    built: [
      "Streaming infrastructure handling 62 concurrent players using an SRS server with RTMP/SRT ingest.",
      "A dual-dashboard system with role-based access control so production and admin roles see the right controls.",
      "Real-time feed monitoring so a failing stream is spotted and swapped before it hits air.",
      "High-stability deployment on Linux VPS tuned for low-latency, high-uptime live delivery."
    ],
    stack: ["SRS", "RTMP / SRT", "Linux VPS", "Real-time dashboards", "Role-based access control"],
    outcomes: ["Reliable multi-feed broadcasts for major tournaments including PMNC South Asia and PMNC Bangladesh."]
  },
  {
    slug: "goat-live",
    title: "GOAT Live — Android Live Streaming App",
    tag: "Mobile / Streaming",
    short: "A production-grade native Android app that streams over RTMP/SRT for competitive esports, with encrypted credentials and an authenticated backend.",
    img: "assets/covers/android.svg",
    overview: "A native Android application that lets the production team push live streams from a mobile device straight into the tournament pipeline.",
    role: "Developer",
    dates: "2025",
    problem: "Tournaments needed a mobile, on-the-ground way to send reliable live streams into the broadcast without carrying full production hardware to every source.",
    built: [
      "A native Android app (Android SDK, Android Studio, Gradle) streaming over RTMP and SRT.",
      "AES-256-GCM encrypted storage for sensitive streaming credentials on-device.",
      "A bcrypt-authenticated Node.js backend the app talks to over REST APIs.",
      "End-to-end flow from mobile capture to the tournament streaming pipeline."
    ],
    stack: ["Android SDK", "Android Studio / Gradle", "RTMP / SRT", "Node.js", "REST APIs", "AES-256-GCM", "bcrypt"],
    outcomes: ["Used to deliver live streams for competitive esports tournaments."]
  },
  {
    slug: "deepguard",
    title: "DeepGuard — Deepfake Detection System",
    tag: "Machine Learning / Research",
    short: "A hybrid CNN + Bi-LSTM model for detecting deepfake video — 95.67% accuracy and 0.9925 AUC — and the basis of an IEEE-published paper.",
    img: "assets/covers/ml.svg",
    overview: "My CSE thesis and IEEE research: a deep-learning system that tells real video from AI-manipulated video by reading both what a frame looks like and how it changes over time.",
    role: "Researcher & Developer",
    dates: "2025 – 2026",
    problem: "Deepfakes are getting harder to spot by eye, and naive dataset splits leak information that inflates accuracy — so the hard part is a model that generalizes honestly.",
    built: [
      "A hybrid architecture combining a CNN (VGG16) for spatial features with a stacked Bi-LSTM for temporal features.",
      "Spatio-temporal feature extraction across video frames for classification.",
      "A pair-aware dataset splitting strategy to prevent data leakage between train and test.",
      "A strict evaluation protocol to measure real generalization."
    ],
    stack: ["Python", "VGG16 (CNN)", "Stacked Bi-LSTM", "Spatio-temporal modeling"],
    outcomes: [
      "95.67% accuracy and 0.9925 AUC under a strict evaluation protocol.",
      "Published at the IEEE 2nd International Conference on Quantum Photonics, AI & Networking (QPAIN), 2026."
    ]
  }
];
