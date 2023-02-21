import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input type="text" id="search" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
