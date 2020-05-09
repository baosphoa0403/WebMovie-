import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import BlockApp from "../../components/BlockApp";
import Footer from "../../components/footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <ListMovie />
        <BlockApp/>
        <Footer />
      </div>
    );
  }
}

export default Home;
