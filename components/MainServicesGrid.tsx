"use client"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



// Animation variants for each grid item
const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visibleFromLeft: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
    visibleFromRight: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
    visibleFromBottom: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function MainServicesGrid() {
    // For in-view detection
    const [refLeft, inViewLeft] = useInView({ triggerOnce: true });
    const [refRight, inViewRight] = useInView({ triggerOnce: true });
    const [refBottom, inViewBottom] = useInView({ triggerOnce: true });

    // Control animations based on in-view status
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const controlsBottom = useAnimation();

    useEffect(() => {
        if (inViewLeft) {
            controlsLeft.start("visibleFromLeft");
        }
        if (inViewRight) {
            controlsRight.start("visibleFromRight");
        }
        if (inViewBottom) {
            controlsBottom.start("visibleFromBottom");
        }
    }, [inViewLeft, inViewRight, inViewBottom, controlsLeft, controlsRight, controlsBottom]);

    return (
        <div className="w-full h-full flex flex-col gap-10">
            <h2 className="text-primary font-bold text-center text-lg">Featured Services</h2>
            <div className="grid md:grid-cols-3 gap-10">
                {/* First grid item from the left */}
                <motion.div
                    ref={refLeft}
                    initial="hidden"
                    animate={controlsLeft}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visibleFromLeft: variants.visibleFromLeft,
                    }}
                    className="bg-blue-500 shadow-lg rounded-md p-6"
                >
                    Draft-line cleaning
                </motion.div>

                {/* Middle grid item from the bottom */}
                <motion.div
                    ref={refBottom}
                    initial="hidden"
                    animate={controlsBottom}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visibleFromBottom: variants.visibleFromBottom,
                    }}
                    className="bg-green-500 shadow-lg rounded-md p-6"
                >
                    Disinfecting and cleaning
                </motion.div>

                {/* Last grid item from the right */}
                <motion.div
                    ref={refRight}
                    initial="hidden"
                    animate={controlsRight}
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visibleFromRight: variants.visibleFromRight,
                    }}
                    className="bg-red-500 shadow-lg rounded-md p-6"
                >
                    HVAC Installation and Maintenance
                </motion.div>
            </div>
        </div>
    );
}
