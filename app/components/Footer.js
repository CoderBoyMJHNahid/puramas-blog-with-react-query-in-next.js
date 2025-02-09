import Image from "next/image";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { useData } from "../service/Provider";
import IconRenderer from "../utils/IconRenderer";

const Footer = () => {
  const data = useData();
  return (
    <footer className="py-8 bg-[#222]">
      <div className="container m-auto">
        <p className="text-center text-sm text-white">
          {data?.footerDetails[0]?.copyright_text}
        </p>
        <ul className="flex items-center justify-center gap-6 my-6">
          {data?.mainWebImg?.map((elem) => {
            return (
              <li key={elem.fm_id}>
                <Link
                  href={`https://www.beybies.co/`}
                  target="_blank"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_POST_URL}/api/uploads/${elem.web_img}`}
                    width={18}
                    height={18}
                    alt="Footer Image"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="my-6 text-center text-white">
          {data?.mainWebLink?.map((elem, index) => {
            return (
              <li
                className={`inline-block`}
                key={index}
              >
                <Link
                  className="flex items-center gap-1"
                  href={`https://www.puramas.co/2020/04/clientes.html`}
                >
                  <IconRenderer
                    iconName={elem.item_icon}
                    size={20}
                  />
                  {elem.item_name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="text-white text-center">
          {data?.morePage?.map((elem) => {
            return (
              <li className="inline-block me-8" key={elem.mp_id}>
                <Link href={elem.menuLink}>
                  {elem.menu_name}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-[12px] text-center text-[#999] ">
          {data?.footerDetails[0]?.country_text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
