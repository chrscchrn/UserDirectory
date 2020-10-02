import React, { useState, useEffect } from "react";
import API from "./utils/API";

import Head from './components/head';
import Search from './components/search';
import ResultsDiv from './components/resultsdiv';
import Foot from './components/foot';
import './App.css';

function App() {

  const [employees, setEmployees] = useState([]);
  const [employeeSearch, setEmployeeSearch] = useState([])

  useEffect(() => {
      API.getRandomUser()
          .then((results) => {
            setEmployees(results);
            setEmployeeSearch(results);
          })
          .catch(err => console.log(err));
  }, []) 

  return (
    <>
      <Head />
      <Search />
      <ResultsDiv employees={employees}/>
      <Foot />
      {console.log(employees[0])}
    </>
  );
}

export default App;
