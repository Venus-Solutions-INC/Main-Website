"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const clients = [
  {
    name: "Dept of Atomic Energy",
    logo: "DAE",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://dae.gov.in",
    description:
      "Government department responsible for India's nuclear energy program.",
    highlight: "Partner since 2005",
  },
  {
    name: "ISRO",
    logo: "IS",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.isro.gov.in",
    description:
      "Indian Space Research Organisation and high-trust technical collaboration.",
    highlight: "Strategic partner",
  },
  {
    name: "DRDO Labs",
    logo: "DR",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.drdo.gov.in",
    description:
      "Defence research environments with performance and reliability demands.",
    highlight: "Multiple projects",
  },
  {
    name: "Brahmos Aerospace",
    logo: "BR",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.brahmos.com",
    description: "Critical infrastructure and enterprise technology execution.",
    highlight: "Data center partner",
  },
  {
    name: "Nuclear Fuel Complex",
    logo: "NF",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.nfc.gov.in",
    description:
      "Security and systems support for sensitive industrial operations.",
    highlight: "Security systems",
  },
  {
    name: "HAL",
    logo: "HA",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://hal-india.co.in",
    description:
      "Aerospace and defense environments requiring structured delivery.",
    highlight: "IT infrastructure",
  },
];

const marqueeClients = [
  { name: "Dept of Atomic Energy", logo: "DAE", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://dae.gov.in" },
  { name: "ECIL", logo: "EC", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.ecil.co.in" },
  { name: "HAL", logo: "HA", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://hal-india.co.in" },
  { name: "DMDE", logo: "DM", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.drdo.gov.in" },
  { name: "Nuclear Fuel Complex", logo: "NF", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.nfc.gov.in" },
  { name: "Brahmos Aerospace", logo: "BR", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.brahmos.com" },
  { name: "EME Records", logo: "ER", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://indianarmy.nic.in" },
  { name: "Research Centre Imarat", logo: "RC", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.drdo.gov.in" },
  { name: "DRDO Labs", logo: "DR", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.drdo.gov.in" },
  { name: "ISRO", logo: "IS", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.isro.gov.in" },
  { name: "AVNL", logo: "AV", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.avnl.co.in" },
  { name: "BHEL", logo: "BH", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://www.bhel.com" },
  { name: "South Central Railways", logo: "SR", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://scr.indianrailways.gov.in" },
  { name: "Ship Building Centre", logo: "SB", logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=https://indiannavy.nic.in" },
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
            Trusted by institutions where performance and reliability matter.
          </h2>
          <p className="section-copy">
            We have supported government, defense, aerospace, and enterprise
            organizations with dependable technology execution across multiple
            domains and long-term engagements.
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
        <div className="marquee-shell relative rounded-[2.6rem] border border-[#ffb36b]/14 bg-[linear-gradient(135deg,rgba(255,163,92,0.16),rgba(255,255,255,0.03),rgba(255,132,62,0.12))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0b0910] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0b0910] to-transparent" />
          <div className="pointer-events-none absolute left-8 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[#ffb36b]/14 blur-[75px]" />
          <div className="pointer-events-none absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#ff7a3d]/14 blur-[85px]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/45 to-transparent" />

          <div className="mb-8 flex flex-col items-center justify-center gap-3 px-2 text-center">
            <span className="text-xs uppercase tracking-[0.32em] text-[#ffb36b]">
              Trusted By Industry Leaders
            </span>
            <h2
              className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trusted by organizations that expect precision, security, and consistency.
            </h2>
            <p className="max-w-3xl text-base leading-8 text-white/78 md:text-lg">
              A snapshot of the institutions and enterprises that have trusted
              Venus Computers for critical infrastructure, software, and
              security initiatives.
            </p>
          </div>

          <div className="marquee-track gap-5 whitespace-nowrap">
            {[...marqueeClients, ...marqueeClients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="marquee-card group relative flex items-center gap-5 rounded-[2rem] border border-white/10 bg-[#120d0a]/92 px-5 py-4 hover:-translate-y-1 hover:border-[#ffb36b]/35 hover:bg-[#17110d]"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(255,210,155,0.09),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,122,61,0.08),transparent_32%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-[1.04]">
                  <LogoBadge logo={client.logo} logoUrl={client.logoUrl} large />
                </div>
                <div className="relative z-10 flex flex-col">
                  <span
                    className="text-lg font-semibold text-white/85 md:text-xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {client.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#ffb36b]/75">
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
      className="glass-panel group relative overflow-hidden rounded-[1.8rem] p-6 md:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,210,155,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,122,61,0.14),transparent_28%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ffb36b]/65 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[1.8rem] shadow-[0_0_0_rgba(255,154,77,0)] transition-shadow duration-300 group-hover:shadow-[0_0_36px_rgba(255,154,77,0.16)]" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <LogoBadge logo={client.logo} logoUrl={client.logoUrl} />
        <span className="inline-flex rounded-full border border-[#ffb36b]/20 bg-[#ffb36b]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#ffb36b]">
          {client.highlight}
        </span>
      </div>
      <h3
        className="relative z-10 mt-5 text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-[#fff4e8]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {client.name}
      </h3>
      <p className="relative z-10 mt-3 text-base leading-8 text-white/70">
        {client.description}
      </p>
    </motion.div>
  );
}

function LogoBadge({
  logo,
  logoUrl,
  large = false,
}: {
  logo: string;
  logoUrl?: string;
  large?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`flex items-center justify-center overflow-hidden border border-[#ffb36b]/20 bg-gradient-to-br from-[#ffb36b]/20 to-[#ff7a3d]/10 font-semibold text-[#ffe7cf] ${
        large
          ? "h-18 w-18 rounded-[1.5rem] text-xl"
          : "h-16 w-16 rounded-[1.4rem] text-base"
      }`}
    >
      {!failed && logoUrl ? (
        <img
          src={logoUrl}
          alt={`${logo} logo`}
          className={large ? "h-10 w-10 object-contain" : "h-9 w-9 object-contain"}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{logo}</span>
      )}
    </div>
  );
}
