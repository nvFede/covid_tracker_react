import React from 'react';

const ListRows = (
    {countries}
) => {
    return (
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
    );
};

export default ListRows;