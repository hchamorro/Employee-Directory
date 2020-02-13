import React from 'react';
import Card from './Card.js';
import './style.css';
import employees from '../../employees.json.js';

class CardContainer extends React.Component {
  state = {
    employees
  };

  //methods
  removeEmployee = id => {
    const employees = this.state.employees.filter(
      employee => employee.id !== id
    );
    this.setState({ employees });
  };
  // need a sort
  //array employees use effect to poplulate array

  render() {
    return (
      <>
        {this.state.employees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            position={employee.position}
            salary={employee.salary}
            removeEmployee={this.removeEmployee}
          />
        ))}
      </>
    );
  }
}
export default CardContainer;
