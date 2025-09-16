# CLAUDE.md

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (build errors ignored in config)

**Note**: The project uses pnpm as the package manager (evidenced by pnpm-lock.yaml).

## Architecture Overview

This is a Next.js 15 application for ProfessionalStay, a property management solutions website. The architecture follows modern React patterns with TypeScript and uses a component-driven approach.

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Theme**: Dark mode support via next-themes
- **Forms**: React Hook Form with Zod validation
- **Development**: Nix flake-based development environment
- **Package Manager**: pnpm

### Key Architectural Patterns

1. **Component Organization**:
   - `components/ui/` - Reusable shadcn/ui components (buttons, forms, etc.)
   - `components/` - Business logic components (hero, nav, contact-form, etc.)
   - `hooks/` - Custom React hooks (use-mobile, use-toast)
   - `lib/` - Utility functions
   - `utils/` - Additional utilities (smoothScroll)

2. **App Router Structure**:
   - `app/page.tsx` - Homepage
   - `app/properties/page.tsx` - Properties listing
   - `app/services/page.tsx` - Services page
   - `app/layout.tsx` - Root layout with theme provider and navigation

3. **Styling System**:
   - CSS custom properties for theme variables
   - Tailwind config with extended color palette using HSL variables
   - shadcn/ui component system with consistent design tokens

4. **Nix Development Environment**:
   - Flake-based setup with custom library imports
   - Git hooks integration for code quality
   - Automated CI/CD with sitemap generation

### Component Library Integration

The project uses shadcn/ui extensively. Components are configured via `components.json` with:

- Path aliases (`@/components`, `@/lib`, `@/hooks`)
- Lucide React for icons
- CSS variables for theming
- RSC (React Server Components) enabled

### Build Configuration

- **Next.js**: ESLint and TypeScript errors ignored during builds (development-focused)
- **Images**: Unoptimized (likely for static deployment)
- **TypeScript**: Strict mode with path mapping (`@/*` points to root)

### Development Workflow

The project uses a sophisticated Nix-based development environment with:

- Flake parts for modular configuration
- Pre-commit hooks via git-hooks.nix
- Automated formatting with treefmt-nix
- GitHub Actions integration for checks and sitemap generation

When working with this codebase:

1. Use existing shadcn/ui components when possible
2. Follow the established path alias patterns (`@/components`, `@/lib`, etc.)
3. Maintain the dark theme-first approach
4. Leverage React Hook Form + Zod for forms
5. Use the custom hooks for mobile detection and toast notifications
