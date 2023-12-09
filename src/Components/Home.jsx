import { Link ,useLoaderData } from "react-router-dom";
import "../Styles/home.css";
import { FaSearch } from "react-icons/fa";
import { getCountries } from "../Api/getData";
import CountryList from "./CountryList";
import { useEffect, useState } from "react";


const Home = () => {
  const countries = useLoaderData();
  const [country,setCountry] = useState(countries);
  const [search,setSearch] = useState('');


  function handleSearch(e){
    if(!e.target.value){
      return setCountry(countries);
    }
    setSearch(e.target.value);
  }

  useEffect(() => {
    
    let filter = country.filter((el) =>( 
      el.name.common.toLowerCase().includes(search)
    ));
    setCountry(filter);
  },[search])
 
 
  return (
    <div className="home">
      <div className="filter">
        <div className="search">
          <FaSearch className="icon" />
          <input 
            type="text" name="" id="" 
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex">
      {country.map(element => (
        <Link to={`country/${element.name.common}`}key={element.cca2} className="link">
          <CountryList data={element}/>
        </Link>
      ))}
      </div>
    </div>
  )
}

export async function loader(){
  const country = await getCountries();
  return country;
}

export default Home