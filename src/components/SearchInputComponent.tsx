"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCircleChevDown, CiCircleChevUp, CiTrash } from "react-icons/ci";
import { MdClear } from "react-icons/md";

const countries = [
  {
    name: "Mongolia",
    flag: "https://flagcdn.com/w320/mn.png",
    capital: "Ulaanbaatar",
    population: "3.5 million",
    information:
      "Mongolia is a landlocked country in East Asia and Central Asia, bordered by Russia to the north and China to the south.",
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/w320/tr.png",
    capital: "Ankara",
    population: "86 million",
    information:
      "Turkey is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeastern Europe.",
  },
  {
    name: "South Korea",
    flag: "https://flagcdn.com/w320/kr.png",
    capital: "Seoul",
    population: "52 million",
    information:
      "South Korea, officially the Republic of Korea, is a country in East Asia, known for its high-tech industry, cultural heritage, and vibrant cities.",
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png",
    capital: "Tokyo",
    population: "125 million",
    information:
      "Japan is an island nation in East Asia, known for its rich culture, cutting-edge technology, and strong economy.",
  },
  {
    name: "United States",
    flag: "https://flagcdn.com/w320/us.png",
    capital: "Washington, D.C.",
    population: "337 million​",
    information:
      "The United States is a large country in North America, known for its diverse culture, history, and significant global influence.",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
    capital: "Ottawa",
    population: "39 million",
    information:
      "Canada is the second-largest country in the world by total area, known for its natural beauty and multicultural society.",
  },
  {
    name: "China",
    flag: "https://flagcdn.com/w320/cn.png",
    capital: "Beijing",
    population: "1.42 billion",
    information:
      "China is the world's most populous country and the third-largest by land area, with a rich cultural history dating back thousands of years.",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    capital: "New Delhi",
    population: "1.41 billion",
    information:
      "India is a diverse country in South Asia, known for its history, religions, and rapid economic growth.",
  },
  {
    name: "Russia",
    flag: "https://flagcdn.com/w320/ru.png",
    capital: "Moscow",
    population: "145 million",
    information:
      "Russia is the largest country in the world by land area, spanning Eastern Europe and northern Asia, known for its rich cultural and political history.",
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
    capital: "Brasília",
    population: "217 million",
    information:
      "Brazil is the largest country in South America, known for its rainforests, beaches, and vibrant cultural heritage.",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/w320/de.png",
    capital: "Berlin",
    population: "83 million",
    information:
      "Germany is a European country with a rich cultural heritage, known for its history, engineering, and art.",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w320/fr.png",
    capital: "Paris",
    population: "67 million",
    information:
      "France is a European country known for its cultural influence, cuisine, and landmarks such as the Eiffel Tower.",
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w320/gb.png",
    capital: "London",
    population: "68 million",
    information:
      "The United Kingdom is a country in Europe comprising England, Scotland, Wales, and Northern Ireland, with a long history of global influence.",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/w320/it.png",
    capital: "Rome",
    population: "59 million",
    information:
      "Italy is a country in Southern Europe, famous for its history, art, cuisine, and landmarks like the Colosseum and the Vatican.",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
    capital: "Canberra",
    population: "26 million",
    information:
      "Australia is an island country and continent, known for its wildlife, beaches, and vibrant multicultural cities.",
  },
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
          <div className="p-3 w-[200px]">
            {filteredCountries.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filteredCountries.map((item, index) => {
                  return (
                    <div
                      data-testid={`selectCountry-${index}`}
                      key={index}
                      className={`flex gap-4 items-center rounded-md p-2 cursor-pointer hover:scale-110 hover:bg-purple-400 duration-500 ${
                        selectedCountry?.name === item.name
                          ? "bg-purple-400"
                          : ""
                      }`}
                      onClick={() => setSelectedCountry(item)}
                    >
                      <div className="relative w-8 h-4 border">
                        <Image fill alt="flag" src={item.flag} />
                      </div>
                      <div>{item.name}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>No results found</div>
            )}
          </div>
        )}
      </div>

      <div className="">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-semibold rounded-lg shadow-lg">
            Selected Countries
          </div>
          {selectedCountries.length === 0 ? (
            <p>No countries selected</p> // This is the message to show if no countries are selected
          ) : (
            selectedCountries.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center w-[200px] justify-between"
              >
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
                        {item.population}
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
                    data-testid={`deleteCountry-${index}`}
                    className="text-green-800 text-[20px] cursor-pointer hover:scale-110 duration-1000"
                    onClick={() => {
                      setSelectedCountries(
                        selectedCountries.filter(
                          (country) => country.name !== item.name
                        )
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
      </div>
    </div>
  );
};
