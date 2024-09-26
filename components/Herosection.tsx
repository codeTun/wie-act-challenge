"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

const cubeContent = [
  {
    title: "Innovate",
    description: "Push boundaries with cutting-edge solutions",
    bgClass: "bg-gradient-to-br from-purple-600 to-indigo-700",
  },
  {
    title: "Create",
    description: "Bring your ideas to life with powerful tools",
    bgClass: "bg-gradient-to-br from-blue-500 to-teal-400",
  },
  {
    title: "Collaborate",
    description: "Work seamlessly with teams across the globe",
    bgClass: "bg-gradient-to-br from-pink-500 to-orange-400",
  },
  {
    title: "Accelerate",
    description: "Supercharge your workflow and productivity",
    bgClass: "bg-gradient-to-br from-green-400 to-cyan-500",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      rotateToNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const rotateToNext = () => {
    setIsRotating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cubeContent.length)
    setTimeout(() => setIsRotating(false), 500)
  }

  const rotateToPrev = () => {
    setIsRotating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cubeContent.length) % cubeContent.length)
    setTimeout(() => setIsRotating(false), 500)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Digital Experience
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unleash the power of innovation with our state-of-the-art platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </Button>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 h-96 relative perspective-1000">
            <div 
              className={`w-full h-full transform-style-3d transition-transform duration-500 ease-in-out ${
                isRotating ? 'animate-rotate-y' : ''
              }`}
              style={{
                transform: `rotateY(${currentIndex * -90}deg)`,
              }}
            >
              {cubeContent.map((content, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full ${content.bgClass} rounded-2xl shadow-2xl flex items-center justify-center p-8 backface-hidden`}
                  style={{
                    transform: `rotateY(${index * 90}deg) translateZ(240px)`,
                  }}
                >
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">{content.title}</h2>
                    <p className="text-xl text-white">{content.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button
            size="icon"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
            onClick={rotateToPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
            onClick={rotateToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}