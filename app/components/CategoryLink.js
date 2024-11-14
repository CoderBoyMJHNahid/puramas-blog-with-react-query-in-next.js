"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const CategoryLink = ({ setFn, totalNumber }) => {
  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_POST_URL}/api/category/site/${process.env.NEXT_PUBLIC_SITE_ID}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching category:", error);
      return [];
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-4">
      <ul>
        {totalNumber && (
          <li className="inline-block ml-4 my-2">
            <button
              onClick={() => setFn(null)}
              className="rounded"
            >
              <span className="bg-[#c8d3de] px-3 py-1 text-[#00359f]">All</span>
              <span className="bg-[#00359f] px-2 py-1 text-white">
                ({totalNumber})
              </span>
            </button>
          </li>
        )}

        {data.map((cat, index) => {
          return (
            <li
              className="inline-block ml-4 my-2"
              key={index}
            >
              <button
                onClick={() => setFn(cat.cat_id)}
                className="rounded"
              >
                <span className="bg-[#c8d3de] px-3 py-1 text-[#00359f]">
                  {cat.cat_name}
                </span>
                <span className="bg-[#00359f] px-2 py-1 text-white">
                  ({cat.post_count})
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryLink;
