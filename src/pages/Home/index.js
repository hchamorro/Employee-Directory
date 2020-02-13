import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import NaveBar from '../../components/NavBar';

import EmployeesJSON from './../../employees.json';

function Home() {
  // let [employees, setEmployees] = useState(EmployeesJSON);

  let [employees, setEmployees] = useState([]);
  //   const [employees, setEmployees] = useState([{
  //     id: '',
  //     name: '',
  //     position: '',
  //     salary: ''
  //   }]);

  useEffect(() => {
    setEmployees(EmployeesJSON);
    console.log(employees);
  }, []);

  const removeEmployee = id => {
    let employeesArray = employees.filter(employee => employee.id !== id);
    setEmployees(employeesArray);
  };

  return (
    <>
      <Title>Employee Directory</Title>
      <NaveBar></NaveBar>
      <Wrapper>
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

export default Home;
