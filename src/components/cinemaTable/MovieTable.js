import React, { Component } from "react";
import Day from "./Day";

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openDay = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };
  removeDuplicateDay = () => {
    if (this.props.listDay[0]) {
      let listDayOfMovie = this.props.listDay[0].map((movie) => {
        return new Date(movie.ngayChieuGioChieu).toLocaleDateString();
      });
      let arr = listDayOfMovie.filter((time, index) => {
        return listDayOfMovie.indexOf(time) === index;
      });
      return arr.map((item) => {
        return <Day item={item} listDay={this.props.listDay[0]} />;
      });
    }
  };
  render() {
    let { showMovie } = this.props;
    return (
      <div className="info__items_Home">
        <div
          className="info__cinema_Home active"
          onClick={() => {
            this.props.handleGetIDMovie(showMovie.maPhim);
          }}
        >
          <div className="info__picture_Home" onClick={this.openDay}>
            <img src={showMovie.hinhAnh} alt="" />
          </div>
          <div className="info__text_Home">
            <p className="info__nameMovieCinema_Home">{showMovie.tenPhim}</p>
            <p className="info__infoMovieCinema_Home">TIX 6.1 - IMDb 0</p>
          </div>
          {!this.state.isOpen ? "" : <div>{this.removeDuplicateDay()}</div>}
        </div>
      </div>
    );
  }
}

export default MovieTable;
