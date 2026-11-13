export interface OwnedWebsite {
  id: string;
  name: string;
  url: string;
  status: "Live" | "Coming Soon" | "In Development";
  category: string;
  tagline: string;
  description: string;
  deepDive: string[];
  metrics: string;
  tags: string[];
  color: string;
  accentColor: string;
  image: string;
  bgGradient: string;
}

export interface ServiceStep {
  id: string;
  number: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  deliverables: string[];
  timeline: string;
  icon: string;
  accent: string;
}

export interface Differentiator {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const KAVIVAS_DATA = {
  company: {
    name: "Kavivas Tech Pvt Ltd",
    brandName: "Kavivas.Tech",
    cin: "U63122TS2026PTC210753",
    tagline: "Fixing real problems with AI",
    heroHeadline1: "Elevating Products Through",
    heroHeadline2: "AI Strategy & Real Outcomes",
    heroSubtext:
      "We design and build digital experiences that drive measurable outcomes by combining discovery, strategy, engineering, and delivery with human-centred design and deep technical expertise.",
    mission:
      "Kavivas Tech Pvt Ltd is an AI-first product studio creating software across multiple domains — built for clarity, speed, and real-world outcomes. No AI theatre, only features users actually need.",
    location: "Hyderabad, India",
    address: "H. No. 7-2-31/sv/44/104, 1st Floor, Sv Colony, Rangareddy, Telangana, Hyderabad 500079, India",
    email: "veereddy@kavivas.tech",
    phone: "+91 99126 64800",
    phoneDisplay: "+91 99126 64800",
    foundedYear: 2026,
    copyrightYear: 2026,
  },

  stats: [
    { number: "15+", label: "Autonomous AI Agents", description: "Orchestrated across active production and candidate pipelines" },
    { number: "25+", label: "Years Advisory Legacy", description: "Deep industry domain expertise driving high-trust platforms" },
    { number: "4", label: "Flagship Ecosystems", description: "Proprietary SaaS platforms, native iOS apps, and builder masterminds" },
    { number: "100%", label: "Real Outcomes", description: "Zero AI gimmickry — engineered for sustained user utility" },
  ],

  tickerItems: [
    "Autonomous AI Agents",
    "Full-Stack Web & Cloud",
    "Agentic Workflow Engineering",
    "Human-Centered UI/UX Design",
    "0-to-1 Product Incubation",
    "EEOC & SOC2 Compliance",
    "Rapid High-Velocity Prototyping",
    "Production RAG Architectures",
  ],

