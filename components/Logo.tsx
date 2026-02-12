import Image from "next/image"
import Link from "next/link";

const Logo = () => {
  const size = 100;
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image src="/logo.webp" alt="peypooyan's logo" width={size} height={size}/>
      <p
        className="text-primary font-bold text-xl"
      >آزمایشگاه پی‌پویان
      </p>
    </Link>
  )
}

export default Logo
