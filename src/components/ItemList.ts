type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];

//   Item Fuits 

export const Fruits: Products = [
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
      title: "Mandarin",
      desc: "Mandarin is a refreshing citrus fruit known for its sweet and tangy flavor, packed with vitamin C.",
      img: "/Orange_fruit_khanpuri.png",
      price: 2.83,
      options: [
        {
          title: "Khanpuri",
          additionalPrice: 0,
        },
        {
          title: "Rajanpuri",
          additionalPrice: 0.12,
        },
        {
          title: "Faisalabad",
          additionalPrice: 0.19,
        },
      ],
    },
    {
      id: 3,
      title: "Apple",
      desc: "Apple is a crisp, juicy fruit, rich in fiber and antioxidants, perfect for a healthy snack.",
      img: "/Red-Apple_fruit.png",
      price: 0.91,
      options: [
        {
          title: "Quetta",
          additionalPrice: 0.01,
        },
        {
          title: "Murree",
          additionalPrice: 0.05,
        },
        {
          title: "Hunza",
          additionalPrice: 0.12,
        },
      ],
    },
  ];

  export const singleProduct: Product = {
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
  };
  