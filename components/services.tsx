const services = [
  {
    title: "آزمایش خاک",
    description: "آزمایش های تخصصی برای تعیین خصوصیات فیزیکی و مکانیکی خاک",
  },
  {
    title: "تحلیل بتن",
    description: "بررسی کیفیت و مقاومت بتن در ساخت و ساز",
  },
  {
    title: "مشاوره ژئوتکنیکی",
    description: "راهنمایی تخصصی برای پروژه های عمرانی",
  },
  {
    title: "آزمایش ضخامت پوشش",
    description: "اندازه گیری دقیق ضخامت طبقات پوشش",
  },
  {
    title: "سایش و مقاومت",
    description: "تعیین مقاومت مصالح در برابر سایش و فرسایش",
  },
  {
    title: "گزارش تخصصی",
    description: "ارائه گزارش های دقیق و معتبر بین المللی",
  },
]

export default function Services() {
  return (
    <section className="container">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center md:text-right space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">خدمات ما</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            خدمات جامع و تخصصی در زمینه آزمایش خاک و مصالح ساختمانی
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              {/* Service Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-primary/30 text-4xl">
                  {index === 0 && "⚙️"}
                  {index === 1 && "🧪"}
                  {index === 2 && "📋"}
                  {index === 3 && "📐"}
                  {index === 4 && "🔬"}
                  {index === 5 && "📊"}
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              {/* Hover Action */}
              <div className="pt-4 mt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-sm text-primary hover:underline font-medium">
                  اطلاعات بیشتر ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
