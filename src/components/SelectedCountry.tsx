import { CiTrash } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

type SelectedCountryProps = {
  selectedCountries: Array<any>;
  setSelectedCountries: (countries: any) => void;
};

const SelectedCountry = ({ selectedCountries, setSelectedCountries }: SelectedCountryProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold rounded-lg shadow-lg">
        Selected Countries
      </div>
      {selectedCountries.length === 0 ? (
        <p>No countries selected</p>
      ) : (
        selectedCountries.map((item, index) => (
          <div key={index} className="flex gap-4 items-center w-[200px] justify-between">
            <Link href={`https://en.wikipedia.org/wiki/${item.name}`} target="_blank" className="group">
              <div className="flex gap-4 items-center relative">
                <div className="relative w-10 h-6 border">
                  <Image fill alt={`Flag of ${item.name}`} src={item.flag} />
                </div>
                <div className="hover:underline">{item.name}</div>
              </div>
            </Link>

            <div>
              <CiTrash
                className="text-green-800 text-[20px] cursor-pointer hover:scale-110 duration-1000"
                data-testid={`delete-${index}`}
                onClick={() => {
                  setSelectedCountries(
                    selectedCountries.filter((country) => country.name !== item.name)
                  );
                }}
              />
            </div>
          </div>
        ))
      )}

      {selectedCountries.length > 1 && (
        <div
          data-testid="clearAll"
          className="bg-red-500 text-white p-2 rounded-md cursor-pointer  flex justify-center items-center w-[200px]"
          onClick={() => setSelectedCountries([])}
        >
          Clear All
        </div>
      )}
    </div>
  );
};

export default SelectedCountry;
