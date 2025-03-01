export const FilterButton = ({
  children,
  active,
  onClick,
}: {
  children: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${
        active ? "bg-blue-600" : "bg-gray-500"
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
