import React, { Component } from "react";
import Time from "./Time";

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state ={
      arrTime: []
    }
  }
  renderTime = () => {
    if (this.props.listTime[0]) {
      console.log(this.props.listTime);
      
      let listTimeOfMovie = this.props.listTime[0].map((movie) => {
       return new Date(movie.ngayChieuGioChieu).toLocaleDateString()
      });
      console.log(listTimeOfMovie);
     
        let arr = listTimeOfMovie.filter((time, index)=>{
              return listTimeOfMovie.indexOf(time) === index
          })
    
      
      console.log(arr.slice(0,2));
      
      return arr.slice(0,2).map((time)=>{
        return (
         
            <div className="collapse Home_coll" id="VincomGV">
          <div className="info__time_Home">
            <p className="info__2D_Home">Ngày chiếu : {time}</p>
            <a>
              <span className="info__timeBegin_Home">15:20</span>
              <span className="info__timeEnd_Home"> ~ 17:09</span>
            </a>
          </div>
        </div>
        )
      })
    }
  };
  render() {
    // console.log(this.props.listTime);
    // console.log(this.props.showMovie);
    let { showMovie } = this.props;
    return (
    
      // <div
      //   className="col-4"
      //   onClick={() => {
      //     this.props.handleGetIDMovie(showMovie.maPhim);
      //   }}
      // >
      //   <div className="card text-white bg-primary">
      //     <img className="card-img-top" src={showMovie.hinhAnh} alt />
      //     <div className="card-body">
      //       <h4 className="card-title">{showMovie.tenPhim}</h4>
      //      <div> {this.renderTime()}</div>
      //     </div>
      //   </div>

      // </div>

      <div className="info__items_Home">
        
        <p>
          <a
            data-toggle="collapse"
            href="#VincomGV"
            role="button"
            aria-expanded="false"
            aria-controls="VincomGV"
            role="tabpanel"
            aria-labelledby="v-pills-CGV-tab"
          ></a>
        </p>
        <div
          className="info__cinema_Home active"
          onClick={() => {
            this.props.handleGetIDMovie(showMovie.maPhim);
          }}
        >
          <a
            data-toggle="collapse"
            href="#VincomGV"
            role="button"
            aria-expanded="false"
            aria-controls="VincomGV"
          >
            <div className="info__picture_Home">
              <img src={showMovie.hinhAnh} alt="" />
            </div>
          </a>
          <div className="info__text_Home">
            <a
              data-toggle="collapse"
              href="#VincomGV"
              role="button"
              aria-expanded="false"
              aria-controls="VincomGV"
            >
              <p className="info__nameMovieCinema_Home">{showMovie.tenPhim}</p>
              <p className="info__infoMovieCinema_Home">TIX 6.1 - IMDb 0</p>
            </a>
          </div>
          <div className="time" style={{display: "flex"}}>
          {this.renderTime()}
          </div>
          
           {/* <Time arrTime = {this.state.arrTime} /> */}
        </div>
        <p />
      </div>
    );
  }
}

export default MovieTable;
