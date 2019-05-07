import React from "react";

const SearchBar = props => {
  return (
    <div className="filter">
      <input
        id="search-input"
        value={props.searchTerm}
        onChange={props.onSearchInputChangeHandler}
        placeholder="Search to find music"
      />      </div>

  );
};

export default SearchBar;
