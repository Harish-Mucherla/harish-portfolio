export const personalInfo = {
  name: "Harish Mucherla",
  tagline: "Full-Stack Developer",
  bio: "I build things for the web — from complex enterprise dashboards to patient-facing healthcare platforms. With 9+ years as a Full-Stack Developer, I've worked with clients like Cigna, BlueCross BlueShield of Florida and Verizon to turn messy domain problems into clean, reliable digital products. I care about the intersection of great UX and solid engineering.",
  linkedin: "https://www.linkedin.com/in/harish-mucherla/",
  github: "https://github.com/harish-mucherla",
  email: "harish.mucherlas@gmail.com",
  yearsOfExperience: 9,
};

export const projects = [
  {
    id: 1,
    name: "Benefit Experience Navigator",
    client: "Cigna Healthcare",
    badge: "Current",
    description:
      "A benefits navigation platform helping employees understand and manage their healthcare benefits. Built dynamic, accessible UI components and integrated complex benefits APIs to simplify decision-making at scale.",
    impact: "Simplifying benefits decisions for thousands of Cigna employees",
    stack: ["React", "Node.js", "Next.js", "GraphQL", "PostgreSQL", "TypeScript", "Redux Toolkit", "Material UI", "Jest", "Figma"],
    domain: "Healthcare · Benefits Administration",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: 2,
    name: "Pharmacy Benefit Management",
    client: "BlueCross BlueShield of Florida",
    badge: null,
    description:
      "Built and maintained a pharmacy benefits management system handling formulary management, prescription workflows, and member eligibility across a large-scale insurance platform.",
    impact: "Managing pharmacy workflows at enterprise scale",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Redux Toolkit", "Material UI", "Styled Components"],
    domain: "Healthcare · Insurance",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: 3,
    name: "Leave Tracker Platform",
    client: "Verizon",
    badge: null,
    description:
      "Developed an internal workforce leave management platform enabling HR and employees to track, request, and manage leave in real time. Focused on performance and a clean self-service experience.",
    impact: "Streamlining leave management for a Fortune 20 workforce",
    stack: ["React","Redux", "Node.js", "Express.js", "MongoDB","VZComponents", "Styled Components"],
    domain: "Telecom · HR Tech",
    gradient: "from-violet-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: 4,
    name: "CareConnect",
    client: "BlueCross BlueShield of Florida",
    badge: null,
    description:
      "Contributed to a patient-provider connectivity platform improving care coordination and communication between members and healthcare networks across the state of Florida.",
    impact: "Connecting members and providers across Florida's healthcare network",
    stack: ["React","Redux", "Node.js", 'Express.js',"Material UI", "Styled Components", "Jest", "Recharts", "Adobe XD"],
    domain: "Healthcare · Care Management",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: 5,
    name: "Telecom Operations Dashboard",
    client: "MobileComm Professionals",
    badge: null,
    description:
      "Built an operational monitoring dashboard giving telecom teams real-time visibility into network operations, incidents, and performance metrics through intuitive data visualizations.",
    impact: "Real-time operational visibility for telecom infrastructure teams",
    stack: ["React", "Redux", "Material UI"],
    domain: "Telecom · Operations",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    id: 6,
    name: "Business Operations Management Portal",
    client: "Askio Infotech Services Pvt Ltd",
    badge: null,
    description:
      "Developed a business operations management portal streamlining internal workflows, reporting, and operational processes. Focused on building a clean, intuitive interface for day-to-day business management.",
    impact: "Centralising business operations into a single, manageable platform",
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    domain: "Enterprise · Operations",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    group: "State Management",
    items: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    group: "Testing",
    items: ["Jest"],
  },
  {
    group: "Design Tools",
    items: ["Figma", "Adobe XD"],
  },
  {
    group: "DevOps & Tools",
    items: ["Jenkins", "OpenShift", "Git", "GitHub"],
  },
];

export const timeline = [
  { period: "January 2025 – Present", role: "Full-Stack Developer", company: "Cigna Healthcare" },
  { period: "October 2022 – December 2024", role: "Full-Stack Developer", company: "BlueCross BlueShield of Florida" },
  { period: "March 2022 – September 2022", role: "Full-Stack Developer", company: "Verizon" },
  { period: "April 2019 – February 2022", role: "Frontend Developer", company: "BlueCross BlueShield of Florida" },
  { period: "July 2018 – December 2018", role: "Frontend Developer", company: "MobileComm Professionals" },
  { period: "May 2014 – July 2015", role: "Frontend Developer", company: "Askio Infotech Services Pvt Ltd" },
];
