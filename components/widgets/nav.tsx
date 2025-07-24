"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNav } from "@/constants/routes"
import { IconMenu, IconX } from "@tabler/icons-react"

import { Icons } from "@/config/icons"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/widgets/theme-toggle"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 right-0 left-0 z-50 h-20 w-dvw border-b backdrop-blur">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center space-x-2 rounded-md"
          aria-label="Go to homepage"
        >
          <Icons.next className="h-5 w-25" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-4 md:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {mainNav.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-button-14 hover:text-foreground/80 rounded-md px-3 py-2 transition-colors ${
                isActiveLink(route.href)
                  ? "text-foreground underline underline-offset-4"
                  : "text-foreground/60"
              }`}
              aria-current={isActiveLink(route.href) ? "page" : undefined}
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle className="md:hidden" />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IconX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <IconMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={`border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 border-t backdrop-blur transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "visible max-h-64 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container mx-auto space-y-2 px-4 py-4">
          {mainNav.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-button-14 hover:bg-accent hover:text-foreground/80 focus:ring-ring block rounded-md px-3 py-2 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none ${
                isActiveLink(route.href)
                  ? "bg-accent text-foreground"
                  : "text-foreground/60"
              }`}
              aria-current={isActiveLink(route.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
