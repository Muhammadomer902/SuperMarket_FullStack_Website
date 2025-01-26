type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Mango",
      desc: "Indulge in the luscious sweetness of Chaunsa mangoes, known for their rich, juicy pulp and aromatic fragrance.",
      img: "/Mango_Chaunsa_Nawabpuri_fruit.png",
      price: 2.00,
      options: [
        {
          title: "Rahim Yar Khan",
          additionalPrice: 0.0,
        },
        {
          title: "Multan",
          additionalPrice: 0.1,
        },
        {
          title: "Muzaffargarh",
          additionalPrice: 0.2,
        },
      ],
    },
    {
      id: 2,
      title: "Chicken",
      desc: "Fresh chicken, tender and juicy, perfect for a variety of meals. Sourced from trusted farms, it offers rich flavor and nutrition, ideal for grilling, roasting, or stir-frying.",
      img: "/chicken_fresh_meat.png",
      price: 1.37,
      options: [
        {
          title: "Alive",
          additionalPrice: 0,
        },
        {
          title: "meat",
          additionalPrice: 0.61,
        },
        {
          title: "Boneless",
          additionalPrice: 1.85,
        },
      ],
    },
    {
      id: 3,
      title: "Tomatos",
      desc: "Fresh, juicy tomatoes, rich in flavor and vibrant in color, perfect for enhancing salads, sauces, and a wide range of dishes.",
      img: "/mediterranean_tomatos_veg_fruit.png",
      price: 0.73,
      options: [
        {
          title: "Bahawalpur",
          additionalPrice: 0,
        },
        {
          title: "Shiekupura",
          additionalPrice: 0.7,
        },
        {
          title: "Bahawalnagar",
          additionalPrice: 1.3,
        },
      ],
    },
    {
      id: 4,
      title: "Water",
      desc: "Pure, refreshing water, essential for hydration and perfect for quenching your thirst anytime.",
      img: "/water_bottle_dispenser_bevrage.png",
      price: 0.66,
      options: [
        {
          title: "5L",
          additionalPrice: 0,
        },
        {
          title: "7.5L",
          additionalPrice: 0.33,
        },
        {
          title: "10L",
          additionalPrice: 0.66,
        },
      ],
    },
  ];
  