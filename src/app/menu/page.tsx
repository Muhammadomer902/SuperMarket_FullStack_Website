import React from "react";
import Link from "next/link";
import { MenuType } from "@/types/types";
import AddButton from "@/components/AddButton";


//res = result
const getMenu = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {cache:"no-store"} )

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const MenuPage = async () => {

  const menu:MenuType = await getMenu();

  return (
    <div>
      <div className="p-4 lg:px-20 xl:px-40 h-[calc(240vh-6rem)] sm:h-[calc(150vh-6rem)] md:h-[calc(100vh-9rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-0">
        {
          menu.map(category => (
            <Link href={`/menu/${category.slug}`} key={category.id} className="w-full h-70 bg-cover p-8" style={{backgroundImage: `url(${category.img})`}}>
              <div className={`text-${category.color}`}>
                <h1 className="font-bold uppercase text-3xl">{category.title}</h1>
                <p className="text-sm my-8 w-2/3 ">{category.desc}</p>
                <button className={`hidden 2xl:block bg-white text-black py-2 px-4 rounded-md`}>Explore</button>
              </div>
            </Link>
          ))
        }
      </div>
      {/* Add Product Button */}
      <div className="flex justify-center py-4">
        <AddButton/>
      </div>
    </div>
  );
}

export default MenuPage;
