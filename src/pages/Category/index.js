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
    console.log('init set employees', employees);
  }, []);

  const sortSalary = () => {
    console.log('clicked');

    const employeeArray = employees.sort((a, b) => {
      const nameA = a.salary;
      const nameB = b.salary;
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    console.log('numbers are sorted woo', employeeArray);
    setEmployees(employeeArray);
  };

  const compare = (a, b) => {
    const nameA = a;
    const nameB = b;
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };
  return (
    <>
      <Title>Employee Directory</Title>
      <NaveBar></NaveBar>
      <Wrapper>
        <CategoryCard>
          <button onClick={() => sortSalary()}> Sort by Salary</button>
        </CategoryCard>
        {employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            salary={employee.salary}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Category;
