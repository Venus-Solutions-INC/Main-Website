import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Technologies } from "@/components/technologies";
import { Clients, ClientsMarquee } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main className="min-h-screen bg-background">
          <Hero />
          <ClientsMarquee />
          <Services />
          <Projects />
          <Process />
          <About />
          <Technologies />
          <Clients />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
