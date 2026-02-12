import Link from "next/link"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo Placeholder */}
        <Logo/>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            خدمات
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            درباره ما
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            مقالات
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            تماس
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          درخواست خدمت
        </button>
      </div>
    </header>
  )
}
