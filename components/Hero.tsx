
import React from 'react'
import { ImagesSlider } from "./ui/backgroundImageSlider";

const Hero = () => {
    return (
        <div className='md:h-[99vh] h-[calc(100vh-150px)] z-10 overflow-hidden relative '>
            <ImagesSlider className='z-50' >
                <h1 className="text-primary z-50"></h1>
            </ImagesSlider>
        </div>
    )
}

export default Hero