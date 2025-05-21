"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Cpu, Cloud, LineChart, ShieldCheck, Smartphone } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Python", level: 85 },
        { name: "Django", level: 70 },
        { name: "RESTful APIs", level: 80 },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6 text-blue-300" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 60 },
        { name: "Vercel", level: 80 },
      ],
    },
    {
      title: "Other Skills",
      icon: <Globe className="w-6 h-6 text-red-400" />,
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 80 },
        { name: "Problem Solving", level: 85 },
      ],
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20">
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
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            >
              <Card className="bg-black/30 border-blue-900/50 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-blue-900/30 mr-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-black/30 border border-blue-900/50 rounded-lg p-4 text-center">
            <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-white font-medium">Machine Learning</h4>
          </div>
          <div className="bg-black/30 border border-blue-900/50 rounded-lg p-4 text-center">
            <ShieldCheck className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-white font-medium">Cybersecurity</h4>
          </div>
          <div className="bg-black/30 border border-blue-900/50 rounded-lg p-4 text-center">
            <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="text-white font-medium">Mobile Dev</h4>
          </div>
          <div className="bg-black/30 border border-blue-900/50 rounded-lg p-4 text-center">
            <LineChart className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h4 className="text-white font-medium">Data Analysis</h4>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

