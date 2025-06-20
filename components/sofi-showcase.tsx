"use client"

import * as React from "react"
import { ArrowRight, CreditCard, PiggyBank, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/ui/navigation"
import { Form, FormField, FormLabel, FormDescription } from "@/components/ui/form"
import { Heading, Text } from "@/components/ui/typography"

const navigationItems = [
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Personal Loans", href: "#" },
      { label: "Student Loans", href: "#" },
      { label: "Mortgages", href: "#" },
      { label: "Credit Cards", href: "#" },
    ],
  },
  { label: "Invest", href: "#" },
  { label: "Bank", href: "#" },
  { label: "Insurance", href: "#" },
  { label: "Learn", href: "#" },
]

export default function SoFiShowcase() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sofi-purple-50 via-white to-sofi-blue-50">
      {/* Navigation */}
      <Navigation items={navigationItems} />

      {/* Hero Section */}
      <section className="container py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <Badge variant="outline" size="lg">
            <Zap className="w-4 h-4 mr-2" />
            New: SoFi Plus membership now available
          </Badge>

          <Heading variant="h1" color="gradient" className="max-w-3xl mx-auto">
            Get your money right with SoFi
          </Heading>

          <Text variant="lead" className="max-w-2xl mx-auto text-sofi-gray-600">
            From loans and banking to investing and insurance, SoFi helps you reach your financial goals faster.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Heading variant="h2">Everything you need to get ahead</Heading>
          <Text variant="large" className="text-sofi-gray-600 max-w-2xl mx-auto">
            Comprehensive financial products designed to help you save money and reach your goals faster.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg sofi-gradient flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Personal Loans</CardTitle>
              <CardDescription>Get a personal loan with competitive rates and no fees.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-sofi-gray-600">APR as low as</span>
                  <span className="font-semibold">8.99%</span>
                </div>
                <Progress value={progress} className="h-3" />
                <Text variant="small" className="text-sofi-gray-500">
                  Check your rate in 2 minutes
                </Text>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg sofi-gradient flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Invest</CardTitle>
              <CardDescription>Start investing with automated or self-directed portfolios.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-sofi-gray-600">Management fee</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sofi-gray-600">Account minimum</span>
                  <span className="font-semibold">$1</span>
                </div>
                <Badge variant="success" size="sm">
                  No advisory fees
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Start Investing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" className="group hover:scale-105 transition-transform duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg sofi-gradient flex items-center justify-center mb-4">
                <PiggyBank className="h-6 w-6 text-white" />
              </div>
              <CardTitle>SoFi Checking</CardTitle>
              <CardDescription>Earn cashback rewards and pay no account fees.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-sofi-gray-600">APY</span>
                  <span className="font-semibold">4.60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sofi-gray-600">Monthly fees</span>
                  <span className="font-semibold">$0</span>
                </div>
                <Badge variant="outline" size="sm">
                  FDIC Insured
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group">
                Open Account
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card variant="gradient" className="text-center">
          <CardHeader className="pb-8">
            <Heading variant="h2" className="text-white">
              Ready to get your money right?
            </Heading>
            <Text variant="large" className="text-white/90 max-w-2xl mx-auto">
              Join over 6 million members who trust SoFi to help them reach their financial goals.
            </Text>
          </CardHeader>
          <CardContent>
            <Form className="max-w-md mx-auto">
              <FormField>
                <FormLabel className="text-white/90">Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                />
                <FormDescription className="text-white/70">
                  We'll send you information about getting started.
                </FormDescription>
              </FormField>
            </Form>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-sofi-purple-600 hover:bg-white/90">
              Get Started Today
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <Heading variant="h3" color="gradient">
              $50B+
            </Heading>
            <Text variant="large" className="text-sofi-gray-600">
              Funded in loans
            </Text>
          </div>
          <div className="space-y-2">
            <Heading variant="h3" color="gradient">
              6M+
            </Heading>
            <Text variant="large" className="text-sofi-gray-600">
              Members
            </Text>
          </div>
          <div className="space-y-2">
            <Heading variant="h3" color="gradient">
              4.8★
            </Heading>
            <Text variant="large" className="text-sofi-gray-600">
              App Store rating
            </Text>
          </div>
        </div>
      </section>
    </div>
  )
}
