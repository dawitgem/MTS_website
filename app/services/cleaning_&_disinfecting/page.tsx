import PageHero from '@/components/PageHero';
import ServicesSideBar from '@/components/ServicesSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"

const cleaningServices = [
    {
        title: "Comprehensive Needs Analysis",
        desc: "Thorough assessment of specific cleaning and disinfection requirements to tailor services."
    },
    {
        title: "Meticulous Planning",
        desc: "Careful planning to implement effective cleaning strategies that ensure optimal results."
    },
    {
        title: "Advanced Cleaning Techniques",
        desc: "Utilization of cutting-edge technologies and methods for effective cleaning and disinfection."
    },
    {
        title: "High-Risk Area Focus",
        desc: "Special attention to high-touch surfaces and common areas for thorough disinfection."
    },
    {
        title: "Customized Disinfection Plans",
        desc: "Tailored disinfection strategies that comply with health guidelines, particularly during critical times."
    }
];




const Page = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* Page Hero */}
            <PageHero
                img="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Cleaning-Service-01-1024x674.jpg"
                page="services"
                title="Cleaning and Disinfecting "
            />
            {/* Main Content */}
            <div className="w-full p-5 flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex flex-col items-center gap-5 p-4 w-full">
                    {/* Section: Draft-Beer Line Cleaning Service */}
                    <section className='w-full flex flex-col gap-10'>
                        <h1 className="text-3xl font-extrabold text-gray-700">
                            Cleaning and Disinfecting Services
                        </h1>
                        <Image
                            src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/8-Project.jpg"
                            alt="draft-line cleaning"
                            width={500}
                            height={450}
                            className='w-full rounded-lg shadow-sm'
                        />
                    </section>

                    {/* Section: What is Draft-Beer Line Cleaning? */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        {/* <h1 className="text-3xl font-extrabold text-gray-700">
                            What is Draft-Beer Line Cleaning?
                        </h1>
                        <p>
                            Draft beer line cleaning is the process of maintaining the
                            hygiene and efficiency of the beer dispensing system. It
                            involves regularly cleaning the beer lines, taps, and
                            associated equipment to remove organic and inorganic
                            deposits that can negatively affect the beer's taste,
                            appearance, and aroma. By keeping the lines clean, the beer
                            remains fresh and bacteria-free, ensuring a great-tasting
                            product every time it’s served.
                        </p> */}
                    </section>

                    {/* Section: About Us */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
                        <p>
                            MTS offers state-of-the-art cleaning and disinfection services that leverage modern technologies. Our focus is on delivering exceptional cleaning solutions that leave a lasting impression, ensuring a safe and hygienic environment for all clients. We cater to both residential and industrial clients, consistently surpassing expectations.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <Image
                                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Purpose-3.jpg"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/Health-Service-1.jpg"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/3-MTS-Trading-Team1.jpg"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/3-Project.jpg"
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
                        {cleaningServices.map((service, idx) =>
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
