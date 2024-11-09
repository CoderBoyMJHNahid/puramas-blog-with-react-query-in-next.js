import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Promo from "./components/Promo";
import Slider from "./components/Slider";
import CountWrapper from "./components/CountWrapper";
import Catalog from "./components/Catalog";
import Posts from "./components/Posts";
import PlaceLoc from "./components/PlaceLoc";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <Promo />
        <Slider />
        <CountWrapper />
        <Posts />
        <Catalog />
        <PlaceLoc />
      </main>
    </>
  );
}
