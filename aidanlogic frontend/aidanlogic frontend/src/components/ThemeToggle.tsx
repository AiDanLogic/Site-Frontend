"use client";

import { motion } from "framer-motion";
import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <motion.div
      className="fixed top-24 right-4 md:top-6 md:right-6 z-40 glassmorphism p-3 rounded-full"
      title="Dark Mode Active"
    >
      <Moon className="w-5 h-5 text-blue-400" />
    </motion.div>
  );
}