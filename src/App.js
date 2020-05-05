import React from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Carousel from "./components/caurosel";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
