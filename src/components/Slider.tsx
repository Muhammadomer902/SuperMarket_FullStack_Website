"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  { id: 1, title: "anything, anytime, anywhere!", image: "/temporary/slide1.jpeg" },
  { id: 2, title: "as fresh as it can get", image: "/temporary/slide2.jpg" },
  { id: 3, title: "the best serivce you can get", image: "/temporary/slide3.jpeg" }
];

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide((prev)=>(slides.length-1===prev?0:prev+1));
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] lg:flex-row bg-fuchsia-100'>
      {/* Text Container */}
      <div className=' flex flex-col items-center justify-center gap-8 text-sky-800 font-bold flex-1 '>
        <h1 className='text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl'>
          {slides[currentSlide].title}
        </h1>
        <a href='/menu'><button className='bg-sky-500 text-white py-4 px-8'>Order Now</button></a>
      </div>
      {/* Image Slider */}
      <div className='w-full relative flex-1'>
        <Image src={slides[currentSlide].image} alt='' fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider