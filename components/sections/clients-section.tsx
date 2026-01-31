"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useEffect, useState } from "react"

export function ClientsSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [currentSlide, setCurrentSlide] = useState(0)

  const clients = [
    { name: "Dept of Atomic Energy", logo: "/logos/dae.png", desc: "Government department responsible for India's nuclear energy program." },
    { name: "ECIL", logo: "/logos/ecil.jpg", desc: "Electronics Corporation of India – public sector electronics & IT." },
    { name: "H.A.L", logo: "/logos/hal.png", desc: "Hindustan Aeronautics Limited – aerospace & defense manufacturing." },
    { name: "DMDE", logo: "/logos/dmde.jpg", desc: "Directorate of Missile Development – missile systems R&D." },
    { name: "Nuclear Fuel Complex", logo: "/logos/nfc.jpg", desc: "Produces nuclear fuel for India's power reactors." },
    { name: "Brahmos Aerospace", logo: "/logos/bramos.jpg", desc: "Indo-Russian joint venture – supersonic cruise missile." },
    { name: "EME Records", logo: "/logos/eme.jpg", desc: "Corps of Electronics and Mechanical Engineers – Indian Army." },
    { name: "Research Centre Imarat", logo: "/logos/rci.jpg", desc: "DRDO lab focused on missile guidance & navigation." },
    { name: "D.R.D.O Labs", logo: "/logos/drdo.svg", desc: "Defence Research and Development Organisation – multiple labs." },
    { name: "ISRO", logo: "/logos/isro.jpg", desc: "Indian Space Research Organisation – space exploration & satellites." },
    { name: "AVNL", logo: "/logos/AVNL.png", desc: "Produces armored fighting vehicles & weapons." },
    { name: "BHEL", logo: "/logos/bhel.jpg", desc: "Bharat Heavy Electricals Limited – power equipment manufacturing." },
    { name: "South Central Railways", logo: "/logos/scr.jpg", desc: "One of 17 zones of Indian Railways – major rail network." },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [clients.length])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-16 md:pt-20 lg:px-12 overflow-y-auto"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className={`mb-8 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h2 className="mb-1 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">Our Clients</h2>
          <p className="font-mono text-xs md:text-sm text-foreground/60">/ Trusted by India's leading organizations</p>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {/* Selected Client Info (clickable from grid) */}
          <div
            className={`rounded-xl border border-foreground/20 bg-foreground/5 px-6 py-10 backdrop-blur-md transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-48 items-center justify-center">
                <img
                  src={clients[currentSlide].logo}
                  alt={`${clients[currentSlide].name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-3xl md:text-4xl font-light text-foreground">
                {clients[currentSlide].name}
              </h3>
              <p className="max-w-2xl text-base md:text-lg text-foreground/80">
                {clients[currentSlide].desc}
              </p>
              {/* Add extra info here later */}
              <p className="mt-4 text-sm text-foreground/60 italic">
                {/* Placeholder for more details */}
                Partner since 2005 • Multiple high-security projects
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-12 bg-foreground" : "w-2.5 bg-foreground/30 hover:bg-foreground/60"
                  }`}
                  aria-label={`Select ${clients[i].name}`}
                />
              ))}
            </div>
          </div>

          {/* Grid of all clients */}
          <div className="w-full">
            <p className="mb-6 font-mono text-xs md:text-sm text-foreground/60">All Clients</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
              {clients.map((client, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`group relative flex flex-col items-center rounded-lg border border-foreground/10 bg-foreground/5 p-4 text-center transition-all duration-500 hover:border-foreground/40 hover:bg-foreground/10 hover:scale-105 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  } ${currentSlide === i ? "ring-2 ring-foreground/50" : ""}`}
                  style={{ transitionDelay: `${400 + (i % 5) * 80}ms` }}
                >
                  <div className="mb-3 flex h-14 w-28 items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    />
                  </div>
                  <p className="font-mono text-xs md:text-sm text-foreground/90 group-hover:text-foreground">
                    {client.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}