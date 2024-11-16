"use client";
import React from "react";
import { motion } from "framer-motion";

const CountWrapper = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="count_wrapper"
      className="mt-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      variants={containerVariants}
    >
      <div className="container m-auto">
        <div className="grid gap-5 py-14 text-white text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-5xl font-bold mb-2">4,593,000</h2>
            <p className="uppercase mb-0">Clicks en Blog</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2">928,000</h2>
            <p className="uppercase mb-0">Consumidores Felices</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2">1,120</h2>
            <p className="uppercase mb-0">Tiendas</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2">623,000</h2>
            <p className="uppercase mb-0">Followers</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CountWrapper;
