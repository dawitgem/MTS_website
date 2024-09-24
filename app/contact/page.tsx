import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
    return (
        <div className='w-full  flex flex-col gap-20 bg-slate-100'>
            <PageHero img='https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/7-Project.jpg' page='contact' title='Contact' />

            <div className='flex flex-col lg:flex-row gap-10  w-full justify-center  items-center p-2 md:p-5 lg:p-10'>
                <div className='w-full lg:w-auto flex flex-col justify-start items-start align-middle gap-5 bg-slate-50 shadow-md p-5 rounded-lg text-gray-600'>
                    <h3 className='max-w-full text-primary font-bold text-md break-words'>Contact information </h3>
                    <h1 className='max-w-full text-3xl font-extrabold text-gray-600 break-words'>Contact with our Team</h1>
                    <div className='flex flex-col lg:flex-row gap-10 justify-start items-center'>
                        <div className='self-start text-primary font-bold p-2 bg-slate-200 rounded-full '><FaLocationDot className='' size={40} /></div>
                        <div className='flex flex-col gap-5 text-sm'>
                            <h1 className='hidden md:block text-xl text-secondary font-black'>Our Office</h1>
                            <p>yeka Sub-city, woreda-11, House No-148</p>
                            <p>Kirkos Sub-city, woreda-02, House No-747 , Addis Ababa</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
                        <div className=' self-start text-primary font-bold p-2 bg-slate-200 rounded-full '><MdEmail className='' size={40} /></div>
                        <div className='flex flex-col  gap-5 text-sm'>
                            <h1 className='hidden md:block text-xl text-secondary font-black'>Email </h1>
                            <Link href={"mailto:mtstradingplc@gmail.com"} className="block md:inline-block hover:text-primary"> <p className='break-all md:break-normal'>mtstradingplc@gmail.com</p>
                            </Link>
                            <Link href={"mailto:Mtscleaningreport@gmail.com"} className="block md:inline-block  hover:text-primary">
                                <p className='break-all md:break-normal'>Mtscleaningreport@gmail.com</p>
                            </Link>
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-10 justify-center items-center'>
                        <div className='self-start text-primary font-bold p-2 bg-slate-200 rounded-full '><FaPhoneAlt className='' size={40} /></div>
                        <div className='flex flex-col gap-5 text-sm'>
                            <h1 className='hidden md:block text-xl text-secondary font-black'>Call for Help</h1>
                            <p>+251 930 29 48 59/60</p>
                            <p>+251 411 479 18 42</p>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
            <div className='w-full h-[500px] '>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7828050885446!2d38.76621417416906!3d8.99212308956686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a63c3bc77b%3A0xec05625058fe0c7!2sMTS%20Trading%20Plc.!5e0!3m2!1sen!2set!4v1726873449590!5m2!1sen!2set"
                    height={500}
                    className="border-0 w-full h-full "
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default ContactPage