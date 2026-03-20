"use client";

import Link from "next/link";
import Image from "next/image";

const links = {
  services: [
    { label: "System Integration", href: "#services" },
    { label: "Network Solutions", href: "#services" },
    { label: "Security Systems", href: "#services" },
    { label: "Data Centers", href: "#services" },
    { label: "Software Delivery", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="section-shell py-16 md:py-20">
      <div className="container relative px-4 md:px-6">
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/8">
                  <Image
                    src="/logo_main.png"
                    alt="Venus Computers logo"
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Venus Computers
                  </div>
                  <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                    IT, Software & Security Solutions
                  </div>
                </div>
              </Link>

              <p className="mt-6 max-w-md text-lg leading-9 text-white/70">
                Delivering trusted software, infrastructure, networking, and
                intelligent security solutions for mission-critical
                organizations since 2002.
              </p>
            </div>

            <div>
              <h4
                className="mb-5 text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-5 text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-base text-white/50 md:flex-row md:items-center md:justify-between">
            <p>{`\u00A9 ${new Date().getFullYear()} Venus Computers. All rights reserved.`}</p>
            <p>Secunderabad, Telangana, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