  ownedWebsites: [
    {
      id: "jobninjas",
      name: "JobNinjas.ai",
      url: "https://jobninjas.ai",
      status: "Coming Soon",
      category: "Autonomous AI Recruiting & Hiring Platform",
      tagline: "Autonomous AI Recruiting Operating System & Job Application Toolkit",
      description:
        "AI-powered job application toolkit and recruiting operating system. Features tailored resumes, cover letters, and intelligent application tracking, backed by an autonomous multi-agent pipeline.",
      deepDive: [
        "Orchestrates 15 specialized agents across resume screening, technical interview analysis, candidate travel concierge, and collaborative hiring decisions.",
        "Infinite visual workflow canvas for talent teams to orchestrate and monitor multi-stage evaluation pipelines with human-in-the-loop controls.",
        "Immutable audit trail and bias ledger maintaining tamper-proof logs of every prompt, score, and decision for EEOC safety and SOC2 audits.",
        "Built with FastAPI, LangGraph multi-agent RAG, ChromaDB vector stores, and automated interview workflow execution."
      ],
      metrics: "15 Autonomous Agents • In Active Beta",
      tags: ["Autonomous Multi-Agent", "Visual Canvas", "EEOC & SOC2 Safe", "Resume & JD Engine"],
      color: "#3D4ADF",
      accentColor: "#3D4ADF",
      image: "/jobninjas-live.png",
      bgGradient: "from-blue-600/10 via-indigo-600/5 to-transparent",
    },
    {
      id: "50ninjas",
      name: "50Ninjas",
      url: "https://50ninjas.kavivas.tech",
      status: "Live",
      category: "Managed Short-Form AI Content Studio & Ecosystem",
      tagline: "50Ninjas — Done-For-You AI Short-Form Video Production & Builder Ecosystem",
      description:
        "High-velocity short-form content studio and creator ecosystem. We create your AI avatar, clone your voice, write viral retention scripts, edit with kinetic subtitles, and design thumbnails — We create. You post and build your Substack.",
      deepDive: [
        "Done-for-you AI avatar & voice cloning: Publish high-retention Reels consistently using custom AI likeness and voice models with zero camera fatigue.",
        "End-to-end production pipeline: Scriptwriting, kinetic word-by-word captions, custom thumbnail covers, and ready-to-paste auto-DM copy for Superprofile.",
        "Proven viral traction: Over 235.4K+ organic views, with flagship viral Reels crossing 92.2K views and 1,582+ likes.",
        "Connected creator ecosystem: Studio clients get access to the 50Ninjas builder mastermind for distribution, growth sprints, and founder playbooks."
      ],
      metrics: "92.2K Peak Reel • Live on 50ninjas.kavivas.tech",
      tags: ["AI Content Studio", "Avatar & Voice Cloned", "Kinetic Video Editing", "Substack Flywheel", "50ninjas.kavivas.tech"],
      color: "#8B5CF6",
      accentColor: "#8B5CF6",
      image: "/work-50ninjas.png",
      bgGradient: "from-purple-600/10 via-indigo-600/5 to-transparent",
    },
    {
      id: "vsrinsurance",
      name: "VSRInsurancePlus.com",
      url: "https://vsrinsuranceplus.com",
      status: "Live",
      category: "Insurance & Financial Advisory Solutions",
      tagline: "Senior LIC & Insurance Advisory Platform (25+ Years Legacy)",
      description:
        "Insurance solutions platform — information, onboarding, and service workflows designed for clarity and speed, backed by 25+ years of senior advisory expertise by V. S. Reddy.",
      deepDive: [
        "Founded on 25+ years of trusted LIC advisory experience by V. S. Reddy, serving policyholders in Hyderabad and across India.",
        "End-to-end guidance across LIC life insurance, child educational endowments, wealth accumulation, and retirement pension plans.",
        "Digital onboarding workflows and personalized consultation interfaces for policy tracking and transparent risk planning.",
        "Dedicated advisory assistance for hassle-free claim settlement, policy revivals, and premium management."
      ],
      metrics: "25+ Yrs Industry Legacy • Active Platform",
      tags: ["LIC Advisory", "Digital Onboarding", "Child & Pension Plans", "Claim Concierge"],
      color: "#EA580C",
      accentColor: "#EA580C",
      image: "/vsrinsurance-live.png",
      bgGradient: "from-amber-600/10 via-orange-600/5 to-transparent",
    },
    {
      id: "kavinote",
      name: "KaviNote",
      url: "https://www.kavinote.app/",
      status: "Live",
      category: "On-Device Meeting & Interview Copilot",
      tagline: "Listen to the question. Read your answer. 100% On-Device Copilot.",
      description:
        "Your on-device meeting & interview copilot. Listens to questions in real time, surfaces instant answers from your notes, and helps you read with confidence. 100% on-device, zero accounts, no data collected. Built by Kavivas Tech.",
      deepDive: [
        "Real-time on-device question listening: Listens throughout high-stakes meetings and interviews, instantly recognizing when questions are addressed to you.",
        "Instant contextual retrieval: Matches questions against your personal notebook and notes, instantly presenting concise, authoritative talking points on screen.",
        "100% local-first privacy: Runs entirely on Apple Silicon and on-device neural engines — zero accounts, no cloud dependencies, and zero data collected or transmitted.",
        "Dual workspace architecture: One notebook with two dedicated workspaces — seamlessly bridge deep pre-meeting preparation with live execution confidence."
      ],
      metrics: "100% On-Device • Live on kavinote.app",
      tags: ["Meeting Copilot", "Interview Assistant", "100% On-Device", "Zero Data Collected", "Apple Silicon", "kavinote.app"],
      color: "#0284C7",
      accentColor: "#0284C7",
      image: "/kavinote-live.png",
      bgGradient: "from-sky-600/10 via-blue-600/5 to-transparent",
    },
  ] as OwnedWebsite[],

