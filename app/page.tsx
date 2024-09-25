import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MainAboutUs from "@/components/MainAboutUs";
import MainProjects from "@/components/MainProjects";
import OurserviceGrid from "@/components/OurserviceGrid";
import Partners from "@/components/Partners_scroll";
import Testimonials from "@/components/Testimonials";
import { TypewriterEffectSmooth } from "@/components/ui/TextReveal";
import { featuredServices } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import repare from "../public/assets/cooling_repair_maintenance.png"
import bgi from "../public/assets/bgi_logo.png"


const words = [
  {
    text: "Welcome to",
    className: "text-extrabold text-gray-600   text-xl lg:text-5xl"




  },
  {
    text: "MTS",
    className: "text-primary font-extrabold text-xl lg:text-5xl"

  },
  {
    text: "Trading",
    className: "text-extrabold text-gray-600   text-xl lg:text-5xl"



  },
  {
    text: "PLC",
    className: "text-extrabold text-gray-600   text-xl lg:text-5xl"

  }
];

export default function Home() {

  return (
    <main className="flex flex-col gap-10 ">
      <Hero />
      <div>
        <div className="py-16 px-5 lg:px-20 max-w-screen-xl mx-auto relative  z-10 flex flex-col justify-center align-middle items-center ">
          <TypewriterEffectSmooth words={words} className="" cursorClassName="bg-transparent" />
          <div className='flex flex-col gap-8 justify-center items-center p-4  bg-slate-100'>
            <h3 className='text-md font-semibold text-primary'>Feature services</h3>
            <h1 className='text-2xl md:text-3xl font-extrabold text-gray-600 text-center '> A Wide Range of Cooling and cleaning services</h1>
            <div className='relative z-10 w-full flex flex-col gap-5 justify-center items-center'>
              <OurserviceGrid ourServicesItems={featuredServices} />
              <Link href={"/services"} className='bg-primary p-4 text-md font-semibold text-white rounded-md'>More Services</Link>
            </div>
          </div>
        </div>
      </div>
      <MainAboutUs />
      <div className="">
        <div className="max-w-screen mx-auto bg-slate-200 text-white flex  flex-col md:flex-row justify-center items-center px-1 md:px-5 lg:px-10 ">
          <Image src={repare} alt="repaire" width={800} height={800} className="w-full h-full" />
          <div className="flex flex-col gap-2 w-full">
            <h1 className='text-2xl md:text-3xl font-extrabold text-gray-600 text-center '> Wherever You Bought It,<br /> We Can <span className="text-primary"> Install</span> and <span className="text-primary"> Fix It!</span></h1>
            <p className="text-center text-md text-gray-500 ">From expert installation to reliable repairs, trust us to handle your cooling and cleaning systems—no matter where they came from!</p>
          </div>
        </div>
      </div>
      <MainProjects />
      <div>
        <div className="max-w-screen-xl mx-auto bg-slate-200 text-white flex  flex-col md:flex-row justify-center items-center px-1 md:px-5 lg:px-10 ">
          <Image src={bgi} alt="repaire" width={800} height={800} className="w-full h-full" />
          <div className="flex flex-col gap-2 w-full">
            <h1 className='text-2xl md:text-3xl font-extrabold text-gray-600 text-center '>
              Exclusive Draft beer line cleaning agent for <span className='text-primary'>BGI Ethiopia</span> </h1>
            <p className="text-center text-md text-gray-500 ">Our exclusive draft beer line cleaning agent ensures optimal hygiene and taste, maintaining the quality BGI Ethiopia is renowned for</p>
          </div>
        </div>
      </div>
      <Partners />
      <Testimonials />
      <Contact />

    </main>
  );
}
