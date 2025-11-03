"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Only update active section on home page
      if (isHomePage) {
        const sections = ["hero", "features", "demo", "pricing", "blog", "contact"];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen) {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.querySelector('[aria-label="Toggle menu"]');
        if (mobileMenu && !mobileMenu.contains(e.target as Node) && 
            menuButton && !menuButton.contains(e.target as Node)) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    
    // Close mobile menu on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isHomePage, isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Add small delay to allow menu to close before scrolling
    setTimeout(() => {
      if (isHomePage) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed header
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }, 150);
  };

  const navItems = [
    { name: "Features", sectionId: "features" },
    { name: "Demo", sectionId: "demo" },
    { name: "Pricing", sectionId: "pricing" },
    { name: "Blog", sectionId: "blog" },
    { name: "Contact", sectionId: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                priority
                className="w-20 h-20 sm:w-55 sm:h-20"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-3 lg:px-4 py-2 text-sm lg:text-base transition-colors group ${
                  isHomePage && activeSection === item.sectionId
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
                <motion.span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform origin-left ${
                    isHomePage && activeSection === item.sectionId
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  initial={false}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <motion.a
              href="https://dashboard.aidanlogic.com/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 lg:px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-foreground transition-colors"
            >
              Sign In
            </motion.a>
            <motion.a
              href="https://dashboard.aidanlogic.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="md:hidden p-2 text-foreground relative z-50 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden glassmorphism border-t border-border/50"
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(item.sectionId);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                isHomePage && activeSection === item.sectionId
                  ? "text-foreground bg-white/10"
                  : "text-foreground/80 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-3 space-y-2 border-t border-border/30">
            <a
              href="https://dashboard.aidanlogic.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors text-left"
            >
              Sign In
            </a>
            <a
              href="https://dashboard.aidanlogic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}