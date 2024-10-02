// src/components/Search.js
import React from 'react';

const Search = ({ setSearchQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
