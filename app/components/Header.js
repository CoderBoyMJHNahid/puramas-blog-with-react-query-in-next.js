"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DropDownFlag from "./DropDownFlag";

import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { slug } = useParams();

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth < 991);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`absolute w-full ${isScrolled ? "scrolled-header" : ""} ${
        slug ? "shadow-custom" : ""
      } `}
    >
      <nav className="container m-auto relative">
        <div className="flex items-center justify-between py-6">
          <div className="logo_wrapper w-5/6 lg:w-1/6">
            <Link href="/">
              <Image
                src={`/logo-portada.png`}
                width={150}
                height={45}
                alt="Logo Image"
              />
            </Link>
          </div>
          {isMobile && (
            <button
              className={`text-2xl ${
                slug && !isScrolled ? "text-black" : "text-white"
              } lg:hidden`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
          <div className="menu_wrapper hidden lg:block w-5/6">
            <ul
              className={`uppercase text-sm flex items-center ${
                slug && !isScrolled ? "text-[#777]" : "text-white"
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
                    href={`/#posts`}
                  >
                    Consejos
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="hover:text-[#ffd966] duration-100"
                  href={`${
                    slug ? "https://catalogo.puramas.co/" : "/#catalog"
                  }`}
                >
                  Catalogo
                </Link>
              </li>
              {!slug && (
                <>
                  <li>
                    <Link
                      className="hover:text-[#ffd966] duration-100"
                      href={`/#contacto`}
                    >
                      Contacto Redes
                    </Link>
                  </li>
                  <li>
                    <DropDownFlag />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {menuOpen && (
          <>
            <div className="absolute top-16 right-3">
              <ul
                className={`uppercase text-sm flex flex-col bg-[#ededed] 
                  text-[#000] font-normal p-5 justify-end gap-4 w-[180px]`}
              >
                {slug ? (
                  <li>
                    <Link
                      className="hover:text-[#ffd966] duration-100 text-[17px]"
                      href={`/`}
                    >
                      Home
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      className="hover:text-[#ffd966] text-[17px] duration-100"
                      href={`/`}
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      Inicio
                    </Link>
                  </li>
                )}

                {!slug && (
                  <li>
                    <Link
                      className="hover:text-[#ffd966] text-[17px] duration-100"
                      href={`/#empresa`}
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      Empresa
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    className="hover:text-[#ffd966] text-[17px] duration-100"
                    href={`/#shop`}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Shop
                  </Link>
                </li>
                {!slug && (
                  <li>
                    <Link
                      className="hover:text-[#ffd966] text-[17px] duration-100"
                      href={`/#posts`}
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                    >
                      Consejos
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    className="hover:text-[#ffd966] text-[17px] duration-100"
                    href={`${
                      slug ? "https://catalogo.puramas.co/" : "/#catalog"
                    }`}
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Catalogo
                  </Link>
                </li>
                {!slug && (
                  <>
                    <li>
                      <ul className="flex w-full gap-4 lg:gap-4 mt-4 items-center justify-center">
                        <li className="text-lg bg-black text-white p-1 rounded">
                          <Link
                            href={`#contacto`}
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                          >
                            <IoMdMail />
                          </Link>
                        </li>
                        <li className="text-lg bg-black text-white p-1 rounded">
                          <Link
                            href={`https://instagram.puramas.co/`}
                            target="_blank"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                          >
                            <FaInstagram />
                          </Link>
                        </li>
                        <li className="text-lg bg-black text-white p-1 rounded">
                          <Link
                            href={`https://youtube.puramas.co/`}
                            target="_blank"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                          >
                            <FaYoutube />
                          </Link>
                        </li>
                        <li className="text-lg bg-black text-white p-1 rounded">
                          <Link
                            href={`https://facebook.puramas.co/`}
                            target="_blank"
                            onClick={() => {
                              setMenuOpen(false);
                            }}
                          >
                            <FaFacebookF />
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <DropDownFlag openMenu={menuOpen} />
                    </li>
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
