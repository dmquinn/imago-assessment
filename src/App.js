import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SingleImage from "./pages/SingleImage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/:id" component={SingleImage} />
      </Routes>
    </Router>
  );
};

export default App;
