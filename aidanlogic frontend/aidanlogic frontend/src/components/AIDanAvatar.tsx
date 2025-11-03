"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AIDanAvatarProps {
  showSpeechBubble?: boolean;
  speechText?: string;
  size?: "sm" | "md" | "lg";
}

export default function AIDanAvatar({
  showSpeechBubble = false,
  speechText = "Let me analyze your productivity!",
  size = "lg",
}: AIDanAvatarProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isNodding, setIsNodding] = useState(false);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Nodding animation
  useEffect(() => {
    if (showSpeechBubble) {
      const nodInterval = setInterval(() => {
        setIsNodding(true);
        setTimeout(() => setIsNodding(false), 500);
      }, 4000);

      return () => clearInterval(nodInterval);
    }
  }, [showSpeechBubble]);

  return (
    <div className="relative">
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="glassmorphism px-6 py-3 rounded-2xl relative">
              <p className="text-sm font-medium">{speechText}</p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card/80 backdrop-blur-xl rotate-45 border-b border-r border-border" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Dan Avatar */}
      <motion.div
        animate={{
          y: isNodding ? [0, -8, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`${sizeClasses[size]} relative`}
      >
        {/* Glowing Core */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 blur-xl opacity-50"
        />

        {/* Avatar Body */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-1">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
            {/* Face */}
            <div className="relative w-3/4 h-3/4">
              {/* Eyes */}
              <motion.div
                animate={{
                  scaleY: isBlinking ? 0.1 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />
              <motion.div
                animate={{
                  scaleY: isBlinking ? 0.1 : 1,
                }}
                transition={{ duration: 0.15 }}
                className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />

              {/* Smile */}
              <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-8 h-4 border-b-2 border-cyan-400 rounded-b-full shadow-[0_2px_10px_rgba(34,211,238,0.6)]" />

              {/* Circuit Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 100 100"
              >
                <motion.path
                  d="M20,20 L30,30 M70,20 L60,30 M50,50 L50,70"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-cyan-400"
                  animate={{
                    pathLength: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Orbiting Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180)],
              y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180)],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}