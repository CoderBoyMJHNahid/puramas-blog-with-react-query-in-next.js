"use client"
import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import { FaNewspaper } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const HeroSection = () => {
  const [bgClass, setBgClass] = useState("");

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const randomBg = `bg-changer-${randomInt(1, 4)}`;
    setBgClass(randomBg);
  }, []);

  return (
    <section
      id="hero-section"
      className={`flex flex-col items-center justify-center text-center h-screen px-5 ${bgClass}`}
    >
      <h1 className="hidden">Pura+ | Ortopedia Fisioterapia Salud Belleza</h1>
      <h2 className="text-2xl lg:text-5xl uppercase mb-4 text-white">
        Bienvenidos a PURA+
      </h2>
      <TypingText />
      <div className="icon_wrapper flex items-center gap-6 my-8">
        <span className="bg-[#00359f] shadow-xl cursor-pointer hover:bg-[#ffd966] transition-all duration-75 w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
          <FaNewspaper className="text-white text-5xl" />
        </span>

        <Link href={`https://shop.puramas.co/`}>
          <span className="bg-[#00359f] shadow-xl cursor-pointer hover:bg-[#ffd966] transition-all duration-75 w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
            <FaShoppingBasket className="text-white text-5xl" />
          </span>
        </Link>
        <Link href={`https://whatsapp.puramas.co/`}>
          <span className="bg-[#00359f] shadow-xl cursor-pointer hover:bg-[#ffd966] transition-all duration-75 w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
            <FaWhatsapp className="text-white text-5xl" />
          </span>
        </Link>
      </div>
      <div className="animation_wrapper absolute bottom-16">
        <div className="mouse animate__animated animate__bounceInUp"></div>
      </div>
    </section>
  );
};

export default HeroSection;
