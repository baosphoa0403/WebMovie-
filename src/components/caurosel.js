import React, { Component } from "react";

// import ModalVideo from "react-modal-video";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Caurosel extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* <div>
          <OwlCarousel items={1} className="owl-theme" loop nav margin={4}>
            <React.Fragment>
              <img className="img" src={banner1} />
            </React.Fragment>
            <React.Fragment>
              <img className="img" src={banner2} />
            </React.Fragment>
            <React.Fragment>
              <img className="img" src={banner4} />
            </React.Fragment>
            <React.Fragment>
              <img className="img" src={banner6} />
            </React.Fragment>
          </OwlCarousel>
        </div> */}
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={banner1} />
            </div>
            <div className="carousel-item">
              <img src={banner2} />
            </div>
            <div className="carousel-item">
              <img src={banner4} />
            </div>
            <div className="carousel-item">
              <img src={banner6} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
