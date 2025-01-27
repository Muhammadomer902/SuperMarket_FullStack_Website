import React from 'react'
import Image from 'next/image'
import { ProductType } from '@/types/types';

//res = result
const getFeatured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`, {cache:"no-store"} )
  
    if(!res.ok){
      throw new Error("Failed!");
    }
  
    return res.json()
}
  
const FeaturedItem = async () => {

    const featuredProducts: ProductType[] = await getFeatured();

  return (
    <div className='w-full overflow-x-scroll scrollbar-hide  text-sky-800'>
        {/* Wrapper */}
        <div className='w-max flex'>
            {/* Single Item */}
            {   featuredProducts.map(item=>(              
                    <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                        {/* Image */}
                        {   item.img && (
                            <div className='relative flex-1 w-full'>
                                {/* "hover:rotate-[30deg] transition-all duration-300" to make image animate */}
                                <Image src={item.img} alt="" fill className='object-contain'/>
                            </div>)
                        }
                        {/* Text */}
                        <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
                            <h1 className='text-xl font-bold uppercase xl:text-2xl'>{item.title}</h1>
                            <p className='p-4'>{item.desc}</p>
                            <span className='text-xl font-bold'>${item.price}</span>
                            <button className='bg-sky-500 text-white p-2 rounded-md'>Add To Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedItem