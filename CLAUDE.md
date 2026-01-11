# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a DevOps Engineer portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The site features a modern, animated single-page design with light/dark mode support and showcases professional experience, skills, projects, certifications, and contact information.

## Key Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:4200)
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture & Design Patterns

### Component Architecture

The application follows a strict separation of concerns with three component categories:

1. **Layout Components** (`app/components/layout/`)
   - `Navigation.tsx`: Sticky header with theme toggle, smooth scroll, mobile menu
   - `Footer.tsx`: Social links, back-to-top button

2. **Section Components** (`app/components/sections/`)
   - 7 major sections (Hero, About, Skills, Projects, Experience, Certifications, Contact)
   - Each section is self-contained and uses SectionContainer wrapper
   - All sections accept no props; they pull data from `app/lib/data.ts` and `app/lib/constants.ts`

3. **Reusable UI Components** (`app/components/ui/`)
   - `Button`: Variants (primary/secondary/outline), sizes (sm/md/lg)
   - `Card`: Base card with hover effects and gradient borders
   - `SectionContainer`: Wrapper with scroll reveal animation
   - `GradientText`: Animated gradient text effect
   - `SkillBadge`: Category-colored badges with icons

4. **Animation Components** (`app/components/animation/`)
   - `AnimatedSection`: Wrapper using Intersection Observer for scroll animations

### Custom Hooks

- `useScrollReveal()`: Intersection Observer hook for scroll-triggered animations
- `useTheme()`: Theme management (light/dark/system) with localStorage persistence
- `useMediaQuery()`: Responsive design breakpoint detection

### Data Management

All content is centralized in two files:
- **`app/lib/constants.ts`**: Site config, navigation items, social links, stats
- **`app/lib/data.ts`**: Projects, experiences, certifications, skills arrays

To update portfolio content, edit these files. Components automatically consume this data.

### Theme System

The theme system uses a multi-layer approach:
1. CSS variables in `globals.css` define colors for light/dark modes
2. Tailwind's `dark:` prefix applies dark mode styles
3. `useTheme()` hook manages theme state (light/dark/system)
4. Theme preference persists in localStorage
5. System preference detection via `prefers-color-scheme` media query

**Important**: The Navigation component cycles through themes (light → dark → system) when clicking the theme toggle button.

### Animation Strategy

Animations use CSS transitions + Intersection Observer for performance:
- Scroll animations trigger at 10% viewport intersection (threshold: 0.1)
- `triggerOnce: true` by default to prevent re-triggering
- Staggered delays for sequential element animations
- Keyframe animations defined in `globals.css`: fadeIn, slideUp, gradient, float

### Path Aliases

TypeScript path alias `@/*` maps to project root:
```typescript
import Component from '@/app/components/...'
```

## Styling Conventions

### Tailwind CSS v4 Usage
- Mobile-first responsive design: base → `md:` → `lg:`
- Dark mode: `dark:` prefix on all color classes
- Consistent spacing scale: py-16 md:py-24 for sections
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Gradient classes: `bg-gradient-to-r from-blue-600 to-purple-600`

### Custom CSS Variables
Defined in `globals.css`:
- `--background`, `--foreground`: Base colors
- `--accent`: Accent color (changes with theme)
- `--border`: Border color
- `--card-shadow`: Card shadow

### Animation Classes
- `.animate-fadeIn`: Fade in with translateY
- `.animate-gradient`: Animated gradient background
- `.bg-grid-pattern`: Dotted grid background

## Important Technical Details

### TypeScript Strict Mode
The project uses `strict: true`. All components must have proper type definitions:
- Props interfaces named `ComponentNameProps`
- Use interfaces from `app/types/index.ts`
- Export default for components, named exports for utilities

### Icons
Icons use `lucide-react` library:
```typescript
import { IconName } from 'lucide-react';
```
Icon names in data files map to lucide-react exports.

### Smooth Scrolling
Navigation links use `scrollIntoView({ behavior: 'smooth' })` to scroll to section IDs.
Each section has an `id` prop matching the `href` in navigation items (e.g., `#about`, `#skills`).

## Common Modifications

### Adding a New Section
1. Create component in `app/components/sections/`
2. Add section ID to `navItems` in `app/lib/constants.ts`
3. Import and add to `app/page.tsx`
4. Wrap in `AnimatedSection` if animation needed

### Adding New Portfolio Data
Edit `app/lib/data.ts`:
- Projects: Add to `projects` array
- Experience: Add to `experiences` array
- Certifications: Add to `certifications` array
- Skills: Add to `skills` array (must specify category)

### Changing Site Information
Edit `app/lib/constants.ts`:
- Name, title, tagline, email in `siteConfig`
- Social links in `socialLinks` array
- Update metadata in `app/layout.tsx`

### Customizing Theme Colors
Edit CSS variables in `app/globals.css` under `:root` and `@media (prefers-color-scheme: dark)`.

## Development Notes

- Hot reload is automatic with Next.js dev server
- The dev server uses Turbopack for fast compilation
- Dark mode class (`dark`) is added to `<html>` element by theme hook
- All client-side interactive components require `'use client'` directive
- Intersection Observer APIs require client components
