"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  BrainCircuit,
  Code,
  Cog,
  Database,
  Network,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

const hardwareServices = [
  {
    icon: Server,
    title: "System Integration",
    description:
      "End-to-end planning, deployment, and integration of enterprise IT infrastructure.",
    eyebrow: "Enterprise Core",
    accent: "from-[#ffd6a6]/30 via-[#ff9a4d]/14 to-transparent",
    glow: "bg-[#ff9a4d]/16",
    chips: ["Deployment", "Integration"],
  },
  {
    icon: Network,
    title: "Network Solutions",
    description:
      "Structured cabling, fiber connectivity, switching, and resilient network architecture.",
    eyebrow: "Connected Infrastructure",
    accent: "from-[#ffe0bb]/24 via-[#ffb36b]/14 to-transparent",
    glow: "bg-[#ffb36b]/14",
    chips: ["Fiber", "Network Design"],
  },
  {
    icon: Shield,
    title: "Security Systems",
    description:
      "CCTV, access control, surveillance, and intelligent security for trust-critical environments.",
    eyebrow: "Intelligent Protection",
    accent: "from-[#ffd9b0]/28 via-[#ff7a3d]/14 to-transparent",
    glow: "bg-[#ff7a3d]/16",
    chips: ["CCTV", "Access Control"],
  },
  {
    icon: Database,
    title: "Data Centers",
    description:
      "Server rooms and data center infrastructure designed for uptime, stability, and performance.",
    eyebrow: "Performance Environment",
    accent: "from-[#ffe6c8]/26 via-[#ffb36b]/14 to-transparent",
    glow: "bg-[#ffc382]/14",
    chips: ["Uptime", "Server Rooms"],
  },
];

const softwareServices = [
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Business software tailored to streamline operations, workflows, and decision-making.",
    eyebrow: "Digital Platforms",
    accent: "from-[#ffcf9f]/30 via-[#ff8a4d]/14 to-transparent",
    glow: "bg-[#ff8a4d]/16",
    chips: ["Web Apps", "Business Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Modern mobile applications designed for usability, performance, and long-term scale.",
    eyebrow: "Mobile Experience",
    accent: "from-[#ffd8a8]/26 via-[#ff9a4d]/14 to-transparent",
    glow: "bg-[#ffb36b]/14",
    chips: ["iOS / Android", "Scalable UX"],
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Practical AI, automation, and intelligent workflows that improve efficiency and insight.",
    eyebrow: "Automation Layer",
    accent: "from-[#ffd2a1]/26 via-[#ff7a3d]/14 to-transparent",
    glow: "bg-[#ff7a3d]/16",
    chips: ["AI", "Automation"],
  },
  {
    icon: Cog,
    title: "Modernization",
    description:
      "Upgrade legacy systems with stronger architecture, cleaner experiences, and better maintainability.",
    eyebrow: "Future Ready",
    accent: "from-[#ffe2bf]/28 via-[#ffb36b]/14 to-transparent",
    glow: "bg-[#ffc382]/14",
    chips: ["Legacy Upgrade", "Architecture"],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof hardwareServices)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass-panel group relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-7"
    >
      <div
        className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${service.accent} opacity-95`}
      />
      <div
        className={`absolute -right-10 top-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${service.glow}`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,166,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,122,61,0.12),transparent_24%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/70 to-transparent opacity-70" />
      <div className="absolute -inset-px rounded-[2rem] border border-white/6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex max-w-full rounded-full border border-[#ffb36b]/18 bg-[#ffb36b]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#ffd9b0] sm:text-[11px] sm:tracking-[0.26em]">
              {service.eyebrow}
            </div>

            <div className="relative mt-4 flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] text-[#ffb36b] shadow-[0_12px_24px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-[1.06] sm:mt-5 sm:h-16 sm:w-16 sm:rounded-[1.4rem]">
              <div className="absolute inset-0 rounded-[1.15rem] bg-gradient-to-br from-white/10 to-transparent opacity-70 sm:rounded-[1.4rem]" />
              <div className="relative">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <span
              className="text-3xl font-bold text-white/10 transition-colors duration-300 group-hover:text-white/20 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#ffb36b]/70 to-transparent" />
          </div>
        </div>

        <h3
          className="mt-6 max-w-[15rem] text-[1.55rem] font-semibold leading-tight text-white sm:mt-8 sm:text-[1.9rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
          {service.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {service.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-black/20 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/62 transition-colors duration-300 group-hover:border-[#ffb36b]/20 group-hover:text-white/78"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3 text-sm font-medium text-[#ffd9b0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff9a4d] shadow-[0_0_12px_rgba(255,154,77,0.8)]" />
          Delivery-ready capability
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-shell py-24 md:py-32">
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Services</span>
          <h2 className="section-title">
            Integrated technology services built for modern organizations.
          </h2>
          <p className="section-copy">
            We deliver infrastructure, software, networking, data-center, and
            security solutions with the discipline of an enterprise partner and
            the agility of a modern technology team.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3
                className="text-[2rem] font-semibold text-white sm:text-3xl md:text-[2.5rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Infrastructure
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Built for uptime, visibility, and dependable operations across
                enterprise and mission-critical environments.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-white/40">
              Mission-Critical Foundations
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hardwareServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3
                className="text-[2rem] font-semibold text-white sm:text-3xl md:text-[2.5rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Software
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Modern digital products and intelligent systems designed for
                scale, clarity, and measurable business impact.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-white/40">
              Digital Products
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + hardwareServices.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
