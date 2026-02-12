import Link from "next/link"

type ServiceCategory = {
  title: string
  items: { name: string; href: string }[]
}

const services: ServiceCategory[] = [
  {
    title: "مطالعات و خدمات مهندسی ژئوتکنیک",
    items: [
      { name: "تعیین تیپ خاک و ارائه گزارش مهندسی ژئوتکنیک", href: "/services/soil-classification" },
      { name: "مقاوم‌سازی بستر و ارائه انواع سازه‌های نگهبان", href: "/services/ground-improvement" },
      { name: "انجام خدمات راه‌سازی و آسفالت (مارشال، اکسترکشن و …)", href: "/services/road-and-asphalt" }
    ]
  },
  {
    title: "آزمایش‌های صحرایی (In-Situ)",
    items: [
      { name: "آزمایش نفوذ استاندارد (SPT)", href: "/services/spt-test" },
      { name: "برش مستقیم برجا", href: "/services/in-situ-direct-shear" },
      { name: "پلیت لود تست", href: "/services/plate-load-test" }
    ]
  },
  {
    title: "خدمات آزمایشگاهی بتن و فولاد",
    items: [
      { name: "آزمایش کشش میلگرد، پیچ و مهره و بار گواه", href: "/services/rebar-bolt-tensile-test" },
      { name: "آزمایش‌های بتن تازه و سخت‌شده", href: "/services/fresh-hardened-concrete-tests" },
      { name: "آزمایش مقاومت فشاری، کششی، خمشی و …", href: "/services/concrete-strength-tests" },
      { name: "بازرسی سازه‌های بتنی (هافسل، اولتراسونیک، اسکن قطعات بتنی ساخته‌شده)", href: "/services/concrete-structure-inspection" }
    ]
  }
]

export default function page() {
  return (
    <main className="space-y-12">
      <h1 className="text-3xl font-bold">
        خدمات آزمایشگاهی پی‌پویان
      </h1>
      {services.map((category) => (
        <div key={category.title} className="space-y-4">
          <h2 className="text-xl font-bold">{category.title}</h2>
          <ul className="list-disc pr-6 space-y-2">
            {category.items.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
