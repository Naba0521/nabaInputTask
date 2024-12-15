'use client'
import { useEffect, useState } from "react";
import { CiCircleChevDown, CiCircleChevUp, CiTrash } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import Dropdown from "./Dropdown";
import SelectedCountry from "./SelectedCountry";

const countries = [
  {name: "Mongolia",flag: "https://flagcdn.com/w320/mn.png",capital: "Ulaanbaatar",population: "3.5 million",information:"Mongolia is a landlocked country in East Asia and Central Asia, bordered by Russia to the north and China to the south.",},
  {name: "Turkey",flag: "https://flagcdn.com/w320/tr.png",capital: "Ankara",population: "86 million",information:"Turkey is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeastern Europe.",},
  {name: "South Korea",flag: "https://flagcdn.com/w320/kr.png",capital: "Seoul",population: "52 million",information:"South Korea, officially the Republic of Korea, is a country in East Asia, known for its high-tech industry, cultural heritage, and vibrant cities.",},
  {name: "Japan",flag: "https://flagcdn.com/w320/jp.png",capital: "Tokyo",population: "125 million",information:"Japan is an island nation in East Asia, known for its rich culture, cutting-edge technology, and strong economy.",},
  {name: "United States",flag: "https://flagcdn.com/w320/us.png",capital: "Washington, D.C.",population: "337 million​",information:"The United States is a large country in North America, known for its diverse culture, history, and significant global influence.",},
  {name: "Canada",flag: "https://flagcdn.com/w320/ca.png",capital: "Ottawa",population: "39 million",information:"Canada is the second-largest country in the world by total area, known for its natural beauty and multicultural society.",},
  {name: "China",flag: "https://flagcdn.com/w320/cn.png",capital: "Beijing",population: "1.42 billion",information:"China is the world's most populous country and the third-largest by land area, with a rich cultural history dating back thousands of years.",},
  {name: "India",flag: "https://flagcdn.com/w320/in.png",capital: "New Delhi",population: "1.41 billion",information:"India is a diverse country in South Asia, known for its history, religions, and rapid economic growth.",},
  {name: "Russia",flag: "https://flagcdn.com/w320/ru.png",capital: "Moscow",population: "145 million",information:"Russia is the largest country in the world by land area, spanning Eastern Europe and northern Asia, known for its rich cultural and political history.",},
  {name: "Brazil",flag: "https://flagcdn.com/w320/br.png",capital: "Brasília",population: "217 million",information:"Brazil is the largest country in South America, known for its rainforests, beaches, and vibrant cultural heritage.",},
  {name: "Germany",flag: "https://flagcdn.com/w320/de.png",capital: "Berlin",population: "83 million",information:"Germany is a European country with a rich cultural heritage, known for its history, engineering, and art.",},
  {name: "France",flag: "https://flagcdn.com/w320/fr.png",capital: "Paris",population: "67 million",information:"France is a European country known for its cultural influence, cuisine, and landmarks such as the Eiffel Tower.",},
  {name: "United Kingdom",flag: "https://flagcdn.com/w320/gb.png",capital: "London",population: "68 million",information:"The United Kingdom is a country in Europe comprising England, Scotland, Wales, and Northern Ireland, with a long history of global influence.",},
  {name: "Italy",flag: "https://flagcdn.com/w320/it.png",capital: "Rome",population: "59 million",information:"Italy is a country in Southern Europe, famous for its history, art, cuisine, and landmarks like the Colosseum and the Vatican.",},
  {name: "Australia",flag: "https://flagcdn.com/w320/au.png",capital: "Canberra",population: "26 million",information:"Australia is an island country and continent, known for its wildlife, beaches, and vibrant multicultural cities.",},
];

type country = {
  name: string;
  flag: string;
  information: string;
  capital: string;
  population: string;
};

export const SearchInputComponent = () => {
  const [searchItem, setSearchitem] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<country | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<country[] | []>(
    []
  );
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchItem.toLowerCase()) &&
      !selectedCountries.map((c) => c.name).includes(country.name)
  );

  const addCountry = () => {
    if (selectedCountry) {
      setSelectedCountries([...selectedCountries, selectedCountry]);
      setSelectedCountry(null);
      setSearchitem("");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const savedCountries = JSON.parse(
      localStorage.getItem("selectedCountries") || "[]"
    );
    setSelectedCountries(savedCountries);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "selectedCountries",
      JSON.stringify(selectedCountries)
    );
  }, [selectedCountries]);

  return (
    <div className="flex pl-[500px] min-h-screen p-8 pb-20 gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center p-4 bg-blue-500 text-white text-lg font-medium rounded-xl shadow-md hover:bg-blue-600 transition-all duration-300">
          Please select a country you'd like to know more about
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md p-3">
            <input
              data-testid="searchInput"
              className="rounded-md w-[200px] outline-none"
              value={searchItem}
              onChange={(e) => setSearchitem(e.target.value)}
            />
            {searchItem || selectedCountry ? (
              <div
                data-testid="clearSearchButton"
                onClick={() => {
                  setSearchitem("");
                  setSelectedCountry(null);
                }}
                className="cursor-pointer"
              >
                <MdClear className="text-xl text-red-500 hover:text-red-700 transition duration-300" />
              </div>
            ) : (
              <div onClick={toggleDropdown} className="cursor-pointer">
                {isDropdownVisible ? (
                  <CiCircleChevUp
                    data-testid="dropdown-icon"
                    className="text-xl text-gray-500 hover:text-gray-700 transition duration-300"
                  />
                ) : (
                  <CiCircleChevDown
                    data-testid="dropdown-icon"
                    className="text-xl text-gray-500 hover:text-gray-700 transition duration-300"
                  />
                )}
              </div>
            )}
          </div>

          <div
            data-testid="addCountry"
            className={`bg-green-200 p-3 rounded-md text-black font-semibold text-lg transition-all duration-300 ease-in-out 
    ${
      selectedCountry
        ? "bg-green-500 cursor-pointer transform hover:scale-105 shadow-md"
        : "cursor-not-allowed opacity-60"
    }`}
            onClick={addCountry}
          >
            Add Country
          </div>
        </div>

        {(isDropdownVisible || searchItem) && (
          <Dropdown
            filteredCountries={filteredCountries}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </div>

      <div className="">
        <SelectedCountry
          selectedCountries={selectedCountries}
          setSelectedCountries={setSelectedCountries}
        />
      </div>
    </div>
  );
};
