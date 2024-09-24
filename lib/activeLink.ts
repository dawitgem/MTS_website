"use client"
import { usePathname } from "next/navigation";

export const isActive = (link: string) => {
    const pathname = usePathname();
    console.log(pathname)
    return pathname === link;
};