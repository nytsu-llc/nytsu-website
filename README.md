# Nytsu Labs Website

A modern, responsive website for Nytsu Labs built with React, TypeScript, Tailwind CSS, Framer Motion, and react-i18next.

## Features

- **Monochrome Design**: Black, white, and gray color palette with color appearing only in project images
- **Internationalization**: Full support for English and Spanish
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessible**: High contrast, clear hierarchy, WCAG compliant

## Tech Stack

- React 18 with Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- react-i18next
- React Hook Form

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

2. Start the development server:
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build

```bash
# Using pnpm
pnpm build

# Or using npm
npm run build
```

### Preview Production Build

```bash
# Using pnpm
pnpm preview

# Or using npm
npm run preview
```

## Project Structure

```
nytsu-website/
├── src/
│   ├── components/     # React components
│   ├── i18n/         # Internationalization config and translations
│   ├── data/         # Project data
│   ├── types/        # TypeScript type definitions
│   └── App.tsx       # Main app component
├── public/
│   └── images/       # Image assets
└── package.json
```

## Design System

### Colors
- **Black**: `#000000` - Primary text, borders, accents
- **White**: `#FFFFFF` - Backgrounds
- **Grays**: `#F7F7F7`, `#E5E5E5`, `#CCCCCC`, `#666666`

### Typography
- **Font**: Montserrat (sans-serif)

### Spacing
- Uses Tailwind's rem-based spacing scale
- Generous padding and margins for spacious layout

## Development

The project uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Tailwind CSS** for styling (utility classes only)
- **Framer Motion** for animations
- **react-i18next** for translations

## License

© 2025 Nytsu Labs. All rights reserved.
