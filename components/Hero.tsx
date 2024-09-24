
import React from 'react'
import { ImagesSlider } from "./ui/backgroundImageSlider";
import { TypewriterEffectSmooth } from "./ui/TextReveal";

const words = [
    {
        text: "Welcome To",
        className: "text-slate-100 dark:text-blue-500",


    },
    {
        text: "MTS",
        className: "text-primary dark:text-blue-500",
    },
    {
        text: ", We",
        className: "text-slate-100 dark:text-blue-500",

    },
    {
        text: "Clean ",
        className: "text-primary dark:text-blue-500",

    },
    {
        text: "Because We Care",
        className: "text-slate-100",
    },
];

const Hero = () => {
    return (
        <div className='w-full md:h-[99vh] h-[calc(100vh-150px)] z-10 overflow-hidden relative top-20'>
            <ImagesSlider className='z-50' >
                <h1 className="text-primary z-50"></h1>
            </ImagesSlider>
        </div>
    )
}

export default Hero