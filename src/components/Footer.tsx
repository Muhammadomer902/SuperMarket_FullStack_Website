import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-sky-400 h-full p-4 lg:px-20 xl:px-40 text-white flex items-center justify-between border-t-4 border-sky-600">
            <Link href="/"><Image src="/temporary/logo.png" alt="Supermarkets logo" width={160} height={160}/></Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footer;