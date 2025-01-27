import React from "react";
import Image from "next/image";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import DeleteButton from "@/components/DeleteButton";
import FeatureButton from "@/components/FeatureButton";

const getProduct = async (id:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${id}`, {cache:"no-store"} )
  
    if(!res.ok){
      throw new Error("Failed!");
    }
  
    return res.json()
  }
  
const SingleProductPage = async ({params}: { params: Promise< { id:string } > } ) => {
    const {id} = await params
    const singleProduct:ProductType = await getProduct(id)

    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-sky-800 md:flex-row md:gap-8 md:items-center relative">
            {/* Image container */}
            <div className="relative w-full h-1/2 md:h-[70%]">
                {   
                    singleProduct.img &&
                    <Image src={singleProduct.img} alt="" className="object-contain" fill />
                }
            </div>
            {/* Text container */}
            <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
                <h1 className="font-bold uppercase text-3xl xl:text-5xl">{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
                <Price product={singleProduct}/>
            </div>
            <DeleteButton id={singleProduct.id.toString()}/>
            <FeatureButton id={singleProduct.id.toString()}/>
        </div>
    )
}

export default SingleProductPage;