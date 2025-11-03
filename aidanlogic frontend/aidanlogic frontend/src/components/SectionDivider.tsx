"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  gradient?: string;
}

export default function SectionDivider({ gradient = "from-blue-500 via-purple-500 to-pink-500" }: SectionDividerProps) {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* Animated gradient line */}
      <div className="relative h-px w-full bg-border/30">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} shadow-lg`}
          initial={{ scale: 0, x: "-50%" }}
          whileInView={{ scale: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(236, 72, 153, 0.5)",
              "0 0 40px rgba(59, 130, 246, 0.5)",
            ],
          }}
          style={{
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Decorative dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 w-1 h-1 rounded-full bg-blue-400/30"
          style={{
            left: `${20 + i * 15}%`,
          }}
          initial={{ scale: 0, y: "-50%" }}
          whileInView={{ scale: 1, y: "-50%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
