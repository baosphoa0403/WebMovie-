import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Caurosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }
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
        <Slider id="carousel" {...settings}>
          <div className="carousel_item_cotent">
            <div className="owl-carousel owl-theme">
              <div className="carousel_item" style={{ margin: "75px 0px" }}>
                <img src={banner1}  style={{    width: "100%"}}/>
                <div className="carousel_overlay" />
                <div className="carousel_detail w-100 text-center text-white">
                  <a
                    className="venobox"
                    data-vbtype="video"
                    href="https://youtu.be/kSufj59H4K4"
                  >
                    <i className="fa fa-play d-block mx-auto mb-3 video-play" />
                  </a>
                </div>
              </div>
              <div className="carousel_item" style={{ margin: "75px 0px" }}>
                <img src={banner2}  style={{    width: "100%"}}/>
                <div className="carousel_overlay" />
                <div className="carousel_detail w-100 text-center text-white">
                  <a
                    className="venobox"
                    data-vbtype="video"
                    href="https://youtu.be/kSufj59H4K4"
                  >
                    <i className="fa fa-play d-block mx-auto mb-3 video-play" />
                  </a>
                </div>
              </div>
              <div className="carousel_item" style={{ margin: "75px 0px" }}>
                <img src={banner4}  style={{    width: "100%"}}/>
                <div className="carousel_overlay" />
                <div className="carousel_detail w-100 text-center text-white">
                  <a
                    className="venobox"
                    data-vbtype="video"
                    href="https://youtu.be/kSufj59H4K4"
                  >
                    <i className="fa fa-play d-block mx-auto mb-3 video-play" />
                  </a>
                </div>
              </div>
              <div className="carousel_item" style={{ margin: "75px 0px" }}>
                <img src={banner6} style={{    width: "100%"}} />
                <div className="carousel_overlay" />
                <div className="carousel_detail w-100 text-center text-white">
                  <a
                    className="venobox"
                    data-vbtype="video"
                    href="https://youtu.be/kSufj59H4K4"
                  >
                    <i className="fa fa-play d-block mx-auto mb-3 video-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
