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
        <img
          alt="Flag Mai"
          src="https://www.images.puramas.co/flag-sp.png"
          style={{ height: "16px" }}
          width="24px"
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
                <img
                  alt="Flag Spain"
                  src="https://www.images.puramas.co/flag-sp.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>Sp</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://ar.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag Arab"
                  src="https://www.images.puramas.co/flag-ar.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>عرب</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://cn.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag China"
                  src="https://www.images.puramas.co/flag-cn.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>中国</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://en.puramas.co/"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag UK"
                  src="https://www.images.puramas.co/flag-en.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>En</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://fr.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag France"
                  src="https://www.images.puramas.co/flag-fr.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>Fr</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://de.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag Germany"
                  src="https://www.images.puramas.co/flag-de.png"
                  style={{ height: "16px" }}
                  width="24px"
                />
                <span>De</span>
              </Link>
            </li>
            <li className="hover:bg-black duration-75">
              <Link
                href="https://it.puramas.co"
                className="hover:text-[#ffd966] duration-75"
              >
                <img
                  alt="Flag Italy"
                  src="https://www.images.puramas.co/flag-it.png"
                  style={{ height: "16px" }}
                  width="24px"
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
