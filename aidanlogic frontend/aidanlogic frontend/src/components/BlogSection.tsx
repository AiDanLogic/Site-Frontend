"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ArrowRight, Sparkles, Users, Code, X } from "lucide-react";

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const posts = [
    {
      title: "How AI Can Supercharge Your Daily Productivity",
      excerpt: "In today’s fast-paced world, staying focused and productive can feel like a constant challenge...",
      date: "2025-01-15",
      tag: "Productivity",
      icon: Sparkles,
      gradient: "from-blue-500 to-purple-500",
      readTime: "5 min read",
      content: `In today’s fast-paced world, staying focused and productive can feel like a constant challenge. Even with planners, calendars, and task lists, many professionals struggle to manage their time effectively. That’s where AI-powered productivity tools, like AiDanLogic’s AI Dan, can make a significant difference. By analyzing your daily workflow, tasks, and calendar patterns, AI Dan provides actionable insights to help optimize your focus, energy, and overall efficiency. Unlike traditional productivity methods, which rely on manual tracking or guesswork, AI-powered tools deliver real-time, personalized guidance to ensure that every day is productive.

Traditional productivity approaches often fail because they lack context. A simple to-do list does not indicate which tasks are most urgent, which require deep focus, or when your energy levels are at their peak. This lack of insight can leave professionals feeling overwhelmed and struggling to prioritize effectively. AI Dan addresses this problem by continuously learning your work habits, task completion patterns, and schedule dynamics. With this information, it generates a Daily Focus Score — a single metric that reflects your productivity for the day. This score provides clarity on where your attention is best spent, highlighting both strengths and areas for improvement.

One of AI Dan’s most powerful features is smart time allocation. By studying historical work patterns, AI Dan can recommend the optimal time to tackle specific tasks. For instance, creative or high-concentration work may be scheduled during peak focus hours, while repetitive tasks or administrative duties can be slotted during lower energy periods. This ensures that your day is structured around efficiency rather than guesswork, helping you achieve more with less stress. Additionally, AI Dan offers real-time feedback through interactive dashboards. You can monitor task completion, focus levels, and upcoming priorities throughout the day, giving you instant insights into your performance.

AI-powered productivity tools also contribute to well-being. By recommending strategic breaks, AI Dan helps prevent burnout and promotes sustainable productivity. It aligns tasks with your natural energy cycles, ensuring that you work smarter rather than longer. The combination of focus insights, smart scheduling, and real-time metrics empowers professionals to not only achieve their goals but also maintain a balanced workflow.

In conclusion, AI-powered productivity tools like AiDanLogic’s AI Dan are revolutionizing the way we work. By delivering personalized insights, actionable recommendations, and intelligent automation, AI Dan enables professionals to`,
    },
    {
      title: "Mastering Focus: The Role of AI in Task Management",
      excerpt: "Focus is the cornerstone of productivity, yet maintaining it has become increasingly difficult...",
      date: "2025-02-02",
      tag: "Productivity",
      icon: Users,
      gradient: "from-green-500 to-blue-500",
      readTime: "7 min read",
      content: `Focus is the cornerstone of productivity, yet maintaining it has become increasingly difficult in a world full of distractions, endless notifications, and growing workloads. Even with task lists and digital calendars, many people find it challenging to prioritize effectively and allocate energy wisely. AI is transforming task management by offering actionable insights, data-driven guidance, and real-time productivity analysis. Tools like AiDanLogic’s AI Dan enable users to regain control over their day by understanding which tasks matter most and when they should be completed for maximum impact.

Traditional task management approaches often fall short because they do not account for an individual’s work patterns, energy fluctuations, or workflow inefficiencies. Simple checklists may keep track of what needs to be done, but they cannot determine the optimal order or timing for tasks. This can lead to stress, missed deadlines, and wasted energy on low-priority work. AI Dan overcomes these challenges by analyzing your workflow, deadlines, and task complexity to provide intelligent prioritization. By focusing your attention on high-impact tasks first, it ensures that your energy is always applied where it matters most.

Integration is another key strength of AI-powered task management. AI Dan connects seamlessly with calendars, project management apps, and to-do lists, creating a unified productivity hub. This allows the AI to analyze workflows comprehensively, identifying patterns and potential bottlenecks that might otherwise go unnoticed. The AI then generates a Daily Focus Score, quantifying your productivity in a single, easy-to-understand metric. This daily evaluation helps users make informed adjustments to their schedule, energy allocation, and task sequencing.

Beyond prioritization, AI Dan provides actionable recommendations to optimize workflow. These include scheduling tasks during peak focus hours, automating repetitive work, and sending smart reminders. By reducing cognitive load and decision fatigue, users can maintain consistent focus and accomplish more in less time. AI-driven task management also promotes sustainable productivity, as it balances workload intensity with smart break scheduling, preventing burnout while improving output.

In conclusion, task management is evolving from manual checklists to intelligent, AI-guided workflows. With AI Dan, focus, prioritization, and efficiency are no longer abstract goals but measurable, actionable outcomes. Professionals can work smarter, make data-driven decisions, and maintain balance, turning productivity from a struggle into a strategic advantage.`,
    },
    {
      title: "Unlocking Your Productivity Potential with AI-Powered Dashboards",
      excerpt: "Understanding your productivity patterns is key to achieving more without burning out...",
      date: "2025-03-10",
      tag: "Engineering",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
      readTime: "6 min read",
      content: `Understanding your productivity patterns is key to achieving more without burning out. Traditional dashboards display data, but AI-powered dashboards, such as AiDanLogic, go further by interpreting it to provide actionable insights. AI Dan does not merely list tasks or track calendar events; it analyzes your work habits, focus periods, and task efficiency to guide your decisions. The result is a comprehensive, intelligent view of your daily productivity that allows you to optimize your workflow and energy levels.

At the heart of the AiDanLogic dashboard is the Daily Focus Score. This unique metric combines task completion, focus duration, and workflow efficiency to quantify productivity in a single number. By reviewing this score daily, users gain insight into how effectively they manage their time and which adjustments are needed to improve performance. It transforms abstract productivity goals into clear, measurable outcomes.

Visualization is another strength of AI dashboards. Live graphs, charts, and interactive dashboards make it easy to spot patterns at a glance. You can identify peak productivity hours, high-effort tasks, and recurring workflow challenges. These insights empower professionals to plan their day around actual performance trends rather than assumptions, enabling smarter decisions and better outcomes.

AI dashboards also provide smart automation. Repetitive tasks, scheduling adjustments, and reminders can all be handled automatically, freeing mental energy for high-value work. This streamlining ensures that the day runs smoothly, reducing friction and minimizing the risk of oversight. Moreover, AiDanLogic prioritizes privacy and security, using enterprise-grade encryption to protect all user data while delivering these insights.

The benefits of AI-powered dashboards extend beyond efficiency. They allow professionals to make insightful decisions, maintain focus, optimize workflow, and achieve sustainable performance. With AI Dan, users not only complete tasks more effectively but also understand how their habits influence productivity and energy. This holistic approach supports both high performance and well-being, ensuring that productivity gains are lasting rather than temporary.

In conclusion, AI-powered dashboards like AiDanLogic’s AI Dan are transforming the way professionals work. By combining intelligent analysis, real-time insights, and automation, these tools provide clarity, guidance, and control over your productivity. The result is a smarter, more balanced approach to work, helping you unlock your full potential while maintaining focus, efficiency, and well-being.`,
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gradient-blue">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and ideas from the AiDanLogic team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                delay: i * 0.15, 
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative glassmorphism rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Header */}
              <motion.div 
                className={`h-2 bg-gradient-to-r ${post.gradient}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
              
              {/* Content */}
              <div className="p-6">
                {/* Icon and Tag */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <post.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                    {post.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-blue transition-all">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <motion.button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 mt-4 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Read more
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal for Full Blog Content */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-background/95 backdrop-blur-xl rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedPost.gradient} opacity-10 rounded-3xl pointer-events-none`} />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10 p-8 max-h-[85vh] overflow-y-auto">
                <div className="flex items-start justify-between mb-8 pb-6 border-b border-border/50">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedPost.gradient} flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <selectedPost.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30">
                          {selectedPost.tag}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {selectedPost.title}
                      </h2>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">{selectedPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedPost(null)}
                    className="w-12 h-12 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </motion.button>
                </div>
                <div className="prose prose-lg prose-gray max-w-none text-foreground leading-relaxed">
                  <p className="whitespace-pre-line text-lg leading-relaxed">{selectedPost.content}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
