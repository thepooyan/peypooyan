import Image from "next/image"

const Logo = () => {
  const size = 100;
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.webp" alt="peypooyan's logo" width={size} height={size}/>
      <h1
        className="text-primary font-bold text-xl"
      >آزمایشگاه پی‌پویان
      </h1>
    </div>
  )
}

export default Logo
