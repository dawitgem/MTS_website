"use client"
import PageHero from '@/components/PageHero';
import { ourServicesItems } from '@/lib/data';
import React, { useState } from 'react';
import * as motion from 'framer-motion/client';
import OurserviceGrid from '@/components/OurserviceGrid';



const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const ServicesPage = () => {

    return (
        <div className="w-full flex flex-col gap-[6rem] justify-center bg-slate-100 mb-5">
            {/* Hero Section */}
            <PageHero img='https://noltec-eng.com/wp-content/uploads/2023/12/HVAC-Heating-Air-Conditioning-Ventilation-scaled.jpeg' page='services' title='Services' />

            {/* Services Header Section */}
            <motion.section
                className='w-full flex flex-col gap-10 justify-center items-center'
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Reveal animation once in view
            >
                <h3 className='text-primary text-lg'>Our Services</h3>
                <h1 className='text-2xl lg:text-3xl font-black text-gray-700 text-center break-words'>
                    A wide range of Cooling Maintenance <br /> and <br /> Cleaning Services
                </h1>
            </motion.section>

            {/* Services Grid Section */}
            <OurserviceGrid ourServicesItems={ourServicesItems} />
        </div>
    );
};

export default ServicesPage;
