export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="space-y-8 text-center md:text-right">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            آزمایشگاه خاک و بتن
            <span className="text-primary"> پی پویان</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
            دارای پروانه اشتغال رسمی از وزارت راه و شهرسازی
          </p>
        </div>

        <div className="pt-6">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            شروع کنید
          </button>
        </div>
      </div>
    </section>
  )
}
