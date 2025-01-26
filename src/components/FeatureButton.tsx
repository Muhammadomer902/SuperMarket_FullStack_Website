"use client"
import { useSession } from "next-auth/react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const FeatureButton = ({id}: {id:string}) => {

    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>;
      }
    
      if (status === "unauthenticated" || !session?.user.isAdmin) {
        return;
      }

      const handleFeatured = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/products/${id}`, { method: "PATCH" });
      
          if (res.status === 200) {
            const data = await res.json();
            router.push("/");
            toast.success(
                data.isFeatured
                  ? "The product has been featured successfully!"
                  : "The product has been unfeatured!"
              );
          } else {
            const error = await res.json();
            toast.error(error.message || "Failed to feature the product.");
          }
        } catch (error) {
          console.error("Error featuring the product:", error);
          toast.error("An unexpected error occurred. Please try again.");
        }
      };

  return (
    <button className="bg-sky-800 p-2 text-white rounded-full absolute top-4 right-16" onClick={handleFeatured}>Toogle Feature</button>
  )
}

export default FeatureButton