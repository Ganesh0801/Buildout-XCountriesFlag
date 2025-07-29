import "./Flag.css";

import  { useState, useEffect } from "react";

function Flag() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Countries Flags</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <div key={country.name.abbr} className="country">
            <img
              src={country.flag}
              alt={`Flag of ${country.name.common}`}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flag;