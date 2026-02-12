import Image from "next/image"
import Link from "next/link";
import { ReactNode } from "react";

interface p {
  children?: ReactNode
}
const Logo = ({children}:p) => {
  const size = 128;
  return (
    <Link className="flex items-center gap-2" href="/">
      <Image src="/logo.webp" alt="peypooyan's logo" width={size} height={size} 
        className="w-18"
      />
      {children}
    </Link>
  )
}

export default Logo
