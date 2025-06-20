"use client"

import * as React from "react"
import { ArrowRight, CreditCard, Download, Github, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heading, Text } from "@/components/ui/typography"
import { ComponentShowcase } from "@/components/component-showcase"
import { SidebarNav } from "@/components/sidebar-nav"
import { CodeBlock } from "@/components/code-block"

const sidebarNavItems = [
  {
    title: "Getting Started",
    href: "#getting-started",
  },
  {
    title: "Installation",
    href: "#installation",
  },
  {
    title: "Components",
    href: "#components",
    items: [
      { title: "Button", href: "#button" },
      { title: "Typography", href: "#typography" },
      { title: "Card", href: "#card" },
      { title: "Input", href: "#input" },
      { title: "Badge", href: "#badge" },
      { title: "Progress", href: "#progress" },
    ],
  },
  {
    title: "Examples",
    href: "#examples",
  },
]

export default function ComponentLibraryDocs() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg sofi-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl sofi-gradient-text">SoFi UI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.open('https://github.com/MunishMummadi/SoFi-Components', '_blank', 'noopener,noreferrer')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div className="container flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-8">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-8 pl-8">
          {/* Hero Section */}
          <section id="getting-started" className="mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Zap className="w-4 h-4 mr-2" />
                  Component Library
                </Badge>
                <Heading variant="h1" color="gradient">
                  SoFi UI Components
                </Heading>
                <Text variant="lead" className="text-sofi-gray-600 max-w-2xl">
                  A comprehensive React component library built with SoFi's design system. Modern, accessible, and
                  performant components for building financial applications.
                </Text>
              </div>

              <div className="flex gap-4">
                <Button size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Components
                </Button>
              </div>
            </div>
          </section>

          {/* Installation */}
          <section id="installation" className="mb-16">
            <div className="space-y-6">
              <div>
                <Heading variant="h2" className="mb-4">
                  Installation
                </Heading>
                <Text className="text-sofi-gray-600 mb-6">
                  Get started with SoFi UI by installing the required dependencies and setting up your project.
                </Text>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Install Dependencies</h3>
                  <CodeBlock
                    code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install -D tailwindcss postcss autoprefixer`}
                    language="bash"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Configure Tailwind CSS</h3>
                  <CodeBlock
                    code={`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sofi: {
          teal: {
            400: "#0ea5e9",
            500: "#00A2C7", // EXACT SoFi primary turquoise
            600: "#006B87", // EXACT SoFi button color
            700: "#0c4a6e",
          },
          blue: {
            600: "#006B87", // Same as button color
          },
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            // ... more colors
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

export default config`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Add Utility Function</h3>
                  <CodeBlock
                    code={`// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Components */}
          <section id="components" className="mb-16">
            <div className="space-y-16">
              <div>
                <Heading variant="h2" className="mb-4">
                  Components
                </Heading>
                <Text className="text-sofi-gray-600">
                  Explore our collection of reusable UI components built with accessibility and performance in mind.
                </Text>
              </div>

              {/* Button Component */}
              <div id="button">
                <ComponentShowcase
                  title="Button"
                  description="Versatile button component with multiple variants, sizes, and states including loading state."
                  preview={
                    <div className="flex flex-wrap gap-4">
                      <Button>Default</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button loading>Loading</Button>
                    </div>
                  }
                  code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button loading>Loading</Button>
    </div>
  )
}`}
                  usage={`// Available variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="success">Success</Button>

// Available sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon</Button>

// With loading state
<Button loading>Loading...</Button>

// As child component
<Button asChild>
  <Link href="/dashboard">Dashboard</Link>
</Button>`}
                />
              </div>

              {/* Typography Component */}
              <div id="typography">
                <ComponentShowcase
                  title="Typography"
                  description="Consistent typography components with SoFi's design system including headings and text variants."
                  preview={
                    <div className="space-y-4 text-left">
                      <Heading variant="h3" color="gradient">
                        Gradient Heading
                      </Heading>
                      <Heading variant="h4">Regular Heading</Heading>
                      <Text variant="lead">This is lead text for important content.</Text>
                      <Text>This is regular body text with good readability.</Text>
                      <Text variant="muted">This is muted text for secondary information.</Text>
                    </div>
                  }
                  code={`import { Heading, Text } from "@/components/ui/typography"

export function TypographyDemo() {
  return (
    <div className="space-y-4">
      <Heading variant="h1" color="gradient">
        Main Heading
      </Heading>
      <Heading variant="h2">
        Section Heading
      </Heading>
      <Text variant="lead">
        Lead paragraph text for important content.
      </Text>
      <Text>
        Regular body text with good readability.
      </Text>
      <Text variant="muted">
        Muted text for secondary information.
      </Text>
    </div>
  )
}`}
                  usage={`// Heading variants
<Heading variant="h1">Display 2XL</Heading>
<Heading variant="h2">Display XL</Heading>
<Heading variant="h3">Display LG</Heading>
<Heading variant="h4">Display MD</Heading>
<Heading variant="h5">Display SM</Heading>
<Heading variant="h6">Display XS</Heading>

// Heading colors
<Heading color="default">Default Color</Heading>
<Heading color="gradient">Gradient Color</Heading>
<Heading color="muted">Muted Color</Heading>

// Text variants
<Text variant="body">Body text</Text>
<Text variant="lead">Lead text</Text>
<Text variant="large">Large text</Text>
<Text variant="small">Small text</Text>
<Text variant="muted">Muted text</Text>

