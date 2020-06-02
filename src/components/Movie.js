import React from "react";
import star from "../images/img/s1.png";
import PlayVideo from "../images/img/play-video.png";
import {Link} from "react-router-dom"
class Movie extends React.Component {
  render() {
    let { movie } = this.props;
    return (
      <section>
        <div className="calendar__film">
          <a class="calendar__picture" href="#">
            <div
              className="calendar__filmThumbnail"
              style={{
                position: "relative",
                backgroundImage: `url(${movie.hinhAnh})`,
                backgroundSize: "100% 100%",
              }}
            >
              <div className="calendar__overlay">
                <button type="button" className="playTrailer1">
                  <a
                    className="venobox"
                    data-vbtype="video"
                    href={movie.trailer}
                  >
                    <img src={PlayVideo} alt="play-video" />
                  </a>
                </button>
              </div>
              <span className="calendar__ageType">C18</span>
              <div className="calendar__avgPoint">
                <p className="calendar__point">{movie.danhGia}</p>
                <p className="calendar__star">
                  <img src={star} alt="star1" />
                  <img src={star} alt="star1" />
                  <img src={star} alt="star1" />
                  <img src={star} alt="star1" />
                </p>
              </div>
            </div>
          </a>
          <div className="calendar__text">
            <div class="calender_hover">
              <Link href="" to={`/detailMovie/${movie.maPhim}`}>Mua Vé</Link>
            </div>
            <div className="calendar_itemtext">
              <p className="calendar__nameFilm">{movie.tenPhim}</p>
              {/* <p className="calendar__time">{movie.ngayKhoiChieu}</p> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
// color: rgba(227, 169, 43, 0.984);
export default Movie;
