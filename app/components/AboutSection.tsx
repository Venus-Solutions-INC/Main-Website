import React from "react";

export default function AboutSection() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        At <strong>VenusSolutions</strong>, we are a dedicated team of developers, designers, and engineers committed to building future-ready software solutions. 
        We specialize in freelance software development that balances performance, scalability, and user experience. 
        Whether it’s crafting a custom mobile app, building a complex web platform, or optimizing cloud infrastructure, 
        our focus is always on delivering clean, efficient, and maintainable solutions.
      </p>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Our mission is to empower startups, businesses, and individuals with technology that solves real problems—no fluff, just results. 
        With an agile approach and a client-first mindset, we ensure transparency, speed, and quality from day one.
      </p>
    </section>
  );
}
