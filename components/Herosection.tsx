"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      rotateToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const rotateToNext = () => {
    setIsRotating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cubeContent.length);
    setTimeout(() => setIsRotating(false), 500);
  };

  const rotateToPrev = () => {
    setIsRotating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cubeContent.length) % cubeContent.length
    );
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Next Step <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Digital Safety
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Together, we can create a safer digital world for all women.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </Button>
              <CreativeVideoButton onClick={() => setIsVideoModalOpen(true)} />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-96 relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className={`w-full h-full rounded-2xl shadow-2xl ${cubeContent[currentIndex].bgClass}`}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {cubeContent[currentIndex].title}
                    </h2>
                    <p className="text-xl text-white">
                      {cubeContent[currentIndex].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button
            size="icon"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            onClick={rotateToPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            onClick={rotateToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/extension_demo.mp4"
      />
    </div>
  );
}

function CreativeVideoButton({ onClick }: { onClick: () => void }) {
  return (
    <div className=" from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
      <button
        onClick={onClick}
        className="group relative overflow-hidden bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
      >
        <span className="relative z-10 flex items-center">
          <Play className="w-5 h-5 mr-2" />
          Watch Video
        </span>
      </button>
    </div>
  );
}

function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full h-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg shadow-xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full h-full">
          <iframe
            src={videoUrl}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  );
}
