"use client";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";
import LoadingImage from "../components/LoadingImage";
import Error from "../error";

const DataContext = createContext(null);

export const useData = () => useContext(DataContext);

const fetchData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_POST_URL}/api/details/${process.env.NEXT_PUBLIC_SITE_ID}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const DataProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mainDetails"],
    queryFn: fetchData,
  });

  if (isLoading) return <LoadingImage /> 
  if (error) return <Error/>; 

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

const Provider = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>{children}</DataProvider>
    </QueryClientProvider>
  );
};

export default Provider;
