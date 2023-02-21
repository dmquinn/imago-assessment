import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import "./searchBar.css";

const SearchBar = ({ handleSubmit, setQuery, query }) => {
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
      {query && <XMarkIcon className="xIcon" />}
    </form>
  );
};

export default SearchBar;
