export const BRAND = {
  name: "Digital Intelligence Marketplace",
  short: "DIM",
  tagline: "Elevate Your Digital IQ.",
  philosophy: "Learn. Build. Connect. Earn. Grow.",
  email: "hello@digitalintelligencemarketplace.com",
};

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Learn", to: "/learn" },
  { label: "Build", to: "/build" },
  { label: "Career", to: "/career" },
  { label: "Creator", to: "/creator" },
  { label: "Community", to: "/community" },
  { label: "Memberships", to: "/memberships" },
  { label: "About", to: "/about" },
];

export type Accent = "cyan" | "blue" | "teal" | "purple" | "navy";

export type Pillar = {
  key: string;
  title: string;
  to: string;
  accent: Accent;
  summary: string;
  description: string;
  items: string[];
  cta: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "learn",
    title: "Learn",
    to: "/learn",
    accent: "blue",
    summary: "Develop practical AI and digital skills.",
    description:
      "Structured learning that focuses on what you can actually apply — AI fundamentals, digital tools, and the working habits behind them.",
    items: [
      "Courses built around practical outcomes",
      "Learning resources and guided paths",
      "Skills challenges",
      "Practical, applied learning",
      "AI education for non-technical people too",
    ],
    cta: "Explore Learning",
  },
  {
    key: "build",
    title: "Build",
    to: "/build",
    accent: "cyan",
    summary: "Turn knowledge into real-world projects.",
    description:
      "Knowledge becomes valuable when it produces something. Build turns what you learn into projects you can show and use.",
    items: [
      "Project resources and briefs",
      "AI tools matched to your project",
      "Templates to start faster",
      "Practical projects, not exercises",
      "Portfolio development",
    ],
    cta: "Start Building",
  },
  {
    key: "connect",
    title: "Connect",
    to: "/connect",
    accent: "teal",
    summary: "Meet people who are learning and building too.",
    description:
      "Progress accelerates around other people. Connect is where members share work, ask questions, and find collaborators.",
    items: [
      "Community discussions",
      "Networking with peers and professionals",
      "Events and sessions",
      "Collaboration on projects",
      "Peer learning",
    ],
    cta: "Meet the Community",
  },
  {
    key: "earn",
    title: "Earn",
    to: "/earn",
    accent: "purple",
    summary: "Turn digital capabilities into opportunities.",
    description:
      "Earn is about the bridge between capability and income — creator work, freelancing, digital products, and marketplace participation.",
    items: [
      "Creator opportunities",
      "Marketplace participation",
      "Freelancing foundations",
      "Digital products",
      "Earning pathways",
    ],
    cta: "Explore Opportunities",
  },
  {
    key: "grow",
    title: "Grow",
    to: "/grow",
    accent: "navy",
    summary: "Keep progressing professionally.",
    description:
      "Your digital journey doesn't end with one course. Grow is the long-term track: career direction, credentials, and readiness.",
    items: [
      "Career development",
      "Certifications",
      "Career resources",
      "Mentorship opportunities",
      "Job readiness",
    ],
    cta: "Explore Career",
  },
];

export type Audience = {
  title: string;
  description: string;
  to: string;
};

export const AUDIENCES: Audience[] = [
  {
    title: "Students",
    description: "Build skills before entering the workforce.",
    to: "/learn",
  },
  {
    title: "Creators",
    description: "Turn ideas and creativity into digital opportunities.",
    to: "/creator",
  },
  {
    title: "Freelancers",
    description: "Develop skills, build portfolios and discover opportunities.",
    to: "/earn",
  },
  {
    title: "Entrepreneurs",
    description: "Use AI and digital tools to build and grow.",
    to: "/build",
  },
  {
    title: "Graduates",
    description: "Become more job-ready and competitive.",
    to: "/career",
  },
  {
    title: "Young Professionals",
    description: "Upskill and accelerate your career.",
    to: "/career",
  },
  {
    title: "Career Changers",
    description: "Build capabilities for the next chapter.",
    to: "/grow",
  },
  {
    title: "Businesses",
    description: "Explore digital intelligence and innovation.",
    to: "/contact",
  },
];

