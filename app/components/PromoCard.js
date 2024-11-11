import Image from "next/image";
import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";
const PromoCard = ({ image,link,number }) => {
  return (
    <div className={`promo_card_wrapper text-center relative w-[270] ${number ==0 || number == 1 ? "animate__animated animate__fadeInLeft": "animate__animated animate__fadeInUp"}`}>
      <Image
        src={image}
        width={270}
        height={333}
        alt="Card Image"
        className="m-auto"
      />
      <div className="overlay absolute w-full top-0 h-full flex flex-col items-center justify-center bg-[#141414b3]">
        <p className="mb-0 text-white">Garantia 100% Despacho 48h</p>
        <span className="hover:bg-[#355c7d] p-2 rounded-full">
          <Link
            href={link}
            target="_blank"
            className="text-white"
          >
            <FaShoppingBasket className="text-lg text-yellow-600"/>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default PromoCard;
