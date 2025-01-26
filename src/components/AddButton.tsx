"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

const AddButton = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (status === "unauthenticated" || !session?.user.isAdmin) {
        return;
      }

  return (
    <div>
        <Link href="/add">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md">
                    Add Product
                </button>
        </Link>
    </div>
  )
}

export default AddButton