export type JourneyPath = {
  goal: string;
  label: string;
  steps: string[];
  cta: string;
  to: string;
  note: string;
};

export const JOURNEY_PATHS: JourneyPath[] = [
  {
    goal: "learn-ai",
    label: "I want to learn AI.",
    steps: ["Discover", "Learn", "Practise", "Build", "Share", "Grow"],
    cta: "Start Learning on DIM",
    to: "/learn",
    note: "Start with AI foundations, then apply them immediately in small practical builds.",
  },
  {
    goal: "build-projects",
    label: "I want to build projects.",
    steps: ["Learn", "Choose a brief", "Use AI tools", "Build", "Portfolio", "Connect"],
    cta: "Start Building",
    to: "/build",
    note: "Use project briefs and templates so you always have something real to work on.",
  },
  {
    goal: "creator",
    label: "I want to become a creator.",
    steps: ["Learn", "Create", "Tools", "Publish", "Community", "Earn"],
    cta: "Explore Creator",
    to: "/creator",
    note: "The Creator experience focuses on making, publishing and growing what you create.",
  },
  {
    goal: "career",
    label: "I want to grow my career.",
    steps: ["Learn", "Build", "Certify", "Portfolio", "Connect", "Opportunities", "Grow"],
    cta: "Start My Career Journey",
    to: "/career",
    note: "A structured path from skills to job readiness, with career resources along the way.",
  },
  {
    goal: "opportunities",
    label: "I want to find opportunities.",
    steps: ["Skills", "Portfolio", "Community", "Networking", "Opportunities"],
    cta: "Explore Opportunities",
    to: "/opportunities",
    note: "Opportunities follow visible capability. DIM helps you build both.",
  },
  {
    goal: "earning",
    label: "I want to start earning.",
    steps: ["Skills", "Offer", "Tools", "Clients or products", "Earn", "Scale"],
    cta: "Explore Earning",
    to: "/earn",
    note: "Turn a specific capability into something someone will pay for.",
  },
  {
    goal: "business",
    label: "I want to build a business.",
    steps: ["Idea", "Learn", "AI tools", "Build", "Launch", "Network", "Grow"],
    cta: "Explore Building",
    to: "/build",
    note: "Use AI and digital tools to move from idea to a working, growing venture.",
  },
];

export type ToolCategory = { name: string; description: string };

export const TOOL_CATEGORIES: ToolCategory[] = [
  { name: "Learning", description: "Tools that help you understand and retain faster." },
  { name: "Productivity", description: "Get more done with less friction." },
  { name: "Content Creation", description: "Write, film, edit, publish." },
  { name: "Design", description: "Visuals, brand and interfaces." },
  { name: "Development", description: "Build apps, sites and automations." },
  { name: "Marketing", description: "Reach the right people." },
  { name: "Business", description: "Operations, finance and admin." },
  { name: "Research", description: "Find, verify and synthesise information." },
  { name: "Career", description: "CVs, interviews, positioning and job search." },
  { name: "Automation", description: "Let repetitive work run itself." },
];

