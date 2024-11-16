"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleWrapper from "./TitleWrapper";
import { GroupData } from "../data/GroupData";
import GroupCard from "./GroupCard";

const GroupWrapper = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-8" id="empresa">
      <div className="container m-auto">
        {/* Title Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeInVariants}
        >
          <TitleWrapper
            title={`Avimex Fashion & Health Group`}
            firstLine={`La marca Pura+ pertenece al grupo empresarial italiano Avimex Fashion & Health Group.`}
            secondLine={`Es actualmente líder en 4 categorias gracias a sus productos de altisima calidad y extraordinaria ecuación de valor.`}
            thirdLine={`Todos productos gozan de nuestro compromiso satisfecho o rembolsado al 100%.`}
          />
        </motion.div>

        {/* Group Cards Animation */}
        <motion.div
          className="group_wrapper gap-6 grid grid-cols-1 lg:grid-cols-2 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }} // Stagger children animations
          variants={fadeInVariants}
        >
          {GroupData.map((elem, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <GroupCard
                icon={elem.icon}
                text={elem.text}
                desc={elem.desc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GroupWrapper;
