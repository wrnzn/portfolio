export interface Quest {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const cvData = {
  profile: {
    name: "Joseph Alejo",
    class: "Grand Architect of Systems & Applied Automata",
    contact: "josephalejo1412@gmail.com | Tokyo, JP",
    summary: "Systems-Oriented Software Engineer and Applied AI Specialist with expertise in building scalable, secure web architectures and integrating machine learning pipelines (NLP, Predictive Modeling, Local LLMs) directly into production environments. Passionate about software craftsmanship, clean architecture (SOLID), and engineering privacy-first platforms. Exploring the bleeding-edge intersections of AI, Neurotechnology, and immersive XR experiences."
  },
  quests: [
    {
      id: "luntiai",
      title: "The LuntiAI Harvest Protocol (Agritech SaaS)",
      role: "Lead Developer",
      period: "May 2026",
      description: [
        "Architected an end-to-end Agritech SaaS platform, bridging data science and web architecture by training a Random Forest predictive crop model and integrating it into a Node.js backend.",
        "Scaled application data pipelines for cloud deployment by migrating local SQLite databases to a serverless Neon PostgreSQL architecture.",
        "Monetized predictive ML features securely by engineering a JWT-based authentication system with a dynamic, role-based quota-locking UI."
      ]
    },
    {
      id: "apartrack",
      title: "The Fortress Defense of AparTrack",
      role: "Software Engineer (Security-First Management System)",
      period: "May 2026 - Present",
      description: [
        "Engineered a high-performance frontend architecture without heavy frameworks, utilizing Vanilla JS and strict SOLID principles.",
        "Achieved 100% compliance with strict data security standards (RA 10173) by implementing secondary-factor authentication (Recovery PINs) and encrypted state management.",
        "Ensured zero-regression deployment cycles by architecting an automated end-to-end (E2E) UI testing pipeline using Playwright."
      ]
    },
    {
      id: "local-llm",
      title: "Summoning the Qwen-2.5 Familiar",
      role: "AI Systems Engineer (Privacy-First AI RPG)",
      period: "May 2026 - Present",
      description: [
        "Developed a dynamic, privacy-focused application loop by orchestrating a localized Qwen 2.5-Coder Large Language Model, eliminating reliance on costly third-party API dependencies.",
        "Maintained secure and authoritative player state by building a robust Node.js backend that interfaces with the local LLM via strict JSON-based communication protocols."
      ]
    },
    {
      id: "sentisuri",
      title: "The Sentisuri Mind-Reading Runes",
      role: "Frontend & NLP Engineer",
      period: "February 2026 - March 2026",
      description: [
        "Deployed applied Natural Language Processing (NLP) models into a functional user interface by designing a specialized Brutalist design system focused on data retention and high-contrast accessibility."
      ]
    }
  ],
  grimoire: [
    {
      category: "Arcane Languages (Programming)",
      skills: ["Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "High-Tier Spells (Applied AI & ML)",
      skills: ["Scikit-Learn", "Pandas", "NLP (Sentiment Analysis)", "Local LLM Orchestration", "Predictive Modeling"]
    },
    {
      category: "Infrastructure Runes (Backend & Cloud)",
      skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "Neon Serverless", "Vercel"]
    },
    {
      category: "Fortress Architecture",
      skills: ["Clean Architecture", "SOLID Principles", "E2E Testing (Playwright)", "DOM Management"]
    }
  ],
  academy: {
    name: "The Tagum Academy of Computer Science (University of Mindanao)",
    degree: "Bachelor of Science in Computer Science • 3rd Year",
    location: "Tagum City, Philippines",
    period: "August 2023 - May 2027"
  }
};
