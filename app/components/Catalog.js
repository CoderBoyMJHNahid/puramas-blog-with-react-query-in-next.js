import Image from "next/image";
import Link from "next/link";
import React from "react";

const Catalog = () => {
  return (
    <section
      id="catalog"
      className="py-8"
    >
      <div className="container m-auto text-center text-white">
        <h2 className="text-4xl mb-4">Catálogo Pura+</h2>
        <p className="font-light text-sm">
          Mira nuestro amplio portafolio de productos.
        </p>
        <p className="font-light text-sm">
          "Nuestro lema es inspira y transpira"
        </p>
        <p className="font-light text-sm">
          "Inspiration and perspiration is our motto"
        </p>
        <Link href={`https://catalogo.puramas.co/`} target="_blank">
          <Image
            src={`/catalogo.webp`}
            alt="Catalog Photo"
            width={400}
            height={283}
            className="m-auto mt-7"
          />
        </Link>
      </div>
    </section>
  );
};

export default Catalog;
