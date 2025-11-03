"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraTextEffectProps {
  text: string;
  className?: string;
}

export function AuroraTextEffect({
  text,
  className,
}: AuroraTextEffectProps) {
  return (
    <span 
      className={cn(
        "bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent animate-aurora-gradient",
        className
      )}
    >
      {text}
    </span>
  );
}
