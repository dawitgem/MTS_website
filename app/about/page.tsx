"use client";
import PageHero from '@/components/PageHero';
import React from 'react';
import { motion } from 'framer-motion';
import OurserviceGrid from '@/components/OurserviceGrid';
import { featuredServices } from '@/lib/data';
import Link from 'next/link';
import commitment from "../../public/assets/commitment.svg";
import workforce from "../../public/assets/workforce.svg";
import approach from "../../public/assets/approach.svg";
import quality from "../../public/assets/quality.svg";
import trackRecord from "../../public/assets/trackRecord.svg";
import satisfaction from "../../public/assets/satisfaction.svg";
import pricing from "../../public/assets/pricing.svg";
import hotel from "../../public/assets/hotel.svg";
import hospital from "../../public/assets/hospitals.svg";
import pharmacy from "../../public/assets/pharmacy.svg";
import industry from "../../public/assets/industry.svg";
import govt from "../../public/assets/government.svg";
import supermarket from "../../public/assets/supermarket.svg";
import plane from "../../public/assets/avaition.svg";
import Beer from "../../public/assets/beverage.svg";
import bgi from "../../public/assets/bgi_logo.png"
import Image from 'next/image';
import becustomer from "../../public/assets/be_customer.png"
import { GoMail } from 'react-icons/go';
import { LuPhone } from 'react-icons/lu';

const whyUs = [
    {
        icon: commitment,
        title: "Commitment to Excellence",
        description: "We strive to exceed expectations by delivering high-quality services consistently."
    },
    {
        icon: quality,
        title: "Stringent Quality Control",
        description: "Our rigorous quality assurance processes ensure that we maintain high standards in every project."
    },
    {
        icon: satisfaction,
        title: "Satisfaction Guarantee",
        description: "Your satisfaction is our priority; we are committed to resolving any issues promptly to ensure a positive experience."
    },
    {
        icon: pricing,
        title: "Transparent Pricing",
        description: "Our clear pricing structure eliminates surprises, fostering trust and confidence in our services."
    },
    {
        icon: workforce,
        title: "Extensive Workforce",
        description: "Our team of over 200 highly trained professionals enables us to handle projects of any size and complexity."
    },
    {
        icon: approach,
        title: "Tailored Approach",
        description: "We work closely with clients to create customized solutions that meet their unique needs."
    },
    {
        icon: trackRecord,
        title: "Established Track Record",
        description: "With years of industry experience, we have built a strong reputation for reliability and professionalism, backed by positive client testimonials."
    }
];


const ourStaff = [
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "CEO"
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "COO"
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "CFO"
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "Director Of Maintenance Operations"
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "Operations Manager."
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "Cleaning Services Manager"
    },
    {
        img: "https://borkena.com/wp-content/uploads/2024/05/Sisay-profile-_-Abiy-Article-_-ethiopian-politics-1.jpg",
        Name: "John Doe",
        jobTitle: "Administrative Manager"
    }
];

const ourPartners = [{
    icon: Beer,
    title: "Beverage Factories"
}, {
    icon: industry,
    title: "Manufacturing Industries"
}, {
    icon: govt,
    title: "Governmental Offices"
},
{
    icon: hospital,
    title: "Hospitals"
}, {
    icon: pharmacy,
    title: "Pharmacutical Factories"
}, {
    icon: plane,
    title: "Avaition"
},
{
    icon: hotel,
    title: "Hotels"
},
{
    icon: supermarket,
    title: "Supermarkets"
},
]

