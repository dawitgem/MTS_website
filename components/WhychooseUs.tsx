"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhychooseUs = () => {
    // Set up in-view detection
    const [ref, inView] = useInView({ triggerOnce: true });

    // Control the animation
    const controls = useAnimation();

    // Trigger the animation when in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    // Animation variant for appearing
    const variant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.3, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variant}
            className="p-10 bg-blue-800"
        >
            WhychooseUs
        </motion.div>
    );
};

export default WhychooseUs;
