import React, { Component } from "react";
import banner1 from "../images/img/banner1.jpg";
import banner2 from "../images/img/banner2.jpg";
import banner4 from "../images/img/banner4.jpg";
import banner6 from "../images/img/banner6.png";
export default class Caurosel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }
  render() {
    return (
      <div>
        <section id="carousel">
          <div className="carousel_item_cotent">
            <div className="owl-carousel owl-theme">
              <div className="carousel_item" style={{ margin: "75px 0px" }}>
                <img src={banner1} />
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
                <img src={banner2} />
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
                <img src={banner4} />
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
                <img src={banner6} />
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
        </section>
      </div>
    );
  }
}
