import React, { Component } from "react";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import BlockApp from "../../components/BlockApp";
import Footer from "../../components/footer";
import Cinema from "../../components/Cinema";
import BackToTop from "../../components/BackToTop";

class Home extends Component {
 
  
  render() {
    // console.log(this.props);
    return (
      <div>
        <Carousel/>
        <ListMovie />
        <Cinema/>
        <BlockApp/>
        <Footer />
        <BackToTop/>
      </div>
    );
  }
}

export default Home;
