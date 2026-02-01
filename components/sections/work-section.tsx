
"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useEffect } from "react"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

 useEffect(() => {
  const section = ref.current
  if (!section) return

  let rafId: number
  let paused = false

  const scrollStep = () => {
    if (paused) return

    if (section.scrollTop + section.clientHeight >= section.scrollHeight - 20) {
      paused = true
      return
    }

    const target = section.scrollTop + 35
    section.scrollTop += (target - section.scrollTop) * 0.15  // easing

    rafId = requestAnimationFrame(scrollStep)
  }

  rafId = requestAnimationFrame(scrollStep)

  const pause  = () => { paused = true; cancelAnimationFrame(rafId) }
  const resume = () => { paused = false; rafId = requestAnimationFrame(scrollStep) }

  section.addEventListener("mouseenter", pause)
  section.addEventListener("mouseleave", resume)
  section.addEventListener("touchstart", pause)
  section.addEventListener("touchend", resume)

  return () => {
    cancelAnimationFrame(rafId)
    section.removeEventListener("mouseenter", pause)
    section.removeEventListener("mouseleave", resume)
    section.removeEventListener("touchstart", pause)
    section.removeEventListener("touchend", resume)
  }
}, [isVisible])

// re-run when section becomes visible

  const hardwareProjects = [
    { number: "01", title: "Management Information System - South Central Railways", category: "Custom Infrastructure", year: "2014", direction: "left" },
    { number: "02", title: "Data Centre - Brahmos Aerospace", category: "Custom Infrastructure", year: "2022", direction: "left" },
    { number: "03", title: "CCTV Infrastucture - Nuclear Fuel Complex & EME Records & Ordnance Factory Medak ", category: "Unified Surveillance Deployment", year: "2020-present", direction: "right" },
    { number: "04", title: "RFID Access - Ordnance Factory Medak", category: "Security", year: "2023", direction: "left" },
    { number: "05", title: "Boom Barrier + RFID - Ordnance Factory Medak", category: "Gate Security", year: "2023", direction: "right" },
    { number: "06", title: "Optical Fiber & Copper - EME Records", category: "Network", year: "2022", direction: "left" },
    { number: "07", title: "Professional Audio Video Infrastructure Deployment - Department of Atomic Energy", category: "Audio Visual", year: "2024", direction: "right" },
  ]

  const softwareProjects = [
    { number: "01", title: "ID Card Creation Software", category: "Custom Software Solution • Armoured Vehicle Nigam Limited", year: "2025", direction: "left", status: "Production" },
    { number: "02", title: "Bill of Materials Software", category: "Bill of Materials  • Armoured Vehicle Nigam Limited", year: "2025", direction: "right", status: "Production" },
    { number: "03", title: "FaceTrack", category: "Computer Vision", year: "2023", direction: "right", status: "Production" },
    { number: "04", title: "AI Document Intelligence", category: "AI & NLP", year: "2024", direction: "left", status: "Production" },
    { number: "05", title: "My IARE Campus App", category: "Mobile • Flutter", year: "2024", direction: "right", status: "Active" },
    { number: "06", title: "PDF to Excel SAP Converter", category: "Document Automation", year: "2023", direction: "left", status: "Production" },

  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-start px-6 pt-16 md:pt-20 lg:px-12 overflow-y-auto"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className={`mb-10 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <h2 className="mb-1 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">Our Work</h2>
          <p className="font-mono text-xs md:text-sm text-foreground/60">Software & Hardware Solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
          {/* Hardware */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-6 bg-foreground/30" />
              <h3 className="text-lg md:text-xl font-light text-foreground">Hardware & Infrastructure</h3>
            </div>
            <div className="space-y-4">
              {[
                { title: "Hardware Supply and Support", desc: "Dealers and Distributors for IT and Networking Equipment" },
                { title: "IT Data Centers", desc: "Supply, Installation & Commissioning" },
                { title: "Network Laying", desc: "Optical Fiber & Copper Cabling" },
                { title: "CCTV Surveillance", desc: "Installation & Integration" },
                { title: "Perimeter Security", desc: "Barriers, Bollards, Scanners" },
                { title: "GateAccess Control", desc: "RFID & Biometrics" },
                { title: "Sensors and Detectors", desc: "Motion, Smoke, Fire, Gases" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h4 className="text-base md:text-lg font-light text-foreground">{item.title}</h4>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-6 bg-foreground/30" />
              <h3 className="text-lg md:text-xl font-light text-foreground">Software Development</h3>
            </div>
            <div className="space-y-4">
              {[
                { title: "Software Development", desc: "Existing Software Upgrades & Maintenance" },
                { title: "Custom Software Development", desc: "Tailored solutions for specific needs" },
                { title: "IOT in Enterprise", desc: "IoT solutions for enterprise environments" },
                { title: "AI & Computer Vision", desc: "AI-powered Solutions" },
                { title: "Mobile Applications", desc: "Cross-platform Applications" },
                { title: "Document Processing and Automation", desc: "Automated Document Handling and Processing Workflows" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h4 className="text-base md:text-lg font-light text-foreground">{item.title}</h4>
                  <p className="text-xs text-foreground/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8">
          <h3 className="mb-6 text-xl md:text-2xl font-light text-foreground">Recent Projects</h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {hardwareProjects.concat(softwareProjects).map((project, i) => (
              <ProjectCard key={i} project={project} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: { number: string; title: string; category: string; year: string; direction: string; status?: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) return project.direction === "left" ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
    return "translate-x-0 opacity-100"
  }

  return (
    <div
      className={`group border-b border-foreground/10 py-4 transition-all duration-700 hover:border-foreground/30 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-foreground/40">{project.number}</span>
          <div>
            <h3 className="text-lg md:text-xl font-light text-foreground group-hover:translate-x-1 transition-transform">
              {project.title}
              {project.status && <span className="ml-2 text-xs text-foreground/50">[{project.status}]</span>}
            </h3>
            <p className="text-xs text-foreground/60">{project.category}</p>
          </div>
        </div>
        <span className="font-mono text-xs text-foreground/40 whitespace-nowrap">{project.year}</span>
      </div>
    </div>
  )
}
