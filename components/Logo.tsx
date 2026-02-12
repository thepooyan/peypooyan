import Image from "next/image"

const Logo = () => {
  const size = 100;
  return (
    <div className="flex items-center gap-5">
      <Image src="/logo.webp" alt="peypooyan's logo" width={size} height={size}/>
      <h1>پی‌پویان</h1>
    </div>
  )
}

export default Logo
