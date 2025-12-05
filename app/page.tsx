"use client";

import { cn } from "@lib/utils";
import { inter, signika } from "@utils/fonts";
import { motion } from "motion/react";
import Profile from "@sections/Profile";
import SectionHeading from "@components/SectionHeading";
import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import Experience from "@sections/Experience";
import { Separator } from "@components/ui/separator";
import Socials from "@sections/Socials";

export default function Home() {
  return (
    <div className="mt-10 text-neutral-900 sm:mt-20 dark:text-neutral-100">
      {/* Intro Section  */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-2 flex flex-col sm:flex-row sm:gap-6">
          <h1 className={cn("text-3xl", signika.className)}>Bhawani Singh</h1>
          <h3
            className={cn(
              "text-muted-foreground mt-5 text-xs",
              inter.className
            )}
          >
            / @bhawanibytes
          </h3>
        </div>
        <Profile />
        <Separator className="my-6" />
      </motion.section>

      {/* Connect With Me Section  */}
      <motion.section
        className="flex flex-col"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading name="Connect with Me" />
        <Socials />

        <Separator className="my-6" />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="flex flex-col"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading name="Featured Projects" />
        {/* fix here  */}
        <Projects />
        <Separator className="my-6" />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="flex flex-col"
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading name="Core Skills" />
        <Skills />
        <Separator className="my-6" />
      </motion.section>

      {/* Experience Section  */}
      <motion.section
        className="flex flex-col"
        id="experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading name="Work Experience" />
        <Experience />
      </motion.section>
    </div>
  );
}
