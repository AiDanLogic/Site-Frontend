"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, Users, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using AiDanLogic services, you agree to be bound by these terms",
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to provide accurate and complete information when registering"
      ]
    },
    {
      icon: FileText,
      title: "Service Description",
      content: [
        "AiDanLogic provides AI-powered productivity and analytics services",
        "We reserve the right to modify or discontinue services with reasonable notice",
        "Service availability is subject to maintenance and technical requirements",
        "We strive for 99.9% uptime but cannot guarantee uninterrupted service"
      ]
    },
    {
      icon: AlertTriangle,
      title: "User Responsibilities",
      content: [
        "Use the service only for lawful purposes and in accordance with these terms",
        "Do not attempt to reverse engineer, hack, or compromise our systems",
        "Respect intellectual property rights and do not infringe on others' rights",
        "Report any security vulnerabilities or suspicious activity immediately"
      ]
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for the service",
        "Some jurisdictions may not allow limitation of liability, so these limits may not apply"
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
              Terms of Service
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Please read these terms carefully before using our AI-powered productivity services. 
              By using our platform, you agree to be bound by these terms.
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

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glassmorphism p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Additional Terms</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  <strong className="text-foreground">Termination:</strong> We may terminate or suspend your account 
                  at any time for violation of these terms or for any other reason at our discretion.
                </p>
                <p>
                  <strong className="text-foreground">Governing Law:</strong> These terms are governed by the laws 
                  of the jurisdiction where AiDanLogic is incorporated, without regard to conflict of law principles.
                </p>
                <p>
                  <strong className="text-foreground">Changes to Terms:</strong> We reserve the right to modify 
                  these terms at any time. Continued use of our services after changes constitutes acceptance.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Terms?</h2>
              <p className="text-foreground/80 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="space-y-4">
                <div className="text-center text-sm text-foreground/60">
                  <p>AiDanLogic Inc.</p>
                  <p>2301 Utah Ave, El Segundo, CA 90245, United States</p>
                  <p>Phone: <a href="tel:+13102202052" className="text-blue-400 hover:underline">+1 (310) 220-2052</a></p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:legal@aidanlogic.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Contact Legal Team
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
