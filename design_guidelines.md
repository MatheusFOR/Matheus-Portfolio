# Design Guidelines - Developer/Designer Portfolio

## Design Approach

**Selected Approach**: Reference-Based with Creative Industry Influences

**Justification**: Portfolio sites showcase work and personality - visual identity is crucial for differentiation. This is an experience-focused, design-differentiated project where standing out matters.

**References**: Inspired by Awwwards-winning portfolios, Dribbble top designers (Bruno Simon's physics-based site, Aristide Benoist's minimalism, Lynn Fisher's creativity)

**Core Principles**:
- Personality through restraint: Bold typography, strategic color, intentional whitespace
- Work-first showcase: Projects are the hero, not decorative elements
- Delightful interactions: Subtle animations that enhance, not distract
- Professional playfulness: Serious work, approachable presentation

## Color Palette

**Light Mode**:
- Primary: 280 65% 60% (Deep purple - creative yet professional)
- Accent: 160 84% 39% (Vibrant teal - complements without clashing)
- Background: 0 0% 99% (Soft white)
- Surface: 240 20% 97% (Subtle cool gray)
- Text Primary: 240 40% 10% (Rich black)
- Text Secondary: 240 15% 40% (Medium gray)

**Dark Mode**:
- Primary: 280 70% 65% (Brighter purple for contrast)
- Accent: 160 70% 50% (Adjusted teal)
- Background: 240 25% 8% (Deep charcoal with purple undertone)
- Surface: 240 20% 14% (Elevated dark surface)
- Text Primary: 240 10% 95% (Warm white)
- Text Secondary: 240 10% 60% (Muted gray)

## Typography

**Font Families**: 
- Display: Space Grotesk (Google Fonts) - geometric, modern, distinctive
- Body: Inter (Google Fonts) - readable, versatile, professional

**Scale**:
- Hero Display: 4rem/3rem (64px/48px) - font-bold - Name, major statements
- Section Heading: 2.5rem/2rem (40px/32px) - font-bold - Section titles
- Project Title: 1.75rem/1.5rem (28px/24px) - font-semibold - Portfolio pieces
- Body Large: 1.25rem/1.125rem (20px/18px) - font-normal - Introductions
- Body: 1rem/0.9375rem (16px/15px) - font-normal - Descriptions
- Small: 0.875rem (14px) - font-medium - Tags, metadata

## Layout System

**Spacing Units**: Tailwind units of **4, 8, 12, 16** - generous rhythm for portfolio breathing room

**Container Strategy**:
- Hero: Full-width viewport with max-w-6xl content
- Content sections: max-w-7xl for project grids, max-w-3xl for text-heavy content
- Vertical rhythm: py-24 for sections (desktop), py-16 (tablet), py-12 (mobile)

## Component Library

**Hero Section**:
- Asymmetric layout: Large name + title (left 60%), profile image (right 40%, rounded-2xl with subtle gradient border)
- Animated gradient background: Subtle animated mesh gradient (CSS only)
- CTA buttons: Primary + outline (scroll to work, view resume)
- Scroll indicator: Animated down arrow at bottom

**Navigation**:
- Fixed header: Transparent blur (backdrop-blur-xl) on scroll, logo + links + theme toggle
- Mobile: Hamburger menu with slide-in overlay (full-screen navigation)

**Project Showcase**:
- Masonry grid: 2 columns (desktop), staggered heights based on content
- Project cards: Image (16:9), title, description, tech tags, hover effect (lift + glow)
- Detail modal: Full-screen overlay with large images, description, live/GitHub links
- Filter tabs: "All / Web / Design / Experimental" sticky above grid

**Skills Section**:
- Category cards: 3-column grid (Frontend, Design, Tools)
- Skill items: Icon + label in flexible grid, hover highlights
- Proficiency indicators: Filled circles (not bars) showing competency level

**Experience Timeline**:
- Vertical timeline (desktop): Line with nodes, alternating left/right cards
- Mobile: Stack with left-aligned line
- Cards contain: Role, company, duration, achievements (bulleted)

**Contact Section**:
- Two-column split: Form (left 55%), info + social links (right 45%)
- Form fields: Floating labels, focus states with primary color glow
- Social icons: Large circular buttons (48x48) with brand colors on hover

**Footer**:
- Minimal: Copyright, back-to-top button, social links repeated
- No newsletter signup (portfolio context)

## Animations

**Strategic & Polished**:
- Page load: Staggered fade-up for hero elements (200ms delays)
- Scroll reveals: Intersection Observer for fade-in (no scroll-driven position changes)
- Project hover: Transform scale(1.02) + shadow expansion (300ms ease-out)
- Cursor follower: Subtle dot that follows mouse on desktop (opt-in feature)
- Section transitions: Smooth scroll behavior for anchor navigation
- Theme toggle: Color transition (200ms) with brief flash suppression

## Images

**Hero Section**: Yes - Large professional portrait/avatar
- Position: Right side of hero (40% width)
- Style: Rounded-2xl with gradient border effect
- Treatment: Slightly elevated with subtle shadow

**Project Showcase**: Critical - Multiple project thumbnails
- Format: 16:9 or square depending on project type
- Placement: Each project card features prominent cover image
- Treatment: Subtle hover zoom (scale 1.05), overlay gradient on hover revealing links
- Quality: High-res mockups showing work in context (desktop/mobile frames)

**About Section**: Workspace/candid photo
- Position: Inline with bio text, 40% width, floated right
- Style: Rounded-lg, casual but professional
- Treatment: Grayscale with color on hover (optional personality touch)

## Key Interactions

**Project Filtering**: Click tag → smooth grid rearrangement with fade
**Theme Toggle**: Sun/moon icon in header, preference saved to localStorage
**Contact Form**: Real-time validation, success animation (checkmark burst)
**Cursor Effects**: Custom cursor changes on interactive elements (pointer → dot expand)
**Scroll Progress**: Thin line at top showing read progress (optional)

## Section Structure

1. **Hero**: Asymmetric intro with CTA
2. **Featured Work**: 3-4 standout projects in prominent cards
3. **All Projects**: Filterable masonry grid
4. **Skills**: Categorized competencies
5. **Experience**: Timeline or card-based work history
6. **About**: Personal story, photo, values
7. **Contact**: Form + alternative contact methods
8. **Footer**: Minimal closure