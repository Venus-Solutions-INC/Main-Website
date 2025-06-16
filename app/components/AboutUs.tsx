"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Do
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              We Make Software Solutions with the Latest AI Technologies
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              At Venus Solutions, we specialize in developing intelligent, future-ready software powered by cutting-edge AI. 
              Our mission is to streamline business processes, elevate user experiences, and drive innovation through smart automation.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              From custom platforms to scalable AI integrations, our expert team delivers tailored solutions that meet today’s 
              challenges and anticipate tomorrow’s opportunities.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                AI-Powered Solutions in Action
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
