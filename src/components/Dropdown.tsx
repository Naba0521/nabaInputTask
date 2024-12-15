import Image from "next/image";

type DropdownProps = {
  filteredCountries: Array<any>;
  setSelectedCountry: (country: any) => void;
};

const Dropdown = ({ filteredCountries, setSelectedCountry }: DropdownProps) => {
  return (
    <div className="p-3 w-[200px]">
      {filteredCountries.length > 0 ? (
        <div className="flex flex-col gap-3">
          {filteredCountries.map((item, index) => (
            <div
              key={index}
              data-testid={`selectCountry-${index}`}
              className={`flex gap-4 items-center rounded-md p-2 cursor-pointer hover:scale-110 hover:bg-purple-400 duration-500`}
              onClick={() => setSelectedCountry(item)}
            >
              <div className="relative w-8 h-4 border">
                <Image fill alt="flag" src={item.flag} />
              </div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default Dropdown;