  services: [
    {
      id: "discover",
      number: "01",
      title: "Discover",
      headline: "Validate new products, experiences, or business models",
      summary: "We dissect opportunities, interview stakeholders, and evaluate AI feasibility before writing code.",
      description:
        "Every successful product begins with radical clarity. We conduct deep-dive market discovery, map user pain points, audit technical feasibility, and define sharp problem statements so your team builds exactly what matters.",
      deliverables: [
        "Market & Competitor Landscape Analysis",
        "AI & Agentic Technical Feasibility Audit",
        "Stakeholder & End-User Interviews",
        "Actionable Product Opportunity Brief"
      ],
      timeline: "1 - 2 Weeks",
      icon: "Compass",
      accent: "#3D4ADF",
    },
    {
      id: "shape",
      number: "02",
      title: "Shape",
      headline: "Make it real and try it out in the real world",
      summary: "We craft intuitive, human-centered UI/UX systems and clickable prototypes that validate value with real users.",
      description:
        "We translate discovery insights into tangible digital experiences. Using modern design systems, interaction patterns, and rapid click-through prototypes, we test real-world resonance and eliminate friction before engineering begins.",
      deliverables: [
        "Interactive High-Fidelity Prototypes",
        "Design System & Component Guidelines",
        "User Journey Maps & Information Architecture",
        "Empirical User Testing & Validation Report"
      ],
      timeline: "2 - 3 Weeks",
      icon: "PenTool",
      accent: "#8B5CF6",
    },
    {
      id: "zero-to-one",
      number: "03",
      title: "0 to 1",
      headline: "Pick the highest value features and iterate towards a category giant",
      summary: "High-velocity full-stack engineering that ships robust, production-grade applications with zero AI theatre.",
      description:
        "We engineer full-stack platforms with clean code, enterprise security, and autonomous AI agents. By ruthlessly prioritizing high-impact features, we deploy resilient MVPs that scale smoothly under real-world traffic.",
      deliverables: [
        "Full-Stack Web & Cloud Deployment",
        "Custom Autonomous Multi-Agent Systems",
        "Database Architecture & API Integration",
        "Automated CI/CD & Production Monitoring"
      ],
      timeline: "4 - 8 Weeks",
      icon: "Rocket",
      accent: "#10B981",
    },
    {
      id: "boost",
      number: "04",
      title: "Boost",
      headline: "Supercharge your team's potential with new capabilities and deep experience",
      summary: "Embed AI workflows, optimize developer velocity, and position your product for sustained market leadership.",
      description:
        "True partnership extends past launch. We embed autonomous agentic tools into your workflow, mentor internal engineering teams, refine user conversion funnels, and scale infrastructure to meet soaring demand.",
      deliverables: [
        "Autonomous Agent Workflow Integration",
        "Developer Velocity & CI/CD Optimization",
        "Knowledge Transfer & Architecture Documentation",
        "Post-Launch Analytics & Iterative Scaling"
      ],
      timeline: "Ongoing Partnership",
      icon: "Zap",
      accent: "#EA580C",
    },
  ] as ServiceStep[],

  differentiators: [
    {
      title: "AI-First Studio, Not Generic Resellers",
      subtitle: "Autonomous Architectures",
      description:
        "We build genuine multi-agent systems and custom LLM workflows tailored to specific domain problems, not generic template wraps.",
      icon: "Cpu",
    },
    {
      title: "No AI Theatre — Pure Outcomes",
      subtitle: "Human-Centric Utility",
      description:
        "We only deploy AI capabilities where they solve genuine user bottlenecks, boost speed, or cut operational costs measurably.",
      icon: "Target",
    },
    {
      title: "Faster & More Agile Than Typical Agencies",
      subtitle: "High-Velocity Sprints",
      description:
        "No bureaucratic bloat. Direct access to principal engineers and designers who ship production code in weekly sprint cycles.",
      icon: "Gauge",
    },
    {
      title: "Complete 360° Product Lifecycle",
      subtitle: "From Idea to Category Leader",
      description:
        "From early market discovery and Figma design systems to robust cloud infrastructure and post-launch team boosting.",
      icon: "Layers",
    },
  ] as Differentiator[],
};
