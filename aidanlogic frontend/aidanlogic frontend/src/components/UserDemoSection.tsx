"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calculator, Clock, CheckCircle2, TrendingUp, Zap, Target, Coffee, Brain, Sparkles, Award, AlertCircle, Info } from "lucide-react";

export default function UserDemoSection() {
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [formData, setFormData] = useState({
    tasksCompleted: "",
    focusHours: "",
    breaksTaken: "",
    distractions: ""
  });
  const [focusScore, setFocusScore] = useState(0);
  const [insights, setInsights] = useState({
    productivity: 0,
    efficiency: 0,
    workLifeBalance: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateScore = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const tasks = Number(formData.tasksCompleted) || 0;
      const hours = Number(formData.focusHours) || 0;
      const breaks = Number(formData.breaksTaken) || 0;
      const distractions = Number(formData.distractions) || 0;

      // Calculate main focus score (0-100)
      const rawScore = (tasks * 10) + (hours * 8) + (breaks * 5) - (distractions * 3);
      const normalized = Math.min(100, Math.max(0, (rawScore / 150) * 100));
      
      // Calculate additional insights
      const productivity = Math.min(100, hours > 0 ? (tasks / hours) * 50 : 0);
      const efficiency = Math.min(100, Math.max(0, 100 - (distractions * 5)));
      const workLifeBalance = Math.min(100, hours > 0 ? (breaks / (hours / 2)) * 50 : 0);

      setFocusScore(Math.round(normalized));
      setInsights({
        productivity: Math.round(productivity),
        efficiency: Math.round(efficiency),
        workLifeBalance: Math.round(workLifeBalance)
      });
      setIsCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      tasksCompleted: "",
      focusHours: "",
      breaksTaken: "",
      distractions: ""
    });
    setShowResult(false);
    setFocusScore(0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-blue-500 to-cyan-500";
    if (score >= 40) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return { text: "Outstanding!", emoji: "🎉", desc: "You're crushing it!" };
    if (score >= 60) return { text: "Great Job!", emoji: "👍", desc: "Keep up the momentum" };
    if (score >= 40) return { text: "Good Start", emoji: "📈", desc: "Room to grow" };
    return { text: "Let's Improve", emoji: "💪", desc: "You've got this!" };
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) return "You're in the zone! Keep this momentum going. Consider sharing your productivity tips with your team.";
    if (score >= 60) return "Great progress! Try reducing distractions by 2-3 instances and take one more strategic break to reach excellence.";
    if (score >= 40) return "You're on the right track. Focus on completing 2-3 priority tasks and create a distraction-free environment.";
    return "Start with small wins: Set 2 achievable tasks, block 3-4 hours of focus time, and eliminate your top distraction source.";
  };

  const inputFields = [
    {
      name: "tasksCompleted",
      label: "Tasks Completed",
      icon: CheckCircle2,
      type: "number",
      placeholder: "8",
      min: "0",
      max: "50",
      color: "from-blue-500 to-cyan-500",
      tip: "Number of tasks you completed today"
    },
    {
      name: "focusHours",
      label: "Deep Focus Hours",
      icon: Clock,
      type: "number",
      placeholder: "6",
      min: "0",
      max: "12",
      step: "0.5",
      color: "from-purple-500 to-pink-500",
      tip: "Hours spent in deep, uninterrupted work"
    },
    {
      name: "breaksTaken",
      label: "Breaks Taken",
      icon: Coffee,
      type: "number",
      placeholder: "3",
      min: "0",
      max: "20",
      color: "from-green-500 to-emerald-500",
      tip: "Short breaks help maintain productivity"
    },
    {
      name: "distractions",
      label: "Distractions",
      icon: Zap,
      type: "number",
      placeholder: "5",
      min: "0",
      max: "50",
      color: "from-orange-500 to-red-500",
      tip: "Interruptions that broke your focus"
    }
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gradient-blue">
            Daily Focus Score Calculator
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter your daily productivity metrics and get instant AI-powered insights about your focus and performance
          </p>
          
          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <Info className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Try it with sample data or your own metrics</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Enhanced Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={calculateScore} className="relative glassmorphism rounded-2xl p-6 sm:p-8 shadow-2xl border border-border/50 overflow-hidden">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm" />
              </div>
              
              {/* Floating particles background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="relative"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-xl bg-blue-500/30 blur-md"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Enter Your Metrics
                      </h3>
                      <p className="text-xs text-muted-foreground">Fill in your daily productivity data</p>
                    </div>
                  </div>
                  {showResult && (
                    <motion.button
                      type="button"
                      onClick={handleReset}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 border border-blue-500/20 transition-all font-medium"
                    >
                      New Calculation
                    </motion.button>
                  )}
                </div>

              <div className="space-y-6">
                {inputFields.map((field, idx) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    {/* Field number badge */}
                    <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10">
                      {idx + 1}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <label className="flex items-center gap-3 text-sm font-bold">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${field.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <field.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-foreground">{field.label}</div>
                          <div className="text-xs text-muted-foreground font-normal">{field.tip}</div>
                        </div>
                      </label>
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="relative group/tip"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${field.color} opacity-10 flex items-center justify-center`}>
                          <AlertCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="relative">
                      {/* Animated border gradient */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${field.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity`}
                      />
                      
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        required
                        className="relative w-full px-5 py-4 pr-20 rounded-xl bg-background/90 border-2 border-border/60 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-border hover:bg-background text-lg font-semibold shadow-sm hover:shadow-md"
                      />
                      
                      {/* Unit badge */}
                      <div className={`absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-gradient-to-r ${field.color} text-white text-xs font-bold shadow-md`}>
                        {field.name === 'focusHours' ? 'HRS' : field.name === 'tasksCompleted' ? 'TASKS' : field.name === 'breaksTaken' ? 'BREAKS' : 'TIMES'}
                      </div>

                      {/* Progress indicator */}
                      {formData[field.name as keyof typeof formData] && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ 
                            width: `${(Number(formData[field.name as keyof typeof formData]) / Number(field.max)) * 100}%`,
                            transformOrigin: 'left'
                          }}
                        />
                      )}
                    </div>

                    {/* Value indicator */}
                    {formData[field.name as keyof typeof formData] && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center gap-2"
                      >
                        <div className="flex-1 h-2 bg-border/30 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${(Number(formData[field.name as keyof typeof formData]) / Number(field.max)) * 100}%` 
                            }}
                            className={`h-full bg-gradient-to-r ${field.color} rounded-full`}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground min-w-[60px] text-right">
                          {formData[field.name as keyof typeof formData]} / {field.max}
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
              </div>

              {/* Enhanced Submit Button */}
              <motion.button
                type="submit"
                disabled={isCalculating}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 px-6 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl transition-all flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                
                {isCalculating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Calculator className="w-5 h-5" />
                    </motion.div>
                    Calculating...
                  </>
                ) : (
                  <>
                    <Calculator className="w-5 h-5" />
                    Calculate My Score
                  </>
                )}
              </motion.button>

              {/* Quick Tips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-blue-400 mb-1">Smart Features</p>
                    <p className="text-muted-foreground">Everything you need to work with purpose and clarity powered by AI Dan.</p>
                  </div>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side - Enhanced Results */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glassmorphism rounded-2xl p-12 h-full min-h-[600px] flex flex-col items-center justify-center text-center relative overflow-hidden"
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-8 relative"
                  >
                    <Brain className="w-16 h-16 text-blue-400" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-blue-500/20"
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3">Ready to Analyze</h3>
                  <p className="text-muted-foreground max-w-sm mb-6">
                    Fill in your daily metrics and click "Calculate My Score" to receive personalized insights
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['AI-Powered', 'Instant Results', 'Personalized'].map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="space-y-6"
                >
                  {/* Main Score Card with Confetti Effect */}
                  <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getScoreColor(focusScore)} opacity-10`} />
                    
                    {/* Confetti particles for high scores */}
                    {focusScore >= 80 && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: '-10%',
                              background: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
                            }}
                            animate={{
                              y: ['0%', '120%'],
                              x: [0, (Math.random() - 0.5) * 100],
                              rotate: [0, 360],
                              opacity: [1, 0]
                            }}
                            transition={{
                              duration: 2 + Math.random(),
                              delay: Math.random() * 0.5,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          className="inline-block mb-4"
                        >
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getScoreColor(focusScore)} flex items-center justify-center mx-auto shadow-lg`}>
                            <Award className="w-8 h-8 text-white" />
                          </div>
                        </motion.div>
                        
                        <div className="text-sm font-semibold text-muted-foreground mb-3">Your Focus Score</div>
                        
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                          className="relative inline-block mb-4"
                        >
                          <div className={`text-8xl sm:text-9xl font-extrabold bg-gradient-to-br ${getScoreColor(focusScore)} bg-clip-text text-transparent`}>
                            {focusScore}
                          </div>
                          <div className="text-2xl font-bold text-muted-foreground absolute -right-8 top-4">/100</div>
                        </motion.div>
                        
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-2"
                        >
                          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${getScoreColor(focusScore)} text-white font-bold text-lg shadow-lg`}>
                            {getScoreLabel(focusScore).emoji} {getScoreLabel(focusScore).text}
                          </div>
                          <p className="text-sm text-muted-foreground">{getScoreLabel(focusScore).desc}</p>
                        </motion.div>
                      </div>

                      {/* Enhanced Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[
                          { label: 'Productivity', value: insights.productivity, icon: TrendingUp, color: 'text-blue-400' },
                          { label: 'Efficiency', value: insights.efficiency, icon: Zap, color: 'text-purple-400' },
                          { label: 'Balance', value: insights.workLifeBalance, icon: Target, color: 'text-green-400' }
                        ].map((metric, i) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="text-center p-4 rounded-xl bg-background/40 hover:bg-background/60 transition-all group cursor-default"
                          >
                            <metric.icon className={`w-6 h-6 ${metric.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                            <div className="text-3xl font-bold mb-1">{metric.value}%</div>
                            <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Score Breakdown */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="space-y-3 pt-6 border-t border-border/30"
                      >
                        <div className="text-sm font-semibold mb-4 flex items-center gap-2">
                          <Calculator className="w-4 h-4 text-blue-400" />
                          Score Breakdown
                        </div>
                        <div className="space-y-2.5">
                          {[
                            { label: 'Tasks Completed', value: Number(formData.tasksCompleted) * 10, positive: true },
                            { label: 'Focus Hours', value: Number(formData.focusHours) * 8, positive: true },
                            { label: 'Breaks Taken', value: Number(formData.breaksTaken) * 5, positive: true },
                            { label: 'Distractions', value: Number(formData.distractions) * 3, positive: false }
                          ].map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + i * 0.1 }}
                              className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-background/40 transition-colors"
                            >
                              <span className="text-muted-foreground">{item.label}</span>
                              <span className={`font-bold ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                                {item.positive ? '+' : '-'}{item.value} pts
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* AI Recommendation Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="glassmorphism rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                      >
                        <Brain className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                          AI-Powered Recommendation
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {getRecommendation(focusScore)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
