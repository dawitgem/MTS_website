"use client"
import { FC, useState, useEffect } from "react";
import * as motion from "framer-motion/client"; // Import from Framer Motion
import { Button } from "./ui/button";
import { RiWhatsappFill } from "react-icons/ri";

const FloatingWhatsAppButton: FC = () => {
    const whatsappNumber = "+251 930 29 48 60"; // Replace with your WhatsApp number
    const [isVisible, setIsVisible] = useState(false);
    const [isBgVisible, setIsBgVisible] = useState(false); // For background toggle
    const [isSmallDevice, setIsSmallDevice] = useState(false); // To track if it's a small device

    // Check the screen size when the component mounts
    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth < 640); // Update if screen width is smaller than 640px
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // Listen for resize events

        return () => window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    }, []);

    // Use useEffect to toggle visibility every 10 seconds for non-small devices
    useEffect(() => {
        if (!isSmallDevice) {
            const interval = setInterval(() => {
                setIsVisible(true); // Show text
                setIsBgVisible(true); // Show background
                setTimeout(() => {
                    setIsVisible(false); // Hide text after 5 seconds
                    setIsBgVisible(false); // Hide background after 5 seconds
                }, 5000);
            }, 10000); // Every 10 seconds

            return () => clearInterval(interval); // Clean up the interval on unmount
        }
    }, [isSmallDevice]);

    const handleMouseEnter = () => {
        if (!isSmallDevice) {
            setIsVisible(true);
            setIsBgVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isSmallDevice) {
            setIsVisible(false);
            setIsBgVisible(false);
        }
    };

    return (
        <div className="max-w-screen-xl  relative mx-auto">
            <motion.div
                className="fixed bottom-0 right-10 z-50 rounded-full p-2 flex justify-center items-center align-middle gap-2"
                initial={{ backgroundColor: "transparent" }} // Initial background state
                animate={{ backgroundColor: isBgVisible ? "#ffffff" : "transparent" }} // Animate background for non-small devices
                transition={{ duration: 0.3 }} // Smooth background transition
            >
                {/* Hidden text with animation - hidden on small screens */}
                {!isSmallDevice && (
                    <motion.div
                        className={`text-md font-bold text-gray-600 ${isVisible ? "block" : "hidden"} hidden sm:block`} // Hide on small screens
                        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move from below
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate to opacity 1 and slide up
                        transition={{ type: "spring", stiffness: 200, damping: 20 }} // Smooth spring animation
                    >
                        Chat with us on WhatsApp
                    </motion.div>
                )}

                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Call us on WhatsApp"
                >
                    <motion.div
                        className="relative p-1"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        whileHover={!isSmallDevice ? { scale: 1.1 } : {}} // Button scales on hover for non-small devices
                    >
                        {/* WhatsApp Button */}
                        <Button
                            size="icon"
                            className="w-18 h-18 text-white rounded-full bg-white transition-all"
                        >
                            <RiWhatsappFill size={60} className="text-green-500" />
                        </Button>
                    </motion.div>
                </a>
            </motion.div>
        </div>
    );
};

export default FloatingWhatsAppButton;
