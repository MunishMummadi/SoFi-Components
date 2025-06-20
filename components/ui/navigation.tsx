"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

interface NavigationProps {
  items: NavigationItem[]
  logo?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(({ items, logo, actions, className }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {logo || (
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg sofi-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl sofi-gradient-text">SoFi</span>
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item, index) => (
            <NavigationItem key={index} item={item} />
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {actions || (
            <>
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {items.map((item, index) => (
              <MobileNavigationItem key={index} item={item} />
            ))}
            <div className="pt-4 border-t space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
})
Navigation.displayName = "Navigation"

const NavigationItem: React.FC<{ item: NavigationItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.children) {
    return (
      <div className="relative group">
        <button
          className="flex items-center space-x-1 text-sm font-medium text-sofi-gray-700 hover:text-sofi-teal-600 transition-colors"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <span>{item.label}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        {isOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-48 bg-white border border-sofi-gray-200 rounded-lg shadow-sofi-lg z-50"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="py-2">
              {item.children.map((child, index) => (
                <Link
                  key={index}
                  href={child.href}
                  className="block px-3 py-2 text-sm text-sofi-gray-700 hover:text-sofi-teal-600 hover:bg-sofi-teal-50 rounded-md transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className="text-sm font-medium text-sofi-gray-700 hover:text-sofi-teal-600 transition-colors"
    >
      {item.label}
    </Link>
  )
}

const MobileNavigationItem: React.FC<{ item: NavigationItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.children) {
    return (
      <div>
        <button
          className="flex items-center justify-between w-full text-left text-sm font-medium text-sofi-gray-700 hover:text-sofi-teal-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{item.label}</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        </button>
        {isOpen && (
          <div className="mt-2 ml-4 space-y-2">
            {item.children.map((child, index) => (
              <Link
                key={index}
                href={child.href}
                className="block text-sm text-sofi-gray-600 hover:text-sofi-teal-600 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className="block text-sm font-medium text-sofi-gray-700 hover:text-sofi-teal-600 transition-colors"
    >
      {item.label}
    </Link>
  )
}

export { Navigation, type NavigationItem }
