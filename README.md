# SoFi UI Components

A modern React component library built with SoFi's design system. Clean, accessible, and performant components for building financial applications.

**🔗 [View on GitHub](https://github.com/MunishMummadi/SoFi-Components)**

## Features

- **SoFi Design System** - Consistent styling with SoFi's brand colors and gradients
- **Accessible** - Built with accessibility best practices using Radix UI
- **Modern Stack** - React, TypeScript, Tailwind CSS, Next.js
- **Responsive** - Mobile-first design approach
- **Type Safe** - Full TypeScript support

## Installation

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install -D tailwindcss postcss autoprefixer
```

## Quick Start

1. **Configure Tailwind CSS** with SoFi colors in your `tailwind.config.ts`
2. **Add the utility function** to your `lib/utils.ts`
3. **Import and use components** in your React application

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to SoFi UI</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

- **Button** - Multiple variants, sizes, and loading states
- **Typography** - Heading and Text components with SoFi styling
- **Card** - Flexible containers with multiple variants
- **Input** - Form inputs with validation states
- **Badge** - Status indicators and labels
- **Progress** - Visual progress indicators with animations

## Development

```bash
npm run dev
```

Visit the documentation at `http://localhost:3000` to see all components and examples.

## License

[MIT](LICENSE)