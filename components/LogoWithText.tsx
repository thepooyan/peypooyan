import Logo from "@/components/Logo";

const LogoWithText = () => {
  return (
    <Logo>
      <div className="space-y-1">
        <p className="text-primary font-bold text-xl">
          آزمایشگاه پی‌پویان
        </p>
        <p className="text-xs text-muted-foreground">
          دارای پروانه اشتغال رسمی از وزارت راه و شهرسازی
        </p>
      </div>
    </Logo>
  )
}

export default LogoWithText
