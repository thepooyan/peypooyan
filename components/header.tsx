import Link from "next/link"
import LogoWithText from "./LogoWithText"

export default function Header() {

  const headerLinks = [
    {label: "خدمات", href: "services"},
    {label: "تماس", href: "contact-us"},
    {label: "چارت سازمانی", href: "organization-chart"},
  ]
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container px-6 py-2 flex items-center justify-between">
        <LogoWithText/>

        <nav className="hidden md:flex items-center gap-8">
          {headerLinks.map(h => 
          <Link
              href={h.href}
              className="text-sm font-semibold hover:underline text-accent-foreground hover:text-foreground transition-colors"
              key={h.label}
            >
              {h.label}
          </Link>)}
        </nav>
      </div>
    </header>
  )
}
