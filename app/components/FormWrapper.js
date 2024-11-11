import React from "react";
import TitleWrapper from "./TitleWrapper";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import Form from "./Form";

const FormWrapper = () => {
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
          <div className="flex gap-10 justify-between my-8">
            <div className="text-center animate__animated animate__fadeInRight animate__delay-1s">
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

              <ul className="flex gap-4 mt-4 items-center justify-center">
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://instagram.puramas.co/`}
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://youtube.puramas.co/`}
                    target="_blank"
                  >
                    <FaYoutube />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://facebook.puramas.co/`}
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://www.tiktok.com/@puramas.co`}
                    target="_blank"
                  >
                    <FaTiktok />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://twitter.com/puramas_co`}
                    target="_blank"
                  >
                    <BsTwitterX />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://co.linkedin.com/company/avimex-co`}
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://avimex.co/`}
                    target="_blank"
                  >
                    <FaGlobe />
                  </Link>
                </li>
                <li className="text-2xl bg-black text-white p-3 rounded-xl">
                  <Link
                    href={`https://maps.app.goo.gl/t4GsEbCouxTvJN587`}
                    target="_blank"
                  >
                    <FaMap />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate__animated animate__fadeInLeft animate__delay-1s">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormWrapper;
