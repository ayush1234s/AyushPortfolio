"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Code2, Github, Linkedin, Instagram, Mail, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
}: {
  className?: string
  iconClassName?: string
}) {
  // Replace these with your real profiles
  const links = [
    { href: "https://github.com/ayush1234s", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
    { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
    { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
  ]
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  )
}

export default function SiteHeader({
  showBorder = true,
}: {
  showBorder?: boolean
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
        showBorder ? "border-b border-neutral-200" : ""
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          {/* Left: Logo + Name */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Go to home">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-neutral-900 group-hover:opacity-90">
              Ayush Srivastava
            </span>
          </Link>

          {/* Middle: Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right: Socials */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open ? (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      active ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <div className="mt-3 border-t pt-3">
              <SocialLinks iconClassName="h-6 w-6" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
