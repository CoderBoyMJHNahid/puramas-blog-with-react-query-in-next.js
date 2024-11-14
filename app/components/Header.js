"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`absolute w-full ${isScrolled ? "scrolled-header" : ""} shadow-custom`}
    >
      <nav className="container m-auto">
        <div className="flex items-center justify-center py-6">
          <div className="logo_wrapper w-2/6">
            <Link href="/">
              <Image
                src={`/logo-portada.png`}
                width={150}
                height={45}
                alt="Logo Image"
              />
            </Link>
          </div>
          <div className="menu_wrapper w-4/6">
            <ul
              className={`uppercase text-sm flex items-center ${
                slug ? "text-[#777]" : "text-white"
              }  font-bold justify-end gap-9`}
            >
              {slug ? (
                <li>
                  <Link
                    className="hover:text-[#ffd966] duration-100"
                    href={`/`}
                  >
                    Home
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="hover:text-[#ffd966] duration-100"
                    href={`/`}
                  >
                    Inicio
                  </Link>
                </li>
              )}

              {!slug && (
                <li>
                  <Link
                    className="hover:text-[#ffd966] duration-100"
                    href={`/#empresa`}
                  >
                    Empresa
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="hover:text-[#ffd966] duration-100"
                  href={`/#shop`}
                >
                  Shop
                </Link>
              </li>
              {!slug && (
                <li>
                  <Link
                    className="hover:text-[#ffd966] duration-100"
                    href={`/`}
                  >
                    Consejos
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="hover:text-[#ffd966] duration-100"
                  href={`${slug ? "https://catalogo.puramas.co/" : "/#catalog"}`}
                >
                  Catalogo
                </Link>
              </li>
              {!slug && (
                <li>
                  <Link
                    className="hover:text-[#ffd966] duration-100"
                    href={`/#contacto`}
                  >
                    Contacto Redes
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
