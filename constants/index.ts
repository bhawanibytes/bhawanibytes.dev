type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink: string;
  githubLink: string;
};

type Experience = {
  title: string;
  link: string;
  role: string;
  location: string;
  dateRange: string;
  highlights: string[];
  techStack: string;
};

export const resumeLink = "https://docs.google.com/document/d/1Y9mSwRXbTVUpci14QqOjQlBlLS1WGTP1wdGjh-3E5R4/edit?usp=sharing";
export const contactNumber = "+919772868352";

export const contactLinks = {
  email: "mailto:bhawanibytes@gmail.com",
  linkedin: "https://linkedin.com/in/bhawanibytes",
  github: "https://github.com/bhawanibytes",
  twitter: "https://x.com/bhawanibytes",
  phone: `tel:${contactNumber}`,
  whatsapp: `https://wa.me/${contactNumber}`,
};

export const projectsList: Project[] = [
  {
    title: "Metta Vibes",
    description:
      "A Next.js web application for a behavioral health and wellness services institute serving 200+ families, primarily focused on providing mental health support for children and women. Features secure contact forms with reCAPTCHA, and responsive design.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "reCAPTCHA",
      "FormBold",
    ],
    image: "/projects/metta-vibes.png",
    liveLink: "https://dev.mettavibez.com",
    githubLink: "private",
  },
  {
    title: "RIMX UI",
    description:
      "A modern, reusable React component library with 15+ production-ready components. Built with TypeScript for type safety, featuring smooth animations with Framer Motion, and state management with Redux Toolkit.",
    tech: [
      "React",
      "Redux ToolKit",
      "TypeScript",
      "Radix UI",
      "Framer Motion",
      "Shadcn UI",
    ],
    image: "/projects/rimxui.png",
    liveLink: "https://rimx.bhawanibytes.dev",
    githubLink: "https://github.com/bhawanibytes/rimxui",
  },
  {
    title: "Bubbly - Chat Client",
    description: `A full-stack real-time chat application built with modern web technologies. Features include instant messaging, contact syncing via Google OAuth, and WebSocket-powered real-time communication using uWebSocket.js - one of the fastest WebSocket servers in the Node.js ecosystem.`,
    tech: [
      "Next.js",
      "React",
      "RTK",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "uWebSocket.js",
      "Drizzle ORM",
      "Postgres",
      "JWT",
      "Zod",
      "Winston",
    ],
    image: "/projects/dap.png",
    liveLink: "https://bubbly.bhawanibytes.dev",
    githubLink: "https://github.com/bhawanibytes/bubbly",
  },
];

export const experiences: Experience[] = [
  {
    title: "Republic Of Sabjiwala (ROS)",
    link: "https://republicofsabjiwala.com",
    role: "Full Stack Engineer",
    location: "Jaipur, Rajasthan",
    dateRange: "Nov 2024 – Present",
    highlights: [
      "Leading technical architecture and development of a multi-vendor e-commerce platform (currently in development)",
      "Building type-safe APIs with tRPC and designing scalable database schemas with Drizzle ORM, including complex vendor-product relationships and geospatial data using PostGIS extension",
      "Guiding development team on architecture decisions, best practices, and PostgreSQL query optimization",
      "Implementing system infrastructure including real-time order tracking, SMS notifications via Twilio, and Redis caching strategies",
      "Managing PostgreSQL extensions (PostGIS for location-based features) and database optimization techniques",
    ],
    techStack:
      "Next.js, React, RTK, tRPC, Express.js, Node.js, PostgreSQL, Drizzle, Twilio, Redis",
  },
];
