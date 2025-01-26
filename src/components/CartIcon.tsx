"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/utils/store";

const CartIcon = () => {
    const {totalItems} = useCartStore();

    useEffect(()=>{
        useCartStore.persist.rehydrate()
      },[])
    

    return (
        <div className="flex items-center gap-4 md:gap-1">
            <div className="relative w-8 h-8 md:h-6 md:w-6">
                <Image src="/temporary/cart.png" alt="cartIcon" fill/>
            </div>
            <span>
                Cart ({totalItems})
            </span>
        </div>
    )
}

export default CartIcon;