export type Tier = {
  key: "starter" | "creator" | "career" | "program";
  name: string;
  price: string;
  cadence: string;
  audience: string;
  cta: string;
  to: string;
  accent: Accent;
  features: string[];
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    price: "Free",
    cadence: "No card required",
    audience:
      "For people who want to explore DIM and begin their digital journey.",
    cta: "Start Free",
    to: "/get-started",
    accent: "cyan",
    features: [
      "Free DIM account",
      "Starter learning content",
      "AI Tools Directory previews",
      "Community access",
      "Personalised pathway suggestions",
      "Upgrade at any time",
    ],
  },
  {
    key: "creator",
    name: "Creator",
    price: "R95",
    cadence: "per month",
    audience:
      "For creators, freelancers, entrepreneurs, side hustlers and people who want to build and earn.",
    cta: "Choose Creator",
    to: "/creator",
    accent: "purple",
    featured: true,
    features: [
      "Everything in Starter",
      "Premium AI courses",
      "Full AI Tools Directory",
      "AI prompt resources",
      "Content creation resources",
      "Business and freelancing resources",
      "Creator community",
      "Creator challenges",
      "Portfolio building",
      "Project templates",
      "Early access to new features",
      "Member discounts",
      "Badges and achievements",
    ],
  },
  {
    key: "career",
    name: "Career",
    price: "R250",
    cadence: "per month",
    audience:
      "For students, graduates, job seekers, young professionals and career changers.",
    cta: "Choose Career",
    to: "/career",
    accent: "blue",
    features: [
      "Everything in Creator",
      "Career roadmap",
      "Certifications",
      "CV and resume resources",
      "Interview preparation",
      "Portfolio development",
      "Career mentorship opportunities",
      "Advanced AI Tools Directory",
      "Networking",
      "Job readiness resources",
      "Career community",
      "Career workshops",
      "Opportunities board",
    ],
  },
  {
    key: "program",
    name: "8-Month Career Program",
    price: "R1,650",
    cadence: "once-off, for 8 months",
    audience:
      "For people who want a longer, structured career journey rather than a month-to-month membership.",
    cta: "Start the 8-Month Journey",
    to: "/8-month-career-program",
    accent: "navy",
    features: [
      "The Career experience for 8 months",
      "Structured skills development",
      "Portfolio building",
      "Certifications",
      "Career resources",
      "Community access",
      "Mentorship opportunities",
      "AI tools access",
      "Ongoing career development",
    ],
  },
];

export type CompareValue = "yes" | "no" | "soon";

export type CompareRow = {
  feature: string;
  starter: CompareValue;
  creator: CompareValue;
  career: CompareValue;
  program: CompareValue;
};

