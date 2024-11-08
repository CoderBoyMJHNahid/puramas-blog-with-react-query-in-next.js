"use client";
import TitleWrapper from "./TitleWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="pt-5 pb-8">
      <div className="container m-auto">
        <TitleWrapper
          title={`Escoge tu producto por patologia o parte de cuerpo`}
          firstLine={`Nada compara con los productos y el catalogo Pura+`}
          secondLine={`Productos a alto impacto ergonómico, funcional y de satisfacción.`}
        />

        <div className="slider_wrapper mt-8">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            freeMode={true}
            navigation={{
              clickable: true,
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3.8,
                spaceBetween: 5,
              },
            }}
          >
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/category.php?c_id=5`}
              >
                <Image
                  src={`/p-pie.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/search.php?search_query=cuello`}
              >
                <Image
                  src={`/p-cabeza.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/search.php?search_query=codo`}
              >
                <Image
                  src={`/p-codo.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/search.php?search_query=cuello`}
              >
                <Image
                  src={`/p-cuello.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/category.php?c_id=9`}
              >
                <Image
                  src={`/p-mano.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/search.php?search_query=postura`}
              >
                <Image
                  src={`/p-postura.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/category.php?c_id=10`}
              >
                <Image
                  src={`/p-rodilla.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                target="_blank"
                href={`https://www.ventas.puramas.co/category.php?c_id=21`}
              >
                <Image
                  src={`/p-talon.webp`}
                  width={264}
                  height={325}
                  className="m-auto"
                  alt="slide image"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
