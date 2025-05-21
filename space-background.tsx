"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function SpaceBackground() {
  const [shootingStars, setShootingStars] = useState<
    Array<{ id: number; x: number; y: number; length: number; angle: number; delay: number }>
  >([])
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate random stars
    const starCount = 100
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
    }))
    setStars(newStars)

    // Generate shooting stars
    const shootingStarCount = 8
    const newShootingStars = Array.from({ length: shootingStarCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: Math.random() * 100 + 50,
      angle: Math.random() * 60 - 30,
      delay: Math.random() * 10,
    }))
    setShootingStars(newShootingStars)

    // Regenerate shooting stars periodically
    const interval = setInterval(() => {
      const newShootingStars = Array.from({ length: shootingStarCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        length: Math.random() * 100 + 50,
        angle: Math.random() * 60 - 30,
        delay: Math.random() * 10,
      }))
      setShootingStars(newShootingStars)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #000000 40%, #2b0a3d 70%, #3b0a4d 100%)",
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-blue-50"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            rotate: `${star.angle}deg`,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: [0, 1, 0],
            x: star.length,
          }}
          transition={{
            duration: 2,
            delay: star.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 10,
          }}
        >
          <div
            className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            style={{ width: `${star.length}px` }}
          />
        </motion.div>
      ))}

      {/* Center orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative w-16 h-16 rounded-full bg-blue-400"
          animate={{
            boxShadow: [
              "0 0 20px 5px rgba(59, 130, 246, 0.7), 0 0 40px 10px rgba(59, 130, 246, 0.5)",
              "0 0 30px 10px rgba(59, 130, 246, 0.8), 0 0 50px 15px rgba(59, 130, 246, 0.6)",
              "0 0 20px 5px rgba(59, 130, 246, 0.7), 0 0 40px 10px rgba(59, 130, 246, 0.5)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Orb inner glow */}
          <div className="absolute inset-0 rounded-full bg-blue-300 opacity-70 blur-sm" />

          {/* Orb outer particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-200"
              style={{
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                x: Math.cos(i * (Math.PI / 4)) * 40,
                y: Math.sin(i * (Math.PI / 4)) * 40,
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Orb rotating ring */}
          <motion.div
            className="absolute inset-[-10px] rounded-full border border-blue-300 opacity-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          <motion.div
            className="absolute inset-[-20px] rounded-full border border-blue-200 opacity-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  )
}

