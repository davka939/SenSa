/*login */
import Image from "next/image"
import "../../styles/login.css"

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left side with background image */}
      <div className="relative hidden md:flex md:w-1/2 bg-[#1e2756]">
        <div className="absolute inset-0 bg-[#1e2756]/80 z-10"></div>
        <Image
          src="/images/doctor-background.jpg"
          alt="Healthcare professional"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="relative z-20 flex flex-col justify-center items-center w-full text-white p-8">
          <button className="absolute top-10 left-10 bg-white/10 text-white py-2 px-6 rounded-full backdrop-blur-sm">
            Нэвтрэх
          </button>
          <div className="absolute bottom-20 left-10">
            <h2 className="text-xl font-medium">Бүртгүүлэх</h2>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-10">
            <Image src="/images/sensa-logo.svg" alt="SenSa Logo" width={180} height={60} priority />
          </div>
        </div>
      </div>
    </main>
  )
}

