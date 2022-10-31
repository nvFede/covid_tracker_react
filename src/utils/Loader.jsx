import React, { useState, useEffect } from "react";
import axios from "axios";

const Loader = ({ children }) => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        (async () => {
            await axios
              .get("https://disease.sh/v3/covid-19/countries")
              .then(function (response) {
                setData(response.data);
                console.log(response.data);
      
                const countriesArr = response.data.map((country) => ({
                  name: country.country, //United Kingdom, Unites States Of America, India,
                  code: country.countryInfo.iso2, //UK, USA, IND
                  continent: country.continent,
                  deaths: country.deaths,
                  population: country.population,
                  tests: country.tests,
                  cases: country.cases,
                  casesPerOneMillion: country.casesPerOneMillion,
                  flag: country.countryInfo.flag,
                }));
      
                setCountries(countriesArr);
              });
          })();
    }, 1000);
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { countries });
        }
        return child;
      })}
    </>
  );
};

export default Loader;
