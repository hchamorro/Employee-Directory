import React from 'react';
import './style.css';

function SearchBox(props) {
  return (
    <form>
      <div className="card">
        <label htmlFor="search">Search for Employee: </label>
        <input
          onChange={props.handleInput}
          value={props.search}
          name="search"
          type="text"
          placeholder=""
          id="search"
        />
        <button onClick={props.handleFormSubmit}>Search</button>
      </div>
    </form>
    // <div className="card">
    //   <div className="content">
    //     <h3>Search for Employee</h3>
    //     <input />
    //   </div>
    // </div>
  );
}

export default SearchBox;
