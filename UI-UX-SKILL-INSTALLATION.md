# UI UX Pro Max Skill Installation

## ✅ Successfully Installed!

The **UI UX Pro Max** skill has been successfully added to your Antigravity project as a custom skill. This powerful design intelligence toolkit provides comprehensive UI/UX guidance for building professional web and mobile applications.

## 📁 Installation Location

```
.agent/skills/ui-ux-pro-max/
├── SKILL.md                    # Main skill documentation
├── scripts/
│   ├── search.py              # Main search CLI
│   ├── core.py                # BM25 search engine
│   └── design_system.py       # Design system generator
└── data/
    ├── charts.csv             # Chart type recommendations
    ├── colors.csv             # Color palette database
    ├── icons.csv              # Icon library recommendations
    ├── landing.csv            # Landing page patterns
    ├── products.csv           # Product type recommendations
    ├── react-performance.csv  # React optimization tips
    ├── styles.csv             # UI style database (50+ styles)
    ├── typography.csv         # Font pairing recommendations
    ├── ui-reasoning.csv       # Design reasoning rules
    ├── ux-guidelines.csv      # UX best practices
    └── web-interface.csv      # Web interface patterns
```

## 🎯 What This Skill Provides

- **67 UI Styles**: From glassmorphism to brutalism
- **96 Color Palettes**: Industry-specific color schemes
- **57 Font Pairings**: Professional typography combinations
- **99 UX Guidelines**: Best practices and anti-patterns
- **25 Chart Types**: Data visualization recommendations
- **13 Technology Stacks**: React, Next.js, Vue, Svelte, Flutter, and more

## 🚀 Quick Start

### Test the Installation

The skill was tested with your agriculture project:

```bash
python .agent/skills/ui-ux-pro-max/scripts/search.py "agriculture farming" --design-system -p "Vilas Agro"
```

**Result**: Generated a complete design system with:
- **Pattern**: Feature-Rich Showcase
- **Style**: Organic Biophilic (nature-inspired, sustainable)
- **Colors**: Earth greens (#15803D, #22C55E) with harvest gold (#CA8A04)
- **Typography**: Inter font family
- **Effects**: Rounded corners, organic curves, natural shadows

### How Antigravity Will Use This Skill

When you ask Antigravity to help with UI/UX tasks, it will automatically:

1. **Read the SKILL.md** file to understand how to use the design intelligence
2. **Run search commands** to get design recommendations
3. **Apply the design system** to your project
4. **Follow best practices** from the UX guidelines database

## 📖 Usage Examples

### Generate a Complete Design System

```bash
python .agent/skills/ui-ux-pro-max/scripts/search.py "luxury spa wellness" --design-system -p "Serenity Spa"
```

### Search for Specific Design Elements

```bash
# Get UI style recommendations
python .agent/skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark mode" --domain style

# Get color palette suggestions
python .agent/skills/ui-ux-pro-max/scripts/search.py "fintech professional" --domain color

# Get typography recommendations
python .agent/skills/ui-ux-pro-max/scripts/search.py "elegant luxury" --domain typography

# Get UX best practices
python .agent/skills/ui-ux-pro-max/scripts/search.py "form validation accessibility" --domain ux

# Get chart recommendations
python .agent/skills/ui-ux-pro-max/scripts/search.py "real-time dashboard" --domain chart
```

### Get Stack-Specific Guidelines

```bash
# HTML + Tailwind CSS (default)
python .agent/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind

# React
python .agent/skills/ui-ux-pro-max/scripts/search.py "component optimization" --stack react

# Next.js
python .agent/skills/ui-ux-pro-max/scripts/search.py "server components" --stack nextjs
```

### Persist Design System for Your Project

```bash
# Create a master design system file
python .agent/skills/ui-ux-pro-max/scripts/search.py "agriculture farming" --design-system --persist -p "Vilas Agro"

# Create page-specific overrides
python .agent/skills/ui-ux-pro-max/scripts/search.py "product catalog" --design-system --persist -p "Vilas Agro" --page "products"
```

This creates:
- `design-system/MASTER.md` - Global design rules
- `design-system/pages/products.md` - Page-specific overrides

## 🎨 Available Domains

- **product**: Product type recommendations (SaaS, e-commerce, portfolio)
- **style**: UI styles with CSS keywords and AI prompts
- **typography**: Font pairings with Google Fonts imports
- **color**: Color palettes by product type and industry
- **landing**: Page structure and CTA strategies
- **chart**: Chart types and library recommendations
- **ux**: Best practices and anti-patterns

## 🛠️ Available Technology Stacks

- `html-tailwind` (default)
- `react`
- `nextjs`
- `astro`
- `vue`
- `nuxtjs`
- `nuxt-ui`
- `svelte`
- `swiftui`
- `react-native`
- `flutter`
- `shadcn`
- `jetpack-compose`

## 💡 How Antigravity Uses This Skill

When you request UI/UX work from Antigravity (e.g., "design a landing page", "improve the dashboard", "create a contact form"), Antigravity will:

1. **Analyze your requirements** to extract product type, industry, and style keywords
2. **Generate a design system** using the `--design-system` command
3. **Supplement with detailed searches** for specific elements (colors, fonts, charts, etc.)
4. **Apply stack-specific guidelines** based on your tech stack
5. **Follow the pre-delivery checklist** to ensure professional quality

## 📚 Key Features

### Design System Generator

The flagship feature that analyzes your requirements and generates a complete, tailored design system including:
- Landing page pattern and structure
- UI style with keywords and effects
- Color palette with hex codes
- Typography with Google Fonts links
- Key visual effects
- Anti-patterns to avoid
- Pre-delivery checklist

### Intelligent Search Engine

Uses BM25 ranking combined with regex matching for accurate results. Supports:
- Domain-specific searches
- Stack-specific guidelines
- Auto-detection of search domain
- Reasoning rules for best matches

### Hierarchical Design System

Master + Overrides pattern for managing design consistency:
- Global design rules in `MASTER.md`
- Page-specific overrides in `pages/` folder
- Hierarchical retrieval for building pages

## 🔗 Source Repository

This skill was installed from: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## 📝 Notes

- Python 3.x is required (already verified: Python 3.14.2)
- No external dependencies needed - uses only Python standard library
- All data is stored locally in CSV files for fast searching
- The skill is automatically available to Antigravity through the `.agent/skills/` directory

## 🎉 Next Steps

1. **Try asking Antigravity**: "Help me design the homepage for Vilas Agro"
2. **Explore the skill**: Check out `.agent/skills/ui-ux-pro-max/SKILL.md` for full documentation
3. **Experiment with searches**: Run different queries to see what design recommendations you get
4. **Persist your design system**: Use `--persist` to save design decisions for your project

---

**Installation completed on**: 2026-02-02  
**Installed by**: Antigravity Setup Script  
**Version**: Latest from main branch
