import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mvideo from "./mvideo";
export default class Caurosel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div>
              <img
                src={banner1}
                style={{ width: "100%", position: "relative" }}
              />
            </div>
          </div>
          <div>
            <img
              src={banner2}
              style={{ width: "100%", position: "relative" }}
            />
          </div>
          <div>
            <img
              src={banner4}
              style={{ width: "100%", position: "relative" }}
            />
          </div>
          <div>
            <img
              src={banner6}
              style={{ width: "100%", position: "relative" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
  // constructor() {
  //   super();
  //   this.state = {
  //     isOpen: false,
  //   };
  //   this.openModal = this.openModal.bind(this);
  // }

  // openModal() {
  //   this.setState({ isOpen: true });
  // }

  // render() {
  //   return (
  //     <div>
  //       <ModalVideo
  //         channel="youtube"
  //         isOpen={this.state.isOpen}
  //         videoId="42Gtm4-Ax2U"
  //         onClose={() => this.setState({ isOpen: false })}
  //       />
  //       <button onClick={this.openModal}>Open</button>
  //     </div>
  //   );
  // }
}
