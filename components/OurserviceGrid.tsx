"use client"
import PageHero from '@/components/PageHero';
import { ourServicesItems } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import * as motion from 'framer-motion/client';


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

interface ourServicesItemsProps {
    ourServicesItems: {
        icon: any;
        title: string;
        Description: string;
        link: string;
    }[]


}



const OurserviceGrid = ({ ourServicesItems }: ourServicesItemsProps) => {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index: any) => {
        setIsHovered(index);
    };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    return (
        <div>  {/* Services Grid Section */}
            <motion.div
                className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-2 lg:px-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Reveal on scroll
                variants={revealVariant}
            >
                {ourServicesItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className='md:h-[450px] flex flex-col gap-10 items-center bg-slate-50 shadow-md rounded-md'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={revealVariant}
                    >
                        {/* Animated Image */}
                        <motion.div
                            variants={imageVariant}
                            className='border rounded-lg bg-slate-200 p-2'
                        >
                            <Image src={item.icon} alt={item.title} width={120} height={120} />
                        </motion.div>

                        {/* Text and Link */}
                        <div className='mt-4 text-center flex flex-col gap-5'>
                            <h1 className='text-2xl font-extrabold text-gray-700'>{item.title}</h1>
                            <p className='text-gray-600'>{item.Description}</p>
                            {/* Animated Link */}
                            <motion.div variants={linkVariant}>
                                <Link
                                    href={item.link}
                                    className='mt-2 px-4 py-2 flex justify-center items-center text-white rounded cursor-pointer  relative'
                                    onMouseEnter={() => handleMouseEnter(idx)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Load More Text - Visible only on md and above */}
                                    <span
                                        className={`text-primary text-lg font-semibold transition-opacity duration-300  md:absolute md:left-1/4 md:block ${isHovered === idx ? 'opacity-0' : 'opacity-100'} `}
                                    >
                                        Load More
                                    </span>

                                    {/* Icon moving from left to center for md and above */}
                                    <FaArrowRight
                                        className={`absolute transition-all duration-500  text-primary transform hidden md:block ${isHovered === idx ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
                                        size={30}
                                        style={{ left: isHovered === idx ? '50%' : '0', transform: 'translateX(-50%)' }}
                                    />

                                    {/* Only arrow for mobile (below md) */}

                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div></div>
    )
}

export default OurserviceGrid