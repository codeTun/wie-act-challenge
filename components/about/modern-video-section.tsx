"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { ButtonIcon } from '@/components/button-icon';

export function ModernVideoSectionComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      // No need for browser-specific methods, as requestFullscreen is now standardized
      // and supported by all modern browsers
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    }
  };

 return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Vision</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch our demo video to see how to use our extension.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              src="/extension_demo.mp4"
              poster="/rs7.jpg?height=720&width=1280"
              className="w-full h-full object-cover"
              onClick={togglePlay}
            >
              Your browser does not support the video tag.
            </video>
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                >
                  <ButtonIcon onClick={togglePlay} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-4 left-4 right-4 flex justify-between items-center"
          >
            <IconButton
              color="primary"
              onClick={togglePlay}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={handleFullscreen}
            >
              <FullscreenIcon />
            </IconButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}