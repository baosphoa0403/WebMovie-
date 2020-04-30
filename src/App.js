import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Total from "./components/total";
import Navbar from "../src/components/navbar";
import Carousel from "./components/caurosel";
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
    </div>
  )
}

export default App;
