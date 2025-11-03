"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail
      setTrails((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: trailId++ },
      ]);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up old trails
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(-10));
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Trail Effect */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="cursor-trail"
            initial={{
              x: trail.x,
              y: trail.y,
              opacity: 0.6,
              scale: 1,
            }}
            animate={{
              opacity: 0,
              scale: 0.5,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              position: "fixed",
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}