import React, { Component } from "react";
import Day from "./Day";

class MovieTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      arrDay: [],
      listTime: [],
      maPhim: null
    };
  }
  // getDayUser = day => {
  //   if (this.props.listTime[0]) {
  //     let listTimeSee = this.props.listTime[0].filter(movie => {
  //       return new Date(movie.ngayChieuGioChieu).toLocaleDateString() === day;
  //     });
  //     // console.log(listTimeSee);
  //     this.setState({
  //       listTime: listTimeSee
  //     });
  //   }
  // };
  // renderDay = () => {
  //   if (this.props.listTime[0]) {
  //     // console.log(this.props.listTime);

  //     let listTimeOfMovie = this.props.listTime[0].map(movie => {
  //       return new Date(movie.ngayChieuGioChieu).toLocaleDateString();
  //     });
  //     // console.log(listTimeOfMovie);

  //     let arr = listTimeOfMovie.filter((time, index) => {
  //       return listTimeOfMovie.indexOf(time) === index;
  //     });
  //     // console.log(arr);
      
  //     // console.log(arr.slice(0, 2));
      
  //     return arr.slice(0, 2).map(day => {
  //       return (
  //         <div className="collapse Home_coll" id="VincomGV">
  //           <div className="info__time_Home">
  //             <p
  //               className="info__2D_Home"
  //               onClick={() => {
  //                 this.getDayUser(day);
  //               }}
  //             >
  //               Ngày chiếu : {day}
  //             </p>
  //             <div className="row">
  //               {this.renderTime()}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     });
  //   }
  // };
  // renderTime = () => {
  //   var moment = require('moment');
  //   if (this.state.listTime) {
  //     // console.log(this.state.listTime);

  //     return this.state.listTime.map(time => {
  //       return (
  //         <div className="col-4">
          
  //             <span className="info__timeBegin_Home">
  //               {moment(time.ngayChieuGioChieu).format("HH:mm")}
  //             </span>
  //         </div>
  //       );
  //     });
  //   }
  // };
  render() {
    // có nguyên object phim , có danh sách phim của từng phim
    console.log(this.props.listTime);
    console.log(this.props.showMovie);
    let { showMovie } = this.props;
    return (
      <div className="info__items_Home">
        <div
          className="info__cinema_Home active"
          onClick={() => {
            this.props.handleGetIDMovie(showMovie.maPhim);
          }}
        >
          <a
            data-toggle="collapse"
            href={showMovie.maPhim}
            role="button"
            aria-expanded="false"
            aria-controls="VincomGV"
          >
            <div className="info__picture_Home">
              <img src={showMovie.hinhAnh} alt="" />
            </div>
          </a>
          <div className="info__text_Home">
              <p className="info__nameMovieCinema_Home">{showMovie.tenPhim}</p>
              <p className="info__infoMovieCinema_Home">TIX 6.1 - IMDb 0</p>
          </div>
          <Day listTime={this.props.listTime} showMovie={this.props.showMovie}/>
        </div>
        <p />
      </div>
    );
  }
}

export default MovieTable;
