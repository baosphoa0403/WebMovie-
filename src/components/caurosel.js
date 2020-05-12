import React, { Component } from "react";

// import ModalVideo from "react-modal-video";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
export default class Caurosel extends React.Component {

  render() {
    return (
      <div>
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
            <li data-target="#carouselId" data-slide-to={3} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={banner1} />
            <div>
               <a  className="watchTrailerrailer" href="https://youtu.be/kSufj59H4K4" data-lity>
                  <i class="fa fa-play video-play"></i>
              </a>
            </div>
            </div>
            <div className="carousel-item">
              <img src={banner2} />
             <div>
               <a  className="watchTrailerrailer" href="https://youtu.be/kSufj59H4K4" data-lity>
                  <i class="fa fa-play video-play"></i>
              </a>
            </div>
            </div>
            <div className="carousel-item">
              <img src={banner4} />
             <div>
               <a  className="watchTrailerrailer" href="https://youtu.be/kSufj59H4K4" data-lity>
                  <i class="fa fa-play video-play"></i>
              </a>
            </div>
            </div>
            <div className="carousel-item">
              <img src={banner6} />
             <div>
               <a  className="watchTrailerrailer" href="https://youtu.be/kSufj59H4K4" data-lity>
                  <i class="fa fa-play video-play"></i>
              </a>
            </div>
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
