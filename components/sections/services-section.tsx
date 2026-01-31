
"use client"

import { useReveal } from "@/hooks/use-reveal"

export function ServicesSection() {
  const { ref, isVisible } = useReveal(0.3)

  const hardwareServices = [
    { title: "System Integration", desc: "End-to-end IT infrastructure setup and integration", direction: "top" },
    { title: "Network Solutions", desc: "Optical fiber & copper cable laying + network management", direction: "right" },
    { title: "Security Systems", desc: "CCTV, perimeter security, access control installation", direction: "left" },
    { title: "Data Centers", desc: "Professional data center setup, server installation & commissioning", direction: "bottom" },
  ]

  const softwareServices = [
    { title: "Custom Software Development", desc: "Tailored enterprise applications & business tools", direction: "top" },
    { title: "Mobile App Development", desc: "Native & cross-platform iOS/Android applications", direction: "right" },
    { title: "AI & Machine Learning", desc: "Intelligent solutions, automation, predictive models", direction: "left" },
    { title: "Software Maintenance & Upgrades", desc: "Existing system updates, modernization & support", direction: "bottom" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16 overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className={`mb-12 transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">Services</h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Comprehensive IT & Software Solutions</p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* Hardware Services */}
          <div>
            <h3 className={`mb-8 font-sans text-3xl font-light text-foreground md:text-4xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>Hardware & Infrastructure</h3>
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
              {hardwareServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Software Services */}
          <div>
            <h3 className={`mb-8 font-sans text-3xl font-light text-foreground md:text-4xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "300ms" }}>Software Development</h3>
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12 lg:gap-x-24">
              {softwareServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: { title: string; desc: string; direction: string }
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) {
      switch (service.direction) {
        case "left": return "-translate-x-16 opacity-0"
        case "right": return "translate-x-16 opacity-0"
        case "top": return "-translate-y-16 opacity-0"
        case "bottom": return "translate-y-16 opacity-0"
        default: return "translate-y-12 opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div
      className={`group transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px w-8 bg-foreground/30 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground/50" />
        <span className="font-mono text-xs text-foreground/60">0{index + 1}</span>
      </div>
      <h3 className="mb-2 font-sans text-2xl font-light text-foreground md:text-3xl">{service.title}</h3>
      <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">{service.desc}</p>
    </div>
  )
}
