"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => document.getElementById(link.href.replace("#", "")))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 160;
      let current = "";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "border-b border-white/8 bg-[#0b0807]/72 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <div className="container px-4 py-4 md:px-6">
          <nav
            className="relative flex h-[4.5rem] items-center justify-between"
          >
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-white/8">
                <Image
                  src="/logo_main.png"
                  alt="Venus Computers logo"
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Venus Computers
                </div>
                <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                  IT, Software & Security Solutions
                </div>
              </div>
            </Link>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-12 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`nav-link-glow ${activeSection === link.href.replace("#", "")
                    ? "nav-link-active"
                    : ""
                    } relative text-[1.08rem] font-semibold tracking-[0.1em] transition-all duration-300 hover:text-white hover:[text-shadow:0_0_14px_rgba(255,210,155,0.85)] ${activeSection === link.href.replace("#", "")
                      ? "text-[#fff6ec] [text-shadow:0_0_18px_rgba(255,210,155,1)]"
                      : "text-white"
                    }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffd29b] via-[#ff9a4d] to-[#ff7a3d] transition-all duration-300 ${activeSection === link.href.replace("#", "")
                      ? "w-[115%] opacity-100 shadow-[0_0_16px_rgba(255,154,77,0.75)]"
                      : "w-0 opacity-0"
                      }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden md:block">
              <Button
                className="rounded-full border border-white/10 bg-transparent px-6 text-white hover:border-[#ffb36b]/30 hover:bg-white/6"
                asChild
              >
                <Link href="#contact">Book a Call</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-full border border-white/10 bg-transparent p-2.5 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#070b16]/96 px-6 pt-28 backdrop-blur-xl md:hidden"
          >
            <nav className="glass-panel rounded-[2rem] p-6">
              <div className="flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      onClickCapture={(event) => {
                        event.preventDefault();
                        setIsMobileMenuOpen(false);
                        scrollToSection(link.href);
                      }}
                      className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-xl text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  className="mt-2 h-14 rounded-full bg-gradient-to-r from-[#ffd29b] via-[#ff9a4d] to-[#ff7a3d] text-[#140b06]"
                  asChild
                >
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
