type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menulist: Menu = [
    {
      id: 1,
      slug: "fruits",
      title: "Fruits",
      desc: "Fresh and naturally sweet, our fruits are a vibrant source of vitamins and flavor.",
      img: "/Fruit_bg.png",
      color: "white",
    },
    {
      id: 2,
      slug: "vegetables",
      title: "Vegetables",
      desc: "Crisp, nutrient-rich vegetables perfect for healthy, flavorful meals.",
      img: "/Vegetable_bg.png",
      color: "white",
    },
    {
      id: 3,
      slug: "beverages",
      title: "Beverages",
      desc: "Refreshing beverages to quench your thirst and energize your day.",
      img: "/Beverages_Bg.png",
      color: "white",
    },
    {
        id: 4,
        slug: "electronics",
        title: "Electronics",
        desc: "Cutting-edge electronics designed for convenience, entertainment, and connectivity.",
        img: "/Electronic_bg.png",
        color: "white",
    },
  ];