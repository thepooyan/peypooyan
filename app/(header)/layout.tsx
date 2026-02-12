import Footer from "@/components/footer"
import Header from "@/components/header"
import { ReactNode } from "react"

interface p {
  children: ReactNode
}
const layout = ({children}:p) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-10 container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default layout
