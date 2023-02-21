import React from "react";
import "./searchBar.css";

const SearchBar = ({ handleSubmit, setQuery }) => {
  return (
    <form className="searchBarContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
