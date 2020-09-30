import React from "react";


const Search = ({ setSearch }) => {
 
  return (
    <div className="search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
