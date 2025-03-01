// App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { FilterButton } from "./components/FilterButton";
import { SmartphoneItem } from "./components/SmartphoneItem";
import { useSmartphones } from "./hooks/useSmartphones";
import { SmartphoneSkeleton } from "./components/Skeleton";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      retry: 2, // Retry failed requests twice
      staleTime: 1000 * 60 * 5, // 5 minutes cache time
    },
  },
});

function AppContent() {
  const {
    smartphones,
    isLoading,
    isError,
    error,
    setStorage,
    setManufacturer,
  } = useSmartphones();

  const [activeStorage, setActiveStorage] = useState("");
  const [activeManufacturer, setActiveManufacturer] = useState("");

  const handleStorageFilter = (storage: string) => {
    setStorage(storage);
    setActiveStorage(storage);
  };

  const handleManufacturerFilter = (manufacturer: string) => {
    setManufacturer(manufacturer);
    setActiveManufacturer(manufacturer);
  };

  if (isError) {
    return (
      <div className="text-center py-8 text-red-600">
        Error: {error?.message || "Failed to load smartphones"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-4 py-12 lg:py-24">
        <h1 className="text-center text-3xl text-black font-bold mb-8">
          Celulares a Preço de Fábrica
        </h1>

        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex flex-col shadow bg-white rounded-lg p-6 w-full">
            <label className="text-lg font-bold mb-4">Armazenamento</label>
            <div className="flex flex-wrap gap-2">
              {["", "64GB", "128GB", "256GB"].map((size) => (
                <FilterButton
                  key={size || "all"}
                  onClick={() => handleStorageFilter(size)}
                  active={activeStorage === size}
                >
                  {size || "Todos"}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col shadow bg-white rounded-lg p-6 w-full">
            <label className="text-lg font-bold mb-4">Marca</label>
            <div className="flex flex-wrap gap-2">
              {["", "Apple", "Samsung"].map((brand) => (
                <FilterButton
                  key={brand || "all"}
                  onClick={() => handleManufacturerFilter(brand)}
                  active={activeManufacturer === brand}
                >
                  {brand || "Todas"}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        {/* Smartphones Grid */}
        {isLoading ? (
          <div className="flex flex-wrap justify-around space-y-12 mt-12">
            {[...Array(6)].map((_, i) => (
              <SmartphoneSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smartphones?.map((smartphone) => (
              <SmartphoneItem key={smartphone.id} data={smartphone} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// Wrap the AppContent with QueryClientProvider
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
