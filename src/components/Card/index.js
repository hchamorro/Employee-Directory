import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <h3>{props.name}</h3>
        <ul>
          <li>
            <strong>Position: </strong>
            {props.position}
          </li>
          <li>
            <strong>Salary: </strong>${props.salary}
          </li>
        </ul>
      </div>
      {/* <button onClick={() => props.removeEmployee(props.id)}>Delete</button> */}
      {props.children}
    </div>
  );
}

export default Card;
