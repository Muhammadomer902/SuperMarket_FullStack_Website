"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogInPage = () => {

    const {data,status} = useSession();
    const router = useRouter();

    if(status === "loading"){
        return <p>Loading...</p>
    }
    if(status === "authenticated"){
        router.push("/");
    }

    return (
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(110vh-9rem)] flex items-center justify-center">
            {/* Box */}
            <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[73%] md:w-full lg:w-[60%] xl:w-1/2">
                {/* Image Container */}
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <Image src="/temporary/loginbg.jpeg" alt="" fill className="object-cover"/>
                </div>
                {/* Form Container */}
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h1 className="font-bold text-xl lg:text-3xl">WELCOME</h1>
                    <p>Log into your account or create a new one using social buttons.<span className="font-bold uppercase">Start shoping now!</span></p>
                    <button className="flex gap-4 p-4 ring-1 ring-orange-600 rounded-md" onClick={()=>signIn("google")}>
                        <Image src="/temporary/google.png" alt="" className="object-contain" width={20} height={20}/>
                        <span>Sign in with Google</span>
                    </button>
                    <button className="flex gap-4 p-4 ring-1 ring-blue-600 rounded-md">
                        <Image src="/temporary/facebook.png" alt="" className="object-contain" width={20} height={20}/>
                        <span>Sign in with Facebook</span>
                    </button>
                    <p className="text-sm">Have a problem?<Link className="underline" href="/"> Contact us</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LogInPage;