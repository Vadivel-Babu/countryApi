import { Link, useLoaderData } from "react-router-dom"
import { getCountry } from "../Api/getData";
import "../Styles/country.css";

const Country = () => {
  const [country] = useLoaderData();
  
 console.log(country);
  if(country === undefined){
    return <h1>not found</h1>
  }
  const nativeName = Object.keys(country.name.nativeName)[0];
  const currency = Object.keys(country.currencies)[0];
  console.log(nativeName,currency);
  
  
  return (
    <div className="country">
     <Link to='/' className="back">
      Back
     </Link>
     <div className="block">
      <img src={country.flags.png} alt="" className="flag"/>
      <div className="details">
        <h1 className="name">{country.name.common}</h1>
        <div className="details-1">
          <div>
            <p className="subname">Native Name: {country.name.nativeName[nativeName].common}</p>
            <p className="subname">Population: {country.population}</p>
            <p className="subname">Region: {country.region}</p>
            <p className="subname">Sub Region: {country.subregion}</p>
            <p className="subname">Capital: {country.capital}</p>
          </div>
          <div>
            <p className="subname">Top Level Domain: {country.tld[0]}</p>
            <p className="subname">Currencies: {country.currencies[currency].name}</p>
            <p className="subname">Languages: {country.languages[nativeName]}</p>
          </div>
        </div>
        <div className="border">
          <h3 className="borders">
            Border Countries: 
            {country.borders ?  country.borders.map((e) => <span key={e} className="span">{e}</span>) : 'No country'}
          </h3>
        </div>
      </div>
     </div>
     
    </div>
    
  )
}

export async function loader({params}){

  
  const countryName = await getCountry(params.name)
  return countryName;
}

export default Country