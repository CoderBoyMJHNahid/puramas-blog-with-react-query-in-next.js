import React from "react";
import TypingText from "./TypingText";
import { FaNewspaper } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-5xl uppercase mb-4 text-white">
        Bienvenidos a PURA+
      </h1>
      <TypingText />
      <div className="icon_wrapper flex items-center gap-6 my-8">
        <span className="bg-[#00359f] w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
          <FaNewspaper className="text-white text-5xl" />
        </span>
        <span className="bg-[#00359f] w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
          <FaShoppingBasket className="text-white text-5xl" />
        </span>
        <span className="bg-[#00359f] w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full">
          <FaWhatsapp className="text-white text-5xl" />
        </span>
      </div>
      <div className="animation_wrapper absolute bottom-16">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
