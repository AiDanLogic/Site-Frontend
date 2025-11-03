"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Database, Lock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email address)",
        "Usage data and analytics to improve our services",
        "Device information and browser data for security purposes",
        "Communication data when you contact our support team"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Data",
      content: [
        "To provide and maintain our AI productivity services",
        "To personalize your dashboard experience",
        "To send important service updates and notifications",
        "To improve our algorithms and AI capabilities"
      ]
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "We implement industry-standard encryption for all data transmission",
        "Your personal data is stored in secure, encrypted databases",
        "We never sell or share your personal information with third parties",
        "Regular security audits and compliance with GDPR standards"
      ]
    },
    {
      icon: Lock,
      title: "Your Rights",
      content: [
        "Access and download your personal data at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data permanently",
        "Opt-out of non-essential communications"
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect and handle your personal information 
              while delivering exceptional AI-powered productivity services.
            </p>
            <div className="mt-6 text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glassmorphism p-8 rounded-2xl text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
              <p className="text-foreground/80 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-4">
                <div className="text-center text-sm text-foreground/60">
                  <p>AiDanLogic Inc.</p>
                  <p>2301 Utah Ave, El Segundo, CA 90245, United States</p>
                  <p>Phone: <a href="tel:+13102202052" className="text-blue-400 hover:underline">+1 (310) 220-2052</a></p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@aidanlogic.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Contact Privacy Team
                  </a>
                  <Link
                    href="/security"
                    className="px-6 py-3 border border-border rounded-lg text-foreground hover:bg-white/5 transition-colors"
                  >
                    Security Information
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
