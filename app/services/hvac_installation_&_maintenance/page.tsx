import PageHero from '@/components/PageHero';
import ServicesSideBar from '@/components/ServicesSideBar';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"

const hvacServices = [
    {
        title: "Cold Room Installation",
        desc: "Professional design and installation of cold rooms to ensure optimal temperature control."
    },
    {
        title: "Cold Room Maintenance",
        desc: "Regular maintenance services to keep cold rooms operating efficiently and prevent major issues."
    },
    {
        title: "Chiller Installation and Maintenance",
        desc: "Expert installation and ongoing maintenance of chillers to ensure reliable cooling performance."
    },
    {
        title: "Troubleshooting and Calibration",
        desc: "Comprehensive troubleshooting and calibration services to optimize system performance."
    },
    {
        title: "Component Replacement",
        desc: "Replacement of faulty components to restore system functionality and efficiency."
    },
    {
        title: "Regular System Inspections",
        desc: "Scheduled inspections to identify potential issues and ensure compliance with safety standards."
    },
    {
        title: "Preventative Maintenance Contracts",
        desc: "Customized contracts that include scheduled visits to maintain system efficiency and longevity."
    }
];

const hvacServiceProcesses = [
    {
        title: "Needs Analysis",
        desc: "Comprehensive analysis of customer requirements to develop tailored HVAC-R solutions."
    },
    {
        title: "Design & Engineering",
        desc: "Optimal system configurations are designed based on the needs analysis to ensure efficiency."
    },
    {
        title: "Installation",
        desc: "Meticulous installation protocols ensure safe and compliant setup of all HVAC-R systems."
    },
    {
        title: "Testing",
        desc: "Rigorous testing and commissioning verify proper functioning and performance of the systems."
    },
    {
        title: "Training and Commissioning",
        desc: "Comprehensive training empowers clients to operate and maintain their systems effectively."
    },
    {
        title: "Maintenance",
        desc: "Preventative maintenance contracts include scheduled visits to identify and resolve potential issues."
    },
    {
        title: "Follow-up",
        desc: "Proactive tracking of system performance with regular follow-ups to ensure optimal operation."
    },
    {
        title: "Compliance Reporting",
        desc: "Detailed documentation and reports demonstrate compliance with safety and regulatory standards."
    },
    {
        title: "Updates",
        desc: "Continuous updates to trainings and protocols to incorporate the latest HVAC-R innovations."
    }
];



