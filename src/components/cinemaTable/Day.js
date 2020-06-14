import React, { Component } from "react";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: null,
      listDay: []
    };
  }
  renderDay = () => {
    if (this.state.listDay[0]) {
      // console.log(this.props.listDay);

      let listDayOfMovie = this.state.listDay[0].map(movie => {
        return new Date(movie.ngayChieuGioChieu).toLocaleDateString();
      });
      // console.log(listDayOfMovie);

      let arr = listDayOfMovie.filter((time, index) => {
        return listDayOfMovie.indexOf(time) === index;
      });
      console.log(arr);

      // console.log(arr.slice(0, 2));

      return arr.slice(0, 2).map(day => {
        return (
          <div className=" Home_coll" id={this.state.maPhim}>
            <div className="info__time_Home">
              <p
                className="info__2D_Home"
                onClick={() => {
                  this.getDayUser(day);
                }}
              >
                <a
                  data-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls={this.state.maPhim}
                >
                Ngày chiếu : {day}
                  
                </a>
              </p>
            </div>
          </div>
        );
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.listDay && nextProps.maPhim) {
      this.setState({
        listDay: nextProps.listDay,
        maPhim: nextProps.maPhim
      });
    }
  }
  render() {
    // console.log(this.props.listDay);

    return <div>{this.renderDay()}</div>;
  }
}
