import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { config } from "../config";

const SearchPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const resp = await fetch(`${config.apiUrl}/search?query=`);
      const data = await resp.json();
      if (data) setImages(data.media);
    } catch (err) {
      console.log(err); //popup
    }
  };
  images && console.log(images);
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Gallery images={images} />
    </div>
  );
};

export default SearchPage;
