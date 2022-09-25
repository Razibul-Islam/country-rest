import './App.css';
import Countries from './Component/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}














/* function LoadCountry() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
    
  }, [])
  
  return (
    <div>
      <h1>World all country</h1>
      <h3>Available countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          kor={country.translations.kor.common}
        ></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>kor:{props.kor}</p>
    </div>
  )
} */

export default App;
