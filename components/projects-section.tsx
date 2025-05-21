"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Study Assistant",
      description:
        "An AI-powered web application that helps students organize study materials, create flashcards, and generate practice questions.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Python", "TensorFlow", "Flask"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Home IoT Dashboard",
      description:
        "A real-time dashboard for monitoring and controlling IoT devices in a smart home environment with data visualization.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "IoT", "MQTT", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology to ensure integrity and prevent fraud.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "#",
      demo: "#",
    },
    {
      title: "AR Campus Navigator",
      description:
        "An augmented reality application that helps new students navigate university campus with interactive directions.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Unity", "AR", "C#", "Mobile"],
      github: "#",
      demo: "#",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and personal exploration.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="overflow-hidden bg-black/40 border-blue-900/50 backdrop-blur-sm h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <a
                    href={project.github}
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

