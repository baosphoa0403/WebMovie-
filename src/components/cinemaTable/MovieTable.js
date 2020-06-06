import React, { Component } from "react";

class MovieTable extends Component {
  constructor(props) {
    super(props);
  }
  renderTime = () => {
    if (this.props.listTime) {
      let listTimeOfMovie = this.props.listTime.map((movie)=>{
       return movie.map((phim)=>{
         return (new Date(phim.ngayChieuGioChieu).toLocaleDateString())
       })
      })
      let listTimeOfMovieUpdate = listTimeOfMovie.map((time)=>{
        return (new Set(time))
      })
      console.log(listTimeOfMovieUpdate);
      
      let listTimeOfMovieUpdate1 = [...listTimeOfMovieUpdate]
      console.log(listTimeOfMovieUpdate1);
      
      return listTimeOfMovieUpdate1.map((time, i)=>{
        // const obj = Object.fromEntries(time);
        // console.log(obj);
        console.log(time);
        
         return (<div>{time}</div>)
      })
    }
  };

  render() {
    console.log(this.props.listTime);

    let { showMovie } = this.props;
    return (
      <div
        className="col-4"
        onClick={() => {
          this.props.handleGetIDMovie(showMovie.maPhim);
        }}
      >
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={showMovie.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{showMovie.tenPhim}</h4>
           <div> {this.renderTime()}</div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default MovieTable;
