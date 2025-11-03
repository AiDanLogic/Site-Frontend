# Color Code Reference

This document contains all the color codes used in the AidanLogic frontend project.

## Color System

The project uses **OKLCH** (OK Lightness Chroma Hue) color format, which provides better perceptual uniformity and wider color gamut support.

## Main Color Palette

### Background & Foreground
```css
--background: oklch(0.12 0.02 250)              /* Very dark navy-blue background */
--foreground: oklch(0.98 0 0)                   /* Near-white text */
```

### Primary Colors
```css
--primary: oklch(0.7 0.22 250)                  /* Blue - Main brand color */
--primary-foreground: oklch(0.98 0 0)           /* White text on primary */
```

### Secondary Colors
```css
--secondary: oklch(0.22 0.03 250)               /* Dark navy */
--secondary-foreground: oklch(0.98 0 0)         /* White text */
```

### Accent Colors
```css
--accent: oklch(0.6 0.2 280)                    /* Purple accent */
--accent-foreground: oklch(0.98 0 0)            /* White text */
```

### Muted Colors
```css
--muted: oklch(0.2 0.02 250)                    /* Dark muted background */
--muted-foreground: oklch(0.65 0 0)             /* Gray text */
```

### Semantic Colors
```css
--destructive: oklch(0.704 0.191 22.216)        /* Red/destructive actions */
--border: oklch(0.3 0.02 250 / 30%)             /* Subtle borders */
--input: oklch(0.25 0.02 250 / 50%)             /* Input field background */
--ring: oklch(0.7 0.22 250)                     /* Focus ring (blue) */
```

### Card & Popover
```css
--card: oklch(0.16 0.03 250 / 40%)              /* Card background with transparency */
--card-foreground: oklch(0.98 0 0)              /* Card text */
--popover: oklch(0.16 0.03 250)                 /* Popover background */
--popover-foreground: oklch(0.98 0 0)           /* Popover text */
```

### Chart Colors
```css
--chart-1: oklch(0.7 0.22 250)                  /* Blue */
--chart-2: oklch(0.6 0.2 150)                   /* Green */
--chart-3: oklch(0.7 0.15 90)                   /* Yellow */
--chart-4: oklch(0.6 0.2 280)                   /* Purple */
--chart-5: oklch(0.75 0.15 60)                  /* Orange */
```

### Sidebar Colors
```css
--sidebar: oklch(0.16 0.03 250)                 /* Sidebar background */
--sidebar-foreground: oklch(0.98 0 0)           /* Sidebar text */
--sidebar-primary: oklch(0.7 0.22 250)          /* Sidebar primary (blue) */
--sidebar-primary-foreground: oklch(0.98 0 0)   /* Sidebar primary text */
--sidebar-accent: oklch(0.22 0.03 250)          /* Sidebar accent */
--sidebar-accent-foreground: oklch(0.98 0 0)     /* Sidebar accent text */
--sidebar-border: oklch(0.3 0.02 250 / 30%)     /* Sidebar borders */
--sidebar-ring: oklch(0.7 0.22 250)             /* Sidebar focus ring */
```

## Brand Colors

### Named Color Palette
```css
--navy: oklch(0.15 0.02 250)                    /* Dark navy */
--blue: oklch(0.7 0.22 250)                     /* Primary blue */
--green: oklch(0.6 0.2 150)                     /* Green */
--yellow: oklch(0.7 0.15 90)                    /* Yellow */
--purple: oklch(0.6 0.2 280)                    /* Purple */
```

### Glow Effects
```css
--glow-blue: oklch(0.7 0.22 250 / 50%)          /* Blue glow (50% opacity) */
--glow-purple: oklch(0.6 0.2 280 / 50%)         /* Purple glow (50% opacity) */
--glow-green: oklch(0.6 0.2 150 / 50%)          /* Green glow (50% opacity) */
```

## Additional Colors Used in Components

### Background Boxes (ui/background-boxes.tsx)
```css
#93c5fd  /* Light blue */
#f9a8d4  /* Pink */
#86efac  /* Light green */
#fde047  /* Yellow */
#fca5a5  /* Light red */
#d8b4fe  /* Light purple */
#a5b4fc  /* Indigo */
#c4b5fd  /* Light purple */
```

### Inline Colors (RGBA format)
```css
rgba(59, 130, 246, 0.5)    /* Blue glow - #3b82f6 with 50% opacity */
rgba(59, 130, 246, 0.4)    /* Blue glow - #3b82f6 with 40% opacity */
rgba(59, 130, 246, 0.3)    /* Blue glow - #3b82f6 with 30% opacity */
rgba(59, 130, 246, 0.2)    /* Blue glow - #3b82f6 with 20% opacity */
rgba(139, 92, 246, 0.5)    /* Purple glow - #8b5cf6 with 50% opacity */
rgba(236, 72, 153, 0.5)    /* Pink glow - #ec4899 with 50% opacity */
rgba(34, 197, 94, 0.4)     /* Green glow - #22c55e with 40% opacity */
rgba(34, 197, 94, 0.2)     /* Green glow - #22c55e with 20% opacity */
rgba(34, 211, 238, 0.8)    /* Cyan glow - #22d3ee with 80% opacity */
rgba(34, 211, 238, 0.6)    /* Cyan glow - #22d3ee with 60% opacity */
```

### Hex Colors Used
```css
#3b82f6  /* Blue (Tailwind blue-500) */
#8b5cf6  /* Purple (Tailwind purple-500) */
#ec4899  /* Pink (Tailwind pink-500) */
#10b981  /* Green (Tailwind emerald-500) */
#22c55e  /* Green (Tailwind green-500) */
#22d3ee  /* Cyan (Tailwind cyan-400) */
#38bdf8  /* Sky blue (Tailwind sky-400) */
#6C6C6C  /* Medium gray */
#222222  /* Dark gray */
```

## Color Usage Guide

### Primary Actions
- Use `--primary` (blue) for main CTAs and primary actions
- Use `--primary-foreground` (white) for text on primary buttons

### Accent Elements
- Use `--accent` (purple) for hover states and secondary actions
- Use `--glow-purple` for purple glow effects

### Success/Positive States
- Use `--green` or chart-2 for success indicators
- Use `--glow-green` for green glow effects

### Warning/Attention
- Use `--yellow` or chart-3 for warnings

### Error/Destructive
- Use `--destructive` for errors and delete actions

### Backgrounds
- Use `--background` for main page background
- Use `--card` for card components (with transparency)
- Use `--muted` for subtle backgrounds

### Borders & Dividers
- Use `--border` for standard borders (30% opacity)
- Use `--sidebar-border` for sidebar-specific borders

## Notes

- All colors are optimized for dark mode (the project forces dark theme)
- OKLCH format provides better color consistency across different displays
- Opacity values are specified using the `/` syntax in OKLCH (e.g., `/ 50%`)
- Glow effects use semi-transparent versions of primary colors
- The color system follows a blue-purple-green color scheme

