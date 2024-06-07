import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import DogDetails from "./Components/DogDetails"; // Import DogDetails component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:name" element={<DogDetails />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
