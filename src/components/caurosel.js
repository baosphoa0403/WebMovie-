import React from "react";
import banner1 from "../images/img/vin-diesel-BLOODSHOT.png";
import banner2 from "../images/img/sieu-ve-si-so-vo.jpg";
import banner3 from "../images/img/vi-anh-van-tin.jpg";
import banner4 from "../images/img/dau-an-vo-cuc.jpg";
import banner5 from "../images/img/loan-nhip.jpg";
import PlayVideo from "../images/img/play-video.png";
export default class Caurosel extends React.Component {
  render() {
    return (
      <div>
        <section class="carousel">
          <div class="carousel__content">
            <div
              id="TixIndicators"
              class="carousel slide tixCarousel"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#TixIndicators"
                  data-slide-to={0}
                  class="active"
                ></li>
                <li data-target="#TixIndicators" data-slide-to={1}></li>
                <li data-target="#TixIndicators" data-slide-to={2}></li>
                <li data-target="#TixIndicators" data-slide-to={3}></li>
                <li data-target="#TixIndicators" data-slide-to={4}></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a href="#" class="carousel__changeDetail">
                    <img src={banner1} class="d-block w-100" alt="BLOODSHOT" />
                    <div class="carousel__bg"></div>
                    <button type="button" class="carousel__button">
                      <a
                        class="venobox"
                        data-vbtype="video"
                        href="https://www.youtube.com/embed/MG-BJBSeV64?autoplay=1"
                      >
                        <img src={PlayVideo} alt="play-video" />
                      </a>
                    </button>
                  </a>
                </div>
                <div class="carousel-item">
                  <img
                    src={banner2}
                    class="d-block w-100"
                    alt="sieu-ve-si-so-vo"
                  />
                  <div class="carousel__bg"></div>
                  <button type="button" class="carousel__button">
                    <a
                      class="venobox"
                      data-vbtype="video"
                      href="https://www.youtube.com/embed/-uOpDY8DAsM?autoplay=1"
                    >
                      <img src={PlayVideo} alt="play-video" />
                    </a>
                  </button>
                </div>
                <div class="carousel-item">
                  <img
                    src={banner3}
                    class="d-block w-100"
                    alt="vi-anh-van-tin"
                  />
                  <div class="carousel__bg"></div>
                  <button type="button" class="carousel__button">
                    <a
                      class="venobox"
                      data-vbtype="video"
                      href="https://www.youtube.com/embed/OGfm7CNM5BY?autoplay=1"
                    >
                      <img src={PlayVideo} alt="play-video" />
                    </a>
                  </button>
                </div>
                <div class="carousel-item">
                  <img
                    src={banner4}
                    class="d-block w-100"
                    alt="dau-an-vo-cuc"
                  />
                  <div class="carousel__bg"></div>
                  <button type="button" class="carousel__button">
                    <a
                      class="venobox"
                      data-vbtype="video"
                      href="https://www.youtube.com/embed/sdkUce1q-n4?autoplay=1"
                    >
                      <img src={PlayVideo} alt="play-video" />
                    </a>
                  </button>
                </div>
                <div class="carousel-item">
                  <img src={banner5} class="d-block w-100" alt="loan-nhip" />
                  <div class="carousel__bg"></div>
                  <button type="button" class="carousel__button">
                    <a
                      class="venobox"
                      data-vbtype="video"
                      href="https://www.youtube.com/embed/b5u8UTV0OWs?autoplay=1"
                    >
                      <img src={PlayVideo} alt="play-video" />
                    </a>
                  </button>
                </div>
              </div>

              <a
                class="carousel-control-prev"
                href="#TixIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon button"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#TixIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon button"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="carousel__selectMovie">
            <div class="w30p widthByPercent dropdown selectFilm">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Phim
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Bloddshot (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Nắng 3: Lời Hứa Của Cha (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Vì ANh Vẫn Tin - I Still Believe (C13)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Siêu Vệ Sĩ Sợ Vợ - The Protector (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Ác Mộng Bên Hồ - Lake Of Death (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Truy Tìm Phép Thuật - Onward</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Dấu Ấn Vô Cực (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Loạn Nhịp - Heartbeats (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Căn Hộ Của Quỷ - 32 Malasana Street (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Kẻ Vô Hình - The Invisible Man (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Cậu Bé Ma 2 - Brahms: The Boy 2 (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Sát Thủ Vô Cùng Cực - Hitman: Agent Jun (C18)</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectCinema">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Rạp
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectDate">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Ngày xem
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim và rạp</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectSession">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Suất chiếu
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent">
              <button class="btn btn-primary buyTicket">MUA VÉ NGAY</button>
            </div>
          </div>
          {/* <div class="clear"></div> */}
        </section>
      </div>
    );
  }
}
