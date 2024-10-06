"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { ButtonIcon } from "@/components/button-icon";

export function ModernVideoSectionComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoElement && entry.isIntersecting) {
            videoElement.play();
            setIsPlaying(true);
          } else if (videoElement) {
            videoElement.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          src="/extension_demo.mp4"
          poster="/rs7.jpg?height=720&width=1280"
          className="w-full h-full object-cover"
          muted={isMuted}
          playsInline
          preload="auto"
          loop
        />
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
        className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20"
      >
        <IconButton
          color="primary"
          onClick={togglePlay}
          className="hover:bg-gray-800 transition duration-200"
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton
          color="primary"
          onClick={toggleMute}
          className="hover:bg-gray-800 transition duration-200"
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <IconButton
          color="primary"
          onClick={handleFullscreen}
          className="hover:bg-gray-800 transition duration-200"
        >
          <FullscreenIcon />
        </IconButton>
      </motion.div>
    </section>
  );
}
