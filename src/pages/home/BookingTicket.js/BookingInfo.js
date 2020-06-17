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
