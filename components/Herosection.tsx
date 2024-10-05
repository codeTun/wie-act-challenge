"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react"; // Ensure you're importing Play from lucide-react
import { X } from "lucide-react"; // Import close icon for the modal

const cubeContent = [
  {
    title: "Innovate",
    description: "Push boundaries with cutting-edge solutions",
    imageUrl: "image1.jpg", // Add your image paths
  },
  {
    title: "Create",
    description: "Bring your ideas to life with powerful tools",
    imageUrl: "image5.jpg",
  },
  {
    title: "Collaborate",
    description: "Work seamlessly with teams across the globe",
    imageUrl: "image4.jpg",
  },
  {
    title: "Accelerate",
    description: "Supercharge your workflow and productivity",
    imageUrl: "image3.jpg",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // State to control video modal

  useEffect(() => {
    const timer = setInterval(() => {
      rotateToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const rotateToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cubeContent.length);
  };

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-purple-800 to-pink-900 bg-fixed">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Rotating Images */}
      <div className="relative w-full flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={cubeContent[currentIndex].imageUrl}
              alt={cubeContent[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-black bg-opacity-50">
              <div className="text-center text-white" style={{ marginLeft: "40%", marginBottom: "10%" }}>
                <h2 className="text-6xl font-bold mb-4">{cubeContent[currentIndex].title}</h2>
                <p className="text-2xl">{cubeContent[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Fixed Left Side */}
      <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-start p-8 bg-transparent">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
          Next Step <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Digital Safety
          </span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Together, we can create a safer digital world for all women.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Now
          </Button>
          <CreativeVideoButton onClick={() => setIsVideoModalOpen(true)} />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/extension_demo.mp4" // Replace with your video URL
      />
    </div>
  );
}

function CreativeVideoButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold">
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
