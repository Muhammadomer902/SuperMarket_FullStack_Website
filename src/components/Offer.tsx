import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/temporary/offerbg.png')] md:h-[70vh]">
        {/* Text Container */}
        <div className='flex-1 text-white flex  flex-col justify-center items-center text-center gap-8 p-6'>
            <h1 className='text-5xl font-bold uppercase xl:text-6xl'>The Sleek & Stylish</h1>
            <p className='xl:text-xl'>Experience the ultimate in home entertainment with our high-definition TV. Featuring crisp visuals, vibrant colors, and stunning clarity, this TV brings your favorite movies, shows, and games to life. With advanced technologies like 4K resolution, HDR, and wide viewing angles, every scene is a masterpiece. </p>
            <CountDown/>
            <button className='bg-white text-black rounded-md py-3 px-6'>Order Now</button>
        </div>
        {/* Image Container */}
        <div className='flex-1 w-full relative md:h-full'>
            <Image src='/Samsung-TV-36.png' alt='' fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Offer