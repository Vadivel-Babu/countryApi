const URL = "https://restcountries.com/v3.1/all";

export async function getCountries(){
  try {
    const data = await fetch(URL);
    const res = await data.json();
    return res;    
  } catch (error) {
    console.log(error);
  }
}

export async function getCountry(name){
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const res = await data.json();
    return res;    
  } catch (error) {
    console.log(error);
  }
}