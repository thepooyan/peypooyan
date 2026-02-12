import Image from "next/image"
import Link from "next/link";

const Logo = () => {
  const size = 128;
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image src="/logo.webp" alt="peypooyan's logo" width={size} height={size} 
        className="w-18"
      />
      <div className="space-y-1">
        <p className="text-primary font-bold text-xl">
          آزمایشگاه پی‌پویان
        </p>
        <p className="text-xs text-muted-foreground">
          دارای پروانه اشتغال رسمی از وزارت راه و شهرسازی
        </p>
      </div>
    </Link>
  )
}

export default Logo
