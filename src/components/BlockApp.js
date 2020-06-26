import React, { Component } from "react";
import mobile from "../images/img/blockApp/mobile.png";
import slide1 from "../images/img/blockApp/slide1.jpg";
import slide2 from "../images/img/blockApp/slide2.jpg";
import slide3 from "../images/img/blockApp/slide3.jpg";
import slide5 from "../images/img/blockApp/slide5.jpg";
import slide6 from "../images/img/blockApp/slide6.jpg";
import slide7 from "../images/img/blockApp/slide7.jpg";
import slide8 from "../images/img/blockApp/slide8.jpg";
import slide10 from "../images/img/blockApp/slide10-2.jpg";
import slide11 from "../images/img/blockApp/slide11-2.jpg";
import slide12 from "../images/img/blockApp/slide12.jpg";
import slide13 from "../images/img/blockApp/slide13.jpg";
import slide15 from "../images/img/blockApp/slide15.jpg";
import slide16 from "../images/img/blockApp/slide16.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class BlockApp extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    return (
      <React.Fragment>
        <section className="ng-scope" name="test10">
          <div className="row" style={{ marginRight: 0 }}>
            <div className="col-xs-12" id="homeApp">
              <div className="mainMaxWidth">
                <div className="row">
                  <div className="col-md-6 left text-left">
                    <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                    <p className="textLeft">người yêu điện ảnh</p>
                    <br />
                    <p className="textSmallLeft">
                      {" "}
                      Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                      rạp và đổi quà hấp dẫn.
                    </p>
                    <button
                      className="buttonLeft"
                      onclick="window.open('https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8','_blank');"
                    >
                      App miễn phí - Tải về ngay!
                    </button>
                    <p className="textAppUnder">
                      CINEMAX có hai phiên bản
                      <a
                        className="tagA"
                        style={{ width: 25 }}
                        href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                      >
                        iOS
                      </a>
                      &amp;
                      <a
                        className="tagA"
                        style={{ width: 56 }}
                        href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                      >
                        Android
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 right-App">
                    <img
                      src={mobile}
                      alt=""
                      className="img-responsive phone-img"
                    />
                    <div className="sliderScreen">
                      <Slider {...settings}>
                        <div>
                          <img src={slide1} alt="" />
                        </div>
                        <div>
                          <img src={slide2} alt="" />
                        </div>
                        <div>
                          <img src={slide3} alt="" />
                        </div>
                        <div>
                          <img src={slide5} alt="" />
                        </div>
                        <div>
                          <img src={slide6} alt=""/>
                        </div>
                        <div>
                          <img src={slide7} alt="" />
                        </div>
                        <div>
                          <img src={slide8} alt="" />
                        </div>
                        <div>
                          <img src={slide10} alt="" />
                        </div>
                        <div>
                          <img src={slide11} alt="" />
                        </div>
                        <div>
                          <img src={slide12} alt=""/>
                        </div>
                        <div>
                          <img src={slide13} alt="" />
                        </div>
                        <div>
                          <img src={slide15} alt="" />
                        </div>
                        <div>
                          <img src={slide16} alt="" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
