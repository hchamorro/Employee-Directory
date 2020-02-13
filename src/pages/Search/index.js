import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import SeachForm from '../../components/SearchForm';
import Wrapper from '../../components/Wrapper';
import NaveBar from '../../components/NavBar';

import EmployeesJSON from './../../employees.json';

function Search() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(EmployeesJSON);
    console.log(employees);
  }, []);

  const removeEmployee = id => {
    let employeesArray = employees.filter(employee => employee.id !== id);
    setEmployees(employeesArray);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.search.value);
    const nameSearch = e.target.search.value;
    findEmployee(nameSearch);
  };

  const findEmployee = name => {
    let employeeArray = EmployeesJSON.filter(
      employee =>
        employee.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    setEmployees(employeeArray);
  };

  return (
    <>
      <Title>Employee Directory</Title>
      <NaveBar></NaveBar>
      <Wrapper>
        <SeachForm handleFormSubmit={handleFormSubmit}></SeachForm>
        {employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            salary={employee.salary}
            removeEmployee={removeEmployee}
          >
            <button onClick={() => removeEmployee(employee.id)}>Delete</button>
          </Card>
        ))}
      </Wrapper>
    </>
  );
}

export default Search;
