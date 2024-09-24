"use client";
import React from 'react';
// import React, { useEffect } from 'react';
// import { useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { GoMail } from 'react-icons/go';
import { LuPhone } from 'react-icons/lu';

import becustomer from "../public/assets/be_customer.png"

const Contact = () => {
  // const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  // const controls = useAnimation();
  // ref()

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [inView, controls]);

  // const containerVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: 'easeOut',
  //     },
  //   },
  // };

  return (
    <div className='w-full h-full relative flex flex-col lg:flex-row gap-10 items-center justify-center align-middle mb-5  '>
      <div className='lg:absolute   lg:w-1/3 lg:h-[484px] z-50 top-0 left-0  p-2  bg-slate-50  rounded-r-full '>
        <Image src={becustomer} alt='be customer' width={500} height={500} className='w-full h-full' />
      </div>
      <div className='bg-blue-700 bg-[url("../../public/assets/blurry-gradient-haikei.svg)] flex flex-col justify-center align-middle items-center  p-10 gap-5 w-full'>
        <h3 className='text-md text-slate-200 font-bold'>contact us</h3>
        <h1 className='text-4xl font-black text-slate-200 text-center'>Become Our Customer <br />  & <br />Get Best Deals</h1>
        <div className='flex gap-5 items-center'>
          <div className='flex flex-col gap-5 flex-wrap'>
            <Link href={"mailto:mtstradingplc@gmail.com"} className="flex  flex-col md:flex-row flex-wrap gap-8  items-center text-sm hover:text-primary text-slate-200">
              <GoMail size={40} className=" p-1 bg-slate-50/10  rounded-lg text-slate-50/60" />
              <p className='text-lg font-medium ' > mtstradingplc@gmail.com</p>
            </Link>
            <Link href={"mailto:Mtscleaningreport@gmail.com"} className="flex  flex-col md:flex-row flex-wrap gap-8  items-center text-sm text-slate-200 hover:text-primary"><GoMail size={40} className="p-1 bg-slate-50/10  rounded-lg text-slate-50/60" />
              <p className='text-lg font-medium break-words '>   Mtscleaningreport@gmail.com</p>
            </Link>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center  text-lg font-medium text-slate-200"><LuPhone size={40} className="p-1 bg-slate-50/10  rounded-lg text-slate-50/60" /> <p >     0923423423/60</p></div>
            <div className="flex flex-col md:flex-row flex-wrap gap-8 items-center  text-lg font-medium text-slate-200"><LuPhone size={40} className="p-1 bg-slate-50/10  rounded-lg text-slate-50/60" /> <p >  0923423423/60</p></div>
          </div>
        </div>
      </div>
    </div>);
};

export default Contact;
