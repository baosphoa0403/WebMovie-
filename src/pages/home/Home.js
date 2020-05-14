import React, { Component } from "react";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import BlockApp from "../../components/BlockApp";
import Footer from "../../components/footer";
import Cinema from "../../components/Cinema";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <ListMovie />
        <Cinema/>
        <BlockApp/>
        <Footer />
      </div>
    );
  }
}

export default Home;
