"use client";
import React from "react";
import TitleWrapper from "./TitleWrapper";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaGlobe,
  FaMap,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Form from "./Form";
import { motion } from "framer-motion";

const FormWrapper = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRightVariants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section id="contacto">
        <div className="container m-auto py-8">
          <TitleWrapper
            title={`Hablemos!`}
            firstLine={`Escribenos en cualquier momento y te contestaremos en menos de 24h, prometido.`}
            secondLine={`También nos puedes conseguir en nuestras redes sociales con más de 500 mil seguidores.`}
            thirdLine={`¿Sabias que somos la marca de ortopedía más activa y popular del mundo?`}
          />

          <div className="lg:flex gap-10 justify-between my-8">
            {/* Image Section with Animation */}
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRightVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src={`/pura.webp`}
                alt="Pura+ office image"
                width={500}
                height={268}
                className="mb-4"
              />
              <p className="text-sm">Avimex de Colombia SAS</p>
              <p className="text-sm">
                Horario | Working Hours | جدول | 日程: 7am-5pm
              </p>
              <p className="text-sm">Carrera 80C No.32EE-28 Laureles</p>
              <p className="text-sm">050031 Medellin Colombia</p>

              <ul className="flex gap-2 lg:gap-4 mt-4 items-center justify-center">
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://instagram.puramas.co/`}
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://youtube.puramas.co/`}
                    target="_blank"
                  >
                    <FaYoutube />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://facebook.puramas.co/`}
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://www.tiktok.com/@puramas.co`}
                    target="_blank"
                  >
                    <FaTiktok />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://twitter.com/puramas_co`}
                    target="_blank"
                  >
                    <BsTwitterX />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://co.linkedin.com/company/avimex-co`}
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://avimex.co/`}
                    target="_blank"
                  >
                    <FaGlobe />
                  </Link>
                </li>
                <li className="text-xl lg:text-2xl bg-black text-white p-2 lg:p-3 rounded-xl">
                  <Link
                    href={`https://maps.app.goo.gl/t4GsEbCouxTvJN587`}
                    target="_blank"
                  >
                    <FaMap />
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Form Section with Animation */}
            <motion.div
              className="mt-14 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Form />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormWrapper;
