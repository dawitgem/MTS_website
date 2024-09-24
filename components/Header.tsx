import React from 'react'
import Link from 'next/link'
import Logo from "../public/assets/logo.png"
import Image from 'next/image'
import * as motion from "framer-motion/client"
import { Navbar } from './Navbar'
import { MobileNavBar } from './MobileNavBar'

const Header = () => {

  return (
    <motion.header
      animate={{ height: "110px" }}
      className='bg-slate-50  fixed top-0 left-0 right-0 w-screen flex justify-between items-center px-8 pt-4 pb-2 z-[99] shadow-md'
      style={{ transition: 'height 0.3s ease' }}
    >
      <Link href={""} className='flex md:flex-row flex-col justify-center items-center gap-5'>
        <Image src={Logo} alt='MTS_logo' width={120} height={120} />
        <h1 className={`md:text-3xl text-2xl font-extrabold text-slate-600`}>
          ኤም ቲ ኤስ
        </h1>
      </Link>
      <Navbar />
      <MobileNavBar />
    </motion.header>
  )
}

export default Header;
