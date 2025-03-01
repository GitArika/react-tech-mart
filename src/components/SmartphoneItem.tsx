export interface ISmartphone {
  id: string;
  name: string;
  price: string;
  manufacturer: string;
  image: string;
  memory: string;
  storage: string;
}

export const SmartphoneItem = ({ data }: { data: ISmartphone }) => {
  const { image, manufacturer, memory, name, price, storage } = data;

  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl w-72 flex flex-col items-center p-5 space-y-3 h-[240px] mb-2">
        <img src={image} className="w-52 h-52 object-contain" />{" "}
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-xl">
          {name} {manufacturer}
        </p>
        <p className="text-sm text-gray-500 font-semibold">Preço: {price}</p>
        <div className="flex text-sm text-gray-500">
          <p>Memória: {memory}</p>
        </div>
        <div className="flex text-sm text-gray-500">
          <p>Armazenamento: {storage}</p>
        </div>
      </div>
    </div>
  );
};
