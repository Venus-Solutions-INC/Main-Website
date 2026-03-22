"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-shell py-24 md:py-32">
      <div className="container relative px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">/ Contact</span>
          <h2 className="section-title">
            Let&apos;s plan your next software, infrastructure, or security project.
          </h2>
          <p className="section-copy">
            Tell us what you need to build, upgrade, secure, or integrate. We
            will help you shape the right solution with clarity and confidence.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-panel rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-7 md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffb36b]">
              Let&apos;s Connect
            </p>
            <h3
              className="mt-4 text-3xl font-semibold text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start a conversation with our team.
            </h3>
            <div className="mt-8 space-y-5">
              <ContactItem icon={Mail} label="Email" value="venuscomputershyd@gmail.com" href="mailto:venuscomputershyd@gmail.com" />
              <ContactItem icon={Phone} label="Phone" value="+91 93910 43260" href="tel:+919391043260" />
              <ContactItem icon={MapPin} label="Location" value="Chenoy Trade Centre, Park Lane, Secunderabad, Telangana" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-7 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name">
                  <Input placeholder="Your name" className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/35" required />
                </Field>
                <Field label="Email">
                  <Input type="email" placeholder="your@email.com" className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/35" required />
                </Field>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Phone">
                  <Input placeholder="+91 XXXXX XXXXX" className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/35" />
                </Field>
                <Field label="Budget">
                  <Input placeholder="Project budget" className="h-12 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/35" />
                </Field>
              </div>

              <Field label="Message">
                <Textarea placeholder="Tell us about your project..." className="min-h-[160px] resize-none rounded-[1.5rem] border-white/10 bg-white/5 text-white placeholder:text-white/35" required />
              </Field>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-13 w-full rounded-full bg-gradient-to-r from-[#ffd29b] via-[#ff9a4d] to-[#ff7a3d] text-base font-semibold text-[#140b06] sm:h-15 sm:text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <Send className="h-4 w-4" />
                    </motion.div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-base font-medium text-white/80">{label}</label>
      {children}
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-[1.25rem] border border-white/8 bg-black/15 p-4 sm:gap-4 sm:rounded-[1.5rem]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffd29b] to-[#ff8a3d] text-[#140b06]">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.2em] text-white/40">{label}</div>
        <p className="mt-2 break-words text-sm leading-6 text-white/80 sm:text-base sm:leading-7">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
