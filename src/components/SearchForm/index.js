import React from 'react';
import './style.css';

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="card">
        <label htmlFor="search">Search for Employee: </label>
        <input
          onChange={props.handleInput}
          value={props.search}
          name="search"
          list="search"
          type="text"
          placeholder="Type Emloyee Name"
          id="search"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
