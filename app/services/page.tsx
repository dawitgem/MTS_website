"use client"
import PageHero from '@/components/PageHero';
import { ourServicesItems } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import * as motion from 'framer-motion/client';
import OurserviceGrid from '@/components/OurserviceGrid';

// Define animation variants
const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const linkVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const ServicesPage = () => {
    // State to control hover effect
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index: any) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

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
