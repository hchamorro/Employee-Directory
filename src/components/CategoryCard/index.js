import React from 'react';
import './style.css';

function CategoryCard(props) {
  return (
    <div className="card">
      <label htmlFor="search">Choose Category: </label>
      <button onClick={() => props.sortAZ()}>A-Z</button>
      {/* <button type="submit">Z-A</button>
      <button type="submit">Salary</button>
      <button type="submit">Department</button> */}
    </div>
  );
}

export default CategoryCard;
