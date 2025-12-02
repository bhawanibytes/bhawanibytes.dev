import TypeScript from "@icons/typescript.svg";
import Python from "@icons/python.svg";
import Go from "@icons/golang.svg";

import NextJS from "@icons/nextjs.svg";
import React from "@icons/react.svg";
import Redux from "@icons/redux.svg";
import Tailwind from "@icons/tailwind.svg";
import Shadcn from "@icons/shadcn.svg";

import Node from "@icons/node.svg";
import Express from "@icons/express.svg";
import uWebSocket from "@icons/uwebsocket.svg";
import Zod from "@icons/zod.webp";

import PostgreSQL from "@icons/postgresql.svg";
import Redis from "@icons/redis.svg";
import MongoDB from "@icons/mongodb.svg";
import Drizzle from "@icons/drizzle.svg";
import Prisma from "@icons/prisma.svg";

import AWS from "@icons/aws.svg";
import Cloudflare from "@icons/cloudflare.svg";
import Vercel from "@icons/vercel.svg";
import Docker from "@icons/docker.svg";
import NGINX from "@icons/nginx.svg";

import Git from "@icons/git.svg";
import Github from "@icons/github.svg";
import Postman from "@icons/postman.svg";
import pnpm from "@icons/pnpm.svg";
import npm from "@icons/npm.svg";

export const techStack = {
  languages: [
    { title: "TypeScript", img: TypeScript },
    { title: "Python", img: Python },
    { title: "GoLang", img: Go },
  ],
  frameworksLibraries: [
    { title: "Next.js", img: NextJS },
    { title: "React", img: React },
    { title: "RTK", img: Redux },
    { title: "Tailwind", img: Tailwind },
    { title: "Shadcn", img: Shadcn },
  ],
  backendRuntime: [
    { title: "Node.js", img: Node },
    { title: "Express", img: Express },
    { title: "uWebSocket.js", img: uWebSocket },
    { title: "Zod", img: Zod },
  ],
  databasesORMs: [
    { title: "PostgreSQL", img: PostgreSQL },
    { title: "Redis", img: Redis },
    { title: "MongoDB", img: MongoDB },
    { title: "Drizzle", img: Drizzle },
    { title: "Prisma", img: Prisma },
  ],
  devopsCloud: [
    { title: "AWS", img: AWS },
    { title: "Cloudflare", img: Cloudflare },
    { title: "Vercel", img: Vercel },
    { title: "Docker", img: Docker },
    { title: "NGINX", img: NGINX },
  ],
  developerTools: [
    { title: "Git", img: Git },
    { title: "Github", img: Github },
    { title: "Postman", img: Postman },
    { title: "pnpm", img: pnpm },
    { title: "npm", img: npm },
  ],
};

export const categoryLabels: Record<keyof typeof techStack, string> = {
  languages: "LANGUAGES",
  frameworksLibraries: "FRAMEWORKS & LIBRARIES",
  backendRuntime: "BACKEND & LIBRARIES",
  databasesORMs: "DATABASES & ORMs",
  devopsCloud: "DEVOPS & CLOUD",
  developerTools: "DEVELOPER TOOLS",
};
