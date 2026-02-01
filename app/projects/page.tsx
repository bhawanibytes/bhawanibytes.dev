"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@components/ProjectCard";
import { projectsList } from "@constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@lib/utils";
import { signika } from "@utils/fonts";

export default function ProjectsPage() {
  return (
    <div className="mt-10 text-neutral-900 sm:mt-20 dark:text-neutral-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className={cn("mb-2 text-4xl font-bold", signika.className)}>
          All Projects
        </h1>
        <p className="mb-8 text-neutral-400">
          A collection of my work spanning full-stack applications, component
          libraries, and client projects.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-6">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center text-sm text-neutral-500"
      >
        <p>
          More projects coming soon. Check out my{" "}
          <a
            href="https://github.com/bhawanibytes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 underline hover:text-neutral-100"
          >
            GitHub
          </a>{" "}
          for additional work.
        </p>
      </motion.div>
    </div>
  );
}
