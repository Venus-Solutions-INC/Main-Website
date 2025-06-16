"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Document Intelligence",
    description: "Advanced document analysis and automation using AI models.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/-AI-Powered-Document-Intelligence/refs/heads/main/sample.png",
    category: "AI & NLP",
    githubUrl: "https://github.com/Venus-Solutions-INC/-AI-Powered-Document-Intelligence",
  },
  {
    id: 2,
    title: "FaceTrack",
    description: "Real-time face recognition and tracking system using deep learning.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/FaceTrack/refs/heads/main/sample.png",
    category: "Computer Vision",
    githubUrl: "https://github.com/Venus-Solutions-INC/FaceTrack",
  },
  {
    id: 3,
    title: "PDF to Excel SAP Converter",
    description: "Tool to convert structured PDF documents into SAP-compatible Excel sheets.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/PDF-to-Excel-SAP-Converter/refs/heads/main/sample.png",
    category: "Document Automation",
    githubUrl: "https://github.com/Venus-Solutions-INC/PDF-to-Excel-SAP-Converter",
  },
  // {
  //   id: 4,
  //   title: "VoiceAssist UI",
  //   description: "Conversational interface for voice-activated assistants.",
  //   imageUrl: "/placeholder.svg?height=800&width=600",
  //   category: "Voice UI",
  //   githubUrl: "https://github.com/your-org/voiceassist-ui",
  // },
  // {
  //   id: 5,
  //   title: "Edge Compute Monitor",
  //   description: "Dashboard to monitor and manage IoT edge devices in real time.",
  //   imageUrl: "/placeholder.svg?height=600&width=800",
  //   category: "IoT",
  //   githubUrl: "https://github.com/your-org/edge-compute-monitor",
  // },
  // {
  //   id: 6,
  //   title: "Smart Building Manager",
  //   description: "Centralized platform to monitor, control, and automate building facilities and maintenance tasks.",
  //   imageUrl: "/placeholder.svg?height=600&width=800",
  //   category: "Facility Management",
  //   githubUrl: "https://github.com/your-org/smart-building-manager",
  // },
  {
    id: 7,
    title: "My IARE",
    description: "A Flutter-based app for campus management, streamlining student records, attendance, and results with real-time updates using Firebase.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/Campus-Management-App/refs/heads/main/myIare.jpeg",
    category: "Mobile App Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/Campus-Management-App",

  },
  {
    id: 8,
    title: "Geoprospector",
    description: "A software solution using Google Maps satellite images and machine learning to identify locations for renewable energy infrastructure.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/Mapify/refs/heads/main/geo.jpeg",
    category: "AI Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/PDF-to-Excel-SAP-Converter",

  },
  // {
  //   id: 9,
  //   title: "CMS Bot",
  //   description: "A Telegram bot designed for campus management, providing services and information to students, faculty, and staff.",
  //   imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/CMS-Bot/refs/heads/main/images/1.jpg?token=GHSAT0AAAAAADA2LPWEBBR7FNQ6AXPGN6VY2CMACQA",
  //   category: "Web Development",
  // },
  {
    id: 10,
    title: "Building Management App",
    description: "A Flutter-based app for gated communities, offering secure access control, visitor management, and resident communication.",
    imageUrl: "https://raw.githubusercontent.com/Venus-Solutions-INC/Building-Management-System/refs/heads/main/sample.jpeg",
    category: "Mobile App Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/Building-Management-System"
  }
];


const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
