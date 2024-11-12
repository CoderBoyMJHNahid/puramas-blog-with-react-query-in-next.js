"use client";
import Link from "next/link";
import TitleWrapper from "./TitleWrapper";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import {extractImage} from "../utils/ExtractImg"

const Posts = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  let category = [];

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  data?.map((ele) => category.push(ele.cat_name));

  return (
    <section>
      <div className="container m-auto py-8">
        <TitleWrapper
          title={`Pura+ un mundo de consejos`}
          firstLine={`La más grande y actualizada biblioteca on-line de habla hispana: patologias, sintomas, tratamientos, tips, alimentación para una vida saludable y feliz.`}
          secondLine={`Suscribete a nuestro canal Youtube o siguenos en Instagram para los últimas novedades.`}
        />

        <div className="category_wrapper mt-8">
          <h2 className="text-[#00359f] text-xl text-center">
            Escoge un tema de lectura
          </h2>
          <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
            <Link
              href={`/`}
              className="rounded"
            >
              <span className="bg-[#c8d3de] px-3 py-1 text-[#00359f]">All</span>
              <span className="bg-[#00359f] px-2 py-1 text-white">(100)</span>
            </Link>
            {category.map((cat, index) => {
              return (
                <Link
                  href={`/category/${cat.toLowerCase()}`}
                  key={index}
                  className="rounded"
                >
                  <span className="bg-[#c8d3de] px-3 py-1 text-[#00359f]">
                    {cat}
                  </span>
                  <span className="bg-[#00359f] px-2 py-1 text-white">
                    ({cat.length})
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="search_wrapper flex gap-5 items-center justify-center my-6">
          <input
            type="search"
            className="bg-[#c8d3de] text-[#00359f] outline-0 px-4 py-2 font-bold"
            placeholder="Inserta una palabra clave"
          />
          <button className="font-bold border-0 bg-[#f5f6f7] py-2 px-3">
            Buscar
          </button>
        </div>
        <div className="post_wrapper gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data?.map((elem, index) => {
            return (
              <div
                className="relative group"
                key={index}
              >
                <Link href={elem.post_slug}>
                  <Image
                    src={extractImage(elem.post_desc)}
                    width={265}
                    height={260}
                    alt="Post image"
                  />
                  <div className="absolute top-0 opacity-0 group-hover:opacity-100 flex items-center justify-center h-full w-full bg-[#0000005c] text-white text-2xl">
                    <h2>{elem.post_title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;
