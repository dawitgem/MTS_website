import PageHero from '@/components/PageHero';
import ServicesSideBar from '@/components/ServicesSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"



const chillerServices = [
    {
        title: "Custom Chiller Design",
        desc: "Tailored chiller system designs that consider cooling capacity, energy efficiency, and space constraints."
    },
    {
        title: "Chiller System Installation",
        desc: "Professional installation of chiller systems ensuring seamless integration and optimal performance."
    },
    {
        title: "Energy-Efficient Operation",
        desc: "Chiller systems configured to maximize energy efficiency and reduce operational costs."
    },
    {
        title: "Regular Inspections",
        desc: "Comprehensive inspections to identify potential issues and ensure consistent performance of the chiller system."
    },
    {
        title: "System Cleaning",
        desc: "Thorough cleaning of chiller systems to remove dirt, debris, and scaling that may affect performance."
    },
    {
        title: "Repairs and Troubleshooting",
        desc: "Efficient repairs and diagnostics to address issues and restore chiller functionality using high-quality parts."
    },
    {
        title: "Component Replacement",
        desc: "Timely replacement of worn-out or damaged components to extend the life of the chiller system."
    },
    {
        title: "Long-Term Maintenance Plans",
        desc: "Scheduled maintenance to ensure longevity and reliability of the chiller, minimizing costly breakdowns."
    }
];


const chiller = {
    title: " Chiller Installation and Maintenance Services",
    what: " Chiller installation and maintenance involve designing, installing, and servicing chiller systems that remove heat from liquids through refrigeration cycles. These systems are crucial for providing cooling in various applications, ensuring optimal performance, efficiency, and reliability.",
    aboutus: "MTS specializes in comprehensive chiller installation and maintenance services. Our team of qualified professionals has extensive experience in designing and installing chiller systems tailored for residential, commercial, and industrial settings. We ensure seamless integration and efficient operation of chillers, helping clients achieve their cooling objectives.",
}
const mainImage = "https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/Chiller-Instalation.jpg"


const Page = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* Page Hero */}
            <PageHero
                img="https://media.istockphoto.com/id/488238731/photo/conditioning-systems.jpg?s=612x612&w=0&k=20&c=n0mPDYweLHRvOoNpG8xQK8DwPk__-5uisJ84-GmDxMc="
                page="services"
                title="Chiller Installation and Maintenance "
            />
            {/* Main Content */}
            <div className="w-full p-5 flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex flex-col items-center gap-5 p-4 w-full">
                    {/* Section: Draft-Beer Line Cleaning Service */}
                    <section className='w-full flex flex-col gap-10'>
                        <h1 className="text-3xl font-extrabold text-gray-700">
                            Chiller Installation and Maintenance Services
                        </h1>
                        <Image
                            src="https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/Chiller-Instalation.jpg"
                            alt="draft-line cleaning"
                            width={500}
                            height={450}
                            className='w-full rounded-lg shadow-sm'
                        />
                    </section>

                    {/* Section: What is Draft-Beer Line Cleaning? */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        <h1 className="text-3xl font-extrabold text-gray-700">
                            What is Chiller Installation and Maintenance?
                        </h1>
                        <p>
                            Chiller installation and maintenance involve designing, installing, and servicing chiller systems that remove heat from liquids through refrigeration cycles. These systems are crucial for providing cooling in various applications, ensuring optimal performance, efficiency, and reliability.
                        </p>
                    </section>

                    {/* Section: About Us */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
                        <p>
                            MTS specializes in comprehensive chiller installation and maintenance services. Our team of qualified professionals has extensive experience in designing and installing chiller systems tailored for residential, commercial, and industrial settings. We ensure seamless integration and efficient operation of chillers, helping clients achieve their cooling objectives.
                        </p>


                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <Image
                                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/138828730_267218018153543_8301952908644603631_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bHozSlw1HPIQ7kNvgFq4neF&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AkJQBydgO0Mfq-xofUDGU-Z&oh=00_AYArc1foanFBvwZNfTk1kvYdi9ROi_3cQfuN6Tjt5VQMgw&oe=6718923D"
                                alt="chiller maintenace"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/139636896_268731838002161_7826625637934836315_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=N8YwpEtc2VgQ7kNvgG7cbnZ&_nc_ht=scontent.fadd1-1.fna&oh=00_AYCsjISAw8KMbj5yHflQLq2BQ1dh1MUl63QO5p_4VwAmMQ&oe=67188B36"
                                alt="chiller_installation"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                        </div>
                    </section>

                    {/* Section: Our Services */}
                    <section className="self-start mt-8 flex flex-col gap-10 w-3/4">
                        <h1 className="text-3xl font-extrabold text-gray-700">Our Services</h1>
                        {chillerServices.map((service, idx) =>
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
