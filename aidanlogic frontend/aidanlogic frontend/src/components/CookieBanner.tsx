"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check, AlertCircle } from "lucide-react";
import Link from "next/link";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    preferences: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      // Load saved preferences
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      preferences: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const cookieTypes = [
    {
      key: 'essential' as keyof CookiePreferences,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security.',
      required: true,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      required: false,
    },
    {
      key: 'preferences' as keyof CookiePreferences,
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences for a better experience.',
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign performance.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism border border-border/50 rounded-2xl p-6 shadow-2xl">
              {!showSettings ? (
                // Main banner
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        We use cookies to enhance your experience
                      </h3>
                      <p className="text-sm text-foreground/80 mb-3">
                        We use essential cookies to make our site work. We'd also like to set analytics 
                        and preference cookies to help us improve it. You can manage your preferences 
                        or learn more in our{" "}
                        <Link href="/cookies" className="text-blue-400 hover:underline">
                          Cookie Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground border border-border rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Manage Preferences
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground border border-border rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                // Settings panel
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {cookieTypes.map((cookie) => (
                      <div key={cookie.key} className="flex items-start gap-3 p-4 rounded-lg bg-white/5">
                        <div className="flex-shrink-0 mt-1">
                          {cookie.required ? (
                            <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-400" />
                            </div>
                          ) : (
                            <button
                              onClick={() => togglePreference(cookie.key)}
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                preferences[cookie.key]
                                  ? 'bg-blue-500 border-blue-500'
                                  : 'border-border hover:border-blue-400'
                              }`}
                            >
                              {preferences[cookie.key] && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </button>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground">{cookie.title}</h4>
                            {cookie.required && (
                              <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-foreground/70">{cookie.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => setShowSettings(false)}
                      className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground border border-border rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
