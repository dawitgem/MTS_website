"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./TextReveal";
import { HeroHighlight, Highlight } from "../hero-highlight";

const images = [
    "/assets/Draft-line-clening-services.jpg",
    "/assets/MTS_disinfecting_bg.jpg",
    "/assets/hvac-testing-bg-fotor-2024091911321.jpg",
    "/assets/cleaning-service.jpg"
];

const heroTexts = [
    "Draft-line Cleaning",
    "Disinfecting",
    ["HVAC-R Installation", "And", "Maintenance"], // Nested array for two texts
    "General Cleaning Services"
];


export const ImagesSlider = ({
    children,
    overlay = true,
    overlayClassName,
    className,
    autoplay = true,
}: {
    children?: React.ReactNode;
    overlay?: React.ReactNode;
    overlayClassName?: string;
    className?: string;
    autoplay?: boolean;
}) => {
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1); // Positive for moving to the next slide
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection(-1); // Negative for moving to the previous slide
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        loadImages();
    }, []);

    const loadImages = () => {
        setLoading(true);
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages as string[]);
                setLoading(false);
            })
            .catch((error) => console.error("Failed to load images", error));
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === "ArrowLeft") {
                handlePrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // autoplay
        let interval: any;
        if (autoplay) {
            interval = setInterval(() => {
                handleNext();
            }, 5000);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%", // Slide from right if direction is positive, left if negative
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1.2 },
            },
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%", // Slide out in opposite direction
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1.4 },
            },
        }),
    };

    const areImagesLoaded = loadedImages.length > 0;

    return (
        <div
            className={cn(
                "overflow-hidden h-full w-full relative md:flex items-center justify-center ",
                className
            )}
            style={{
                perspective: "1000px",
            }}
        >
            {areImagesLoaded && children}
            {areImagesLoaded && overlay && (
                <div
                    className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
                />
            )}

            {areImagesLoaded && (
                <AnimatePresence custom={direction}>
                    <motion.img
                        key={currentIndex}
                        src={loadedImages[currentIndex]}
                        custom={direction} // Pass the direction to the variants
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={slideVariants}
                        className="image h-full w-full absolute inset-0 object-cover object-center"
                    />
                </AnimatePresence>
            )}

            {/* Text Animation */}
            {areImagesLoaded && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute z-50 bg-white/20 opacity-25 md:top-1/4 top-[20%] left-0 md:mx-10 rounded-lg md:w-3/4 lg:w-1/2 w-full flex flex-col gap-10 p-8"
                    >
                        <HeroHighlight className="flex flex-col items-center justify-center align-middle gap-6 z-[99]">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: [20, -5, 0] }}
                                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                                className="md:text-5xl text-3xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                            >
                                <span className="font-black text-primary">MTS</span> Your Trusted Partner
                                <br />
                                For
                                <br />
                                {Array.isArray(heroTexts[currentIndex])
                                    ? heroTexts[currentIndex].map((text, idx) => (
                                        <Highlight className="text-slate-300 dark:text-white w-full break-words">
                                            <span key={idx}>{text}</span><br />
                                        </Highlight>
                                    ))
                                    :
                                    <Highlight className="text-slate-300 dark:text-white w-full break-words">
                                        {heroTexts[currentIndex]}
                                    </Highlight>
                                }
                            </motion.h1>
                            <Link href={"/contact"} className="md:block w-1/2 justify-self-end px-6 py-4 group relative overflow-hidden rounded-lg bg-primary text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary hover:to-primary/65 hover:ring-2 hover:ring-primary hover:ring-offset-2">
                                <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
                                <span className="relative">Request Services</span>
                            </Link>
                        </HeroHighlight>
                    </motion.div>

                </AnimatePresence>
            )}
        </div>
    );
};
