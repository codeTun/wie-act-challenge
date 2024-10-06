"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { X } from "lucide-react";
import { ModernVideoSectionComponent } from "@/components/about/modern-video-section";
import Feedback from "@/components/feedback";
import { ClientFeedbackComponent } from "@/components/Clientfeedback";

const cubeContent = [
  {
    title: "Innovate",
    description: "Push boundaries with cutting-edge solutions",
    imageUrl: "image1.jpg",
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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
    <div>
      <div className="relative min-h-screen flex bg-gradient-to-br from-purple-800 to-pink-900 bg-fixed">
        <div className="absolute inset-0 bg-black opacity-50" />

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
                <div
                  className="text-center text-white"
                  style={{ marginLeft: "40%", marginBottom: "10%" }}
                >
                  <h2 className="text-6xl font-bold mb-4">
                    {cubeContent[currentIndex].title}
                  </h2>
                  <p className="text-2xl">
                    {cubeContent[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

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

        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl="/extension_demo.mp4"
        />
      </div>

      <div className="py-16 px-8 bg-gradient-to-l from-purple-500 via-purple-700 to-fuchsia-900 flex flex-col lg:flex-row items-center justify-between relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/service.jpg"
            alt="Service Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Experience Our{" "}
            <span className="text-transparent text-bold bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 relative">
              Vision
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl relative">
            Watch our demo video to see how to use our extension.
          </p>
          <p className="text-left text-xl max-w-2xl text-white relative">
            Our Extension service helps you safeguard your online presence,
            offering tools to monitor, prevent, and react to digital threats.
            Whether you’re concerned about privacy, security, or managing
            digital interactions, we’ve got you covered.
          </p>
          <div className="flex justify-start mt-8">
            <Button
              href="/services/extension"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <ModernVideoSectionComponent />
        </div>
      </div>

      <div className="py-10 px-4 text-center bg-gradient-to-t from-indigo-900 via-indigo-800 to-gray-700">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            src="/ieee.png"
            alt="IEEE"
            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <img
            src="/wie-act-logo.png"
            alt="WIE Act"
            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <img
            src="/wie.png"
            alt="WIE"
            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="relative py-16 px-8 bg-gradient-to-l from-purple-500 via-purple-700 to-fuchsia-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/feedback.jpg"
            alt="Feedback Background"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg z-10">
          Your Feedback Matters
        </h2>
        <p className="text-center text-xl max-w-2xl mx-auto text-gray-200 mb-8 z-10 relative">
          Your feedback helps us improve our service and deliver the best
          experience possible. Please take a moment to share your thoughts with
          us!
        </p>

        <div className="relative z-10">
          {" "}
          <Feedback />
        </div>

        <div>
          <ClientFeedbackComponent />
        </div>
      </div>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-3xl">
        <button
          className="absolute top-2 right-2 text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
