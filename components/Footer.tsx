import Image from "next/image"
import Link from "next/link"
import Logo from "../public/assets/logo.png"
import { Separator } from "./ui/separator"
import { footerlinks } from "@/lib/data"
import { LuPhone } from "react-icons/lu"
import { GoMail } from "react-icons/go"
import { CiFacebook, CiYoutube } from "react-icons/ci"
import { BiLogoGmail } from "react-icons/bi"
import { ImLocation2 } from "react-icons/im"
import Hvac from "../public/assets/HVAC_icon.svg"
import disinfectant_icon from "../public/assets/disinfectant_icon.svg"
import chiller from "../public/assets/chiller_icon.svg"
import refer_car from "../public/assets/refer_car.svg"

const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear()
  return (
    <footer className=" bg-secondary bg-[url('../public/assets/footerwave.svg')] bg-cover bg-no-repeat ">

      <div className="w-full max-w-screen-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-slate-100  flex flex-col flex-wrap   gap-12  md:justify-center">
        <div className="flex  justify-center gap-4 items-center flex-wrap ">
          <Image src={Hvac} alt="Hvac_icon" className="w-20 sm:w-28 shrink" />
          <Image src={disinfectant_icon} alt="disinfectant_icon" className="w-20 sm:w-28 shrink" />
          <Image src={chiller} alt="chiller_machine_icon" className="w-20 sm:w-28 shrink" />
          <Image src={refer_car} alt="refer_car_icon" className="w-20 sm:w-28 shrink" />
        </div>


        <h3 className="text-center text-primary text-xl font-semibold">We keep it clean and cool, so you can focus on what matters</h3>
        <Separator className="hidden md:opacity-20 md:block " />
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            <div className="flex flex-col items-center gap-4">
              <Link href="" className="flex gap-5 items-center">
                <Image src={Logo} alt="MTS_logo" width={90} height={90} />
                <h1 className="text-xl font-extrabold text-slate-50">ኤም ቲ ኤስ</h1>
              </Link>
              <div className="text-center font-medium text-md text-pretty">
                <p>Cooling Maintenance</p>
                <p className="text-primary">&</p>
                <p>Cleaning Service</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <div className="flex gap-4 items-center">
                <ImLocation2 className="text-primary" size={30} />
                <p>Ethiopia, AA, yeka Sub-city, woreda-11, House No-148</p>
              </div>
              <p className="text-primary font-bold text-lg text-center">&</p>
              <div className="flex gap-4 items-center">
                <ImLocation2 className="text-primary" size={30} />
                <p>Kirkos Sub-city, woreda-02, House No-747, Addis Ababa</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold mb-4">Links</h2>
              <ul className="flex flex-col gap-4">
                {footerlinks.map((link) => (
                  <Link href={link.href} key={link.key} className="text-white hover:text-primary">{link.label}</Link>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex flex-col gap-5">
              <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
              <div className="elative flex flex-col max-w-full sm:flex-row gap-4 sm:items-center hover:text-primary">
                <LuPhone className="text-primary" size={20} /> <p>0923423423/60</p>
              </div>
              <div className="elative flex flex-col max-w-full sm:flex-row gap-4 sm:items-center hover:text-primary ">
                <LuPhone className="text-primary" size={20} /> <p>0923423423/60</p>
              </div>
              <Link href="mailto:mtstradingplc@gmail.com" className="relative flex flex-col max-w-full sm:flex-row gap-4 sm:items-center hover:text-primary">
                <GoMail className="text-primary" size={20} />
                <p className=" break-words w-full md:break-normal">mtstradingplc@gmail.com</p>
              </Link>
              <Link href="mailto:mtstradingplc@gmail.com" className="relative flex flex-col max-w-full sm:flex-row gap-4 sm:items-center hover:text-primary">
                <GoMail className="text-primary" size={20} />
                <p className=" break-words w-full md:break-normal">Mtscleaningreport@gmail.com</p>
              </Link>
              <div className="relative  flex flex-col md:flex-row gap-4 sm:items-center">
                <Link href="https://www.facebook.com/Mtstradingplc1" className="text-primary hover:text-white">
                  <CiFacebook size={40} />
                </Link>
                <Link href="https://www.youtube.com/@MTSSocial" className="text-primary hover:text-white">
                  <CiYoutube size={40} />
                </Link>
                <Link href="mailto:mtstradingplc@gmail.com" className="text-primary hover:text-white">
                  <BiLogoGmail size={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full hidden lg:flex gap-12 items-center justify-center   opacity-100 ">
          <Separator className="w-1/3 " />
          <Separator className="w-1/4" />
        </div>


        <div className="text-sm text-slate-100 flex sm:flex-row flex-col gap-4 justify-between opacity-80">
          <p>&copy; {currentYear} MTS Cooling Maintenance and Cleaning Service</p>
          <div>
            <p className="break-words">Powered by Kns trading</p>
            <p className="break-words">0911118097</p>
          </div>
        </div>

      </div>
    </footer>

  )
}

export default Footer