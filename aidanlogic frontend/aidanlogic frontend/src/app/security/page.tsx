"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Server, Key, AlertCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard protocols.",
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for all data transmission",
        "End-to-end encryption for sensitive communications",
        "Regular encryption key rotation"
      ]
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Multi-layered access control ensures only authorized users can access your data.",
      details: [
        "Multi-factor authentication (MFA) support",
        "Role-based access control (RBAC)",
        "Session management and timeout policies",
        "IP whitelisting and geo-blocking options"
      ]
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Our infrastructure is built with security-first principles and regular audits.",
      details: [
        "SOC 2 Type II compliant infrastructure",
        "Regular penetration testing and vulnerability assessments",
        "24/7 security monitoring and incident response",
        "Automated backup and disaster recovery"
      ]
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "We implement privacy-by-design principles to protect your personal information.",
      details: [
        "Data minimization and purpose limitation",
        "Regular privacy impact assessments",
        "GDPR and CCPA compliance",
        "Right to data portability and deletion"
      ]
    }
  ];

  const securityTips = [
    "Use strong, unique passwords for your account",
    "Enable multi-factor authentication when available",
    "Keep your devices and browsers updated",
    "Be cautious of phishing attempts and suspicious emails",
    "Regularly review your account activity and permissions",
    "Log out from shared or public devices"
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
              Security
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Your security is our top priority. Learn about the comprehensive security measures 
              we implement to protect your data and privacy.
            </p>
            <div className="mt-6 text-sm text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>

          {/* Security Features */}
          <div className="max-w-4xl mx-auto space-y-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism p-8 rounded-2xl"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h2>
                    <p className="text-foreground/80">{feature.description}</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Implementation Details:</h3>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (detailIndex * 0.05) }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Security Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glassmorphism p-8 rounded-2xl"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Security Best Practices</h2>
                  <p className="text-foreground/80">Help us keep your account secure by following these recommendations:</p>
                </div>
              </div>
              
              <div className="ml-16">
                <ul className="space-y-3">
                  {securityTips.map((tip, tipIndex) => (
                    <motion.li
                      key={tipIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (tipIndex * 0.05) }}
                      className="flex items-start space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Incident Response */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glassmorphism p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Security Incident Response</h2>
              <div className="space-y-4 text-foreground/80">
                <p>
                  If you discover a security vulnerability or suspect unauthorized access to your account, 
                  please report it immediately:
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">🚨 Emergency Security Contact</p>
                  <p className="text-sm">
                    Email: <a href="mailto:security@aidanlogic.com" className="text-blue-400 hover:underline">security@aidanlogic.com</a>
                  </p>
                  <p className="text-sm mt-1">
                    Phone: <a href="tel:+13102202052" className="text-blue-400 hover:underline">+1 (310) 220-2052</a>
                  </p>
                  <p className="text-sm mt-1">
                    Address: 2301 Utah Ave, El Segundo, CA 90245, United States
                  </p>
                  <p className="text-sm mt-1">
                    Response time: Within 24 hours for critical issues
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glassmorphism p-8 rounded-2xl text-center"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Security Questions?</h2>
              <p className="text-foreground/80 mb-6">
                Our security team is here to help. Contact us for any security-related questions or concerns.
              </p>
              <div className="space-y-4">
                <div className="text-center text-sm text-foreground/60">
                  <p>AiDanLogic Inc.</p>
                  <p>2301 Utah Ave, El Segundo, CA 90245, United States</p>
                  <p>Phone: <a href="tel:+13102202052" className="text-blue-400 hover:underline">+1 (310) 220-2052</a></p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:security@aidanlogic.com"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    Contact Security Team
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
