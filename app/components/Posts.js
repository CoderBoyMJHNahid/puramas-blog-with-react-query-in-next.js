"use client";
import Link from "next/link";
import TitleWrapper from "./TitleWrapper";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { extractImage } from "../utils/ExtractImg";
import LoadingImage from "./LoadingImage";
import CategoryLink from "./CategoryLink";
import { useState } from "react";

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_POST_URL}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });

  // Filter data based on the search term
  const filteredData = data?.filter((post) =>
    category !== null
      ? Number(post.post_cat) === category
      : post.post_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="container m-auto py-8">
        <TitleWrapper
          title="Pura+ un mundo de consejos"
          firstLine="La más grande y actualizada biblioteca on-line de habla hispana: patologias, sintomas, tratamientos, tips, alimentación para una vida saludable y feliz."
          secondLine="Suscribete a nuestro canal Youtube o siguenos en Instagram para los últimas novedades."
        />

        <div className="category_wrapper mt-8">
          <h2 className="text-[#00359f] text-xl text-center">
            Escoge un tema de lectura
          </h2>
          <CategoryLink setFn={setCategory} totalNumber={data?.length} />
        </div>

        <div className="search_wrapper flex gap-5 items-center justify-center my-6">
          <input
            type="search"
            className="bg-[#c8d3de] text-[#00359f] outline-0 px-4 py-2 font-bold"
            placeholder="Inserta una palabra clave"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="font-bold border-0 bg-[#f5f6f7] py-2 px-3"
            onClick={() => setSearchTerm(searchTerm)}
          >
            Buscar
          </button>
        </div>

        {isLoading && <LoadingImage />}
        {!isLoading && filteredData && (
          <div className="post_wrapper gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {filteredData.map((elem, index) => (
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;
