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

export const contactLinks = {
  email: "mailto:bhawanibytes@gmail.com",
  linkedin: "https://linkedin.com/in/bhawanibytes",
  github: "https://github.com/bhawanibytes",
  twitter: "https://x.com/bhawanibytes",
};

export const projectsList: Project[] = [
  {
    title: "Dap - Chat Client",
    description: `A full-stack chat client, let you connect with people on platform while using leveraging web technology only, no need to install application, You can sync your contacts using google account. It leverages one of fastest http and websocket server in Node.js ecosystem, uWebSocket.js .`,
    tech: [
      "React",
      "RTK",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "UWS",
      "Drizzle ORM",
      "Postgres",
      "JWT",
      "Zod",
      "Winston",
    ],
    image: "/projects/dap.png",
    liveLink: "https://dap.bhawanibytes.com",
    githubLink: "https://github.com/bhawanibytes/bubbly",
  },
  {
    title: "RIMX UI",
    description: "A modern, reusable React component library.",
    tech: [
      "Redux",
      "Radix UI",
      "Framer Motion",
      "React",
      "Shadcn UI",
      "TypeScript",
    ],
    image: "/projects/rimxui.png",
    liveLink: "https://rimx.bhawanibytes.dev",
    githubLink: "https://github.com/bhawanibytes/rimxui",
  },

  {
    title: "Metta Vibes",
    description:
      "An Next.js web application for an behavioral health and wellness services Institute for primaryly focus for Childrens and Women.",
    tech: [
      "React",
      "Tailwind CSS",
      "React.",
      "Next.js",
      "Shadcn UI",
    ],
    image: "/projects/metta-vibes.png",
    liveLink: "https://dev.mettavibez.com",
    githubLink: "https://github.com/bhawanibytes/mettavibes",
  },
];

export const experiences: Experience[] = [
  {
    title: "ROS",
    link: "#",
    role: "Full Stack Engineer",
    location: "Jaipur, Rajasthan",
    dateRange: "Nov 2024 – Present",
    highlights: [
      "Lead team to build intial tech infrastracture of Republic Of Sabjiwala.",
      ],
    techStack: "Next.js, Node.js, PostgreSQL, Drizzle, Twilio, Redis",
  },
];
