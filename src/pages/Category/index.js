import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import NaveBar from '../../components/NavBar';
import CategoryCard from '../../components/CategoryCard';

import EmployeesJSON from './../../employees.json';

function Category() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(EmployeesJSON);
    console.log(employees);
  }, []);

  const sortAZ = () => {
    console.log('clicked');
    let sortEmployees = employees.sort((a, b) => {
      return a.salary - b.salary;
    });
    console.log(sortEmployees);
    // setEmployees(sortEmployees);
  };

  return (
    <>
      <Title>Employee Directory</Title>
      <NaveBar></NaveBar>
      <Wrapper>
        <CategoryCard sortAZ={sortAZ}></CategoryCard>
        {employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            salary={employee.salary}
            // removeEmployee={removeEmployee}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Category;
