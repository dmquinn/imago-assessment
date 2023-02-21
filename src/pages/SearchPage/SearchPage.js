import React, { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import SearchBar from "../../components/SearchBar/SearchBar";
import { config } from "../../config";

const SearchPage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    handleFetchData("");
  }, []);

  const handleFetchData = async (query) => {
    try {
      const resp = await fetch(`${config.apiUrl}/search?query="${query}"`);
      const data = await resp.json();
      if (data) setImages(data.media);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetchData(query);
  };

  images && console.log(images);
  return (
    <div className="app">
      <SearchBar handleSubmit={handleSubmit} setQuery={setQuery} />
      <Gallery images={images} />
    </div>
  );
};

export default SearchPage;
