import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/types";

// Fetch products based on category
const getProducts = async (category: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products?cat=${category}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const CategoryPage = async ({ params }: {params: Promise<{ category: string }> }) => {
  const {category} = await params
  const products: ProductType[] = await getProducts(category);

  return (
    <div className="flex flex-wrap text-sky-800">
      {products.map((item) => (
        <Link
          className="w-full h-[60vh] border-l-2 border-t-2 border-r-2 border-b-2 border-sky-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group hover:bg-fuchsia-200 even:bg-fuchsia-100"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* Image Container */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold group">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block bg-sky-800 text-white uppercase p-2 rounded-md">ADD TO CART</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
