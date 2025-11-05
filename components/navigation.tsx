"use client"

import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            SKF TECHNOLOGIES
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 hover:bg-card rounded-lg transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 hover:bg-card rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-2 hover:bg-card rounded-lg transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 hover:bg-card rounded-lg transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
