import React from "react";
import "./App.css";
// import Total from "./components/total";
import Navbar from "../src/components/navbar";
import Carousel from "./components/caurosel";
import ListMovie from "./pages/home/ListMovie";
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ListMovie />
    </div>
  )
}

export default App;
