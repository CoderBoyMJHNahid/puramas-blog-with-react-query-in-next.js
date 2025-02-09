"use client"
import { useEffect, useState } from "react";
import TypingText from "./TypingText";
import { FaNewspaper } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useData } from "../service/Provider";
import IconRenderer from "../utils/IconRenderer";
const HeroSection = () => {
  const [bgClass, setBgClass] = useState("");

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const data = useData();

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
        {data?.heroSection[0]?.title_text}
      </h2>
      <TypingText />
      <div className="icon_wrapper flex items-center gap-6 my-8">
        {data?.iconHero?.map((elem)=>{
          return (
            <Link href={`/${elem.link_icon}`} key={elem.hicon_id}>
              <span className="bg-[#00359f] shadow-xl cursor-pointer hover:bg-[#ffd966] transition-all duration-75 w-[80px] h-[80px] p-[10px] flex items-center justify-center rounded-full text-white">
                <IconRenderer iconName={elem.icon_name} size={45} />
              </span>
            </Link>
          )
        })}
      </div>
      <div className="animation_wrapper absolute bottom-16">
        <div className="mouse animate__animated animate__bounceInUp"></div>
      </div>
    </section>
  );
};

export default HeroSection;
