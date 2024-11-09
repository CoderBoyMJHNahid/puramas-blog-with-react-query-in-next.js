import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header id="header" className="absolute w-full">
      <nav className="container m-auto">
        <div className="flex items-center justify-center py-6">
          <div className="logo_wrapper w-2/6">
            <Image
              src={`/logo-portada.png`}
              width={150}
              height={45}
              alt="Logo Image"
            />
          </div>
          <div className="menu_wrapper w-4/6">
            <ul className="uppercase flex items-center text-white font-bold justify-center gap-9">
              <li>
                <Link href={`/`}>Inicio</Link>
              </li>
              <li>
                <Link href={`/`}>Empresa</Link>
              </li>
              <li>
                <Link href={`/`}>Shop</Link>
              </li>
              <li>
                <Link href={`/`}>Consejos</Link>
              </li>
              <li>
                <Link href={`/`}>Contacto Redes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
