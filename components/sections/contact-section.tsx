"use client"

import { Mail, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MagneticButton } from "@/components/magnetic-button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Enter a valid phone number."),
  budget: z.string().min(1, "Please specify your budget."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      message: "",
    },
  })

  const { handleSubmit, formState: { isSubmitting }, reset } = form

  const onSubmit = async (values: FormValues) => {
    try {
      await addDoc(collection(db, "connections"), {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        budget: values.budget,
        message: values.message,
        messagedAt: new Date(),
      })

      reset()
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Submission error:", error)
      // Optionally show error message to user
    }
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          {/* Left - Info */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Let's
                <br />
                talk
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Get in touch</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="mailto:venuscomputershyd@gmail.com"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Mail className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Email</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  venuscomputershyd@gmail.com
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Location</span>
                </div>
                <div className="space-y-1">
                  <p className="text-base text-foreground md:text-2xl">Secunderabad, Telangana</p>
                  <p className="font-mono text-xs text-foreground/70 md:text-sm">
                    235, 'C' Block, Chenoy Trade Centre, Park Lane
                  </p>
                </div>
              </div>

              <div
                className={`flex gap-4 pt-2 transition-all duration-700 md:gap-6 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div>
                  <p className="mb-1 font-mono text-xs text-foreground/60">Est.</p>
                  <p className="font-sans text-base font-light text-foreground md:text-lg">2002</p>
                </div>
                <div className="h-12 w-px bg-foreground/20" />
                <div>
                  <p className="mb-1 font-mono text-xs text-foreground/60">Team</p>
                  <p className="font-sans text-base font-light text-foreground md:text-lg">6 Professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Name</label>
                <input
                  {...form.register("name")}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Your name"
                />
                {form.formState.errors.name && (
                  <p className="mt-1 text-xs text-red-500">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Email</label>
                <input
                  type="email"
                  {...form.register("email")}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="your@email.com"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "425ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Phone</label>
                <input
                  {...form.register("phoneNumber")}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="+91 xxxxxxxxxx"
                />
                {form.formState.errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-500">{form.formState.errors.phoneNumber.message}</p>
                )}
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Budget</label>
                <input
                  {...form.register("budget")}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="$1,000 - $5,000"
                />
                {form.formState.errors.budget && (
                  <p className="mt-1 text-xs text-red-500">{form.formState.errors.budget.message}</p>
                )}
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "575ms" }}
              >
                <label className="mb-1 block font-mono text-xs text-foreground/60 md:mb-2">Message</label>
                <textarea
                  rows={3}
                  {...form.register("message")}
                  className="w-full border-b border-foreground/30 bg-transparent py-1.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-foreground/50 focus:outline-none md:py-2 md:text-base"
                  placeholder="Tell us about your project..."
                />
                {form.formState.errors.message && (
                  <p className="mt-1 text-xs text-red-500">{form.formState.errors.message.message}</p>
                )}
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "650ms" }}
              >
               
<MagneticButton
  variant="primary"
  size="lg"
  className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
>
  {isSubmitting ? "Sending..." : "Send Message"}
</MagneticButton>
                 
                {submitSuccess && (
                  <p className="mt-3 text-center font-mono text-sm text-foreground/80">
                    Message sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}