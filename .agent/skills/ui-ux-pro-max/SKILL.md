---
name: ui-ux-pro-max
description: UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks.
---

# ui-ux-pro-max

Comprehensive design guide for web and mobile applications. Contains 67 styles, 96 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types across 13 technology stacks. Searchable database with priority-based recommendations.

## Prerequisites
Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed, install it based on user's OS:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill
When user requests UI/UX work (design, build, create, implement, review, fix, improve), follow this workflow:

### Step 1: Analyze User Requirements
Extract key information from user request:
- **Product type**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Style keywords**: minimal, playful, professional, elegant, dark mode, etc.
- **Industry**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, or default to `html-tailwind`

### Step 2: Generate Design System (REQUIRED)
**Always start with `--design-system`** to get comprehensive recommendations with reasoning:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches 5 domains in parallel (product, style, color, landing, typography)
2. Applies reasoning rules from `ui-reasoning.csv` to select best matches
3. Returns complete design system: pattern, style, colors, typography, effects
4. Includes anti-patterns to avoid

**Example:**
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist Design System (Master + Overrides Pattern)
To save the design system for hierarchical retrieval across sessions, add `--persist`:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:
- `design-system/MASTER.md` — Global Source of Truth with all design rules
- `design-system/pages/` — Folder for page-specific overrides

**With page-specific override:**
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

This also creates:
- `design-system/pages/dashboard.md` — Page-specific deviations from Master

**How hierarchical retrieval works:**
1. When building a specific page (e.g., "Checkout"), first check `design-system/pages/checkout.md`
2. If the page file exists, its rules **override** the Master file
3. If not, use `design-system/MASTER.md` exclusively

### Step 3: Supplement with Detailed Searches (as needed)
After getting the design system, use domain searches to get additional details:

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**When to use detailed searches:**

| Need | Domain | Example |
|------|--------|---------|
| More style options | `style` | `--domain style "glassmorphism dark"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard"` |
| UX best practices | `ux` | `--domain ux "animation accessibility"` |
| Alternative fonts | `typography` | `--domain typography "elegant luxury"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |

### Step 4: Stack Guidelines (Default: html-tailwind)
Get implementation-specific best practices. If user doesn't specify a stack, **default to `html-tailwind`**.

```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack html-tailwind
```

Available stacks: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

---

## Search Reference

### Available Domains
- `product` - Product type recommendations (SaaS, e-commerce, portfolio)
- `style` - UI styles (glassmorphism, minimalism, brutalism) + AI prompts and CSS keywords
- `typography` - Font pairings with Google Fonts imports
- `color` - Color palettes by product type
- `landing` - Page structure and CTA strategies
- `chart` - Chart types and library recommendations
- `ux` - Best practices and anti-patterns

### Available Stacks
`html-tailwind` (default), `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

---

## Example Workflow

### Step 1: Analyze Requirements
User: "Build a landing page for a luxury spa"

Extract:
- Product: Landing page, service-based
- Industry: Wellness, beauty
- Keywords: Luxury, calming, elegant

### Step 2: Generate Design System (REQUIRED)
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "luxury spa wellness beauty" --design-system -p "Serenity Spa"
```

### Step 3: Supplement with Detailed Searches (as needed)
```bash
# Get more UX guidelines
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "booking form accessibility" --domain ux

# Get chart recommendations if needed
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "testimonials social proof" --domain landing
```

### Step 4: Stack Guidelines
```bash
python3 .agent/skills/ui-ux-pro-max/scripts/search.py "spa landing" --stack html-tailwind
```

---

## Output Formats
- **Design System**: Comprehensive box with pattern, style, colors, typography, effects, anti-patterns
- **Domain Search**: Ranked results with scores, descriptions, and implementation details
- **Stack Search**: Best practices, performance tips, and code examples

---

## Tips for Better Results
- Be specific with keywords: "dark mode dashboard" > "dashboard"
- Combine product + industry: "fintech SaaS" > "SaaS"
- Use `--design-system` first, then supplement with domain searches
- Default to `html-tailwind` stack unless user specifies otherwise

---

## Common Rules for Professional UI

### Icons & Visual Elements
- **Never use emojis as icons** (❌ 🎨 ✨)
- Use proper SVG icon libraries: Heroicons, Lucide, Feather Icons
- Icons should be consistent in style (all outlined or all filled)

### Interaction & Cursor
- Add `cursor-pointer` to all clickable elements
- Implement smooth hover states with transitions (150-300ms)
- Use `transition-all` or specific properties for performance

### Light/Dark Mode Contrast
- **Light mode**: Text contrast ratio ≥ 4.5:1 (WCAG AA)
- **Dark mode**: Avoid pure black (#000), use dark grays (#0f0f0f, #1a1a1a)
- Test readability in both modes

### Layout & Spacing
- Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Maintain proper visual hierarchy with font sizes and weights
- Responsive breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)

---

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] Consistent icon style (all outlined or all filled)
- [ ] Proper spacing and alignment

### Interaction
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Active/focus states for buttons and inputs

### Light/Dark Mode
- [ ] Light mode: text contrast ≥ 4.5:1 minimum
- [ ] Dark mode: avoid pure black, use dark grays
- [ ] Both modes tested for readability

### Layout
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Consistent spacing scale
- [ ] Proper visual hierarchy

### Accessibility
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Semantic HTML elements used
- [ ] ARIA labels where needed
