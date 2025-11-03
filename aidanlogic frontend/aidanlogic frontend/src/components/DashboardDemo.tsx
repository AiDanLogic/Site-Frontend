"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useMemo, useCallback } from "react";
import { BarChart3, Calendar, CheckCircle2, TrendingUp, Zap, Clock, Target, Sparkles, ChevronRight, Activity } from "lucide-react";

export default function DashboardDemo() {
  const [hoveredTask, setHoveredTask] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const tasks = useMemo(() => [
    { id: 1, title: "Design System Update", progress: 85, priority: "high", time: "2h", category: "Design", dueDate: "Today" },
    { id: 2, title: "API Integration", progress: 60, priority: "medium", time: "4h", category: "Development", dueDate: "Tomorrow" },
    { id: 3, title: "Code Documentation", progress: 40, priority: "low", time: "3h", category: "Documentation", dueDate: "This Week" },
  ], []);

  const stats = useMemo(() => [
    { icon: CheckCircle2, label: "Completed", value: "24", subtext: "tasks this week", color: "green", gradient: "from-green-500 to-emerald-500" },
    { icon: Calendar, label: "Scheduled", value: "12", subtext: "upcoming", color: "blue", gradient: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, label: "Productivity", value: "+15%", subtext: "vs last week", color: "purple", gradient: "from-purple-500 to-pink-500" },
  ], []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <motion.span
              className="text-gradient-blue inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Experience the Dashboard
            </motion.span>
          </h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            A glimpse into your AI-powered productivity command center
          </motion.p>
        </div>

        {/* 3D Laptop Frame */}
        <motion.div
          className="relative perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            className="relative mx-auto max-w-5xl"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 40, mass: 0.3, restSpeed: 0.01 }}
          >
            {/* Laptop Screen */}
            <div className="relative glassmorphism rounded-3xl p-6 shadow-2xl overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-aurora-gradient opacity-50" />
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 min-h-[600px] border border-white/5">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Welcome back, User!</h3>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Sparkles className="w-6 h-6 text-green-400" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Activity className="w-4 h-4 text-green-400" />
                      Here’s your personalized focus summary
                    </p>
                  </div>
                  <motion.div
                    className="glassmorphism px-6 py-3 rounded-full relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse" />
                    <div className="flex items-center gap-2 relative z-10">
                      <Zap className="w-5 h-5 text-green-400" />
                      <span className="font-semibold text-gradient-green">87% Focus</span>
                    </div>
                  </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="relative glassmorphism rounded-xl p-5 overflow-hidden group cursor-pointer"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative z-10">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3`}>
                          <stat.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</p>
                        <p className="text-xs font-semibold text-foreground/80 mb-1">{stat.label}</p>
                        <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Task List with Hover Insights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-green-400" />
                      </div>
                      <h4 className="font-bold text-lg">Active Tasks</h4>
                    </div>
                    <span className="text-xs text-muted-foreground px-3 py-1 glassmorphism rounded-full">{tasks.length} tasks</span>
                  </div>

                  {tasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      className="relative glassmorphism rounded-xl p-4 cursor-pointer overflow-hidden group"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      onHoverStart={() => setHoveredTask(task.id)}
                      onHoverEnd={() => setHoveredTask(null)}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              task.priority === "high"
                                ? "bg-red-500 shadow-lg shadow-red-500/50"
                                : task.priority === "medium"
                                ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                                : "bg-green-500 shadow-lg shadow-green-500/50"
                            } animate-pulse`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground">{task.title}</span>
                              <ChevronRight className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                {task.category}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3 text-green-400" />
                                {task.time}
                              </span>
                              <span className="text-xs text-muted-foreground">• {task.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gradient-blue">{task.progress}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${
                            task.progress >= 80 ? "from-green-500 to-emerald-500" :
                            task.progress >= 50 ? "from-blue-500 to-purple-500" :
                            "from-orange-500 to-red-500"
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${task.progress}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.8, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-white/30"
                          initial={{ width: 0 }}
                          animate={{ width: hoveredTask === task.id ? `${task.progress}%` : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Expanded Insight on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center border border-blue-500/30"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ 
                          opacity: hoveredTask === task.id ? 1 : 0,
                          scale: hoveredTask === task.id ? 1 : 0.95
                        }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ pointerEvents: hoveredTask === task.id ? "auto" : "none" }}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3">
                            <Sparkles className="w-6 h-6 text-green-400" />
                          </div>
                          <p className="text-sm font-bold mb-2 text-gradient-blue">AI Insight</p>
                          <p className="text-xs text-muted-foreground mb-3">
                            {task.priority === "high" ? "🔥 High priority - Complete now for best results" : 
                             task.progress >= 80 ? "🎯 Almost done - Finish strong!" :
                             "⏰ Schedule for later today"}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <div className="text-3xl font-bold text-gradient-blue">
                              {task.progress}%
                            </div>
                            <span className="text-xs text-muted-foreground">complete</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="relative h-4 bg-gradient-to-b from-slate-700 to-slate-900 rounded-b-3xl mx-auto" style={{ width: "110%" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
        {/* Get Started Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://dashboard.aidanlogic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5 text-green-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}