import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import SearchBar from "../../components/SearchBar/SearchBar";
import { config } from "../../config";

const SearchPage = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    handleFetchData("");
  }, []);

  const handleFetchData = async (query: string) => {
    try {
      const resp = await fetch(`${config.apiUrl}/search?query="${query}"`);
      const data = await resp.json();
      if (data) setImages(data.media);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleFetchData(query);
  };

  return (
    <div className="app">
      <SearchBar
        handleSubmit={handleSubmit}
        setQuery={setQuery}
        query={query}
      />
      <Gallery images={images} />
    </div>
  );
};

export default SearchPage;
