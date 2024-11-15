import Image from "next/image";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#222]">
      <div className="container m-auto">
        <p className="text-center text-sm text-white">
          Copyright © 2024 | Avimex F&HG Nit 900039881-6
        </p>
        <ul className="flex items-center justify-center gap-6 my-6">
          <li>
            <Link
              href={`https://www.beybies.co/`}
              target="_blank"
            >
              <Image
                src={`/ico-beybies2.png`}
                width={18}
                height={18}
                alt="Footer Image"
              />
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.nrgyblast.co/`}
              target="_blank"
            >
              <Image
                src={`/ico-nrgyblast2.png`}
                width={18}
                height={18}
                alt="Footer Image"
              />
            </Link>
          </li>
          <li>
            <Link
              href={`https://athakai.com/`}
              target="_blank"
            >
              <Image
                src={`/ico-athakai.png`}
                width={18}
                height={18}
                alt="Footer Image"
              />
            </Link>
          </li>
          <li>
            <Link
              href={`https://visitaconcepcion.com/`}
              target="_blank"
            >
              <Image
                src={`/ico-vc.png`}
                width={18}
                height={18}
                alt="Footer Image"
              />
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.avimex.co/`}
              target="_blank"
            >
              <Image
                src={`/ico-avimex2.png`}
                width={18}
                height={18}
                alt="Footer Image"
              />
            </Link>
          </li>
        </ul>
        <ul className="my-6 text-center text-white">
          <li className={`inline-block`}>
            <Link
              className="flex items-center gap-1"
              href={`https://www.puramas.co/2020/04/clientes.html`}
            >
              <FaStore className="text-[#707070]" />
              Clientes
            </Link>
          </li>
          <li className={`inline-block ml-5`}>
            <Link
              className="flex items-center gap-1"
              href={`https://www.puramas.co/2024/04/trabajo.html`}
            >
              <FaPeopleLine className="text-[#707070]" />
              Trabajo
            </Link>
          </li>
          <li className={`inline-block ml-5`}>
            <Link
              className="flex items-center gap-1"
              href={`https://www.puramas.co/2020/04/logistica.html`}
            >
              <FaTruck className="text-[#707070]" />
              Logistica
            </Link>
          </li>
          <li className={`inline-block ml-5`}>
            <Link
              className="flex items-center gap-1"
              href={`https://www.puramas.co/2020/04/proveedores.html`}
            >
              <FaCartFlatbed className="text-[#707070]" />
              Proveedores
            </Link>
          </li>
        </ul>
        <ul className="text-white text-center">
          <li className="inline-block">
            <Link href={`https://www.puramas.co/2020/04/legal.html`}>
              Legal |
            </Link>
          </li>
          <li className="inline-block ml-5">
            <Link href={`https://pqrs.puramas.co/`}>PQRS |</Link>
          </li>
          <li className="inline-block ml-5">
            <Link href={`https://www.puramas.co/2020/04/habeasdata.html`}>
              Tratamiento Datos |
            </Link>
          </li>
          <li className="inline-block ml-5">
            <Link href={`https://www.puramas.co/devoluciones`}>
              Politica Devoluciones |
            </Link>
          </li>
          <li className="inline-block ml-5">
            <Link href={`https://www.puramas.co/2020/04/garantia.html`}>
              Garantias
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-[12px] text-center text-[#999] ">
          Miami ● New York ● Sydney ● Tel Aviv ● Paris ● Madrid ● Milan ●
          Firenze ● Roma ● Medellin ● Cartagena ● Bogota ● Barranquilla ● Quito
          ● Guayaquil ● Lima
        </p>
      </div>
    </footer>
  );
};

export default Footer;
