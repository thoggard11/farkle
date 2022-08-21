import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./components/howTo/HowTo";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Farkle!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howto" element={<HowTo />} />
      </Routes>
    </div>
  );
};

export default App;
