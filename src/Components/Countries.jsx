import  { useState } from "react";
import Country from "./Country";
import useFetch from "./useFetch";

const Countries = () => {
  const loadingMessage = <p>Data is Loading....</p>;
  const { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [query, setQuery] = useState("");
  const [countryList, setCountryList] = useState("");


  const handleRemove=(name)=>{
    const newCountry=countryList.filter((country)=>country.name.common  !==name)
    setCountryList(newCountry)
  }

 

  const countryData =
    data &&
    data
      .filter((item) => item.name.common.toLowerCase().includes(query))
      .map((item, index) => {
        return (
          <div  key={index} className="col-md-3 my-2">
               <Country
             
              name={item.name.common}
              flags={item.flags.png}
              population={item.population}
              official={item.name.official}
              capital={item.capital}
              area={item.area}
              onRemoveCountry={handleRemove}
            />
          </div>
        );
      });
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
 

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      <div className="box">
        <input
          type="text"
          className="search"
          placeholder="Search...."
          onChange={handleSearch}
        />
      </div>     
      <div className="row m-4 p-4 ">{countryData}</div>
    </div>
  );
};

export default Countries;
