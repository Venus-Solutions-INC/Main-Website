"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { number: "01", title: "Management Information System", client: "South Central Railways", category: "Custom Infrastructure", year: "2014" },
  { number: "02", title: "Data Centre", client: "Brahmos Aerospace", category: "Enterprise Systems", year: "2022" },
  { number: "03", title: "CCTV Infrastructure", client: "Nuclear Fuel Complex & EME Records", category: "Surveillance", year: "2020-present" },
  { number: "04", title: "RFID Access Control", client: "Ordnance Factory Medak", category: "Security", year: "2023" },
  { number: "05", title: "Professional AV Infrastructure", client: "Department of Atomic Energy", category: "AV Systems", year: "2024" },
  { number: "06", title: "AI Document Intelligence", client: "Enterprise Solution", category: "AI & NLP", year: "2024" },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-shell py-24 md:py-32">
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Selected Work</span>
          <h2 className="section-title">
            Proven delivery across infrastructure, software, and security.
          </h2>
          <p className="section-copy">
            Our work spans government, defense, aerospace, and enterprise
            environments where precision, reliability, and execution quality
            are non-negotiable.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="glass-panel group relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,79,166,0.14),transparent_20%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4 sm:gap-5">
          <div
            className="text-3xl font-bold text-white/12 sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.number}
          </div>
          <div>
            <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#ffb36b]">
              {project.category}
            </div>
            <h3
              className="text-2xl font-semibold text-white sm:text-3xl md:text-[2.15rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/70 sm:text-lg">{project.client}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
          <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70 sm:text-base">
            {project.year}
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 group-hover:border-[#ffb36b] group-hover:text-[#ffb36b]">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
