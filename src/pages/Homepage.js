import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import data from "../data.json";

function Homepage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(data);
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const resp = await fetch("");
      const data = await resp.json();
      if (data) setImages(data);
    } catch (err) {
      console.log(err); //popup
    }
  };
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Gallery />
    </div>
  );
}

export default Homepage;
