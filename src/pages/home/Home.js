import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import Footer from "../../components/footer";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <ListMovie />
        <Footer />
      </div>
    );
  }
}

export default Home;
