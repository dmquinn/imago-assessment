import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState, Dispatch, SetStateAction } from "react";
import "./searchBar.css";

interface Props {
  handleSubmit: Dispatch<SetStateAction<any>>;
  setQuery: Dispatch<SetStateAction<any>>;
  query: string;
}

const SearchBar: React.FC<Props> = ({ handleSubmit, setQuery, query }) => {
  return (
    <form className="searchBarContainer" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query && <XMarkIcon className="xIcon" onClick={() => setQuery(null)} />}
    </form>
  );
};

export default SearchBar;
