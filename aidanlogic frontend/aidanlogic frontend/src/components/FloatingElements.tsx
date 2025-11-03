"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target, TrendingUp, Brain, Rocket } from "lucide-react";

export default function FloatingElements() {
  const icons = [
    { Icon: Sparkles, color: "text-blue-400", delay: 0 },
    { Icon: Zap, color: "text-yellow-400", delay: 2 },
    { Icon: Target, color: "text-green-400", delay: 4 },
    { Icon: TrendingUp, color: "text-purple-400", delay: 6 },
    { Icon: Brain, color: "text-pink-400", delay: 8 },
    { Icon: Rocket, color: "text-cyan-400", delay: 10 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color}`}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon className="w-8 h-8" />
        </motion.div>
      ))}
    </div>
  );
}
