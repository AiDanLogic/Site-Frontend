"use client";

import { useEffect } from "react";
import dynamic from 'next/dynamic';

import HeroSection from "@/components/HeroSection";
import DashboardDemo from "@/components/DashboardDemo";
import FeaturesSection from "@/components/FeaturesSection";
import UserDemoSection from "@/components/UserDemoSection";
import AIChatbot from "@/components/AIChatbot";

// Lazy load below-the-fold components
const BlogSection = dynamic(() => import('@/components/BlogSection'), { loading: () => <div className="h-96 bg-muted/20 animate-pulse rounded-lg" /> });
const PricingSection = dynamic(() => import('@/components/PricingSection'), { loading: () => <div className="h-96 bg-muted/20 animate-pulse rounded-lg" /> });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { loading: () => <div className="h-96 bg-muted/20 animate-pulse rounded-lg" /> });

import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import FloatingElements from "@/components/FloatingElements";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  useEffect(() => {
    // Scroll to hero section on page load/refresh
    const scrollToHero = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Small delay to ensure page is fully loaded
    const timer = setTimeout(scrollToHero, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Impressive UI Enhancements */}
      <AnimatedBackground />
      <FloatingElements />
      <CursorGlow />
      <ScrollProgress />
      
      {/* Main Content */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="demo">
        <DashboardDemo />
      </section>
      <section id="user-demo">
        <UserDemoSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}