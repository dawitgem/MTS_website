"use client"
import { ourServicesItems } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa6';
import { GoMail } from 'react-icons/go';
import { LuPhone } from 'react-icons/lu';

const ServicesSideBar = () => {
    const pathname = usePathname();
    const isActive = (link: string) => {
        console.log(pathname)
        return pathname === link;

    }
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5 p-5 bg-slate-50 rounded-md shadow-md'>
                <h1 className='text-2xl font-extrabold text-gray-700'>Our Services</h1>
                <div className='flex flex-col gap-2 w-full'>
                    {ourServicesItems.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                href={item.link}
                                className={`group relative p-4 flex items-center text-md border rounded-lg overflow-hidden transition-all duration-300 ${isActive(item.link) ? 'bg-primary text-white' : 'bg-slate-100'
                                    }`}
                            >
                                {/* Background filling animation */}
                                <span
                                    className={`absolute inset-0 bg-primary origin-left transition-transform duration-300 ${isActive(item.link) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                ></span>

                                {/* Icon and text with hover effects */}
                                <FaArrowRight
                                    className={`relative z-10 mr-2 transition-transform duration-300 ${isActive(item.link)
                                        ? 'text-white translate-x-0'
                                        : 'text-primary group-hover:translate-x-0 translate-x-[-50px] group-hover:text-white'
                                        }`}
                                />
                                <span
                                    className={`relative z-10 transition-colors duration-300 ${isActive(item.link) ? 'text-white' : 'text-gray-700 group-hover:text-white'
                                        }`}
                                >
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className='w-full bg-blue-900 rounded-lg flex flex-col gap-10 justify-center items-center align-middle text-slate-100 p-5'>
                <BiSupport className=' p-4 text-primary rounded-lg bg-slate-50/10' size={90} />
                <h1 className='text-2xl font-bold'>If you Need Help</h1>

                <div className='flex gap-5 items-center'>
                    <div className='flex flex-col gap-5 flex-wrap'>
                        <Link href={"mailto:mtstradingplc@gmail.com"} className="flex  flex-col md:flex-row max-w-full  gap-8  items-center text-sm hover:text-primary text-slate-200">
                            <GoMail size={40} className=" p-1 bg-slate-50/10  rounded-lg text-primary" />
                            <p className='text-lg font-medium break-words ' >    mtstradingplc@gmail.com</p>
                        </Link>
                        <Link href={"mailto:Mtscleaningreport@gmail.com"} className="flex  flex-col md:flex-row  gap-8  items-center text-sm hover:text-primary max-w-full"><GoMail size={40} className="p-1 bg-slate-50/10  rounded-lg text-primary" />
                            <p className='text-lg font-medium break-words '>   Mtscleaningreport@gmail.com</p>
                        </Link>
                        <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center  text-lg font-medium text-slate-200"><LuPhone size={40} className="p-1 bg-slate-50/10  rounded-lg text-primary  text-lg font-medium" /> <p >     0923423423/60</p></div>
                        <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center  text-lg font-medium text-slate-200"><LuPhone size={40} className="p-1 bg-slate-50/10  rounded-lg text-primary   text-lg font-medium" /> <p >  0923423423/60</p></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServicesSideBar;
