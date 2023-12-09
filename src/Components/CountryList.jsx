import "../Styles/countrylist.css";

const CountryList = ({data}) => {
 
  return (
    <div className="card">
      <img src={data.flags.png} alt="" className="img"/>
      <div className="content">
        <h3 className="name">{data.name.common}</h3>
        <p className="details">Population: {data.population}</p>
        <p className="details">Region: {data.region}</p>
        <p className="details">Captial:{data.capital}</p>
      </div>
    </div>
  )
}

export default CountryList