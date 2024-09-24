"use client"
import PageHero from '@/components/PageHero'
import React from 'react'
import * as motion from "framer-motion/client"

const revealVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const page = () => {
    return (
        <div className="w-full flex flex-col gap-[6rem] justify-center bg-slate-100 mb-5">
            <PageHero img='https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/139672943_268727328002612_4763980657957749097_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=GMmeLrT5rCcQ7kNvgH9LXX2&_nc_ht=scontent.fadd2-1.fna&_nc_gid=A0wMiE3IhMVWKjeHK4hbzwQ&oh=00_AYC03rhXOUrHlxKQs93DIOHNf9tz1xIlwZ100v-exMeDfQ&oe=671A1E5E' page='portfolio' title='Portfolio' />
            <motion.section
                className='w-full flex flex-col gap-10 justify-center items-center'
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Reveal animation once in view
            >
                <h1 className='text-2xl lg:text-3xl font-black text-gray-700 text-center break-words'>
                    Years of Experience, Countless Successful Projects
                </h1>
                <h3 className='text-2xl font-bold text-gray-600 text-center break-words'>we deliver cleaning and cooling solutions that bring real value to our clients.</h3>


            </motion.section>
            <motion.section
                className='w-full flex flex-col gap-10 '
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // Reveal animation once in view
            >
                <h3 className='text-md font-semibold text-center text-primary'>Our Recent Projects</h3>
                <ProjectGrid />

                <Contact />

            </motion.section>
        </div>
    )
}

export default page


import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';
import Contact from '@/components/Contact';

const ProjectGrid = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} className={project.className} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project, className }: { project: any, className: any }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={`w-full relative rounded-lg overflow-hidden shadow-lg cursor-pointer ${className}`}
        >
            <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover" />
            <div className="absolute inset-0 flex flex-col gap-5 justify-end bg-black bg-opacity-60 text-white p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <ProjectDialog project={project} />
            </div>
        </motion.div>
    );
};

const ProjectDialog = ({ project }: { project: any }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" mt-2">
                    Read More
                </Button>
            </DialogTrigger>
            <DialogContent className=" max-w-full min-h-[400px] h-screen overflow-auto bg-slate-50 rounded-lg w-full lg:w-3/4">
                <DialogHeader>
                    <DialogTitle className='text-lg lg:text-2xl font-bold text-gray-600'>{project.title}</DialogTitle>
                    <DialogDescription className='text-sm lg:text-lg font-medium text-gray-500'>
                        {project.details}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-[400px] object-cover rounded-md" />
                </div>
            </DialogContent>
        </Dialog>
    );
};

// Sample projects data (can be moved to a separate file)
const projects = [
    {
        id: 1,
        title: 'Draft-beer line Cleaning service for BGI Ethiopia',
        description: 'We are Exclusive draft beer line cleaning agents for BGI Ethiopia',
        details: ' With a proven track record of success, we proudly serve as the trusted provider of draft beer line cleaning services for BGI Ethiopia one of the largest and most prestigious brewers in the country. Over the years, we have worked closely with BGI Ethiopia to ensure the consistent quality and integrity of their renowned draft beer products by implementing a meticulous cleaning and maintenance regimen.',
        image: 'https://www.web1.mtstradingplc.com/wp-content/uploads/2024/04/brewery-tap-lines-maintenance-1-1024x498-1-990x490.jpg',
        className: "col-span-2"
    },
    {
        id: 2,
        title: 'Kitchen Duct & Coldroom Indoor unit General Services for  St. Paul’s Hospital',
        description: 'Short description of project two.',
        details: 'We are proud to provide specialized kitchen duct and cold room indoor unit maintenance services for St. Paul’s Hospital, ensuring a safe, hygienic, and efficient environment in their kitchen and food storage areas. Our expert team conducts thorough cleaning and servicing of kitchen ducts to prevent grease buildup, reduce fire hazards, and improve air quality. Additionally, we perform regular maintenance on cold room indoor units, ensuring optimal cooling performance and energy efficiency for food preservation. Through our comprehensive services, we help St. Paul’s Hospital maintain high standards of cleanliness, safety, and operational efficiency in their food service facilities.',
        image: 'https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/209021536_371683104373700_2453502857581829353_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yZeTSU4Sp0AQ7kNvgHEumI9&_nc_ht=scontent.fadd2-1.fna&_nc_gid=A8hXOdUIPP9cDjLs67SPC20&oh=00_AYCr-BOd2gaVIR0zeHgQs7uaWqA1EDDPm_JRdBMGK0sApA&oe=6719E805',
        className: ""
    },
    {
        id: 3,
        title: 'Cold room maintenance for Safway Supermarket',
        description: '',
        details: 'In our longstanding partnership with Safeway Supermarket, we have provided exceptional cold room maintenance services that have significantly enhanced their refrigeration capabilities. Over the years, our team has been instrumental in implementing a comprehensive maintenance program that includes regular servicing, thorough cleaning, and timely repairs of cold room units. Our proactive approach has not only ensured optimal temperature control but has also minimized downtime and reduced energy costs. Through meticulous attention to detail, we have helped Safeway Supermarket maintain the integrity of their perishable inventory, contributing to their reputation for quality and reliability in the community.',
        image: 'https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/139633058_267805804761431_8279460874777942407_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LzoeCRLM6g0Q7kNvgFTsd6A&_nc_ht=scontent.fadd2-1.fna&_nc_gid=AUHk_tX29P4eAFgGPUREt-f&oh=00_AYDj84mIqnXTQkhw_AJDOYlMppyGSHYGuE0UTFthyGH0Jw&oe=6719E2FF',
        className: ""
    },
    {
        id: 4,
        title: 'HVAC-R installation for Ethiopian Airlines',
        description: 'Short description of project four.',
        details: 'Our collaboration with Ethiopian Airlines has led to the successful installation of advanced HVAC-R systems that significantly enhance the comfort and efficiency of their operations. Over the years, we have worked closely with Ethiopian Airlines to design and implement tailored HVAC-R solutions that meet the unique demands of their facilities. Our expert team has executed comprehensive installations, ensuring optimal temperature control and air quality in both passenger and cargo areas. This partnership has not only improved passenger comfort but also safeguarded sensitive cargo, maintaining the highest standards of safety and quality. Through our commitment to excellence, we continue to support Ethiopian Airlines in their mission to provide world-class service to travelers and cargo clients alike.',
        image: 'https://www.web1.mtstradingplc.com/wp-content/uploads/2024/02/HVAHVAC-R-installation.jpg',
        className: "col-span-2"
    },
];



