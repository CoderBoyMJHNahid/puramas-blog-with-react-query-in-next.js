import React from "react";
import TitleWrapper from "./TitleWrapper";
import PromoCard from "./PromoCard";
import { PromoData } from "../data/PromoData";

const Promo = () => {
  return (
    <section className="py-8" id="shop">
      <div className="container m-auto">
        <TitleWrapper
          title="La marca líder del 2024"
          firstLine={`Pura+ es la marca más trendy e innovadora de America Latina.`}
          secondLine="Nuestros lanzamientos recientes demuestran nuestra clara superioridad técnica y funcional:"
        />

        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
          {PromoData.map((elem, index) => {
            return (
              <PromoCard
                key={index}
                number={index}
                totalCards={elem.length}
                image={elem.image}
                link={elem.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promo;
