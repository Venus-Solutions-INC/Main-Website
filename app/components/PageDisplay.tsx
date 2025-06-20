"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Calendar, Code, Star } from "lucide-react"

// Project interface
interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  images: string[]
  category: string
  githubUrl: string
  technologies: string[]
  year: string
  status: string
}

// Enhanced project data structure with multiple images
const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Document Intelligence",
    description: "Advanced document analysis and automation using AI models with machine learning capabilities.",
    longDescription:
      "This comprehensive AI solution revolutionizes document processing by leveraging cutting-edge machine learning algorithms. The system can automatically extract, classify, and analyze various document types including invoices, contracts, and reports. Built with TensorFlow and FastAPI, it provides real-time processing capabilities with 99.2% accuracy rate. The React-based dashboard offers intuitive visualization of processed data and analytics.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/-AI-Powered-Document-Intelligence/refs/heads/main/sample.png",
      "/placeholder.svg?height=600&width=800&text=AI+Dashboard+Interface",
      "/placeholder.svg?height=600&width=800&text=Document+Analysis+View",
      "/placeholder.svg?height=600&width=800&text=Results+Analytics",
      "/placeholder.svg?height=600&width=800&text=ML+Model+Training",
    ],
    category: "AI & NLP",
    githubUrl: "https://github.com/Venus-Solutions-INC/-AI-Powered-Document-Intelligence",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
    year: "2024",
    status: "Production",
  },
  
  {
    id: 2,
    title: "FaceTrack",
    description: "Real-time face recognition and tracking system using deep learning algorithms.",
    longDescription:
      "FaceTrack is a sophisticated computer vision system that provides real-time face detection, recognition, and tracking capabilities. Using advanced deep learning models built with PyTorch and OpenCV, it can identify and track multiple faces simultaneously with high accuracy. The system includes features like emotion detection, age estimation, and attendance tracking, making it perfect for security and analytics applications.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/FaceTrack/refs/heads/main/sample.png",
      "/placeholder.svg?height=600&width=800&text=Face+Detection+Live",
      "/placeholder.svg?height=600&width=800&text=Recognition+Interface",
      "/placeholder.svg?height=600&width=800&text=Analytics+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Training+Module",
    ],
    category: "Computer Vision",
    githubUrl: "https://github.com/Venus-Solutions-INC/FaceTrack",
    technologies: ["OpenCV", "PyTorch", "Python", "React", "WebRTC", "MongoDB"],
    year: "2023",
    status: "Production",
  },
  {
    id: 3,
    title: "PDF to Excel SAP Converter",
    description: "Intelligent tool to convert structured PDF documents into SAP-compatible Excel sheets.",
    longDescription:
      "This automation tool streamlines the conversion of complex PDF documents into SAP-compatible Excel formats. Using advanced PDF parsing algorithms and data extraction techniques, it maintains data integrity while transforming unstructured PDF content into organized spreadsheets. The tool supports batch processing, custom mapping rules, and validation checks to ensure accuracy in enterprise environments.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/PDF-to-Excel-SAP-Converter/refs/heads/main/sample.png",
      "/placeholder.svg?height=600&width=800&text=PDF+Upload+Interface",
      "/placeholder.svg?height=600&width=800&text=Processing+Pipeline",
      "/placeholder.svg?height=600&width=800&text=Excel+Output+Preview",
      "/placeholder.svg?height=600&width=800&text=SAP+Integration",
    ],
    category: "Document Automation",
    githubUrl: "https://github.com/Venus-Solutions-INC/PDF-to-Excel-SAP-Converter",
    technologies: ["Python", "Pandas", "PyPDF2", "Tkinter", "SAP API", "Excel"],
    year: "2023",
    status: "Production",
  },
  {
    id: 4,
    title: "My IARE Campus App",
    description: "Flutter-based campus management app with real-time updates and Firebase integration.",
    longDescription:
      "A comprehensive mobile application designed for campus management that serves students, faculty, and administrators. Built with Flutter for cross-platform compatibility, it features real-time notifications, attendance tracking, grade management, and campus news updates. The app integrates with Firebase for seamless data synchronization and includes offline capabilities for uninterrupted access to essential information.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/Campus-Management-App/refs/heads/main/myIare.jpeg",
      "/placeholder.svg?height=600&width=800&text=Student+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Attendance+Tracker",
      "/placeholder.svg?height=600&width=800&text=Grade+Portal",
      "/placeholder.svg?height=600&width=800&text=Campus+News",
    ],
    category: "Mobile Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/Campus-Management-App",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Push Notifications"],
    year: "2024",
    status: "Active",
  },
  {
    id: 5,
    title: "Geoprospector",
    description: "AI-powered solution using satellite imagery to identify optimal renewable energy locations.",
    longDescription:
      "Geoprospector leverages satellite imagery and machine learning to identify optimal locations for renewable energy infrastructure. The system analyzes geographical data, weather patterns, and terrain features to provide recommendations for solar and wind energy installations. Built with Google Maps API and TensorFlow, it offers interactive mapping, site analysis reports, and ROI calculations for energy projects.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/Mapify/refs/heads/main/geo.jpeg",
      "/placeholder.svg?height=600&width=800&text=Satellite+Analysis+View",
      "/placeholder.svg?height=600&width=800&text=Location+Mapping+Tool",
      "/placeholder.svg?height=600&width=800&text=Energy+Predictions",
      "/placeholder.svg?height=600&width=800&text=ROI+Calculator",
    ],
    category: "AI Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/Mapify",
    technologies: ["Python", "Google Maps API", "TensorFlow", "React", "GIS", "Satellite API"],
    year: "2024",
    status: "Beta",
  },
  {
    id: 6,
    title: "Building Management System",
    description: "Comprehensive Flutter app for gated communities with access control and resident services.",
    longDescription:
      "A complete building management solution designed for gated communities and residential complexes. The app provides secure access control, visitor management, maintenance requests, and community communication features. Built with Flutter for mobile platforms, it includes QR code generation, push notifications, and real-time chat functionality to enhance community living experience.",
    images: [
      "https://raw.githubusercontent.com/Venus-Solutions-INC/Building-Management-System/refs/heads/main/sample.jpeg",
      "/placeholder.svg?height=600&width=800&text=Access+Control+Panel",
      "/placeholder.svg?height=600&width=800&text=Visitor+Management",
      "/placeholder.svg?height=600&width=800&text=Community+Chat",
      "/placeholder.svg?height=600&width=800&text=Maintenance+Portal",
    ],
    category: "Mobile Development",
    githubUrl: "https://github.com/Venus-Solutions-INC/Building-Management-System",
    technologies: ["Flutter", "Firebase", "QR Code", "Push Notifications", "Real-time Chat"],
    year: "2024",
    status: "Production",
  },
]

