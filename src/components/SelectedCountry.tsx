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
            <Link
              href={`https://en.wikipedia.org/wiki/${item.name}`}
              target="_blank"
              className="group"
            >
              <div className="flex gap-4 items-center relative">
                <div className="relative w-10 h-6 border">
                  <Image
                    fill
                    alt={`Flag of ${item.name}`}
                    src={item.flag}
                  />
                </div>
                <div className="hover:underline">{item.name}</div>
                <div className="absolute left-[250px] top-[-20px] w-[300px] bg-white p-2 rounded-md shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="font-bold m-auto text-xl bg-slate-400 rounded-md mt-2 mb-2 px-3 py-2 w-fit">
                    {item.name}
                  </div>
                  <div>
                    <span className="font-bold">Capital: </span>
                    {item.capital}
                  </div>
                  <div>
                    <span className="font-bold">Population: </span>
                    {item.population.toLocaleString()}
                  </div>
                  <div>
                    <span className="font-bold">Information: </span>
                    {item.information}
                  </div>
                  <div className="font-semibold flex justify-center">
                    Click name and learn more on Wikipedia
                  </div>
                </div>
              </div>
            </Link>
            <div>
              <CiTrash
                className="text-green-800 text-[20px] cursor-pointer hover:scale-110 duration-500"
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
          className="bg-red-500 text-white p-2 rounded-md cursor-pointer flex justify-center items-center w-[200px] hover:bg-red-600 hover:scale-105 transition duration-300"
          onClick={() => setSelectedCountries([])}
        >
          Clear All
        </div>
      )}
    </div>
  );
};

export default SelectedCountry;
