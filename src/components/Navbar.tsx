import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const NavBar = () => {
    
    //Temp
    const user = false;

    return (
        <div className="bg-sky-400 text-white h-12 p-4 flex justify-between items-center border-b-2 border-b-sky-600 uppercase">
            {/*For Wider Screen Left-Side*/}
            <div className="hidden md:flex gap-4 lg:px-10 xl:px-20">
                <Link href="/">HOME</Link>
                <Link href="/menu">MENU</Link>
                <Link href="/about">ABOUT-US</Link>
                <Link href="/contact">CONTACT</Link>
            </div>
            {/*Logo*/}
            <div>
                <Link href="/"><Image src="/temporary/logo.png" alt="Supermarkets logo" width={80} height={80}/></Link>
            </div>
            {/*Menu*/}
            <div className="md:hidden">
                <Menu/>
            </div>
            {/*For Wider Screen Right-Side*/}
            <div className="hidden md:flex gap-4 items-center lg:px-10 xl:px-20">
                {/*To make phone Number standout "bg-green-800 px-1 rounded-md border-4 border-black"*/}
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src="/temporary/phone.png" alt="Our Phone Number" width={20} height={20}/>
                    <span>+92 000 0000000</span>
                </div>
                <UserLinks/>
                <Link href="/cart">
                    <CartIcon/>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;