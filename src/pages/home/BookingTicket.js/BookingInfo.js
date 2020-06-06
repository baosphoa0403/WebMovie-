import React, { Component } from "react";
import pic1 from "../../../images/img/ee621ee05dcd4565caead4f29421b41e.png";
export default class BookingInfo extends Component {
  renderFilmInfo = () => {
    let { FilmInfo } = this.props;
    if (FilmInfo) {
      return (
        <div>
          <div class="seatCheckOut__header">
            <div class="seatCheckOut__leftTitle">
              <div class="seatCheckOut__contentCinema">
                <p class="seatCheckOut__address">{FilmInfo.tenCumRap}</p>
                <p class="seatCheckOut__hour">
                  - {FilmInfo.gioChieu} - {FilmInfo.tenRap}
                </p>
              </div>
            </div>
            <div class="seatCheckOut__rightTitle">
              <p class="seatCheckOut__info1">Thời gian giữ</p>
              <p class="seatCheckOut__info2">5:00</p>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    console.log(this.props.FilmInfo);
    return <div>{this.renderFilmInfo()}</div>;
  }
}
