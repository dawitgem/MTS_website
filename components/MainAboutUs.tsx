"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const MainAboutUs = () => {
    // For in-view detection
    const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
    const [refRight, inViewRight] = useInView({ triggerOnce: true });

    // Control animations
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();

    // Animation triggers based on in-view status
    useEffect(() => {
        if (inViewLeft) {
            controlsLeft.start("visibleFromLeft");
        }
        if (inViewRight) {
            controlsRight.start("visibleFromRight");
        }
    }, [inViewLeft, inViewRight, controlsLeft, controlsRight]);

    // Animation variants for revealing
    const variants = {
        hidden: { opacity: 0, x: 0 },
        visibleFromLeft: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
        visibleFromRight: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-4">
            {/* Image element reveals from left */}
            <motion.div
                ref={refLeft}
                initial="hidden"
                animate={controlsLeft}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visibleFromLeft: variants.visibleFromLeft,
                }}
                className="lg:w-1/2  p-10 md:shadow-lg relative z-50 w-full h-full lg:block flex flex-col"
            >
                {/* Large central image */}
                <Image src={"https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/242488559_424701809071829_3585496142187770906_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1gWwSQB3Fb8Q7kNvgFy9Sba&_nc_ht=scontent.fadd1-1.fna&_nc_gid=A2T6Nz8xnWe2w1MY8uPCXwe&oh=00_AYDEaKGBG08buEV5pwauGBiaZ4WZ1g2GtuWnuTYmJfVjKg&oe=66F71ADC"} alt='mts_trading_pic' width={400} height={50} className='w-full md:h-[500px]   rounded-lg' />

                {/* Top left smaller image */}
                <div className="lg:absolute top-0 left-0 lg:transform lg:translate-x-1/2 lg:translate-y-6 md:shadow-lg">
                    <div className="bg-white p-2 rounded-lg md:shadow-lg">
                        <Image src={"https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/87397113_131877705020909_1080918933394948096_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mEcbzLYbQ9MQ7kNvgGdWxcq&_nc_ht=scontent.fadd2-1.fna&_nc_gid=ALI-BhOhAOJ6rrGNhUc3-U_&oh=00_AYBkmmft9B_KpbNi9o-RG1_DCLgFlGimiEyNAtBAqCl2_A&oe=6718D547"} alt='mts_trading_pic' width={400} height={50} className='w-[300px] h-[150px] rounded-lg' />
                    </div>
                </div>

                {/* Bottom left smaller image */}
                <div className="lg:absolute bottom-0 left-0 lg:transform lg:translate-x-1/2 lg:translate-y-6 md:shadow-lg">
                    <div className="bg-white p-2 rounded-lg md:shadow-lg">
                        <Image src={"https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/85119299_131877901687556_4509234907930689536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z_5FAam6rkkQ7kNvgF1TOYj&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AgDZrB1sNjEqfMqWzL5MTGR&oh=00_AYCQVXhwtsbSxBL1mxJiYl4t5e8QKOAkJqr0QsHUWaaDoA&oe=6718C6E9"} alt='mts_trading_pic' width={400} height={500} className='w-[300px] h-[150px] rounded-lg' />
                    </div>
                </div>
            </motion.div>

            {/* About us element reveals from right */}
            <motion.div
                ref={refRight}
                initial="hidden"
                animate={controlsRight}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visibleFromRight: variants.visibleFromRight,
                }}
                className="lg:w-1/2 bg-gray-100 p-10 flex flex-col gap-5"
            >
                <h3 className='text-md font-semibold text-primary'>About us</h3>
                <h1 className='text-2xl md:text-4xl font-black text-gray-700 text-center '>MTS Cooling Maintenance <br /><span className='text-center '>&</span> <br /> Cleaning Service</h1>
                <p className='text-md lg:text-lg text-gray-600 font-medium'>
                    MTS Trading PLC, founded in 2016, specializes in expert cleaning, refrigeration, and AC maintenance services. With decades of experience, we deliver cost-effective, high-quality solutions trusted by leading industries.</p>
                <Link href={"/about"} className='font-bold hover:text-white text-primary border rounded-lg  '>Read more</Link>
            </motion.div>
        </div>
    );
};

export default MainAboutUs;
