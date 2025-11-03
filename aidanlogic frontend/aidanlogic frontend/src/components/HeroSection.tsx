"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AIDanAvatar from "./AIDanAvatar";
import { ArrowRight, Calendar, CheckCircle2, Clock } from "lucide-react";
import { AuroraTextEffect } from "@/components/lightswind/aurora-text-effect";

export default function HeroSection() {
  const [focusScore, setFocusScore] = useState(0);
  const targetScore = 87;

  // Animate focus score counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetScore / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setFocusScore(targetScore);
        clearInterval(timer);
      } else {
        setFocusScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const taskCards = [
    { title: "Team Meeting", time: "9:00 AM", priority: "high", icon: Calendar },
    { title: "Code Review", time: "11:30 AM", priority: "medium", icon: CheckCircle2 },
    { title: "Design Sprint", time: "2:00 PM", priority: "low", icon: Clock },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <AuroraTextEffect 
                text="AI-Powered"
              />
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              Productivity
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Intelligence
            </motion.span>
          </h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empowering You with Daily Insights & Productivity Clarity
          </motion.p>

          {/* Floating Task Cards to Focus Score Flow */}
          <div className="relative mb-12 h-48">
            {taskCards.map((task, index) => (
              <motion.div
                key={task.title}
                className="absolute glassmorphism rounded-2xl p-4 w-64"
                initial={{ x: 0, y: index * 60, opacity: 0 }}
                animate={{
                  x: [0, 100, 200, 300],
                  y: [index * 60, 80, 60, 40],
                  opacity: [0, 1, 0.8, 0],
                  scale: [1, 0.9, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    task.priority === "high" ? "bg-red-500/20" :
                    task.priority === "medium" ? "bg-yellow-500/20" :
                    "bg-green-500/20"
                  }`}>
                    <task.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Focus Score Meter */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 glassmorphism rounded-2xl p-6 w-48 glow-blue"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Daily Focus Score</p>
                <motion.div
                  className="text-5xl font-bold text-gradient-green mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  {focusScore}
                </motion.div>
                <div className="relative w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${focusScore}%` }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://dashboard.aidanlogic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 text-green-400" />
            </motion.a>

            <motion.a
              href="https://youtu.be/cLOop-KgUM4?si=znavyyGEAG32-WpL"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism px-8 py-4 rounded-full font-semibold hover:bg-secondary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Now
            </motion.a>
          </motion.div>
        </div>

        {/* Right Side - AI Dan Avatar */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AIDanAvatar showSpeechBubble={true} size="lg" />
          </motion.div>

          {/* Floating Stats */}
          {[
            { label: "Tasks Analyzed", value: "10K+", position: "top-10 left-0" },
            { label: "Time Saved", value: "340h", position: "bottom-20 left-10" },
            { label: "Productivity Boost", value: "2.5x", position: "top-20 right-0" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`absolute ${stat.position} glassmorphism rounded-xl p-4 min-w-[120px]`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.2 }}
            >
              <p className="text-2xl font-bold text-gradient-blue">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}