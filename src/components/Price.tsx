"use client";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import { toast } from "react-toastify";


const Price = ({product} : {product:ProductType}) => {

    const [total, setTotal] = useState(product.price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    const { addToCart } = useCartStore();

    useEffect(()=>{
        useCartStore.persist.rehydrate()
    },[])
    

    useEffect(() => {
        if (product.options?.length) {
          setTotal(quantity * product.price + product.options[selected].additionalPrice-9);
        }
      }, [quantity, selected, product]);

      const handleCart = ()=>{
        addToCart({
          id: product.id.toString(),
          title: product.title,
          img: product.img,
          price: total,
          ...(product.options?.length && {
            optionTitle: product.options[selected].title,
          }),
          quantity: quantity,
        })
        toast.success("The product added to the cart!")
      }
    

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total}</h2>
        {/* Option container */}
        <div className="flex gap-4">
        {product.options?.length &&
            product.options?.map((option, index) => (
                <button key={option.title} className='min-w-6rem p-2 ring-1 ring-sky-800 rounded-md' style={{background: selected === index? "rgb(7 89 133)" : "white", color: selected === index? "white": "rgb(7 89 133)" }} onClick={()=>setSelected(index)}> 
                    {option.title}
                </button>
            ))
        }
        </div>
        {/* Quantity & Add button container */}
        <div className='flex justify-between items-center'>
            {/* Quantity */}
            <div className='flex justify-between items-center w-full p-3 ring-1 ring-sky-900'>
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={()=>setQuantity(prev=>(prev>1?prev-1:prev))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={()=>setQuantity(prev=>(prev<9?prev+1:prev))}>{'>'}</button>
                </div>
            </div>
            {/* Cart button */}
            <button className='bg-sky-800 w-56 text-white uppercase p-3 ring-1 ring-sky-900' onClick={handleCart}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default Price