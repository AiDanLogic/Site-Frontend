"use client";

import { useEffect } from "react";

export default function DarkModeInitializer() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
    // Remove any stored theme preference
    localStorage.removeItem("theme");
  }, []);

  return null;
}
