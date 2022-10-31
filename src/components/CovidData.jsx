import axios from "axios";
import React, { useEffect, useState } from "react";
import ListTable from "./ListTable";

const CovidData = () => {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <>
      

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                Cases
              </th>
              <th scope="col" className="py-3 px-6">
                Deaths
              </th>
              <th scope="col" className="py-3 px-6">
                Population
              </th>
            </tr>
          </thead>
          <tbody>
            {countries &&
              countries.map((country) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={country.name}>
                  <td className="py-4 px-6 italic">
                    <div className="flex">
                      {" "}
                      <img className="w-8 object-contain" src={country.flag} alt={country.name} />{" "}
                      <span className="ml-4">{country.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {country.cases.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    {country.deaths.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    {country.population.toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CovidData;
