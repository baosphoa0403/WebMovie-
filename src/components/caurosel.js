import React, { Component } from "react";

// import ModalVideo from "react-modal-video";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Caurosel extends Component {
  render() {
    return (
      <div>
        <div>
          <OwlCarousel items={1} className="owl-theme" loop nav margin={4}>
            <div>
              <img className="img" src={banner1} />
            </div>
            <div>
              <img className="img" src={banner2} />
            </div>
            <div>
              <img className="img" src={banner4} />
            </div>
            <div>
              <img className="img" src={banner6} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
