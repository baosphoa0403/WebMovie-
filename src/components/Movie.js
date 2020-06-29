import React from "react";
import star from "../images/img/s1.png";

import { Link } from "react-router-dom";
import Dialog1 from "./Dialog";
class Movie extends React.Component {
  render() {
    let { movie } = this.props;
    // console.log(this.props.movie.trailer);
    return (
      <div>
        <section>
          <div className="calendar__film ">
            <a class="calendar__picture">
              <div
                className="calendar__filmThumbnail"
                style={{
                  position: "relative",
                  backgroundImage: `url(${movie.hinhAnh})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="calendar__overlay">
                  <Dialog1 trailer={movie.trailer}/>
                </div>
                <span className="calendar__ageType">C18</span>
                <div className="calendar__avgPoint">
                  <p className="calendar__point">{movie.danhGia}</p>
                  <p className="calendar__star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </p>
                </div>
              </div>
            </a>
            <div className="calendar__text">
              <div class="calender_hover">
                <Link href="" to={`/detailMovie/${movie.maPhim}`}>
                  Mua Vé
                </Link>
              </div>
              <div className="calendar_itemtext">
                <p className="calendar__nameFilm">{movie.tenPhim}</p>
                {/* <p className="calendar__time">{movie.ngayKhoiChieu}</p> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
// color: rgba(227, 169, 43, 0.984);
export default Movie;
