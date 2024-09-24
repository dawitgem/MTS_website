import PageHero from '@/components/PageHero';
import ServicesSideBar from '@/components/ServicesSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"

const coldRoomReeferServices = [
  {
    title: "Custom Cold Room Design",
    desc: "Tailored cold room designs based on specific temperature, storage, and energy efficiency requirements."
  },
  {
    title: "Precise Temperature Control",
    desc: "Ensures accurate temperature regulation for optimal storage conditions of sensitive products."
  },
  {
    title: "Insulation and Humidity Management",
    desc: "Expert installation of insulation and humidity control to maintain ideal environmental conditions."
  },
  {
    title: "Reefer Vehicle Refrigeration",
    desc: "Mobile refrigeration systems designed for reliable and efficient transport of temperature-sensitive goods."
  },
  {
    title: "Comprehensive Equipment Inspection",
    desc: "Regular inspections to identify potential issues, wear, or malfunctioning components."
  },
  {
    title: "Thorough Cleaning",
    desc: "Hygienic cleaning of cold rooms and reefer units to ensure a contaminant-free environment."
  },
  {
    title: "Prompt Repairs",
    desc: "Fast and efficient repairs using high-quality replacement parts to minimize system downtime."
  },
  {
    title: "Component Replacement",
    desc: "Replacement of damaged or worn-out components to maintain reliability and peak performance."
  }
];




const Page = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* Page Hero */}
      <PageHero
        img="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Cold-Room-Service-00.jpg"
        page="services"
        title="Cold Room and Reefer Vehicle Installation and Maintenance"
      />
      {/* Main Content */}
      <div className="w-full p-5 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-5 p-4 w-full">
          {/* Section: Draft-Beer Line Cleaning Service */}
          <section className='w-full flex flex-col gap-10'>
            <h1 className="text-3xl font-extrabold text-gray-700">
              Cold Room and Reefer Vehicle Service
            </h1>
            <Image
              src="https://www.ebovanweel.com/assets/uploads/sites/2/2017/08/Compartments-to-provide-cooling-and-freezing-in-the-refrigerated-box.jpg"
              alt="draft-line cleaning"
              width={500}
              height={450}
              className='w-full rounded-lg shadow-sm'
            />
          </section>

          {/* Section: What is Draft-Beer Line Cleaning? */}
          <section className="w-full text-md text-gray-600 mt-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-700">
              What Are Cold Rooms and Reefer Vehicles?
            </h1>
            <p>
              Cold rooms and reefer vehicles are temperature-controlled spaces and transport units designed to preserve perishable goods. Cold rooms are stationary, insulated storage areas used in industries like food, pharmaceuticals, and floriculture. Reefer vehicles, on the other hand, are refrigerated trucks or containers that transport temperature-sensitive products over long distances. Proper installation and regular maintenance of these systems are crucial to ensure optimal temperature control, energy efficiency, and product safety.
            </p>
          </section>

          {/* Section: About Us */}
          <section className="w-full text-md text-gray-600 mt-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
            <p>
              At MTS Trading PLC, we specialize in providing comprehensive solutions for cold rooms and reefer vehicles. With an experienced team and a commitment to industry excellence, we design and install cold rooms with precise temperature control, insulation, and humidity management, tailored to your needs. Our expert maintenance services guarantee that your equipment operates at peak efficiency, minimizing downtime and extending its lifespan. Whether it's for food storage, pharmaceuticals, or other temperature-sensitive products, MTS delivers solutions that meet the highest standards of quality and reliability.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Image
                src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/139633058_267805804761431_8279460874777942407_n.jpg?stp=dst-jpg_s600x600&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LzoeCRLM6g0Q7kNvgHNtGIq&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AR_k__fiiMw3FUIsmJKJmhe&oh=00_AYBh4_PklmCcwG256ErD_LXbbzHfrY-is_5WCjM2CSvp3w&oe=6718917F"
                alt="cold_room"
                width={500}
                height={450}
                className='w-full rounded-lg shadow-sm'
              />
              <Image
                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/139092364_267805844761427_6198147355617174327_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VglicEQxa1IQ7kNvgFh-R4H&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AQ1dhRk8HwOttuH29InWL1g&oh=00_AYA_f2YT86UuU0Wc3LftPq-QWztN752oQe7Qh-3068EMtw&oe=6718B730"
                alt="cold_room"
                width={500}
                height={450}
                className='w-full rounded-lg shadow-sm'
              />
            </div>
          </section>

          {/* Section: Our Services */}
          <section className="self-start mt-8 flex flex-col gap-10 w-3/4">
            <h1 className="text-3xl font-extrabold text-gray-700">Our Services</h1>
            {coldRoomReeferServices.map((service, idx) =>
              <div key={idx} className="w-full flex  flex-col md:flex-row space-y-4  bg-slate-50 shadow-md rounded-lg p-4 items-center   gap-8 ">
                <IoCheckmarkOutline className="w-[50px] h-[50px]: p-1 bg-primary text-white rounded-full" size={45} />
                <div className='w-full space-y-4'>
                  <h3 className='text-2xl font-bold text-primary'>{service.title}</h3>
                  <p className='text-lg text-gray-700 font-medium'>{service.desc}</p>
                </div>
              </div>
            )}

            {/* Add more services using the same structure */}
          </section>
          <Link href={"/contact"} className=" md:block ml-6 self-start justify-self-start px-6 py-4  group relative overflow-hidden rounded-lg bg-primary  text-sm text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary hover:to-primary/65 hover:ring-2 hover:ring-primary hover:ring-offset-2">
            <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
            <span className="relative">Request Services</span>
          </Link>
        </div>

        {/* Right Sidebar */}
        <ServicesSideBar />
      </div>
    </div>
  );
};

export default Page;
