import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";
import ListRows from "./ListRows";

const ListTable = ({ countries }) => {
  return (
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
      {countries && <ListRows countries={countries} />}
    </table>
  );
};

export default ListTable;
