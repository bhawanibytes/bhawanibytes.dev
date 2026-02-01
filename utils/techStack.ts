import TypeScript from "@icons/typescript.svg";
// import Python from "@icons/python.svg";
// import Go from "@icons/golang.svg";

import NextJS from "@icons/nextjs.svg";
import React from "@icons/react.svg";
import Redux from "@icons/redux.svg";
import Tailwind from "@icons/tailwind.svg";
import Shadcn from "@icons/shadcn.svg";

import Node from "@icons/node.svg";
import Express from "@icons/express.svg";
import tRPC from "@icons/trpc.svg";
import uWebSocket from "@icons/uwebsocket.svg";
import Zod from "@icons/zod.webp";

import PostgreSQL from "@icons/postgresql.svg";
import Redis from "@icons/redis.svg";
// import MongoDB from "@icons/mongodb.svg";
import Drizzle from "@icons/drizzle.svg";
// import Prisma from "@icons/prisma.svg";

// import AWS from "@icons/aws.svg";
import Cloudflare from "@icons/cloudflare.svg";
import Vercel from "@icons/vercel.svg";
// import Docker from "@icons/docker.svg";
// import NGINX from "@icons/nginx.svg";

import Git from "@icons/git.svg";
import Github from "@icons/github.svg";
import Postman from "@icons/postman.svg";
import Bruno from "@icons/bruno.svg";
import pnpm from "@icons/pnpm.svg";
import npm from "@icons/npm.svg";

export const techStack = {
  techStack: [
    { title: "TypeScript", img: TypeScript },
    // { title: "Python", img: Python },
    // { title: "GoLang", img: Go },
    // frameworksLibraries
    { title: "Next.js", img: NextJS },
    { title: "tRPC", img: tRPC },
    { title: "React", img: React },
    { title: "RTK", img: Redux },
    { title: "Tailwind", img: Tailwind },
    { title: "Shadcn", img: Shadcn },
    // backendRuntime
    { title: "Node.js", img: Node },
    { title: "Express", img: Express },
    // { title: "Trpc", img: Trpc },
    { title: "uWebSocket.js", img: uWebSocket },
    { title: "Zod", img: Zod },
    // databasesORMs
    { title: "PostgreSQL", img: PostgreSQL },
    { title: "Redis", img: Redis },
    // { title: "MongoDB", img: MongoDB },
    { title: "Drizzle", img: Drizzle },
    // { title: "Prisma", img: Prisma },
    // devopsCloud
    // { title: "AWS", img: AWS },
    { title: "Cloudflare", img: Cloudflare },
    { title: "Vercel", img: Vercel },
    // { title: "Docker", img: Docker },
    // { title: "NGINX", img: NGINX },
    // developerTools
    { title: "Git", img: Git },
    { title: "Github", img: Github },
    { title: "Postman", img: Postman },
    { title: "Bruno", img: Bruno },
    { title: "pnpm", img: pnpm },
    { title: "npm", img: npm },
  ],
};

export const categoryLabels: Record<keyof typeof techStack, string> = {
  techStack: "Tech Stack",
};

// ============================================
// LEARNING ROADMAP (Prioritized by Impact)
// ============================================

// 🔴 CRITICAL PRIORITY (Add These First - Highest ROI)
// 1. Testing Framework (Vitest or Jest)
//    - Why: #1 gap in your stack, expected by all companies
//    - Impact: Differentiates you from 80% of developers
//    - Action: Add 5-10 tests to one existing project, then add to stack
//
// 2. Auth Library (Better Auth, Auth.js, or Clerk)
//    - Why: Every production app needs auth, you know JWT but not modern patterns
//    - Impact: Shows you can build secure, production-ready apps
//    - Action: Integrate into one project with OAuth + email/password

// 🟠 HIGH PRIORITY (Add These Next - Strong Impact)
// 3. Docker
//    - Why: Industry standard for deployment & local development
//    - Impact: Shows DevOps awareness, makes you deployment-ready
//    - Action: Dockerize one full-stack project (frontend + backend + db)
//
// 4. Monitoring/Error Tracking (Sentry)
//    - Why: Shows you think about production issues & debugging
//    - Impact: Demonstrates professional development practices
//    - Action: Add to one deployed project, trigger & track an error

// 🟡 MEDIUM PRIORITY (Nice to Have - Moderate Impact)
// 5. Payment Integration (Razorpay or Stripe)
//    - Why: Valuable for e-commerce/SaaS projects
//    - Impact: Shows you can handle complex integrations
//    - Action: Build a small checkout flow with webhooks
//
// 6. CI/CD (GitHub Actions)
//    - Why: Automation is expected in modern workflows
//    - Impact: Shows you understand deployment pipelines
//    - Action: Set up auto-deploy to Vercel on push to main

// 🟢 OPTIONAL (Lower Priority - Specialized Skills)
// 7. Advanced Animation (Framer Motion)
//    - Why: Only if you want to focus on frontend polish
//    - Impact: Makes portfolio projects visually impressive
//    - Action: Add to portfolio site or one showcase project
//
// 8. Advanced Caching (Redis patterns, CDN strategies)
//    - Why: You have Redis, but learn advanced patterns
//    - Impact: Shows performance optimization skills
//    - Action: Implement caching layer in one high-traffic project
//
// 9. WebSockets/Real-time (beyond uWebSocket.js basics)
//    - Why: You have uWebSocket.js, deepen your knowledge
//    - Impact: Enables real-time features (chat, notifications, live updates)
//    - Action: Build a real-time feature (chat, live dashboard, etc.)

// ============================================
// RECOMMENDED LEARNING ORDER (Next 3-6 Months)
// ============================================
// Week 1-2:   Testing (Vitest) ← START HERE
// Week 3-4:   Auth Library (Better Auth or Auth.js)
// Week 5-6:   Docker
// Week 7-8:   Sentry
// Month 3:    Payment Integration (Razorpay)
// Month 4:    CI/CD (GitHub Actions)
// Month 5-6:  Optional skills based on career goals
// ============================================
