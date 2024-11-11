import React from "react";
import TitleWrapper from "./TitleWrapper";
import { placeWhere } from "../data/Place";
import Link from "next/link";
const PlaceLoc = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container m-auto">
        <div className="animate__animated animate__fadeInUp">
          <TitleWrapper
            title={`Donde Comprar`}
            firstLine={`Puedes comprar Pura+ en 9 paises diferentes, en más de 1,000 tiendas fisicas o conseguirnos on-line con despacho garantizado.`}
            secondLine={`Haz click en tu tienda preferida y disfruta de nuestros productos:`}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6">
          {placeWhere.map((elem, index) => {
            return (
              <div
                key={index}
                className="text-center animate__animated animate__fadeInUp animate__delay-1s"
              >
                <div className="bg-[#00359f] shadow-xl m-auto mb-4 rounded-full w-[80px] h-[80px] flex items-center justify-center text-5xl text-white hover:bg-[#ffd966] transition-all duration-75">
                  <Link
                    href={elem.link}
                    target="_blank"
                  >
                    {elem.icon}
                  </Link>
                </div>
                <h2>{elem.name}</h2>
                <p className="text-sm">{elem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaceLoc;
