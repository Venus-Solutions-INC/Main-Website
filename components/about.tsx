"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const stats = [
  { value: "24+", label: "Years", sublabel: "Trusted execution since 2002" },
  { value: "50+", label: "Projects", sublabel: "Built for major institutions" },
  { value: "06", label: "Experts", sublabel: "Focused engineering team" },
];

const values = [
  { title: "Precision Engineering", description: "Structured systems that stay clean, scalable, and dependable." },
  { title: "Reliable Delivery", description: "Milestone-led execution with professionalism at every stage." },
  { title: "Transparent Partnership", description: "Straight communication, clear scope, and visible progress." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" className="section-shell py-24 md:py-32">
      <motion.div
        style={{ y }}
        className="absolute right-0 top-10 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/10 blur-[140px]"
      />

      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Our Company</span>
          <h2 className="section-title">Venus Computers</h2>
          <p className="section-copy">
            Established in 2002, Venus Computers delivers infrastructure,
            software, networking, and security solutions for organizations that
            require reliability, responsiveness, and technical depth.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-panel rounded-[2rem] p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffb36b]">
              Company Snapshot
            </p>
            <h3
              className="mt-4 text-4xl font-semibold text-white md:text-[2.9rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built on long-term trust, technical discipline, and consistent delivery.
            </h3>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-white/70">
              We work across enterprise infrastructure, software platforms,
              surveillance, networking, and mission-critical implementations
              with a strong focus on clarity, reliability, and execution
              quality.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
                  className="glass-panel rounded-[1.7rem] p-5"
                >
                  <div
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-2 text-base font-medium text-white/80">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-white/50">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-panel rounded-[2rem] p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffb36b]">
              Why Clients Trust Us
            </p>
            <div className="mt-8 space-y-5">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffd29b] to-[#ff8a3d] text-sm font-bold text-[#140b06]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-semibold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {value.title}
                      </h3>
                      <p className="mt-3 text-base leading-8 text-white/70">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
