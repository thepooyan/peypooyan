import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Logo/>
              <span className="font-semibold">پی پویان</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              آزمایشگاه متخصص در آزمایش خاک و بتن با تجربه و تکنولوژی روز
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">خدمات</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  آزمایش خاک
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  تحلیل بتن
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  مشاوره
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">شرکت</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  گالری
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  اخبار
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">تماس</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href="tel:+989121234567" className="hover:text-foreground transition-colors">
                  ۰۹۱۲ ۱۲۳ ۴۵۶۷
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href="mailto:info@peypoyan.ir" className="hover:text-foreground transition-colors">
                  info@peypoyan.ir
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© ۱۴۰۳ آزمایشگاه خاک و بتن پی پویان. تمام حقوق محفوظ است.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              درباره
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              شرایط
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
