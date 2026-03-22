"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Blocks,
  ClipboardList,
  PencilRuler,
  Radar,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    tag: "Insight",
    icon: Radar,
    title: "Discovery & Assessment",
    description:
      "We understand your goals, environment, constraints, and technical needs so every project starts with clarity and the right priorities.",
  },
  {
    number: "02",
    tag: "Blueprint",
    icon: ClipboardList,
    title: "Scope & Planning",
    description:
      "We define scope, architecture direction, timelines, and deliverables with a roadmap that stays structured, practical, and transparent.",
  },
  {
    number: "03",
    tag: "Craft",
    icon: PencilRuler,
    title: "Solution Design",
    description:
      "We design the right mix of infrastructure, software, networking, and security components for performance, usability, and future scale.",
  },
  {
    number: "04",
    tag: "Build",
    icon: Blocks,
    title: "Development",
    description:
      "Our team builds, configures, and integrates systems across software, infrastructure, and field deployment with disciplined execution.",
  },
  {
    number: "05",
    tag: "Refinement",
    icon: ShieldCheck,
    title: "Testing & Validation",
    description:
      "We validate performance, security, reliability, and usability so the final solution is stable, dependable, and ready for production.",
  },
  {
    number: "06",
    tag: "Launch",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deliver with confidence, support rollout and handover, and stay available for maintenance, optimization, and future growth.",
  },
];

const highlights = [
  { value: "06", label: "Defined stages" },
  { value: "24+", label: "Years of delivery" },
  { value: "Elite", label: "Premium execution" },
];

const cardSequence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[#09090c]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,92,231,0.24),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,212,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,79,166,0.18),transparent_26%),linear-gradient(180deg,#06070b_0%,#0e1120_50%,#090a12_100%)]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/60 to-transparent" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7c3aed]/18 blur-[135px]" />
      <div className="absolute left-[12%] top-1/3 h-56 w-56 rounded-full bg-[#ff9a4d]/10 blur-[120px]" />
      <div className="absolute right-[10%] bottom-20 h-60 w-60 rounded-full bg-[#ff7a3d]/10 blur-[120px]" />

      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 grid gap-6 sm:mb-16 sm:gap-8 xl:grid-cols-[minmax(0,1.05fr)_420px] xl:items-end"
        >
          <div className="section-intro !mb-0">
            <span className="inline-flex items-center gap-3 rounded-full border border-[#ffb36b]/25 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#ffb36b] backdrop-blur-sm sm:text-[11px] sm:tracking-[0.34em]">
              <span className="h-2 w-2 rounded-full bg-[#ff8a3d]" />
              Our Process
            </span>

            <h2 className="section-title !max-w-none">
              A clear delivery process from consultation to long-term support.
            </h2>

            <p className="section-copy">
              We follow a structured process that keeps execution clear,
              collaborative, and dependable across software, infrastructure,
              networking, and intelligent security projects.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,154,77,0.16),rgba(255,255,255,0.04),rgba(255,122,61,0.12))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.32em] text-[#ffb36b]">
              Delivery Principles
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Clear planning, strong technical execution, transparent
              communication, and dependable support at every stage of delivery.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div
                    className="text-3xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-white/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-[#ffb36b]/0 via-[#ffb36b]/50 to-[#ff7a3d]/0 lg:block" />

          <div className="grid gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = step.icon;
  const reverse = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative lg:grid lg:grid-cols-[96px_minmax(0,1fr)] lg:items-stretch"
    >
      <div className="relative hidden lg:block">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute left-[27px] top-0 h-full w-px origin-top bg-gradient-to-b from-[#ffcf9f]/0 via-[#ffb36b]/60 to-[#ff7a3d]/0"
        />
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={
            isInView
              ? {
                  scale: [0.7, 1.08, 1],
                  opacity: 1,
                  boxShadow: [
                    "0 0 0 0 rgba(255,179,107,0.0)",
                    "0 0 0 18px rgba(255,179,107,0.12)",
                    "0 0 0 0 rgba(255,179,107,0.0)",
                  ],
                }
              : {}
          }
          transition={{ duration: 0.7, delay: index * 0.08 + 0.08 }}
          className="absolute left-[22px] top-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#ffb36b]/35 bg-[#1a120d] text-[#ffb36b] shadow-[0_0_0_8px_rgba(9,9,12,0.95),0_0_32px_rgba(255,154,77,0.18)]"
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      </div>

      <motion.div
        variants={cardSequence}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#ffb36b]/35 hover:shadow-[0_28px_80px_rgba(0,0,0,0.42)] sm:rounded-[2rem] sm:p-7 md:p-8 ${
          reverse
            ? "lg:max-w-[86%] lg:justify-self-end lg:mr-10"
            : "lg:max-w-[86%]"
        }`}
      >
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          animate={
            isInView
              ? { x: ["-120%", "140%"], opacity: [0, 0.55, 0] }
              : { x: "-120%", opacity: 0 }
          }
          transition={{ duration: 1.2, delay: index * 0.12 + 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="pointer-events-none absolute inset-y-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-[#ffcf9f]/18 to-transparent"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,179,107,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,122,61,0.2),transparent_24%),radial-gradient(circle_at_center,rgba(214,110,39,0.16),transparent_35%)] opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/70 to-transparent" />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, delay: index * 0.08 + 0.12, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute left-0 top-0 h-0.5 w-full origin-left bg-gradient-to-r from-[#ffcf9f] via-[#ff9a4d] to-[#ff7a3d]"
        />

        <div className="relative z-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <motion.div variants={cardItem} className="flex items-center gap-3 sm:gap-4">
              <motion.div
                variants={cardItem}
                animate={
                  isInView
                    ? {
                        y: [0, -4, 0],
                        rotate: [0, -4, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1.4,
                  delay: index * 0.1 + 0.4,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ffb36b]/20 bg-[#ffb36b]/10 text-[#ffb36b] sm:h-14 sm:w-14 sm:rounded-2xl lg:hidden"
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>

              <div className="min-w-0">
                <motion.div
                  variants={cardItem}
                  className="text-[11px] uppercase tracking-[0.28em] text-[#ffb36b] sm:text-xs sm:tracking-[0.34em]"
                >
                  {step.tag}
                </motion.div>
                <motion.h3
                  variants={cardItem}
                  className="mt-3 text-[1.7rem] font-semibold text-white sm:text-3xl md:text-[2.2rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </motion.h3>
              </div>
            </motion.div>

            <motion.div
              variants={cardItem}
              animate={
                isInView
                  ? {
                      opacity: [0.15, 0.35, 0.22],
                      scale: [0.95, 1.04, 1],
                    }
                  : {}
              }
              transition={{ duration: 1, delay: index * 0.08 + 0.25 }}
              className="text-4xl font-bold leading-none text-[#ff7a3d]/25 sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {step.number}
            </motion.div>
          </div>

          <motion.p
            variants={cardItem}
            className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8 md:text-[1.05rem]"
          >
            {step.description}
          </motion.p>

          <motion.div variants={cardItem} className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/60">
              Structured Delivery
            </span>
            <span className="rounded-full border border-[#ff7a3d]/20 bg-[#ff7a3d]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ffe2cf]">
              Trusted Execution
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
