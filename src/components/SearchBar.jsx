// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="input-box" placeholder="Leaving from" />
      <input type="text" className="input-box" placeholder="Going to" />
      <input type="date" className="input-box date-picker" />
      <input type="text" className="input-box" placeholder="1 passenger" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