const page = () => {
    // Define animation variants
    const revealVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <div className="w-full flex flex-col gap-24 bg-white">
            <PageHero img='https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/MTS-Team.png' page='about' title='About Us' />

            <div className='mt-10 flex gap-8 md:flex-row flex-col justify-between p-10  '>
                <motion.div
                    variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col gap-8 w-full flex-wrap"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className='text-md font-semibold text-primary'>About us</h3>
                    <h1 className='text-4xl font-black text-gray-700 text-center '>MTS Cooling Maintenance <br /><span className='text-center '>&</span> <br /> Cleaning Service</h1>
                    <p className='text-md text-gray-700 font-medium'>MTS trading plc was established in 2016 in Addis Ababa as a legally registered company. MTS trading is a private limited company dedicated to the provision of professional and high-quality cleaning Service, Installation and maintenance of Cooled /freezer rooms, chiller systems, Refrigeration, and Ac systems.</p>
                    <p className='text-md text-gray-700 font-medium'>The provision of cleaning and maintenance service is one of our premier specialties. Over two decades working with the brewery industry, we have rich and practical experience especially in providing cost-effective solutions in handling cooler preventive maintenance processes. We have built a trusted name in quality service delivery in this regard. MTS trading plc strives to maintain the highest quality service that includes continuous training.</p>
                </motion.div>
                <motion.div
                    variants={{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }}
                    initial="hidden"
                    whileInView="visible"
                    className="relative z-50 w-full h-full lg:block flex flex-col   "
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Large central image */}
                    <Image src={"https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/242488559_424701809071829_3585496142187770906_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1gWwSQB3Fb8Q7kNvgFy9Sba&_nc_ht=scontent.fadd1-1.fna&_nc_gid=A2T6Nz8xnWe2w1MY8uPCXwe&oh=00_AYDEaKGBG08buEV5pwauGBiaZ4WZ1g2GtuWnuTYmJfVjKg&oe=66F71ADC"} alt='mts_trading_pic' width={400} height={50} className='w-full md:h-[500px]' />

                    {/* Top left smaller image */}
                    <div className="lg:absolute top-0 left-0 lg:transform lg:-translate-x-6 lg:translate-y-6">
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                            <Image src={"https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/87397113_131877705020909_1080918933394948096_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mEcbzLYbQ9MQ7kNvgGdWxcq&_nc_ht=scontent.fadd2-1.fna&_nc_gid=ALI-BhOhAOJ6rrGNhUc3-U_&oh=00_AYBkmmft9B_KpbNi9o-RG1_DCLgFlGimiEyNAtBAqCl2_A&oe=6718D547"} alt='mts_trading_pic' width={400} height={50} className='w-[300px] h-[150px]' />
                        </div>
                    </div>

                    {/* Bottom left smaller image */}
                    <div className="lg:absolute bottom-0 left-0 lg:transform lg:-translate-x-6 lg:translate-y-6">
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                            <Image src={"https://scontent.fadd1-1.fna.fbcdn.net/v/t1.6435-9/85119299_131877901687556_4509234907930689536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z_5FAam6rkkQ7kNvgF1TOYj&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AgDZrB1sNjEqfMqWzL5MTGR&oh=00_AYCQVXhwtsbSxBL1mxJiYl4t5e8QKOAkJqr0QsHUWaaDoA&oe=6718C6E9"} alt='mts_trading_pic' width={400} height={500} className='w-[300px] h-[150px]' />
                        </div>
                    </div>



                </motion.div>
            </div>

            <div className='flex flex-col gap-8 justify-center items-center p-4  border-green-500'>
                <h3 className='text-md font-semibold text-primary'>Feature services</h3>
                <h1 className='text-3xl font-extrabold text-gray-600 text-center'>Setting the Standard <br /> for Excellence <br />in Ethiopia</h1>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <OurserviceGrid ourServicesItems={featuredServices} />
                    <Link href={"/services"} className='bg-primary p-4 text-md font-semibold text-white rounded-md'>More Services</Link>
                </div>
            </div>

            <div className='bg-primary/20 flex flex-col gap-5 p-5 align-middle justify-center items-center'>
                <h1 className='text-3xl text-center text-gray-600 font-extrabold'>Why Choose Us?</h1>
                <div className='grid grid-cols-1 gap-4 items-center md:grid-cols-3 lg:grid-cols-4'>
                    {whyUs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={revealVariants}
                            initial="hidden"
                            whileInView="visible"
                            className='flex md:flex-row flex-col items-center gap-4'
                            viewport={{ once: true }} // Only reveal once
                        >
                            <Image src={item.icon} alt={item.title} width={80} height={80} />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg text-gray-600 font-bold'>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-slate-200 text-white flex  flex-col md:flex-row justify-center items-center px-1 md:px-5 lg:px-10 ">
                <Image src={bgi} alt="repaire" width={800} height={800} className="w-full h-full" />
                <div className="flex flex-col gap-2 w-full">
                    <h1 className='text-2xl md:text-3xl font-extrabold text-gray-600 text-center '>
                        Exclusive Draft beer line cleaning agent for <span className='text-primary'>BGI Ethiopia</span> </h1>
                    <p className="text-center text-md text-gray-500 ">Our exclusive draft beer line cleaning agent ensures optimal hygiene and taste, maintaining the quality BGI Ethiopia is renowned for</p>


                </div>
            </div>

            <div className='w-full flex flex-col gap-10 p-8  justify-center items-center '>
                <h3 className='text-md font-semibold text-primary'>Our partners</h3>
                <h1 className='text-4xl font-black text-gray-600 text-center'>A Trusted Service Provider In Ethiopia</h1>
                <h1 className='text-2xl font-semibold text-gray-600 text-center'>Serving Top Companies Across Multiple Sectors</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center'>
                    {ourPartners.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={revealVariants}
                            initial="hidden"
                            whileInView="visible"
                            className='flex md:flex-row flex-col items-center gap-4'
                            viewport={{ once: true }} // Only reveal once
                        >
                            <Image src={item.icon} alt={item.title} width={80} height={80} />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg text-gray-600 font-bold'>{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className=''>
            </div>

            <div className='w-full flex flex-col gap-10 p-8  justify-center items-center'>
                <h3 className='text-md font-semibold text-primary'>Our Team</h3>
                <h1 className='text-4xl font-black text-gray-600 text-center'>Our Dedicated Staff Members</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                    {ourStaff.map((staff, idx) => (
                        <div key={idx} className='bg-slate-50 p-5 rounded-lg  shadow-lg flex flex-col w-[300px] gap-5'>
                            <Image src={staff.img} alt="mts_staff" width={500} height={500} className='w-full h-2/3' />
                            <h2 className='text-xl font-extrabold text-gray-700 p-2'>{staff.Name}</h2>
                            <h4 className='text-md font-medium text-gray-600 p-3'>{staff.jobTitle}</h4>
                        </div>
                    ))}

                </div>
            </div>
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
            </div>
        </div>
    );
};

export default page;
