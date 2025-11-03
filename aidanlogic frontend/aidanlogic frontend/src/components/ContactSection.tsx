"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, MapPin, Phone, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");
  const [captchaToken, setCaptchaToken] = useState("");

  // Set up global Turnstile callback
  useEffect(() => {
    (window as any).turnstileCallback = (token: string) => {
      console.log('Turnstile verified:', token);
      setCaptchaToken(token);
    };

    // Wait for Turnstile script to load and render widget
    const checkTurnstile = setInterval(() => {
      if ((window as any).turnstile) {
        clearInterval(checkTurnstile);
        const container = document.getElementById('turnstile-container');
        if (container && !container.hasChildNodes()) {
          (window as any).turnstile.render('#turnstile-container', {
            sitekey: '0x4AAAAAAB81Kfz2L7wMdhcW',
            callback: (window as any).turnstileCallback,
            theme: 'light',
          });
        }
      }
    }, 100);

    return () => {
      clearInterval(checkTurnstile);
      delete (window as any).turnstileCallback;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    // Check if Turnstile is completed
    if (!captchaToken) {
      setSubmitMessage("Please complete the security verification by checking the box above");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        "cf-turnstile-response": captchaToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Message sent successfully! We'll get back to you soon.");
        setSubmitStatus("success");
        e.currentTarget.reset();
        setCaptchaToken("");
        // Reset Turnstile widget if available
        if ((window as any).turnstile && (window as any).turnstile.reset) {
          (window as any).turnstile.reset();
        }
      } else {
        setSubmitMessage(result.error || "Failed to send message. Please try again.");
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 px-6">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gradient-blue">Reach Out to AI Dan</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="glassmorphism rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

          {/* Submit Status Message */}
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl text-center ${
                submitStatus === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
              }`}
            >
              {submitMessage}
            </motion.div>
          )}

          <div className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-2 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-background/80 border-2 border-border/60 px-4 py-3.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-border/80 focus:bg-background"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
              <motion.div
                className="space-y-2 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-background/80 border-2 border-border/60 px-4 py-3.5 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all hover:border-border/80 focus:bg-background"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl bg-background/80 border-2 border-border/60 px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-border/80 focus:bg-background"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us more about your inquiry. We're here to help!"
                rows={6}
                className="w-full rounded-xl bg-background/80 border-2 border-border/60 px-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none hover:border-border/80 focus:bg-background"
                required
                disabled={isSubmitting}
              />
            </motion.div>

            {/* Turnstile CAPTCHA Section */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs">🔒</span>
                </div>
                Security Verification
              </label>
              <div className="text-xs text-muted-foreground mb-2">
                Please check the box below to verify you're not a robot
              </div>
              <div id="turnstile-container"></div>
              {captchaToken && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-2 p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Verification completed</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`relative w-full px-8 py-4 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center gap-3 group overflow-hidden ${
                isSubmitting || !captchaToken
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-blue-500/50"
              }`}
              type="submit"
              disabled={isSubmitting || !captchaToken}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                style={{ opacity: isSubmitting ? 0 : 0 }}
                whileHover={{ opacity: isSubmitting ? 0 : 0.3 }}
              />
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : !captchaToken ? "Please check the box above" : "Send Message"}
              </span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Send className={`w-5 h-5 transition-transform duration-300 ${isSubmitting ? "" : "group-hover:rotate-45"}`} />
              </motion.div>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
