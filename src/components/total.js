import React, { Component } from "react";
import Navbar from "./navbar";
import Carousel from "./caurosel";
export default class Total extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
      </div>
    );
  }
}
