import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./components/howTo/HowTo";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/howto" element={<HowTo />} />
    </Routes>
  );
};

export default App;
