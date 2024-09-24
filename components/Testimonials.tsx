"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Button } from './ui/button';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Herve Milhade',
        avatar: 'https://addisfortune.news/wp-content/uploads/2023/12/BGI-CEO.jpg',
        comment: 'This is an amazing service! Highly recommend.',
    },
    {
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/50',
        comment: 'Fantastic experience! Will definitely return.',
    },
    {
        name: 'Alice Johnson',
        avatar: 'https://via.placeholder.com/50',
        comment: 'Great customer support and very helpful.',
    },
    {
        name: 'Bob Brown',
        avatar: 'https://via.placeholder.com/50',
        comment: 'A top-notch experience from start to finish.',
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true });
    const controls = useAnimation();

    // Determine screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
        };

        handleResize(); // Check the initial screen size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    // Automatically shift testimonials every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Animation variants for smooth appearance
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="w-full flex flex-col justify-center items-center gap-10 p-4 "
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <h3 className="text-lg text-primary font-bold">Testimonials</h3>
            <h4 className="text-3xl text-gray-700 font-extrabold">What Our Clients Are Saying About MTS</h4>

            {/* Testimonials sliding section */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)` }} // Slide based on screen size
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`min-w-[100%] h-[300px] lg:min-w-[50%] p-4 text-center bg-gray-100 m-2 rounded-md shadow-md flex flex-col lg:flex-row items-center gap-5`}
                        >
                            <div className="w-[80px] h-[80px]">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full w-full h-full"
                                />
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl text-gray-700 font-bold">{testimonial.name}</p>
                                <p>CEO of BGI Ethiopia</p>
                                <p className="text-md sm:text-lg">{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between w-full max-w-xs">
                <Button onClick={handlePrev} className="p-2 rounded-full bg-primary text-white hover:bg-gray-300">
                    <FiChevronLeft size={40} />
                </Button>
                <Button onClick={handleNext} className="p-2 rounded-full bg-primary text-white hover:bg-gray-300">
                    <FiChevronRight size={40} />
                </Button>
            </div>
        </motion.div>
    );
};

export default Testimonials;
