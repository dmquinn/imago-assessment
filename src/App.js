import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SingleMediaView from "./pages/SingleMediaView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/images/:id" element={<SingleMediaView />} />
      </Routes>
    </Router>
  );
};

export default App;
