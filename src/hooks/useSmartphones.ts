// useSmartphones.ts
import { useState } from "react";
import { ISmartphone } from "../components/SmartphoneItem";
import { useQuery } from "@tanstack/react-query";

const api_url = "http://localhost:3333";

interface SmartphoneFilters {
  storage?: string;
  manufacturer?: string;
}

const fetchSmartphones = async (filters: SmartphoneFilters) => {
  const params = new URLSearchParams();

  if (filters.storage) params.set("storage", filters.storage);
  if (filters.manufacturer) params.set("manufacturer", filters.manufacturer);

  const response = await fetch(`${api_url}/smartphones?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch smartphones");
  }
  return response.json();
};

export const useSmartphones = () => {
  const [storage, setStorage] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");

  const { data, isLoading, isError, error } = useQuery<ISmartphone[], Error>({
    queryKey: ["smartphones", storage, manufacturer],
    queryFn: () => fetchSmartphones({ storage, manufacturer }),
  });

  return {
    smartphones: data,
    isLoading,
    isError,
    error,
    setStorage,
    setManufacturer,
  };
};
