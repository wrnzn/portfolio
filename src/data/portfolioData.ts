export type Project = {
  name: string;
  type: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: Array<{ label: string; href: string }>;
  images: Array<{ src: string; alt: string }>;
  mockup?: {
    label: string;
    title: string;
    lines: string[];
  };
};

export const profile = {
  name: 'Joseph Alejo',
  headline: 'Computer Science student building web apps and applied AI tools.',
  availability: 'Software / Web / AI Internship Candidate',
  email: 'josephalejo1412@gmail.com',
  summary:
    'I build practical student projects with JavaScript, Python, SQL, Node.js/Express, FastAPI, databases, and machine learning workflows. My focus is turning messy requirements into clear interfaces, usable APIs, and small AI systems that people can try.',
  proofPoints: [
    { label: 'Full-stack', value: 'Rental workflows + REST APIs' },
    { label: 'Applied AI', value: 'Crop, NLP, CV projects' },
    { label: 'Shipping', value: 'Hugging Face + GitHub' },
  ],
  about: [
    'I am a third-year Bachelor of Science in Computer Science student at the University of Mindanao Tagum College. My project work sits between web development, backend APIs, data analysis, and applied AI.',
    'I like building projects that can be explained quickly: who it helps, what workflow it improves, and what technical choices made it work. I use AI tools to learn faster, prototype carefully, debug, and improve code without hiding the fundamentals.',
  ],
};

export const contactLinks = {
  github: 'https://github.com/wrnzn',
  linkedin: 'https://linkedin.com/in/joseph-alejo-deocampo/',
  facebook: 'https://web.facebook.com/joseph.alejo.10168',
};

export const resumeLinks = {
  pdf: '/Joseph_Alejo_Resume.pdf',
};

