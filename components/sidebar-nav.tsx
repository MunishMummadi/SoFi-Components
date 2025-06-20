"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarNavItem {
  title: string
  href: string
  items?: SidebarNavItem[]
}

interface SidebarNavProps {
  items: SidebarNavItem[]
  className?: string
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={cn("space-y-2", className)}>
      {items.map((item) => (
        <div key={item.href}>
          <Link
            href={item.href}
            className={cn(
              "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
              activeSection === item.href.slice(1)
                ? "bg-sofi-teal-100 text-sofi-teal-700"
                : "text-sofi-gray-600 hover:text-sofi-gray-900 hover:bg-sofi-gray-100",
            )}
          >
            {item.title}
          </Link>
          {item.items && (
            <div className="ml-4 mt-2 space-y-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "block px-3 py-1 text-sm rounded-md transition-colors",
                    activeSection === subItem.href.slice(1)
                      ? "bg-sofi-teal-50 text-sofi-teal-600"
                      : "text-sofi-gray-500 hover:text-sofi-gray-700 hover:bg-sofi-gray-50",
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
