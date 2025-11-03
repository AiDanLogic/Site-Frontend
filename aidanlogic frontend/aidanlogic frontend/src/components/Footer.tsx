"use client";

import { motion } from "framer-motion";
import { Twitter, Youtube, Mail, Facebook } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", sectionId: "features" },
        { name: "Dashboard Demo", sectionId: "demo" },
        { name: "User Demo", sectionId: "user-demo" },
        { name: "Home", href: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Pricing", sectionId: "pricing" },
        { name: "Blog", sectionId: "blog" },
        { name: "Contact", sectionId: "contact" },
        { name: "Get Started", href: "https://dashboard.aidanlogic.com/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/AiDanLogic/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/AiDan_Logic", label: "Twitter" },
    { icon: Youtube, href: "https://www.youtube.com/@AiDanLogic", label: "YouTube" },
    { icon: FaPinterest, href: "https://www.pinterest.com/aidan_logic/", label: "Pinterest" },
    { icon: Mail, href: "mailto:support@aidanlogic.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-navy/50 border-t border-border/50 mt-20">
      {/* Solid background to hide grid lines */}
      <div className="absolute inset-0 bg-background/95 z-0" />
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 pb-8 lg:pb-12 border-b border-border/30">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  priority
                  className="w-25 h-25 sm:w-85 sm:h-30"
                />
              </motion.div>
            </Link>
            <p className="text-foreground/60 mb-6 text-sm lg:text-base max-w-md">
              Transform your workflow with AI-powered productivity intelligence.
              Let AI Dan analyze, optimize, and elevate your daily focus.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-2 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span>2301 Utah Ave, El Segundo, CA 90245, United States</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <a href="tel:+13102202052" className="hover:text-foreground transition-colors">
                  +1 (310) 220-2052
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:glow-blue transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, idx) => (
            <div key={section.title}>
              <h3 className="text-foreground font-semibold mb-4 text-sm lg:text-base">
                {section.title}
              </h3>
              <ul className="space-y-2 lg:space-y-3">
                {section.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 4 }}>
                    {link.sectionId ? (
                      <button
                        onClick={() => scrollToSection(link.sectionId!)}
                        className="text-sm text-foreground/60 hover:text-foreground transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                        target={link.href?.startsWith('mailto:') ? undefined : '_blank'}
                        rel={link.href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-foreground/50 text-center sm:text-left">
            © {currentYear} AiDanLogic. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-foreground/50">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer hover:text-foreground transition-colors"
            >
              Made with 💙 by AI Dan
            </motion.span>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}