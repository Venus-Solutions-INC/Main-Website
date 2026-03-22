"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useInView } from "motion/react";

const metrics = [
  { value: "24+", label: "Years of trust" },
  { value: "50+", label: "Critical projects" },
  { value: "15+", label: "Enterprise clients" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="section-shell hero-aurora relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="hero-flow hero-flow-one absolute left-[6%] top-24 h-72 w-72 rounded-full" />
      <div className="hero-flow hero-flow-two absolute right-[8%] top-28 h-80 w-80 rounded-full" />
      <div className="hero-flow hero-flow-three absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full" />
      <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container relative z-10 px-4 pt-24 pb-16 md:px-6 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="mx-auto max-w-[72rem]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm text-white/90 shadow-[0_10px_35px_rgba(255,138,61,0.14)] backdrop-blur-md sm:px-6 sm:py-3 sm:text-base"
            >
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#ff9a4d] shadow-[0_0_18px_rgba(255,154,77,0.9)]" />
              <span className="uppercase tracking-[0.24em] text-white/55">
                Trusted Expertise
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:inline-flex" />
              <span className="text-white">
                Trusted in IT, software, networking, and security for{" "}
                <span className="bg-gradient-to-r from-[#ffd29b] via-[#ffb067] to-[#ff7a3d] bg-clip-text font-semibold text-transparent">
                  24+ years
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 text-[2.9rem] font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl lg:text-[6.8rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">System Integration,</span>
              <br />
              <span className="bg-gradient-to-r from-[#ffd29b] via-[#ff9a4d] to-[#ff7a3d] bg-clip-text text-transparent">
                Software &amp; Intelligent Security Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/70 sm:mt-8 sm:text-xl sm:leading-9 md:text-[1.75rem] md:leading-10"
            >
              Delivering comprehensive IT, software, and networking solutions
              for over 24 years. From enterprise applications and data centers
              to networking and intelligent security systems, we build and
              integrate technology with clarity, reliability, and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
            >
              <Button
                size="lg"
                className="sheen-button h-13 rounded-full bg-gradient-to-r from-[#ffd29b] via-[#ff9a4d] to-[#ff7a3d] px-7 text-base font-semibold text-[#140b06] shadow-[0_18px_50px_rgba(255,138,61,0.24)] transition-transform duration-300 hover:scale-[1.02] sm:h-15 sm:px-9 sm:text-lg"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-13 rounded-full border-white/15 bg-white/[0.06] px-7 text-base text-white hover:bg-white/[0.1] sm:h-15 sm:px-9 sm:text-lg"
              >
                Explore Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                  className="glass-panel rounded-[1.6rem] p-5"
                >
                  <div
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {metric.value}
                  </div>
                  <div className="mt-2 text-base text-white/60">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex md:bottom-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/45">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-white/55" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