// Custom HTML elements
<Heading as="h1" variant="h3">H1 with H3 styling</Heading>
<Text as="span">Inline text</Text>`}
                />
              </div>

              {/* Card Component */}
              <div id="card">
                <ComponentShowcase
                  title="Card"
                  description="Flexible card component with multiple variants and built-in sections for structured content."
                  preview={
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                      <Card>
                        <CardHeader>
                          <CardTitle>Default Card</CardTitle>
                          <CardDescription>Standard card with subtle shadow</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-sofi-gray-600">Card content goes here.</p>
                        </CardContent>
                      </Card>
                      <Card variant="elevated">
                        <CardHeader>
                          <CardTitle>Elevated Card</CardTitle>
                          <CardDescription>Card with enhanced shadow</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-sofi-gray-600">Elevated card content.</p>
                        </CardContent>
                      </Card>
                    </div>
                  }
                  code={`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description provides additional context.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your card content goes here.</p>
      </CardContent>
    </Card>
  )
}`}
                  usage={`// Card variants
<Card variant="default">Default card</Card>
<Card variant="elevated">Elevated card</Card>
<Card variant="outline">Outlined card</Card>
<Card variant="gradient">Gradient card</Card>

// Complete card structure
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content area
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                />
              </div>

              {/* Input Component */}
              <div id="input">
                <ComponentShowcase
                  title="Input"
                  description="Form input component with validation states and consistent styling across different sizes."
                  preview={
                    <div className="space-y-4 w-full max-w-sm">
                      <Input placeholder="Default input" />
                      <Input placeholder="Large input" className="h-12 px-4 text-base" />
                      <Input placeholder="Error state" variant="error" />
                      <Input placeholder="Success state" variant="success" />
                    </div>
                  }
                  code={`import { Input } from "@/components/ui/input"

export function InputDemo() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your email" />
      <Input 
        type="password" 
        placeholder="Enter your password" 
      />
      <Input 
        variant="error" 
        placeholder="Error state" 
      />
    </div>
  )
}`}
                  usage={`// Input variants
<Input variant="default" placeholder="Default" />
<Input variant="error" placeholder="Error state" />
<Input variant="success" placeholder="Success state" />

// Input sizes (using className)
<Input className="h-8 px-2 text-sm" placeholder="Small" />
<Input placeholder="Default" />
<Input className="h-12 px-4 text-base" placeholder="Large" />

// Input types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />
<Input type="tel" placeholder="Phone" />

// With form integration
<form>
  <label htmlFor="email">Email</label>
  <Input id="email" type="email" required />
</form>`}
                />
              </div>

              {/* Badge Component */}
              <div id="badge">
                <ComponentShowcase
                  title="Badge"
                  description="Small status indicators and labels with multiple variants and sizes for different use cases."
                  preview={
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="destructive">Error</Badge>
                    </div>
                  }
                  code={`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  )
}`}
                  usage={`// Badge variants
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>

// Badge sizes
<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>

// With icons
<Badge>
  <CheckIcon className="w-3 h-3 mr-1" />
  Verified
</Badge>`}
                />
              </div>

              {/* Progress Component */}
              <div id="progress">
                <ComponentShowcase
                  title="Progress"
                  description="Visual progress indicator with smooth animations and SoFi's gradient styling."
                  preview={
                    <div className="space-y-4 w-full max-w-sm">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Complete</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} />
                      </div>
                    </div>
                  }
                  code={`import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
    </div>
  )
}`}
                  usage={`// Basic progress
<Progress value={50} />

// With custom styling
<Progress value={75} className="h-3" />

// Indeterminate progress
<Progress />

// With labels
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Upload progress</span>
    <span>75%</span>
  </div>
  <Progress value={75} />
</div>`}
                />
              </div>
            </div>
          </section>

          {/* Examples */}
          <section id="examples" className="mb-16">
            <div className="space-y-8">
              <div>
                <Heading variant="h2" className="mb-4">
                  Real-world Examples
                </Heading>
                <Text className="text-sofi-gray-600">
                  See how to combine components to create common UI patterns used in financial applications.
                </Text>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Account Summary Card</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card variant="elevated">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Checking Account
                          </CardTitle>
                          <Badge variant="success">Active</Badge>
                        </div>
                        <CardDescription>Primary checking account</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Text variant="muted">Available Balance</Text>
                          <Heading variant="h4">$12,456.78</Heading>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Monthly Goal</span>
                            <span>$15,000</span>
                          </div>
                          <Progress value={83} />
                        </div>
                      </CardContent>
                    </Card>

                    <CodeBlock
                      code={`<Card variant="elevated">
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle className="flex items-center gap-2">
        <CreditCard className="h-5 w-5" />
        Checking Account
      </CardTitle>
      <Badge variant="success">Active</Badge>
    </div>
    <CardDescription>Primary checking account</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex justify-between items-center">
      <Text variant="muted">Available Balance</Text>
      <Heading variant="h4">$12,456.78</Heading>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Monthly Goal</span>
        <span>$15,000</span>
      </div>
      <Progress value={83} />
    </div>
  </CardContent>
</Card>`}
                      language="tsx"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Sign Up Form</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>Join SoFi to start your financial journey</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="First name" />
                          <Input placeholder="Last name" />
                        </div>
                        <Input type="email" placeholder="Email address" />
                        <Input type="password" placeholder="Password" />
                        <Button className="w-full">Create Account</Button>
                      </CardContent>
                    </Card>

                    <CodeBlock
                      code={`<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>
      Join SoFi to start your financial journey
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
    </div>
    <Input type="email" placeholder="Email address" />
    <Input type="password" placeholder="Password" />
    <Button className="w-full">Create Account</Button>
  </CardContent>
</Card>`}
                      language="tsx"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
