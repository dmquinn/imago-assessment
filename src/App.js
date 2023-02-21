import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchPage from "./pages/SearchPage/SearchPage";
import SingleMediaView from "./pages/SingleMediaView/SingleMediaView";

const App = () => {
  return (
    <Router>
      {" "}
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/images/:id" element={<SingleMediaView />} />
      </Routes>
    </Router>
  );
};

export default App;