export const COMPARISON: CompareRow[] = [
  { feature: "Free DIM account", starter: "yes", creator: "yes", career: "yes", program: "yes" },
  { feature: "Starter learning content", starter: "yes", creator: "yes", career: "yes", program: "yes" },
  { feature: "Community access", starter: "yes", creator: "yes", career: "yes", program: "yes" },
  { feature: "AI Tools Directory previews", starter: "yes", creator: "yes", career: "yes", program: "yes" },
  { feature: "Premium AI courses", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Full AI Tools Directory", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "AI prompt resources", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Content creation resources", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Business and freelancing resources", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Creator community", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Creator challenges", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Project templates", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Portfolio building", starter: "no", creator: "yes", career: "yes", program: "yes" },
  { feature: "Career roadmap", starter: "no", creator: "no", career: "yes", program: "yes" },
  { feature: "CV and interview resources", starter: "no", creator: "no", career: "yes", program: "yes" },
  { feature: "Advanced AI Tools Directory", starter: "no", creator: "no", career: "yes", program: "yes" },
  { feature: "Career workshops", starter: "no", creator: "no", career: "yes", program: "yes" },
  { feature: "Certifications", starter: "no", creator: "no", career: "soon", program: "soon" },
  { feature: "Career mentorship", starter: "no", creator: "no", career: "soon", program: "soon" },
  { feature: "Opportunities board", starter: "no", creator: "no", career: "soon", program: "soon" },
  { feature: "Marketplace participation", starter: "no", creator: "soon", career: "soon", program: "soon" },
  { feature: "Badges and achievements", starter: "no", creator: "soon", career: "soon", program: "soon" },
];

export const WHY_DIM = [
  { title: "Practical", description: "Learn skills you can apply." },
  { title: "Connected", description: "Learn alongside a growing community." },
  { title: "Future-ready", description: "Develop capabilities for an AI-powered economy." },
  { title: "Opportunity-driven", description: "Move from learning toward real opportunities." },
  { title: "Continuous", description: "Your digital journey doesn't stop after one course." },
];

export const HOW_IT_WORKS = [
  { number: "01", title: "Discover", description: "Find your path." },
  { number: "02", title: "Learn", description: "Develop practical knowledge." },
  { number: "03", title: "Build", description: "Apply your skills." },
  { number: "04", title: "Connect", description: "Join people and opportunities." },
  { number: "05", title: "Grow", description: "Advance your career, creativity or business." },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What is Digital Intelligence Marketplace?",
    answer:
      "DIM is a digital intelligence ecosystem that brings learning, AI tools, building, community, career development and earning pathways into one connected experience. It is not only a course platform, a tools directory or a job board — it connects those experiences around your own goals.",
  },
  {
    question: "Who is DIM for?",
    answer:
      "Students, graduates, creators, freelancers, entrepreneurs, young professionals, career changers and businesses exploring digital intelligence. If you want to participate more successfully in the digital economy, DIM is built for you.",
  },
  {
    question: "Is DIM free?",
    answer:
      "Yes, you can create a free Starter account. Paid memberships exist for people who want premium resources, but you never have to subscribe to use DIM.",
  },
  {
    question: "What is the Starter tier?",
    answer:
      "Starter is the free membership. It gives you a DIM account, Starter learning content, AI Tools Directory previews, community access and personalised pathway suggestions.",
  },
  {
    question: "What is the Creator tier?",
    answer:
      "Creator is for people who want to build, create and earn. It adds premium AI courses, the full AI Tools Directory, prompt resources, content creation and business resources, the creator community, challenges, project templates and portfolio building.",
  },
  {
    question: "How much is Creator?",
    answer: "Creator is R95 per month.",
  },
  {
    question: "What is the Career tier?",
    answer:
      "Career is for students, graduates, job seekers, young professionals and career changers. It includes everything in Creator plus career-focused resources: career roadmap, CV and interview resources, portfolio development, advanced AI tools access, networking, career community and workshops.",
  },
  {
    question: "How much is Career?",
    answer: "Career is R250 per month.",
  },
  {
    question: "What is the 8-Month Career Program?",
    answer:
      "It is a longer, structured version of the Career journey that runs for eight months, covering skills development, portfolio building, career resources, community and mentorship opportunities.",
  },
  {
    question: "How much is the 8-Month Career Program?",
    answer:
      "R1,650 as a once-off payment covering eight months. It is not lifetime access.",
  },
  {
    question: "Can I cancel my monthly membership?",
    answer:
      "Yes. Monthly memberships can be cancelled from your account settings and you keep access until the end of the period you have paid for.",
  },
  {
    question: "What does the AI Tools Directory do?",
    answer:
      "It helps you decide which AI tools are worth your time for a specific goal — learning, content, design, development, marketing, business, research, career or automation — instead of leaving you to search and guess.",
  },
  {
    question: "Can beginners use DIM?",
    answer:
      "Yes. DIM is designed to be accessible to people starting from zero, with practical explanations rather than jargon.",
  },
  {
    question: "Is DIM only for technical people?",
    answer:
      "No. Many DIM pathways are for non-technical people who want to use AI and digital tools well in their work, studies or business.",
  },
  {
    question: "Does DIM guarantee a job?",
    answer:
      "No. DIM does not guarantee employment or income. It helps you build skills, projects, credibility and connections that improve your chances.",
  },
  {
    question: "How do I join the community?",
    answer:
      "Create a free Starter account. Community access is included from the free tier.",
  },
  {
    question: "How do I upgrade?",
    answer:
      "You can upgrade to Creator or Career from inside your account at any time. Nothing is preselected for you when you sign up.",
  },
  {
    question: "What happens after I create an account?",
    answer:
      "You go through a short onboarding that asks what you are trying to achieve, then DIM recommends a pathway and your experience is organised around it.",
  },
  {
    question: "What features are coming soon?",
    answer:
      "Certifications, career mentorship, the opportunities board, marketplace participation and badges are still being developed. They are clearly labelled as Coming Soon across the site so you always know what is live today.",
  },
];

export const SOCIALS: { label: string; href: string }[] = [];
