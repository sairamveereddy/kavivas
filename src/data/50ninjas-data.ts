export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  monthlyRegular: number;
  monthlyIntro: number;
  discountPercent: number;
  reelsPerMonth: number;
  frequency: string;
  description: string;
  features: string[];
  revisions: number;
  priority: string;
  idealFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "community" | "studio";
}

export interface HeroCard {
  id: string;
  creator: string;
  handle: string;
  niche: string;
  tilt: string;
  videoUrl: string;
  views: string;
  likes: string;
  badge: string;
  tag: string;
}

export interface AgentSpec {
  name: string;
  role: string;
  description: string;
  tools: string[];
  icon: string;
}

export const FIFTY_NINJAS_DATA = {
  brand: {
    name: "50Ninjas",
    fullName: "50Ninjas — AI Creator Community & Content Studio",
    domain: "50ninjas.kavivas.tech",
    website: "https://50ninjas.kavivas.tech",
    tagline: "50 People. 50 Personal Brands. One Community.",
    studioTagline: "Your Personal AI Content Team.",
    actionTagline: "We Create. You Post.",
    combinedTagline: "Learn to Create. Or Let Us Create for You.",
    visionTagline: "Building the Next Generation of AI-Powered Creators.",
    instagram: "https://www.instagram.com/50ninjas.ai/",
    instagramHandle: "@50ninjas.ai",
    founderInstagram: "https://www.instagram.com/first.ninja_/",
    founderHandle: "@first.ninja_",
    whatsappCommunityUrl:
      "https://chat.whatsapp.com/CS78jbH4sbJETauJ3wCrbZ?s=cl&p=i&mlu=4&ilr=4&iam=2",
    applicationFormUrl: "#apply",
    languages: ["English", "Telugu", "Hindi", "Supported mixed formats"],
    operatingModel: "Remote-first, AI-powered content production with human creative direction",
  },

  heroCards: [
    {
      id: "card-1",
      creator: "Sairam Veereddy",
      handle: "@first.ninja_",
      niche: "Tech & AI Workflows",
      tilt: "-14deg",
      videoUrl: "/reels/reel-2.mp4",
      views: "55K",
      likes: "826",
      badge: "55K Views",
      tag: "AI Workflows",
    },
    {
      id: "card-2",
      creator: "Sairam Veereddy",
      handle: "@first.ninja_",
      niche: "Founder & 0-to-1",
      tilt: "-7deg",
      videoUrl: "/reels/reel-3.mp4",
      views: "31.7K",
      likes: "440",
      badge: "31.7K Views",
      tag: "Build in Public",
    },
    {
      id: "card-3",
      creator: "Sairam Veereddy",
      handle: "@first.ninja_",
      niche: "AI Systems & 0-to-1",
      tilt: "0deg",
      videoUrl: "/reels/reel-1.mp4",
      views: "92.2K",
      likes: "1,582",
      badge: "Centerpiece • 92.2K Views",
      tag: "Viral Reel #1",
    },
    {
      id: "card-4",
      creator: "V. S. Reddy",
      handle: "@vsrinsuranceplus",
      niche: "Insurance Advisory",
      tilt: "7deg",
      videoUrl: "/reels/reel-4.mp4",
      views: "53.6K",
      likes: "395",
      badge: "53.6K Views",
      tag: "Senior Advisory",
    },
    {
      id: "card-5",
      creator: "V. S. Reddy",
      handle: "@vsrinsuranceplus",
      niche: "Wealth & Pension Solutions",
      tilt: "14deg",
      videoUrl: "/reels/reel-5.mp4",
      views: "2.9K",
      likes: "17",
      badge: "2.9K Views",
      tag: "LIC Advisory",
    },
  ] as HeroCard[],

  stats: [
    { number: "235.4K+", label: "Total Organic Views", detail: "Over 3,260+ likes across showcase Reels" },
    { number: "Your Face", label: "& Voice Cloned", detail: "Custom AI avatars made with your face and voice" },
    { number: "Amazing", label: "Video Editing", detail: "Dynamic subtitles, sound design & motion graphics" },
    { number: "Substack", label: "Community Flywheel", detail: "Superprofile auto-DM to owned subscribers" },
  ],

  whatWeProvide: [
    {
      id: "prov-1",
      title: "Avatar Video (Your Face & Voice)",
      subtitle: "Edited The Best Way • Match Any Reference",
      description:
        "High-fidelity vertical Reel using your approved facial model and cloned voice. Edited the best way with kinetic word-by-word subtitles, sound design, transitions, and zero watermarks. You can give references of any creators you like — we match their style.",
      icon: "Film",
      badge: "The Best Way",
    },
    {
      id: "prov-2",
      title: "Custom High-CTR Thumbnail",
      subtitle: "Instagram Grid Optimized",
      description:
        "Custom designed Reel cover with bold typography, branding consistency, and high-contrast composition to maximize profile grid tap-through rates.",
      icon: "Image",
      badge: "Reel Cover",
    },
    {
      id: "prov-3",
      title: "Viral Caption Matter with Keywords",
      subtitle: "SEO Keywords & Hashtag Clusters",
      description:
        "Ready-to-paste caption written with proven retention hooks, value-packed body copy, relevant search keywords, and tailored hashtag clusters.",
      icon: "FileText",
      badge: "SEO & Hook Copy",
    },
    {
      id: "prov-4",
      title: "Auto-DM Message Matter",
      subtitle: "Keywords & Link Delivery Copy",
      description:
        "Comment trigger keywords, instant DM response copy, and automated link delivery messages. Optimized for Superprofile or your preferred auto-DM platform.",
      icon: "MessageSquare",
      badge: "Superprofile Ready",
    },
  ],

  creatorFlywheel: [
    {
      step: "01",
      title: "Download & Upload Video",
      headline: "Post with Given Captions & Keywords",
      description:
        "Simply download your ready-to-post vertical MP4 package from 50Ninjas and publish it to Instagram using the provided viral caption, keywords, and cover.",
      icon: "Download",
    },
    {
      step: "02",
      title: "Auto-DM Triggers on Comments",
      headline: "We Recommend Superprofile",
      description:
        "When viewers comment your trigger keyword (e.g. 'GUIDE' or 'AI'), your auto-DM tool instantly delivers the link. You can use any auto-DM platform — we prefer and recommend Superprofile for seamless delivery.",
      icon: "Send",
    },
    {
      step: "03",
      title: "Build Your Substack Community",
      headline: "Own Your Audience & Monetize",
      description:
        "Route all your viral Instagram traffic directly into your Substack newsletter community. Post your in-depth matter there, giving the link in auto-DMs or regular likes to turn viewers into owned lifelong subscribers.",
      icon: "BookOpen",
    },
  ],

  communitySteps: [
    {
      step: "01",
      title: "Apply for Founding 50",
      description: "Submit your basic profile, Instagram handle, and chosen content niche. No prior editing or followers required.",
    },
    {
      step: "02",
      title: "Join Official WhatsApp",
      description: "Accepted applicants receive direct entry to the private cohort group for peer feedback, prompts, and sprint challenges.",
    },
    {
      step: "03",
      title: "Claim Your Niche",
      description: "Pick your category (Tech, Finance, Food, Travel, Business, etc.). AI is your production engine, not your video subject.",
    },
    {
      step: "04",
      title: "AI Scripting & Prompts",
      description: "Use curated prompts across Claude, ChatGPT, Grok, and Muse to turn raw thoughts into compelling hooks and punchy scripts.",
    },
    {
      step: "05",
      title: "Receive Creative Guidance",
      description: "Get weekly prompt templates, avatar/voice workflows, and automated editing recipes (Claude Code, FFmpeg, Remotion).",
    },
    {
      step: "06",
      title: "Camera-Free or On-Camera",
      description: "Record yourself or create faceless/AI avatar videos. Camera fear is solved with synthetic voices and B-roll engines.",
    },
    {
      step: "07",
      title: "Publish & Collab",
      description: "Publish your original Reel once per week and invite @50ninjas.ai as a collaborator to unlock shared distribution.",
    },
    {
      step: "08",
      title: "Iterate & Grow Together",
      description: "Review retention hooks, comment triggers, auto-DM sequences, and level up with peer reviews and weekly feedback.",
    },
  ],

  studioSteps: [
    {
      step: "01",
      title: "Choose a Plan",
      description: "Select Starter Ninja (4 Reels), Growth Ninja (12 Reels), or Pro Ninja (20 Reels) based on your publishing velocity.",
    },
    {
      step: "02",
      title: "Deep-Dive Onboarding",
      description: "Provide your brand voice, niche, language preference (English/Telugu/Hindi), visual aesthetic, and authorized avatar/voice references.",
    },
    {
      step: "03",
      title: "Define Content Strategy",
      description: "We map your content pillars, core hooks, target customer pain points, and recurring content series formats.",
    },
    {
      step: "04",
      title: "Weekday Topic Recommendations",
      description: "We research trending angles and deliver fresh topic recommendations with hooks and outlines directly to your review dashboard.",
    },
    {
      step: "05",
      title: "High-Retention Scriptwriting",
      description: "Our scriptwriting workflows draft attention-grabbing hooks, concise explanations, educational beats, and calls to action.",
    },
    {
      step: "06",
      title: "AI Video Production",
      description: "We generate video scenes with authorized AI avatars, voice clones, cinematic B-roll, or incorporate your raw footage.",
    },
    {
      step: "07",
      title: "Automated AI Editing",
      description: "Dynamic subtitles, motion graphics, audio mastering, sound design, and text callouts assembled using Remotion & FFmpeg.",
    },
    {
      step: "08",
      title: "Thumbnails, Captions & Auto-DM",
      description: "Every video comes with a custom Reel cover, ready-to-paste caption with hashtags, and comment-triggered auto-DM copy.",
    },
    {
      step: "09",
      title: "Client Review & Revisions",
      description: "Review the full content package. Request minor adjustments to pacing, text, or music with rapid turnaround.",
    },
    {
      step: "10",
      title: "Final Delivery & Publishing",
      description: "Receive the high-res vertical MP4 and all assets ready to post on Instagram, TikTok, LinkedIn, or YouTube Shorts.",
    },
  ],

  deliverablesPackage: [
    {
      name: "Finished Vertical Reel",
      format: "MP4 • 1080x1920 (9:16)",
      detail: "Clean cut, dynamic subtitles, audio leveling, motion graphics, and zero watermarks.",
      icon: "Film",
    },
    {
      name: "Custom Reel Cover / Thumbnail",
      format: "PNG / JPG",
      detail: "Optimized for Instagram grid consistency with high-contrast text and branding.",
      icon: "Image",
    },
    {
      name: "Ready-to-Paste Caption",
      format: "Text with Hook & CTA",
      detail: "Engaging caption copy with proven hook structures and strategic hashtag clusters.",
      icon: "FileText",
    },
    {
      name: "Auto-DM Conversion Copy",
      format: "Keyword & Sequence",
      detail: "Comment trigger keywords, instant DM reply copy, and link-delivery sequences.",
      icon: "MessageSquare",
    },
    {
      name: "Production Script & Notes",
      format: "Full Dialogue & Timestamps",
      detail: "Complete written transcript with hook analysis, source links, and distribution tips.",
      icon: "FileCode",
    },
    {
      name: "Multi-Platform Export",
      format: "Instagram, Shorts, TikTok",
      detail: "Aspect ratio and subtitle safe-zone checked across all vertical platforms.",
      icon: "Share2",
    },
  ],

  pricingTiers: [
    {
      id: "starter",
      name: "Starter Ninja",
      badge: "Essential Consistency",
      popular: false,
      monthlyRegular: 99,
      monthlyIntro: 79,
      discountPercent: 20,
      reelsPerMonth: 4,
      frequency: "1 Reel / week",
      description: "Perfect for busy professionals and emerging creators testing the waters of consistent personal branding.",
      features: [
        "4 Complete Ready-to-Post Instagram Reels / mo",
        "Deep research & custom scriptwriting for each Reel",
        "AI video generation & avatar/faceless production",
        "Dynamic animated subtitles & sound design",
        "Custom branded Reel covers / thumbnails",
        "Ready-to-paste captions with targeted hashtags",
        "Comment-triggered Auto-DM copy & sequence",
        "1 Revision round included per Reel",
        "Standard production delivery queue",
      ],
      revisions: 1,
      priority: "Standard",
      idealFor: "Solopreneurs & beginners publishing 1x weekly",
    },
    {
      id: "growth",
      name: "Growth Ninja",
      badge: "Most Popular",
      popular: true,
      monthlyRegular: 199,
      monthlyIntro: 149,
      discountPercent: 25,
      reelsPerMonth: 12,
      frequency: "3 Reels / week",
      description: "Built for active influencers, startup founders, and advisors scaling audience engagement and authority.",
      features: [
        "12 Complete Ready-to-Post Instagram Reels / mo",
        "Weekday topic recommendations & trend monitoring",
        "Custom scripts tailored to your specific audience tone",
        "AI avatar, voice clone, or faceless B-roll production",
        "Advanced Remotion/FFmpeg motion graphics & transitions",
        "Custom branded thumbnails & story templates",
        "Captions, hashtags & full Auto-DM lead sequences",
        "2 Revision rounds included per Reel",
        "Monthly content analytics & performance review",
        "Priority production queue with 48h turnaround",
      ],
      revisions: 2,
      priority: "Priority (48h)",
      idealFor: "Growing creators & founders publishing 3x weekly",
    },
    {
      id: "pro",
      name: "Pro Ninja",
      badge: "Maximum Velocity",
      popular: false,
      monthlyRegular: 399,
      monthlyIntro: 279,
      discountPercent: 30,
      reelsPerMonth: 20,
      frequency: "5 Reels / week",
      description: "Complete hands-off content production for established personal brands, agencies, and high-growth ventures.",
      features: [
        "20 Complete Ready-to-Post Instagram Reels / mo",
        "Dedicated daily topic research & competitor gap analysis",
        "Full multi-camera / multi-agent script & visual direction",
        "High-fidelity avatar & custom voice synthesis workflows",
        "Premium animation, b-roll layering & cinematic grading",
        "Custom high-CTR thumbnails and multi-format crops",
        "Full captions, hashtag matrix & multi-step Auto-DM funnels",
        "2 Revision rounds included per Reel",
        "Weekly performance review & iterative hook optimization",
        "Highest priority queue with dedicated creative director",
      ],
      revisions: 2,
      priority: "Highest VIP Priority",
      idealFor: "Established brands & founders dominating their category",
    },
  ] as PricingTier[],

  agents: [
    {
      name: "Research Agent",
      role: "Trend & Hook Discovery",
      description: "Scans social feeds, industry whitepapers, and audience questions using Grok, Muse, and Perplexity.",
      tools: ["Grok", "Muse", "Perplexity", "Reddit Trends"],
      icon: "Search",
    },
    {
      name: "Strategy Agent",
      role: "Content Pillars & Calendar",
      description: "Organizes client content pillars, posting cadence, and historical high-retention performance buckets.",
      tools: ["Calendar Engine", "Pillar Matrix", "Audience Graphs"],
      icon: "Calendar",
    },
    {
      name: "Scriptwriting Agent",
      role: "Storytelling & Dialogue",
      description: "Transforms raw topics into 3-act short-form scripts with high-hook first 3 seconds and punchy CTAs.",
      tools: ["Claude 3.5 Sonnet", "ChatGPT-4o", "Hook Library"],
      icon: "PenTool",
    },
    {
      name: "Prompt Engineering Agent",
      role: "Visual Scene Synthesis",
      description: "Translates script storyboards into hyper-detailed generative prompts for avatar and cinematic generation.",
      tools: ["Prompt Optimizer", "Seed Trackers", "Style Embeddings"],
      icon: "Sparkles",
    },
    {
      name: "Video Generation Agent",
      role: "Media Orchestration",
      description: "Orchestrates authorized generative tools (Google Flow, Gemini, Runway) and compiles raw clip assets.",
      tools: ["Google Flow", "Gemini Video", "Runway", "Luma"],
      icon: "Video",
    },
    {
      name: "Editing Agent",
      role: "Remotion & Motion Assembly",
      description: "Automates scene cutting, animated word-by-word subtitles, audio normalization, and transition pacing.",
      tools: ["Remotion", "FFmpeg", "Claude Code", "Antigravity"],
      icon: "Scissors",
    },
    {
      name: "Branding Agent",
      role: "Thumbnails & Visual Identity",
      description: "Maintains typography, brand colors, cover templates, and multi-platform safe-zone alignments.",
      tools: ["Canvas Engine", "Cover Generator", "Color Palettes"],
      icon: "Layout",
    },
    {
      name: "Delivery Agent",
      role: "Packaging & Auto-DM Copy",
      description: "Compiles final vertical MP4, custom cover, formatted caption, hashtags, and auto-DM keyword response.",
      tools: ["Packager", "Copy Formatter", "Link Bundler"],
      icon: "PackageCheck",
    },
    {
      name: "Analytics Agent",
      role: "Hook & Retention Insights",
      description: "Analyzes client-provided Reel metrics, retention drops, and comments to iterate next week's scripts.",
      tools: ["Metric Engine", "Retention Curves", "Feedback Loops"],
      icon: "BarChart3",
    },
    {
      name: "Operations Agent",
      role: "Subscription & Credit Tracker",
      description: "Monitors video delivery milestones, subscription allowances, turnaround SLAs, and revision rounds.",
      tools: ["Status Engine", "SLA Tracker", "Quota Monitor"],
      icon: "Cpu",
    },
  ] as AgentSpec[],

  faqs: [
    // Community FAQs
    {
      question: "Is the 50Ninjas Community really free?",
      answer: "Yes, 100% free. The 50Ninjas Experiment is a cohort initiative to bring together 50 aspiring creators who want to build personal brands. You don't pay any fees to be in the cohort.",
      category: "community",
    },
    {
      question: "Do I need followers or prior experience to join?",
      answer: "None at all. The community is specifically tailored for beginners who have zero followers or no prior video editing skills. We guide you through AI tools to start creating immediately.",
      category: "community",
    },
    {
      question: "Do I have to show my face on camera?",
      answer: "No. You can produce faceless videos, screen recordings, custom AI avatars, animated sequences, or synthetic voiceovers. Camera fear is never a blocker.",
      category: "community",
    },
    {
      question: "Do my videos have to be about AI?",
      answer: "Not at all. AI is our production tool, not your content topic. You can create content in finance, tech, fitness, travel, food, career, beauty, gaming, or whatever you are passionate about.",
      category: "community",
    },
    {
      question: "What is the weekly commitment?",
      answer: "Every member is expected to publish at least one original Reel per week on their own Instagram account and invite @50ninjas.ai as a collaborator so we can support and distribute each other.",
      category: "community",
    },
    {
      question: "Will 50Ninjas edit all my videos for free in the community?",
      answer: "No. Community membership provides peer learning, prompt templates, and AI workflow guides so you learn to create yourself. If you want our team to do 100% of the production for you, that is our paid 50Ninjas Studio service.",
      category: "community",
    },

    // Studio FAQs
    {
      question: "What exactly is included in a 50Ninjas Studio package?",
      answer: "Each video is delivered as a complete ready-to-post package: the finished high-resolution MP4 Reel with subtitles, a custom cover/thumbnail, a ready-to-paste caption with hashtags, auto-DM response copy, and the production script.",
      category: "studio",
    },
    {
      question: "Do I need to record myself for Studio videos?",
      answer: "Not necessarily. We can produce videos using authorized AI avatars of you, synthetic voiceover narration, faceless stock/generative footage, or incorporate your raw mobile clips if you prefer.",
      category: "studio",
    },
    {
      question: "Will the AI avatar look and sound exactly like me?",
      answer: "We aim for clean, consistent, and natural-looking avatar generation using approved reference footage and voice samples. While high quality, minor differences exist compared to live camera footage.",
      category: "studio",
    },
    {
      question: "Can I choose my own topics or do you suggest them?",
      answer: "Both! You can submit topics anytime, or choose from the curated weekday topic recommendations we provide based on your niche and current trends.",
      category: "studio",
    },
    {
      question: "Does the package include a Google AI Pro subscription?",
      answer: "No. Third-party generative subscriptions (such as Google AI Pro) are separate. We operate with customer-authorized seats or agency accounts to keep studio fees low and transparent.",
      category: "studio",
    },
    {
      question: "Do you support Indian languages like Telugu or Hindi?",
      answer: "Yes! We support English, Telugu, Hindi, and mixed-language formats (e.g. Hinglish, Telgish) where our tooling and quality control standards meet production benchmarks.",
      category: "studio",
    },
    {
      question: "Do you guarantee virality or follower numbers?",
      answer: "We guarantee world-class production consistency, high-retention hooks, and professional delivery. However, we do not promise synthetic virality, view numbers, or follower growth, as platform distribution depends on real audience engagement.",
      category: "studio",
    },
  ] as FaqItem[],

  trustPrinciples: [
    {
      title: "Explicit Likeness & Voice Consent",
      description: "We strictly require written authorization before creating AI avatars or cloning voices. We never create unauthorized impersonations.",
      icon: "ShieldCheck",
    },
    {
      title: "100% Client Content Ownership",
      description: "Once delivered and paid for, you own full rights to your final videos, scripts, and thumbnails to publish wherever you like.",
      icon: "Award",
    },
    {
      title: "Zero Credential Sharing",
      description: "We never ask for your personal Google password, social logins, or banking credentials. We use scoped workspace permissions.",
      icon: "Lock",
    },
    {
      title: "No AI Virality Gimmicks",
      description: "No bot views, no fake engagement pods, no false promises. Real personal brands built on authentic topics and consistent publishing.",
      icon: "CheckCircle",
    },
  ],
};
