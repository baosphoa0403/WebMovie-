import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <ListMovie />
      </div>
    );
  }
}

export default Home;
