"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { LayoutGrid } from './ui/layout-grid';
import { div } from 'framer-motion/client';




const MainProjects = () => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    // Animation variant for the container to stagger children
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // Delay between each grid item animation
            },
        },
    };

    // Animation variant for each grid item




    return (
        <div>
            <div className="max-w-screen-xl mx-auto flex flex-col gap-5 justify-center items-center align-middle p-5">
                <h3 className='text-md font-semibold text-primary'>Our Projects</h3>
                <h1 className='relative text-4xl md:text-5xl font-extrabold text-gray-700 text-center w-full break-words  '>
                    Transformative Solution in Action   </h1>
                <h6 className='text-lg text-gray-600 text-center max-w-2xl'>
                    We proudly collaborate with top brands and organizations in Ethiopia, ensuring reliable and professional cooling services tailored to diverse industries.
                </h6>
                <motion.div
                    ref={ref}
                    className='h-[800px] self-start w-full'
                    variants={containerVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <LayoutGrid cards={cards} />
                </motion.div>
            </div>
        </div>
    );
};

export default MainProjects;


const Project1 = () => {
    return <div className='text-white flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>Draft-Beer line  cleaning for BGI Ethiopia</h3>
        <p></p>
        <Link href={"/portfolio"} className=' font-bold text-primary hover:text-white'>Read more</Link>
    </div>
}
const Project2 = () => {
    return <div className='text-white flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>Draft-Beer line  cleaning for BGI Ethiopia</h3>
        <p></p>
        <Link href={"/portfolio"} className=' font-bold text-primary hover:text-white'>Read more</Link>
    </div>
}
const Project3 = () => {
    return <div className='text-white flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>Cold room maintenance for Safway Supermarket</h3>
        <p></p>
        <Link href={"/portfolio"} className=' font-bold text-primary hover:text-white'>Read more</Link>
    </div>
}
const Project4 = () => {
    return <div className='text-white flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>Kitchen Duct & Coldroom Indoor unit General Services for St. Paul’s Hospital</h3>
        <p></p>
        <Link href={"/portfolio"} className=' font-bold text-primary hover:text-white'>Read more</Link>
    </div>
}
const Project5 = () => {
    return <div className='text-white flex flex-col gap-2'>
        <h3 className='text-2xl font-bold'>HVAC-R Installation for Ethiopian Airlines</h3>
        <p></p>
        <Link href={"/portfolio"} className=' font-bold text-primary hover:text-white'>Read more</Link>
    </div>
}


const cards = [
    {
        id: 1,
        content: < Project1 />,
        className: "md:col-span-2 md:row-span-2",
        thumbnail:
            "https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/brewery-tap-lines-maintenance-1-1024x498-1-990x490.jpg",
    },
    {
        id: 2,
        content: <Project2 />,
        className: "col-span-1",
        thumbnail:
            "https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/141698407_272593710949307_8162820622016408840_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=L7Cix7WmyJ0Q7kNvgEm_Ly6&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AkVU9EbIveU_pDL_mPHfU9L&oh=00_AYAONl9sy1nK-lonz-sjp-aO6_-YiVHSYnMyjjY4MRpGpQ&oe=671A1246",
    },
    {
        id: 3,
        content: <Project3 />,
        className: "col-span-1",
        thumbnail:
            "https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/139633058_267805804761431_8279460874777942407_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LzoeCRLM6g0Q7kNvgFTsd6A&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AUHk_tX29P4eAFgGPUREt-f&oh=00_AYDj84mIqnXTQkhw_AJDOYlMppyGSHYGuE0UTFthyGH0Jw&oe=6719E2FF",
    },
    {
        id: 4,
        content: <Project4 />,
        className: "md:col-span-1",
        thumbnail:
            "https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/206637972_371683061040371_1905462529153240037_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8y730llpnjEQ7kNvgHqOJjk&_nc_ht=scontent.fadd2-1.fna&oh=00_AYBKOX9Q0cQOyKzSn3RKKJnuKoaZxPGyY9bU8oVDoW06tA&oe=6719F51B",
    }, {
        id: 5,
        content: <Project5 />,
        className: "md:col-span-2",
        thumbnail:
            "https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/HVAHVAC-R-installation.jpg",
    },
];

