"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleWrapper from "./TitleWrapper";
import { placeWhere } from "../data/Place";
import Link from "next/link";

const PlaceLoc = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container m-auto">
        {/* Title Wrapper Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeInVariants}
        >
          <TitleWrapper
            title={`Donde Comprar`}
            firstLine={`Puedes comprar Pura+ en 9 paises diferentes, en más de 1,000 tiendas fisicas o conseguirnos on-line con despacho garantizado.`}
            secondLine={`Haz click en tu tienda preferida y disfruta de nuestros productos:`}
          />
        </motion.div>

        {/* Place Cards Animation */}
        <div className="grid gap-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6">
          {placeWhere.map((elem, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, 
              }}
              variants={fadeInVariants}
              className="text-center"
            >
              <div className="bg-[#00359f] shadow-xl m-auto mb-4 rounded-full w-[80px] h-[80px] flex items-center justify-center text-5xl text-white hover:bg-[#ffd966] transition-all duration-75">
                <Link href={elem.link} target="_blank">
                  {elem.icon}
                </Link>
              </div>
              <h2>{elem.name}</h2>
              <p className="text-sm">{elem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaceLoc;
