import Image from 'next/image'
import React from 'react'

interface PageHeroProps {
  img: string | any,
  page: string
  title: string
}

const PageHero = ({ img, page, title }: PageHeroProps) => {
  return (
    <div className='w-full h-screen  '>
      <div className='absolute inset-0 bg-black/40 z-40 top-0 left-0 right-0 w-full h-full'></div>
      <div className='absolute z-50 inset-0 top-0 left-0 w-full  flex items-center justify-center align-middle'>
        <h1 className='text-5xl font-black text-slate-200 text-center w-full break-words'>{title}</h1>
      </div>
      <Image src={img} alt={page} width={500} height={500} className=' absolute w-full h-full object-cover object-center' />
    </div>
  )
}

export default PageHero