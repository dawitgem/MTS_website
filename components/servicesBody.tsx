import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkOutline } from "react-icons/io5"


interface serviceBodyProps {
    serviceItem: { title: string, what?: string, aboutus: string, ourProcess?: string }
    services: { title: string, desc: string }[],
    process?: { title: string, desc: string }[]
    mainImage: string,
    additionalImages?: string[]
}

const ServiceBody = ({ serviceItem, services, process, mainImage, additionalImages }: serviceBodyProps) => {
    return (


        <div className="flex flex-col items-center gap-5 p-4 w-full">
            {/* Section: Draft-Beer Line Cleaning Service */}
            <section className='w-full flex flex-col gap-10'>
                <h1 className="text-3xl font-extrabold text-gray-700">
                    {serviceItem.title}
                </h1>
                <Image
                    src={mainImage}
                    alt={serviceItem.title}
                    width={500}
                    height={450}
                    className='w-full rounded-lg shadow-sm'
                />
            </section>

            {/* Section: What is Draft-Beer Line Cleaning? */}
            <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                <h1 className="text-3xl font-extrabold text-gray-700">
                    What {serviceItem.title}?
                </h1>
                <p>
                    {serviceItem.what}
                </p>
            </section>

            {/* Section: About Us */}
            <section className="w-full text-md text-gray-600 mt-8 space-y-6">
                <h1 className="text-3xl font-extrabold text-gray-700">About Us</h1>
                <p>
                    {serviceItem.aboutus}
                </p>

                {additionalImages && additionalImages.length > 0 &&
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {additionalImages.map((img, idx) =>
                            <Image
                                key={idx}
                                src={img}
                                alt="draft-line cleaning"
                                width={500}
                                height={450}
                                className='w-full rounded-lg shadow-sm'
                            />
                        )}

                    </div>
                }


            </section>

            {serviceItem.ourProcess &&
                <section className="w-full text-md text-gray-600 mt-8 space-x-6 space-y-4">
                    <h1 className="text-3xl font-extrabold text-gray-700">Our Process</h1>
                    <p>
                        {serviceItem.ourProcess}
                    </p>
                    <div className='flex flex-col gap-6 space'>
                        {process && process?.map((process, idx) => (
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
            }
            <section className="self-start mt-8 flex flex-col gap-10 w-full ">
                <h1 className="text-3xl font-extrabold text-gray-700">Our Services</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {services.map((service, idx) =>
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

    );
};

export default ServiceBody;