const Page = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* Page Hero */}
            <PageHero
                img="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/140179930_268731818002163_775896501977978699_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=P5eFkyq5nuEQ7kNvgGa8sZ4&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AkFYqurXgWodpt6hzXhydL_&oh=00_AYBMLg3unXiGLO3O39bRKxOEMFXSVXzL78wZueXclc2IIw&oe=6718B94A"
                page="services"
                title="HVAC-R Installation and Maintenance"
            />
            {/* Main Content */}
            <div className="w-full p-5 flex flex-col lg:flex-row gap-8">
                {/* Left Content */}
                <div className="flex flex-col items-center gap-5 p-4 w-full">
                    {/* Section: Draft-Beer Line Cleaning Service */}
                    <section className='w-full flex flex-col gap-10'>
                        <h1 className="text-3xl font-extrabold text-gray-700">
                            HVAC-R Service
                        </h1>
                        <Image
                            src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/140019296_268731824668829_3789615581937860391_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=2wSmDyC1jJIQ7kNvgGeWNuP&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AFGhLCgE0axUTC5XqQ5pMQe&oh=00_AYCLjYMTyRHIklT75zMpw4GdhfI4m8ju5SGk_ScvjTjGow&oe=67188DE7"
                            alt="draft-line cleaning"
                            width={500}
                            height={450}
                            className='w-full h-[450px] rounded-lg shadow-sm'
                        />
                    </section>

                    {/* Section: What is Draft-Beer Line Cleaning? */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        <h1 className="text-3xl font-extrabold text-gray-700">
                            What is HVAC-R Service?
                        </h1>
                        <p>
                            HVAC-R (Heating, Ventilation, Air Conditioning, and Refrigeration) service involves the installation, maintenance, and repair of systems that control the temperature and air quality in residential and commercial buildings. This includes cold rooms, chillers, and other HVAC-R systems designed to optimize comfort and efficiency. Regular maintenance and expert service are essential to ensure the reliability and longevity of these systems.
                        </p>
                    </section>

                    {/* Section: About Us */}
                    <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                        <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
                        <p>
                            MTS specializes in expert HVAC-R services, including cold room installation and maintenance. Our qualified professionals design and install HVAC-R systems, ensuring optimal performance in various buildings. With regular maintenance, inspections, cleaning, and repairs, we prevent major issues and optimize system efficiency. Trust MTS for reliable HVAC-R solutions.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <Image
                                src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/139267231_268731821335496_387796537907169179_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=lvxOq598HdAQ7kNvgHMa_ij&_nc_ht=scontent.fadd2-1.fna&_nc_gid=Ae8izQHJ5Dr_OHKhIhoZRr3&oh=00_AYCEhBVAg1A8UtuFnfHwMAV4fBVaYX5Nu8-cYbFxajZDaA&oe=67189355"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/139636896_268731838002161_7826625637934836315_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=N8YwpEtc2VgQ7kNvgG7cbnZ&_nc_ht=scontent.fadd1-1.fna&oh=00_AYCsjISAw8KMbj5yHflQLq2BQ1dh1MUl63QO5p_4VwAmMQ&oe=67188B36"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/84173181_131878155020864_1020903182114488320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L3QAF56uFj0Q7kNvgEyMNvW&_nc_ht=scontent.fadd2-1.fna&_nc_gid=A_eLci2ruTPLWANCHvFuIxj&oh=00_AYC1eoZDT5SCxKwmu0CaNQDiuJZh8JMJLoGxogx4HXIVHw&oe=6718908D"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                            <Image
                                src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/206637972_371683061040371_1905462529153240037_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8y730llpnjEQ7kNvgHxe5YT&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AGHtuYAh5tczf_XlwC8aljp&oh=00_AYA1wElvHpSVhMB56pEQuo5hEDh_lNqNbSael4tRvQ_5tg&oe=6718A39B"
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />

                        </div>

                    </section>

                    <section className="w-full text-md text-gray-600 mt-8 space-x-6 space-y-4">
                        <h1 className="text-3xl font-extrabold text-gray-700">Our Process</h1>
                        <p>
                            At MTS, we have a well-defined set of service processes in place to ensure the delivery of high quality, safe, and compliant services for cold rooms, chillers, draft beer machines, and other HVAC-R systems. Our commitment to excellence is reflected in the following processes:
                        </p>
                        <div className='flex flex-col gap-6 space'>
                            {hvacServiceProcesses.map((process, idx) => (
                                <div key={idx} className="w-full flex  flex-col md:flex-row space-y-4  bg-slate-50 shadow-md rounded-lg p-4 items-center   gap-8 ">
                                    <h3 className="w-[35px] h-[35px] p-1 bg-primary text-white rounded-full text-xl font-black text-center" >{idx + 1}</h3>
                                    <div className='w-full space-y-4'>
                                        <h3 className='text-xl font-bold text-primary'>{process.title}</h3>
                                        <p className='text-md text-gray-700 font-medium'>{process.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="self-start mt-8 flex flex-col gap-10 w-full ">
                        <h1 className="text-3xl font-extrabold text-gray-700">Our Services</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            {hvacServices.map((service, idx) =>
                                <div key={idx} className="w-full flex  flex-col md:flex-row space-y-4  bg-slate-50 shadow-md rounded-lg p-4 items-center   gap-8 ">
                                    <IoCheckmarkOutline className="w-[50px] h-[50px]: p-1 bg-primary text-white rounded-full" size={40} />
                                    <div className='w-full space-y-4'>
                                        <h3 className='text-2xl font-bold text-primary'>{service.title}</h3>
                                        <p className='text-lg text-gray-700 font-medium'>{service.desc}</p>
                                    </div>
                                </div>
                            )}
                        </div>

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