// Project Card Component
interface ProjectCardProps {
  project: Project
  isSelected: boolean
  onClick: () => void
}

function ProjectCard({ project, isSelected, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border-2 cursor-pointer ${
        isSelected
          ? "border-blue-500 shadow-blue-500/20"
          : "border-slate-200 dark:border-slate-700"
      }`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-700">
        <Image
          src={project.images[0] || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 dark:text-slate-300">
          {project.category}
        </div>

        {/* Status Badge */}
        <div
          className={`absolute top-3 right-3 px-2 py-1 backdrop-blur-sm rounded-full text-xs font-medium ${
            project.status === "Production"
              ? "bg-green-500/90 text-white"
              : project.status === "Beta"
                ? "bg-yellow-500/90 text-white"
                : "bg-blue-500/90 text-white"
          }`}
        >
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Year */}
        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={12} className="mr-1" />
          {project.year}
        </div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"
        />
      )}
    </motion.div>
  )
}

// Large Preview Component
interface PreviewPanelProps {
  project: Project | null
}

function PreviewPanel({ project }: PreviewPanelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-advance images
  useEffect(() => {
    if (project && project.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 3000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [project])

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [project])

  if (!project) {
    return (
      <div className="sticky top-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 h-fit">
        <div className="text-center text-slate-500 dark:text-slate-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <Star size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Select a Project</h3>
          <p className="text-sm">Click on any project card to see detailed information and image gallery here.</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="sticky top-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden h-fit"
    >
      {/* Large Image Carousel */}
      <div className="relative h-80 bg-slate-100 dark:bg-slate-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Image Navigation */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white shadow-lg scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
          {currentImageIndex + 1} / {project.images.length}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h2>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                {project.year}
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === "Production"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : project.status === "Beta"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                }`}
              >
                {project.status}
              </div>
            </div>
          </div>
          <div className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            {project.category}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{project.longDescription}</p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Code size={16} />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-300 font-medium"
          >
            <Github size={18} />
            View Source Code
          </a>
          <button className="px-4 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// Main Portfolio Display Component
export default function PortfolioDisplay() {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["All", ...new Set(projects.map((project) => project.category))]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-12 bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Innovative Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of our innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-md hover:shadow-lg hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Projects Grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isSelected={selectedProject?.id === project.id}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Large Preview Panel */}
          <div>
            <AnimatePresence mode="wait">
              <PreviewPanel key={selectedProject?.id || "empty"} project={selectedProject} />
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}+</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Categories</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Client Satisfaction</div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}