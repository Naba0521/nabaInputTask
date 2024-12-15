import Dropdown from "../components/Dropdown"
import { fireEvent, render } from "@testing-library/react"

describe('Dropdowncomponent',()=>{
    const MockFilteredCountries= [
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
      ]
      const MockSetSelectedCountry=jest.fn()

    it('click dropdown countries',()=>{
        const{getByTestId}=render(<Dropdown filteredCountries={MockFilteredCountries} setSelectedCountry={MockSetSelectedCountry}/>)
        const selectCountry=getByTestId('selectCountry-0')
        fireEvent.click(selectCountry)
        const selectCountry1=getByTestId('selectCountry-1')
        fireEvent.click(selectCountry1)
        const selectCountry2=getByTestId('selectCountry-2')
        fireEvent.click(selectCountry2)

    })
})