"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const technologies = [
  { name: "React", category: "Frontend", logoUrl: "https://cdn.simpleicons.org/react/61DAFB", tint: "from-[#61dafb]/25 to-[#0ea5e9]/10", edge: "border-[#61dafb]/25" },
  { name: "Next.js", category: "Framework", logoUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", tint: "from-white/18 to-white/5", edge: "border-white/20" },
  { name: "Node.js", category: "Backend", logoUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E", tint: "from-[#8cc84b]/25 to-[#4d7c0f]/10", edge: "border-[#8cc84b]/25" },
  { name: "Flutter", category: "Mobile", logoUrl: "https://cdn.simpleicons.org/flutter/02569B", tint: "from-[#60a5fa]/25 to-[#0284c7]/10", edge: "border-[#60a5fa]/25" },
  { name: "Python", category: "AI/ML", logoUrl: "https://cdn.simpleicons.org/python/3776AB", tint: "from-[#facc15]/25 to-[#2563eb]/10", edge: "border-[#facc15]/25" },
  { name: "PostgreSQL", category: "Database", logoUrl: "https://cdn.simpleicons.org/postgresql/4169E1", tint: "from-[#93c5fd]/25 to-[#1d4ed8]/10", edge: "border-[#93c5fd]/25" },
  { name: "MongoDB", category: "Database", logoUrl: "https://cdn.simpleicons.org/mongodb/47A248", tint: "from-[#86efac]/25 to-[#166534]/10", edge: "border-[#86efac]/25" },
  { name: "TensorFlow", category: "AI/ML", logoUrl: "https://cdn.simpleicons.org/tensorflow/FF6F00", tint: "from-[#fb923c]/25 to-[#ea580c]/10", edge: "border-[#fb923c]/25" },
  { name: "Docker", category: "DevOps", logoUrl: "https://cdn.simpleicons.org/docker/2496ED", tint: "from-[#7dd3fc]/25 to-[#0369a1]/10", edge: "border-[#7dd3fc]/25" },
  { name: "AWS", category: "Cloud", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", tint: "from-white/18 to-white/5", edge: "border-white/20" },
  { name: "Figma", category: "Design", logoUrl: "https://cdn.simpleicons.org/figma/F24E1E", tint: "from-[#f472b6]/25 to-[#8b5cf6]/10", edge: "border-[#f472b6]/25" },
  { name: "OpenCV", category: "Vision", logoUrl: "https://cdn.simpleicons.org/opencv/5C3EE8", tint: "from-[#fca5a5]/25 to-[#ef4444]/10", edge: "border-[#fca5a5]/25" },
];

export function Technologies() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-shell py-24 md:py-32">
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Tech Stack</span>
          <h2 className="section-title">
            Technologies we use to build secure, scalable digital systems.
          </h2>
          <p className="section-copy">
            Our stack spans modern frontend, backend, mobile, AI, cloud, and
            infrastructure technologies selected to match business goals and
            deployment needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.04 }}
              className="glass-panel group rounded-[1.6rem] p-5 text-center"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] border bg-gradient-to-br shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-300 group-hover:scale-[1.05] ${tech.tint} ${tech.edge}`}
              >
                <img
                  src={tech.logoUrl}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <h3
                className="mt-4 text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tech.name}
              </h3>
              <span className="mt-2 block text-xs uppercase tracking-[0.22em] text-white/40">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
