import PageHero from '@/components/PageHero';
import ServicesSideBar from '@/components/ServicesSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"

const coolerRefrigerationServices = [
  {
    title: "Cooler Installation",
    desc: "Expert installation of refrigeration coolers to ensure optimal performance and temperature control."
  },
  {
    title: "Refrigeration System Maintenance",
    desc: "Regular maintenance of refrigeration systems to prevent breakdowns and improve energy efficiency."
  },
  {
    title: "Compressor Maintenance",
    desc: "Routine inspections and servicing of compressors to ensure they operate at peak efficiency."
  },
  {
    title: "Evaporator Coil Cleaning",
    desc: "Professional cleaning of evaporator coils to prevent blockages and enhance cooling performance."
  },
  {
    title: "Refrigerant Level Check and Refill",
    desc: "Ensure proper refrigerant levels and refill as needed to maintain system efficiency."
  },
  {
    title: "Temperature Calibration",
    desc: "Precise calibration of temperature controls to maintain consistent cooling conditions."
  },
  {
    title: "Electrical Component Inspection",
    desc: "Regular inspection of electrical components to identify potential faults and prevent failures."
  },
  {
    title: "Preventative Maintenance Contracts",
    desc: "Scheduled maintenance visits to prolong system life and prevent costly repairs."
  }
];




const Page = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      {/* Page Hero */}
      <PageHero
        img="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Cold-Room-Service-04.jpg"
        page="services"
        title="Cooler and Refrigration Maintenance"
      />
      {/* Main Content */}
      <div className="w-full p-5 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-5 p-4 w-full">
          {/* Section: Draft-Beer Line Cleaning Service */}
          <section className='w-full flex flex-col gap-10'>
            <h1 className="text-3xl font-extrabold text-gray-700">
              Cooler and Refrigration Maintenance
            </h1>
            <Image
              src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/4-Project-1.jpg"
              alt="draft-line cleaning"
              width={500}
              height={450}
              className='w-full rounded-lg shadow-sm'
            />
          </section>

          {/* Section: What is Draft-Beer Line Cleaning? */}
          <section className="w-full text-md text-gray-600 mt-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-700">
              What is Cooler and Refrigeration Maintenance?

            </h1>
            <p>
              Cooler and refrigeration maintenance involves the regular upkeep, inspection, and repair of refrigeration systems and coolers. These systems are vital for temperature-sensitive environments like restaurants, supermarkets, and warehouses, ensuring that perishables and products are stored at the right temperature. Proper maintenance helps avoid breakdowns, increases energy efficiency, and extends the lifespan of the equipment. Regular servicing also ensures that coolers and refrigeration systems meet safety standards and run efficiently without overworking the components.
            </p>
          </section>

          {/* Section: About Us */}
          <section className="w-full text-md text-gray-600 mt-8 space-y-6">
            <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
            <p>
              At MTS Trading PLC, we are experts in providing high-quality cooler and refrigeration installation, maintenance, and repair services. With our extensive experience and a team of certified professionals, we ensure the optimal performance of your cooling systems. We are committed to delivering efficient and reliable service to prevent costly breakdowns, reduce energy consumption, and ensure your refrigeration equipment operates smoothly. Whether it&apos;s the installation of new systems or ongoing maintenance, MTS Trading PLC offers comprehensive solutions tailored to your unique needs.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Image
                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Cold-Room-Service-02-1024x674.jpg"
                alt="draft-line cleaning"
                width={500}
                height={450}
                className='w-full rounded-lg shadow-sm'
              />
              <Image
                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/MTS-Trading-Team.jpg"
                alt="draft-line cleaning"
                width={500}
                height={450}
                className='w-full rounded-lg shadow-sm'
              />

            </div>
          </section>

          {/* Section: Our Services */}
          <section className="self-start mt-8 flex flex-col gap-10 w-3/4">
            <h1 className="text-3xl font-extrabold text-gray-700">Our Services</h1>
            {coolerRefrigerationServices.map((service, idx) =>
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
