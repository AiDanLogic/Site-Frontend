"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cookie, Settings, BarChart3, Shield } from "lucide-react";
import Link from "next/link";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: [
        "Authentication and login status",
        "Security and fraud prevention",
        "Basic website functionality",
        "User session management"
      ],
      required: true
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: [
        "Page views and user behavior",
        "Performance metrics and loading times",
        "Error tracking and debugging",
        "Feature usage statistics"
      ],
      required: false
    },
    {
      icon: Cookie,
      title: "Preference Cookies",
      description: "These cookies remember your preferences and settings for a better experience.",
      examples: [
        "Theme and display preferences",
        "Language and region settings",
        "Dashboard customization",
        "Notification preferences"
      ],
      required: false
    },
    {
      icon: Shield,
      title: "Security Cookies",
      description: "These cookies enhance security and protect against malicious activities.",
      examples: [
        "CSRF protection tokens",
        "Rate limiting and abuse prevention",
        "Security headers and validation",
        "Encrypted session data"
      ],
      required: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-slate-900 to-navy">
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-blue mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience 
              and improve our AI-powered productivity services.
            </p>
            <div className="mt-6 text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="max-w-4xl mx-auto space-y-8">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    cookie.required 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    <cookie.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-foreground">{cookie.title}</h2>
                      {cookie.required && (
                        <span className="px-2 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/80">{cookie.description}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Examples:</h3>
                  <ul className="space-y-2">
                    {cookie.examples.map((example, exampleIndex) => (
                      <motion.li
                        key={exampleIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (exampleIndex * 0.05) }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{example}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Cookie Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glassmorphism p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span><strong>Cookie Banner:</strong> Use our cookie consent banner to choose which non-essential cookies to accept.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span><strong>Account Settings:</strong> Manage your preferences in your account dashboard.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  <strong className="text-foreground">Note:</strong> Disabling certain cookies may affect the functionality 
                  and performance of our services.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glassmorphism p-8 rounded-2xl text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Cookies?</h2>
              <p className="text-foreground/80 mb-6">
                If you have any questions about our cookie policy or need help managing your preferences, 
                please contact our support team.
              </p>
              <div className="space-y-4">
                <div className="text-center text-sm text-foreground/60">
                  <p>AiDanLogic Inc.</p>
                  <p>2301 Utah Ave, El Segundo, CA 90245, United States</p>
                  <p>Phone: <a href="tel:+13102202052" className="text-blue-400 hover:underline">+1 (310) 220-2052</a></p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@aidanlogic.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Contact Support
                  </a>
                  <Link
                    href="/privacy"
                    className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-white/5 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
