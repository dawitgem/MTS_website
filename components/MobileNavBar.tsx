"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { TfiClose } from "react-icons/tfi"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Custom Modal Component
const CustomModal = ({ isOpen, onClose, children }: { isOpen: any, onClose: any, children: any }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-[110px] right-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-end">
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="bg-secondary shadow-lg w-3/4 h-full"
            >
                <div className="p-8 flex flex-col gap-4">
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const isActive = (link: string) => {
        const pathname = usePathname();
        console.log(pathname)
        return pathname === link;

    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden max-w-full">
            <button
                className="text-3xl focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <motion.div
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <TfiClose className="text-slate-600" />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ rotate: 90 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <HiMenuAlt3 className="text-slate-600" />
                    </motion.div>
                )}
            </button>

            <CustomModal isOpen={isOpen} onClose={toggleMenu}>
                <nav className="flex flex-col space-y-8 text-lg font-semibold ">
                    <Link href="/" onClick={toggleMenu} className={`${isActive("/") ? "text-primary" : "text-slate-200"}`}>
                        Home
                    </Link>
                    <Link href="/about" onClick={toggleMenu} className={` ${isActive("/about") ? "text-primary" : "text-slate-200"} `}>
                        About
                    </Link>
                    <Link href="/services" onClick={toggleMenu} className={`${isActive("/services") ? "text-primary" : "text-slate-200"} `}>
                        Services
                    </Link>
                    <Link href="/portfolio" onClick={toggleMenu} className={`${isActive("/portfolio") ? "text-primary" : "text-slate-200"} `}>
                        Portfolio
                    </Link>
                    <Link href="/contact" onClick={toggleMenu} className={`${isActive("/contact") ? "text-primary" : "text-slate-200"} `}>
                        Contact
                    </Link>
                </nav>
            </CustomModal>
        </div>
    );
}
