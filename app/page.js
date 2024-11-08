import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Promo from "./components/Promo";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <HeroSection/>
        <Promo/>
        <Slider/>
      </main>
    </>
  );
}
