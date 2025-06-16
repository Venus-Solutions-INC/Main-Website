import AboutSection from "../components/AboutSection"
import AboutUs from "../components/AboutUs"

export default function About() {
  return (
    
    <>
    <AboutUs />
        <div className="px-6 py-16 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Interested in working together? We’d love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.
            </p>
            <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
            Contact Us
            </a>
        </div>
    </>
  )
}
