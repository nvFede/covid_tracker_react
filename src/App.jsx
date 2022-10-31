import { useState } from "react";
import covidLogo from "./assets/covidlogo.jpeg";
import ListTable from "./components/ListTable";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Loader from "./utils/Loader";

function App() {
  return (
    <>

      <div className="flex">

      <aside className="p-10 h-screen flex-col sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-800">
        <Sidebar />
      </aside>

      <main className="bg-gray-100 main p-20 flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Loader>
          <ListTable />
        </Loader>
      </main>
      </div>
    </>
  );
}

export default App;
