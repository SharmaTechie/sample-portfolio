"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, MapPin, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20">
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6">
              I'm a third year BTech Computer Science Engineering student with a passion for building innovative digital
              solutions. My journey in tech began when I was 18, tinkering with HTML and CSS to create simple websites.
              That curiosity evolved into a deep fascination with software development and computer science.
            </p>
            <p className="text-gray-300">
              Currently, I'm focused on full-stack development, machine learning, and cloud technologies. I believe in
              the power of technology to solve real-world problems and am constantly exploring new frameworks and tools
              to expand my skill set.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-black/30 border-blue-900/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center">
                  <User className="text-blue-400 mr-3" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Name</div>
                    <div className="text-white">Sarah Williams</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-blue-900/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center">
                  <Calendar className="text-blue-400 mr-3" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Age</div>
                    <div className="text-white">21 Years</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-blue-900/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center">
                  <MapPin className="text-blue-400 mr-3" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white">Dehradun, Uttrakhand, India</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 border-blue-900/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center">
                  <GraduationCap className="text-blue-400 mr-3" size={20} />
                  <div>
                    <div className="text-gray-400 text-sm">Degree</div>
                    <div className="text-white">BTech in CSE</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Education & Experience</h3>

            <div className="space-y-6">
              <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="text-blue-400 text-sm mb-1">2022 - Present</div>
                <h4 className="text-white text-lg font-medium">BTech in Computer Science</h4>
                <p className="text-gray-400">ABC</p>
                <p className="text-gray-300 mt-2">
                  Pursuing my degree with a focus on AI/ML and web technologies. Current CGPA: 8.7/10
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500 pb-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="text-blue-400 text-sm mb-1">January 2024</div>
                <h4 className="text-white text-lg font-medium">Research Paper on xyz</h4>
                <p className="text-gray-400">IEEE Conference on xyz</p>
                <p className="text-gray-300 mt-2">
                    </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

