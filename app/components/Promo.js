import React from "react";
import TitleWrapper from "./TitleWrapper";
import PromoCard from "./PromoCard";

const Promo = () => {
  return (
    <section className="py-8">
      <div className="container m-auto">
        <TitleWrapper
          title="La marca líder del 2024"
          firstLine={`Pura+ es la marca más trendy e innovadora de America Latina.`}
          secondLine="Nuestros lanzamientos recientes demuestran nuestra clara superioridad técnica y funcional:"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8">
            <PromoCard image={`/todo.webp`} link={`https://www.ventas.puramas.co/`}/>
            <PromoCard image={`/ventas.webp`} link={`https://www.ventas.puramas.co/index.php?action=top-venta`}/>
            <PromoCard image={`/news.webp`} link={`https://www.ventas.puramas.co/index.php?action=new`}/>
            <PromoCard image={`/promo.webp`} link={`https://www.ventas.puramas.co/index.php?action=promo`}/>
        </div>

      </div>
    </section>
  );
};

export default Promo;
