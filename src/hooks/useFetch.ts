// useFetch.ts
import { useQuery } from "@tanstack/react-query";

export const useFetch = <T>(url: string) => {
  return useQuery<T, Error>({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};
