import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import HowTo from "./components/howTo/HowTo";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/howto" element={<HowTo />} />
    </Routes>
  );
};

export default App;
