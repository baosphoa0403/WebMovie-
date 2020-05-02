import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Carousel from "./components/caurosel";
import Mvideo from "./components/mvideo";
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Mvideo />
    </div>
  );
}

export default App;
