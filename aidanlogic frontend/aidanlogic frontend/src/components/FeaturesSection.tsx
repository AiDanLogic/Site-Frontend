"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Zap, Shield, Clock, Users, Star, TrendingUp, Target } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Smart algorithms analyze your work patterns and provide actionable insights.",
      color: "from-blue-500 to-purple-500",
      gradient: "blue",
    },
    {
      icon: BarChart3,
      title: "Real-time Metrics",
      description: "Track your productivity with live dashboards and detailed analytics.",
      color: "from-green-500 to-blue-500",
      gradient: "green",
    },
    {
      icon: Zap,
      title: "Instant Optimization",
      description: "Get AI-powered suggestions to boost your focus and efficiency instantly.",
      color: "from-yellow-500 to-orange-500",
      gradient: "yellow",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays private with enterprise-grade security and encryption.",
      color: "from-purple-500 to-pink-500",
      gradient: "purple",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Automatic time tracking that learns from your behavior patterns.",
      color: "from-cyan-500 to-blue-500",
      gradient: "cyan",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with built-in team productivity features.",
      color: "from-indigo-500 to-purple-500",
      gradient: "indigo",
    },
  ];

  const timeline = [
    {
      step: "Connect Apps",
      icon: <Image src="/connect-apps.svg" alt="Connect Apps" width={48} height={48} className="w-29 h-18" />,
      description: "Link your favorite productivity tools"
    },
    {
      step: "AI Analysis",
      icon: <Image src="/Ai-analysis.svg" alt="AI Analysis" width={48} height={48} className="w-29 h-18" />,
      description: "AI Dan analyzes your workflow patterns"
    },
    {
      step: "Get Insights",
      icon: <Image src="/get-insights.svg" alt="Get Insights" width={48} height={48} className="w-29 h-18" />,
      description: "Receive personalized productivity insights"
    },
    {
      step: "Boost Focus",
      icon: <Image src="/boost-focus.svg" alt="Boost Focus" width={48} height={48} className="w-29 h-18" />,
      description: "Watch your focus score improve"
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-gradient-blue">Powerful Features</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your productivity game
          </p>
        </motion.div>

        {/* How It Works Timeline */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-16">
            <span className="text-gradient-green">How It Works</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="glassmorphism rounded-2xl p-6 text-center relative z-10">
                    {/* Step Number */}
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      {index + 1}
                    </motion.div>

                    <div className="mb-4 mt-6 flex justify-center">{item.icon}</div>
                    <h4 className="text-lg font-bold mb-2">{item.step}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Animated Arrow */}
                  {index < timeline.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 text-4xl z-20"
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Side-by-side Layout: CardSwap Left, Features Right */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          {/* CardSwap on Left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative" style={{ height: '600px' }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={4000}
                pauseOnHover={true}
                skewAmount={6}
                easing="power1"
              >
                <Card className="glassmorphism border-border/50 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">AI-Powered Insights</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">
                    Get personalized recommendations based on your work patterns and productivity trends.
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Smart time allocation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>Focus optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Goal tracking</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="glassmorphism border-border/50 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">Real-Time Analytics</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">
                    Monitor your productivity metrics with live dashboards and detailed performance analytics.
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span>Live productivity score</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Task completion rates</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>Focus time tracking</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="glassmorphism border-border/50 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">Smart Automation</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mb-3 sm:mb-4">
                    Automate repetitive tasks and optimize your workflow with intelligent AI assistance.
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span>Task prioritization</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>Schedule optimization</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span>Distraction blocking</span>
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </motion.div>

          {/* Compact Features Grid on Right */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-gradient-blue">Core Features</span>
              </h3>
              <p className="text-muted-foreground">
                Everything you need to boost your productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <motion.div
                    className="glassmorphism rounded-xl p-4 h-full relative overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 flex items-center gap-4">
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-5 h-5 text-white" />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}