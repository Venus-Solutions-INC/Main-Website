"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const clients = [
  {
    name: "Dept of Atomic Energy",
    logo: "DAE",
    logoUrl: "/client-logos/dae.png",
    accent: "from-[#ffe2b8] via-[#ffb36b] to-[#ff8a3d]",
    surface: "bg-[#18110c]",
    description:
      "Government department responsible for India's nuclear energy program.",
    highlight: "Partner since 2005",
  },
  {
    name: "ISRO",
    logo: "IS",
    logoUrl: "/client-logos/isro.svg",
    accent: "from-[#c7e7ff] via-[#61b7ff] to-[#2563eb]",
    surface: "bg-[#0d1420]",
    description:
      "Indian Space Research Organisation and high-trust technical collaboration.",
    highlight: "Strategic partner",
  },
  {
    name: "DRDO Labs",
    logo: "DR",
    logoUrl: "/client-logos/drdo.png",
    accent: "from-[#ffd7bb] via-[#ff9966] to-[#c2410c]",
    surface: "bg-[#18100d]",
    description:
      "Defence research environments with performance and reliability demands.",
    highlight: "Multiple projects",
  },
  {
    name: "Brahmos Aerospace",
    logo: "BR",
    logoUrl: "/client-logos/brahmos.png",
    accent: "from-[#d6e4ff] via-[#60a5fa] to-[#1d4ed8]",
    surface: "bg-[#0d1320]",
    description: "Critical infrastructure and enterprise technology execution.",
    highlight: "Data center partner",
  },
  {
    name: "Nuclear Fuel Complex",
    logo: "NF",
    logoUrl: "/client-logos/nfc.png",
    accent: "from-[#d7f6da] via-[#4ade80] to-[#15803d]",
    surface: "bg-[#0e1710]",
    description:
      "Security and systems support for sensitive industrial operations.",
    highlight: "Security systems",
  },
  {
    name: "HAL",
    logo: "HA",
    logoUrl: "/client-logos/hal.png",
    accent: "from-[#e5e7eb] via-[#a1a1aa] to-[#52525b]",
    surface: "bg-[#131315]",
    description:
      "Aerospace and defense environments requiring structured delivery.",
    highlight: "IT infrastructure",
  },
];

const marqueeClients = [
  { name: "Dept of Atomic Energy", logo: "DAE", logoUrl: "/client-logos/dae.png" },
  { name: "ECIL", logo: "EC", logoUrl: "/client-logos/ecil.png" },
  { name: "HAL", logo: "HA", logoUrl: "/client-logos/hal.png" },
  { name: "DMDE", logo: "DM", logoUrl: "/client-logos/drdo.png" },
  { name: "Nuclear Fuel Complex", logo: "NF", logoUrl: "/client-logos/nfc.png" },
  { name: "Brahmos Aerospace", logo: "BR", logoUrl: "/client-logos/brahmos.png" },
  { name: "EME Records", logo: "ER", logoUrl: "/client-logos/eme.png" },
  { name: "Research Centre Imarat", logo: "RC", logoUrl: "/client-logos/drdo.png" },
  { name: "DRDO Labs", logo: "DR", logoUrl: "/client-logos/drdo.png" },
  { name: "ISRO", logo: "IS", logoUrl: "/client-logos/isro.svg" },
  { name: "AVNL", logo: "AV", logoUrl: "/client-logos/avnl.png" },
  { name: "BHEL", logo: "BH", logoUrl: "/client-logos/bhel.png" },
  { name: "South Central Railways", logo: "SR", logoUrl: "/client-logos/scr.png" },
  { name: "Ship Building Centre", logo: "SB", logoUrl: "/client-logos/sbc.png" },
];

