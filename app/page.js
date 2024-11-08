import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Promo from "./components/Promo";

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <HeroSection/>
        <Promo/>
        
      </main>
    </>
  );
}
