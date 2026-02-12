import { Phone, PhoneCall } from "lucide-react"

const contactus = () => {
  return (
    <main className="p-5">
      <h1 className="text-2xl font-bold">تماس باما</h1>
      <p className="grid grid-cols-3 gap-5 mt-5">
        <span>
          <Phone/>
          تلفن ثابت: 1122334455
        </span>
        <span>
          <PhoneCall/>
          تلفن همراه: 1122334455
        </span>
        <span>
          بله / ایتا همراه: 1122334455
        </span>
        <span>
          واتساپ همراه: 1122334455
        </span>
        <span>
          ایمیل: a@gmail.com
        </span>
        <span>
          کد پستی: 111223344434
        </span>
        <span>
          آدرس در گوگل مپس
        </span>
        <span>
          فکس
        </span>
        <span>
          نشانی دفتر: دامغان، میدان شاهچراغی
        </span>
      </p>

    </main>
  )
}

export default contactus
