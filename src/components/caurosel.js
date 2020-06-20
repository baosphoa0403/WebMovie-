import React from "react";
import banner1 from "../images/img/vin-diesel-BLOODSHOT.png";
import banner2 from "../images/img/sieu-ve-si-so-vo.jpg";
import banner3 from "../images/img/vi-anh-van-tin.jpg";
import banner4 from "../images/img/dau-an-vo-cuc.jpg";
import banner5 from "../images/img/loan-nhip.jpg";
import SearchBar from "./SearchBar";
import Dialog1 from "./Dialog";
export default class Caurosel extends React.Component {
  render() {
    return (
      <div name="test1">
        <section className="carousel">
          <div className="carousel__content">
            <div
              id="TixIndicators"
              className="carousel slide tixCarousel"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#TixIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#TixIndicators" data-slide-to={1} />
                <li data-target="#TixIndicators" data-slide-to={2} />
                <li data-target="#TixIndicators" data-slide-to={3} />
                <li data-target="#TixIndicators" data-slide-to={4} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="#" className="carousel__changeDetail">
                    <img
                      src={banner1}
                      className="d-block w-100"
                      alt="BLOODSHOT"
                    />
                    <div className="carousel__bg"></div>
                  </a>
                  <button type="button" className="carousel__button">
                    <a href="#" className="carousel__changeDetail"></a>

                    <Dialog1
                      trailer={"https://www.youtube.com/embed/MG-BJBSeV64"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner2}
                    className="d-block w-100"
                    alt="sieu-ve-si-so-vo"
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/-uOpDY8DAsM"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner3}
                    className="d-block w-100"
                    alt="vi-anh-van-tin"
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/OGfm7CNM5BY"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner4}
                    className="d-block w-100"
                    alt="dau-an-vo-cuc"
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/sdkUce1q-n4"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner5}
                    className="d-block w-100"
                    alt="loan-nhip"
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/b5u8UTV0OWs"}
                    />
                  </button>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#TixIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon button"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#TixIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon button"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <SearchBar />
        </section>
      </div>
    );
  }
}