export function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-shell py-24 md:py-32">
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Clients</span>
          <h2 className="section-title">
            Clients who trust us with real, mission-critical work.
          </h2>
          <p className="section-copy">
            A focused view of the organizations we support across government,
            defense, aerospace, and enterprise delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientsMarquee() {
  return (
    <section className="section-shell relative pt-8 pb-10 md:pt-10 md:pb-14">
      <div className="container relative px-4 md:px-6">
        <div className="marquee-shell relative rounded-[2rem] border border-[#ffb36b]/14 bg-[linear-gradient(135deg,rgba(255,163,92,0.16),rgba(255,255,255,0.03),rgba(255,132,62,0.12))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[2.3rem] sm:p-5 md:rounded-[2.6rem] md:p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-[#0b0910] to-transparent md:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-[#0b0910] to-transparent md:block" />
          <div className="pointer-events-none absolute left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#ffb36b]/14 blur-[75px]" />
          <div className="pointer-events-none absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#ff7a3d]/14 blur-[85px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/45 to-transparent" />

          <div className="mb-6 flex flex-col items-center justify-center gap-3 px-1 text-center sm:mb-8 sm:px-2">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#ffb36b] sm:text-xs sm:tracking-[0.32em]">
              Trusted By Industry Leaders
            </span>
            <h2
              className="max-w-5xl text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem] md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by organizations that expect precision, security, and consistency.
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8 md:text-lg">
              A snapshot of the institutions and enterprises that have trusted
              Venus Computers for critical infrastructure, software, and
              security initiatives.
            </p>
          </div>

          <div className="marquee-track gap-4 whitespace-nowrap md:gap-5">
            {[...marqueeClients, ...marqueeClients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="marquee-card group relative flex min-w-[17.5rem] items-start gap-4 rounded-[1.5rem] border border-white/10 bg-[#120d0a]/92 px-4 py-4 hover:-translate-y-1 hover:border-[#ffb36b]/35 hover:bg-[#17110d] sm:min-w-[19rem] sm:gap-5 sm:rounded-[1.8rem] sm:px-5 md:items-center md:rounded-[2rem]"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(255,210,155,0.09),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,122,61,0.08),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-[1.8rem] md:rounded-[2rem]" />
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.04]">
                  <LogoBadge logo={client.logo} logoUrl={client.logoUrl} large />
                </div>
                <div className="relative z-10 flex min-w-0 flex-1 flex-col">
                  <span
                    className="text-base font-semibold leading-snug whitespace-normal text-white/85 sm:text-lg md:text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {client.name}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#ffb36b]/75 sm:text-[11px] sm:tracking-[0.3em]">
                    Trusted Client
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({
  client,
  index,
}: {
  client: (typeof clients)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/8 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:rounded-[1.8rem] sm:p-6 md:p-7 ${client.surface}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${client.accent}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_38%)]" />
      <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <LogoBadge logo={client.logo} logoUrl={client.logoUrl} accent={client.accent} />
        <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/72">
          {client.highlight}
        </span>
      </div>
      <h3
        className="relative z-10 mt-5 text-[1.75rem] font-semibold text-white sm:text-3xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {client.name}
      </h3>
      <p className="relative z-10 mt-3 max-w-[34rem] text-sm leading-7 text-white/74 sm:text-base sm:leading-8">
        {client.description}
      </p>
    </motion.div>
  );
}

function LogoBadge({
  logo,
  logoUrl,
  accent,
  large = false,
}: {
  logo: string;
  logoUrl: string;
  accent?: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] font-semibold text-[#ffe7cf] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${
        large
          ? "h-15 w-15 rounded-[1.2rem] text-lg sm:h-18 sm:w-18 sm:rounded-[1.5rem] sm:text-xl"
          : "h-14 w-14 rounded-[1.1rem] text-sm sm:h-16 sm:w-16 sm:rounded-[1.4rem] sm:text-base"
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent ?? "from-[#ffe2b8] via-[#ffb36b] to-[#ff8a3d]"}`} />
      <Image
        src={logoUrl}
        alt={`${logo} logo`}
        width={large ? 72 : 64}
        height={large ? 72 : 64}
        className={large ? "h-10 w-10 object-contain sm:h-12 sm:w-12" : "h-9 w-9 object-contain sm:h-10 sm:w-10"}
      />
    </div>
  );
}
