import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
const DropDownFlag = ({ openMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language_wrapper">
      <div
        className="selected_flag"
        onClick={toggleDropdown}
      >
        <Image
          width={24}
          height={16}
          alt="Flag Mai"
          src="https://www.images.puramas.co/flag-sp.png"
        />
        <span className="lan_name">SP</span>
        <FaAngleDown className="text-red-500" />
      </div>
      {isOpen && (
        <div className={`language_list`}>
          <ul className={`${openMenu ? "bg-white" : ""} flag_select_wrapper`}>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag Spain"
                  src="https://www.images.puramas.co/flag-sp.png"
                />
                <span>Sp</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://ar.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag Arab"
                  src="https://www.images.puramas.co/flag-ar.png"
                />
                <span>عرب</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://cn.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag China"
                  src="https://www.images.puramas.co/flag-cn.png"
                />
                <span>中国</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://en.puramas.co/"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag UK"
                  src="https://www.images.puramas.co/flag-en.png"
                />
                <span>En</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://fr.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag France"
                  src="https://www.images.puramas.co/flag-fr.png"
                />
                <span>Fr</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://de.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag Germany"
                  src="https://www.images.puramas.co/flag-de.png"
                />
                <span>De</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://it.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <Image
                  width={24}
                  height={16}
                  alt="Flag Italy"
                  src="https://www.images.puramas.co/flag-it.png"
                />
                <span>It</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownFlag;
