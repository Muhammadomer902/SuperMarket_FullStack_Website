import FeaturedItem from "@/components/FeaturedItem";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider/>
      <FeaturedItem/>
      <Offer/>
    </main>
  );
}
