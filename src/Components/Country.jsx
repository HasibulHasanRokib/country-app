
const Country = (props) => {
 const{name,official,capital,population,area,flags}=props; 
const removeCountry=(name)=>{
props.onRemoveCountry(name)
}
const formatNumber = (population) => {
  if (population >= 1e9) {
    return (population / 1e9).toFixed(1) + 'B';
  } else if (population >= 1e6) {
    return (population / 1e6).toFixed(1) + 'M';
  } else if (population >= 1e3) {
    return (population / 1e3).toFixed(1) + 'K';
  }
  return population.toString();
};

const abbreviatedNumber = formatNumber(population);



  return (
    <div>
      <div className="card shadow">
  <img src={flags} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold m-auto">{name}</h5>
    <samp className="card-text fw-lighter">Official: {official}</samp><br />
    <samp className="card-text fw-lighter">Capital: {capital}</samp><br />
    <samp className="card-text fw-lighter">Population: {abbreviatedNumber}</samp><br />
    <samp className="card-text fw-lighter">Area: {area}</samp><br />
    <button className="btn" onClick={()=>removeCountry(name)}>Delete</button>
  </div>
</div>
    </div>
  )
}

export default Country
