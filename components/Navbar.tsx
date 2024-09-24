"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const serviceItems = [
    {
        href: "/services/draft-beer_line_cleaning",
        title: "Draft Line Cleaning"
    },
    {
        href: "/services/cooler_&_refrigration_maintenance",
        title: "Cooler and Refrigeration Maintenance"
    },
    {
        href: "/services/hvac_installation_&_maintenance",
        title: "HVAC-R Installation and Maintenance"
    },
    {
        href: "/services/cold_room_&_reefer_vehicle",
        title: "Cold Room and Reefer Vehicle Installation and Maintenance"
    },
    {
        href: "/services/chiller_installation_&_maintenance",
        title: "Chiller Installation and Maintenance"
    },
    {
        href: "/services/cleaning_&_disinfecting",
        title: "Cleaning and Disinfecting Houses and Industrial Machineries"
    }
];


export function Navbar() {

    return (
        <nav className='hidden lg:block  top-0 '>
            <ul className=' flex flex-wrap items-center  justify-end gap-10  w-full md:text-slate-600 text-[17px] font-bold'>
                <Link href={"/"} className='hover:text-primary'>Home</Link>
                <Link href={"/about"} className='hover:text-primary'>About </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="tmd:text-slate-600 text-[17px] font-bold hover:text-primary">
                                <Link href={"/services"} className='hover:text-primary'>Services</Link></NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-slate-100">
                                <ul className="p-6 md:w-[400px] lg:w-[450px] ">
                                    {serviceItems.map((item, index) =>
                                        <ListItem key={index} href={item.href} title={item.title}>
                                        </ListItem>
                                    )}

                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Link href={"/portfolio"} className='hover:text-primary'>Portfolio </Link>
                <Link href={"/contact"} className='hover:text-primary'>Contact </Link>
                <Link href={"/contact"} className=" hidden md:block ml-6 self-end justify-self-end px-6 py-4  group relative overflow-hidden rounded-lg bg-primary  text-sm text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary hover:to-primary/65 hover:ring-2 hover:ring-primary hover:ring-offset-2">
                    <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
                    <span className="relative">Request Services</span>
                </Link>
            </ul>
        </nav>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-slate-700 hover:bg-slate-50/90 hover:text-primary focus:bg-slate-50/90 focus:text-primary",
                        className
                    )}
                    {...props}
                >
                    <div className="font-[550]  text-[16px] leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
