import React, { useState, useEffect } from "react";
import API from "./utils/API";

import Head from './components/head';
import Search from './components/search';
import ResultsDiv from './components/resultsdiv';
import Foot from './components/foot';
import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);
  const [employeeSearch, setEmployeeSearch] = useState([]);
  const [ascending, setOrderBy] = useState(true);

  useEffect(() => {
      API.getRandomUser()
          .then((results) => {
            setEmployees(results);
            setEmployeeSearch(results);
          })
          .catch(err => console.log(err));
  }, []) 

  const handleInputChange = (event) => {
    event.persist()
    let value = event.target.value;
    setEmployeeSearch(
      employees.filter(obj => {
        return (obj.name.includes(value)) ? true : false;
      })
    )
  };

  const handleSortButton = () => {
    setOrderBy(!ascending);
    if (ascending) employeeSearch.sort((a, b) => a.name > b.name ? 1 : -1);
    if (!ascending) employeeSearch.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  return (
    <>
      <Head />
      <Search handleInputChange={handleInputChange}/>
      <ResultsDiv 
        employees={employees} 
        employeeSearch={employeeSearch} 
        handleInputChange={handleInputChange}
        handleSortButton={handleSortButton}
      />
      <Foot />
    </>
  );
}

export default App;
