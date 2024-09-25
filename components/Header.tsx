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
      className='max-w-[1440px] mx-auto sticky top-0 left-0 right-0 z-[99] shadow-sm bg-white '
      style={{ transition: 'height 0.3s ease' }}

    >
      <nav className=' flex justify-between items-center  px-8 py-8 pb-2'>
        <Link href={""} className='flex md:flex-row flex-col justify-center items-center md:gap-5'>
          <Image src={Logo} alt='MTS_logo' width={120} height={120} />
          <h1 className={`md:text-3xl text-2xl font-extrabold text-slate-600`}>
            ኤም ቲ ኤስ
          </h1>
        </Link>
        <Navbar />
        <MobileNavBar />
      </nav>
    </motion.header>
  )
}

export default Header;
