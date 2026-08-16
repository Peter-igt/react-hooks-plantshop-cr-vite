import React from "react";

function Search({ onSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => (onSearch ? onSearch(e.target.value) : null)}
      />
    </div>
  );
}

export default Search;