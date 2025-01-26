"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const pages = [
    { id:1, title:"Home", url:"/"},
    { id:2, title:"Menu", url:"/menu"},
    { id:3, title:"About Us", url:"/about"},
    { id:4, title:"Contact", url:"/contact"}
]

const Menu = () => {

    const [open, setOpen] = useState(false);
    //Temp
    const user = true;

    return (
        <div>
            {
                !open ?
                (<Image src="/temporary/open.png" alt="compressed menu" width={20} height={20} onClick={()=>setOpen(true)}/>) 
                : 
                (<Image src="/temporary/close.png" alt="compressed menu" width={20} height={20} onClick={()=>setOpen(false)}/>)
            }
            
            {open &&        
                <div className="text-white bg-sky-600 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-2xl z-10">
                    {pages.map(item=>(<Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>))}
                    {
                        !user ?
                        (
                            <Link href="/logIn" onClick={()=>setOpen(false)}>LOGIN</Link>
                        )
                        :
                        (
                            <Link href="/orders" onClick={()=>setOpen(false)}>ORDERS</Link>
                        )
                    }
                    <Link href="/cart" onClick={()=>setOpen(false)}>
                        <CartIcon/>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Menu;