export const featuredProjects: Project[] = [
  {
    name: 'AparTrack',
    type: 'Full-stack rental management system',
    period: 'Feb - Mar 2026',
    summary:
      'Admin and tenant workflows for rental payments, utilities, deposits, penalties, notifications, audit logs, and reports.',
    highlights: [
      'Developed Express.js and MySQL REST API modules for core rental operations.',
      'Implemented JWT login, password hashing, role-based access checks, validation, and centralized error handling.',
      'Built vanilla JavaScript admin and tenant pages with route guards, dashboards, pagination, and Playwright UI tests.',
    ],
    tech: ['Express.js', 'MySQL', 'JWT', 'RBAC', 'Vanilla JS', 'Playwright'],
    links: [{ label: 'Documentation', href: '/docs/apartrack-documentation.pdf' }],
    images: [
      { src: '/project-shots/apartrack-dashboard.webp', alt: 'AparTrack admin dashboard screenshot' },
      { src: '/project-shots/apartrack-payments.webp', alt: 'AparTrack admin payments screenshot' },
      { src: '/project-shots/apartrack-tenant-dashboard.webp', alt: 'AparTrack tenant dashboard screenshot' },
    ],
  },
  {
    name: 'LuntiAI',
    type: 'Agritech AI web app',
    period: 'May 2026',
    summary:
      'Barangay-level crop recommendation app for Tagum City farming scenarios using local soil, weather, and crop data.',
    highlights: [
      'Built FastAPI service around a scikit-learn Random Forest model trained on Philippine crop, soil, and climate data.',
      'Created responsive interface with barangay profiles, weather context, confidence scores, and recommendation output.',
      'Prepared Hugging Face deployment with prediction, barangay, weather, and health-check endpoints.',
    ],
    tech: ['FastAPI', 'scikit-learn', 'Random Forest', 'HTML/CSS', 'JavaScript', 'Hugging Face'],
    links: [
      { label: 'Demo', href: 'https://owaruurawo-luntiai-crop-model.hf.space/app/' },
      { label: 'Documentation', href: '/docs/luntiai-documentation.pdf' },
    ],
    images: [
      { src: '/project-shots/luntiai-recommendation.webp', alt: 'LuntiAI recommendation result screenshot' },
    ],
  },
  {
    name: 'SafeSight AI',
    type: 'Computer vision safety checker',
    period: 'May 2026',
    summary: 'Class project for detecting PPE safety issues in images, video, and webcam input.',
    highlights: [
      'Trained and tested a YOLO11l object detection model on construction safety data.',
      'Reviewed labels, class balance, and bounding boxes with Pandas, Matplotlib, and Seaborn notebooks.',
      'Built Gradio and OpenCV modes for image, video, and live-camera safety checks.',
    ],
    tech: ['YOLO11l', 'OpenCV', 'Gradio', 'Pandas', 'Matplotlib', 'Seaborn'],
    links: [{ label: 'Documentation', href: '/docs/safesight-ai-documentation.pdf' }],
    images: [
      { src: '/project-shots/safesight-image-audit.webp', alt: 'SafeSight AI image audit interface screenshot' },
      { src: '/project-shots/safesight-video-audit.webp', alt: 'SafeSight AI video audit interface screenshot' },
      { src: '/project-shots/safesight-live-webcam.webp', alt: 'SafeSight AI live webcam interface screenshot' },
    ],
  },
  {
    name: 'PC Cafe Simulation',
    type: 'Simulation dashboard',
    period: 'June 2026',
    summary:
      'Discrete-event simulation for cybercafe capacity planning, queue pressure, utilization, and lost demand.',
    highlights: [
      'Modeled 56 PC units with customer arrivals, wait times, session length, top-ups, early logouts, and abandonment.',
      'Analyzed utilization, queue length, full-capacity events, and throughput with Pandas, NumPy, and Plotly.',
      'Generated weekday/weekend scenarios and dashboard views for comparing capacity assumptions.',
    ],
    tech: ['SimPy', 'Pandas', 'NumPy', 'Plotly', 'Gradio', 'Python'],
    links: [
      { label: 'Demo', href: 'https://owaruurawo-pc-cafe-simulation.hf.space' },
      { label: 'Documentation', href: '/docs/pc-cafe-simulation-documentation.pdf' },
    ],
    images: [
      { src: '/project-shots/pc-overview.webp', alt: 'PC Cafe simulation overview dashboard screenshot' },
      { src: '/project-shots/pc-core-eda-new.webp', alt: 'PC Cafe simulation core EDA charts screenshot' },
      { src: '/project-shots/pc-layout-new.webp', alt: 'PC Cafe 2D system layout screenshot' },
    ],
  },
  {
    name: 'Sentisuri',
    type: 'NLP sentiment analysis app',
    period: 'May 2026',
    summary: 'Sentiment classifier for English, Tagalog, and Bisaya/Cebuano review text.',
    highlights: [
      'Built TF-IDF and Logistic Regression pipeline for mixed-language sentiment classification.',
      'Added code-switching and emoji-aware preprocessing for informal review inputs.',
      'Created FastAPI service and web UI for text submission, prediction display, and important-word inspection.',
    ],
    tech: ['FastAPI', 'TF-IDF', 'Logistic Regression', 'NLP', 'Python', 'JavaScript'],
    links: [
      { label: 'GitHub', href: 'https://github.com/ace014/sentisuri' },
      { label: 'Documentation', href: '/docs/sentisuri-documentation.pdf' },
    ],
    images: [
      { src: '/project-shots/sentisuri-positive.webp', alt: 'Sentisuri positive sentiment analysis screenshot' },
      { src: '/project-shots/sentisuri-negative.webp', alt: 'Sentisuri negative sentiment analysis screenshot' },
    ],
  },
  {
    name: 'Albion Toolkit',
    type: 'Python market data utility',
    period: 'March 2026',
    summary: 'Utility for fetching, cleaning, comparing, and inspecting game market data.',
    highlights: [
      'Used Python, Pandas, NumPy, Requests/HTTPX, and Reflex to fetch and display market data.',
      'Built reusable scripts for trend checks and item comparisons.',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'HTTPX', 'Reflex'],
    links: [],
    images: [
      { src: '/project-shots/albion-black-market.webp', alt: 'Albion Toolkit black market flipper screenshot' },
      { src: '/project-shots/albion-farming-profit.webp', alt: 'Albion Toolkit farming profit calculator screenshot' },
    ],
  },
];

export const capabilities = [
  {
    title: 'Build Web Apps',
    description: 'Interfaces, API wiring, forms, dashboards, and responsive layouts.',
    skills: ['JavaScript', 'TypeScript basics', 'HTML', 'CSS', 'React basics', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    title: 'Work With Data & AI',
    description: 'Small applied AI workflows, data cleaning, model demos, and visual analysis.',
    skills: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'NLP', 'YOLO', 'OpenCV', 'SimPy'],
  },
  {
    title: 'Ship & Test',
    description: 'Project deployment, Git workflows, and basic automated UI/test coverage.',
    skills: ['Git', 'GitHub', 'Hugging Face Spaces', 'Render', 'Playwright basics', 'Jest basics', 'Gradio'],
  },
  {
    title: 'Use Databases',
    description: 'Relational and document storage for project-backed workflows.',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Sequelize', 'SQL'],
  },
];
