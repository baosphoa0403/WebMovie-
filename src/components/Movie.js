import React, { Component } from "react";

export default class Movie extends Component {
  render() {
      let {movie} = this.props;
      
    return (
      <div className="col-sm-3">
        <div className="card text-center"n>
          <img className="card-img-top" src={movie.hinhAnh} style={{width: "100%", height:"90%"}}alt />
          <div className="card-body">
            <h4 className="card-title">{movie.tenPhim}</h4>
            <p className="card-text">{movie.moTa.length > 10 ? movie.moTa.replace(movie.moTa.slice(10, 100)) + "..."  : movie.moTa }</p>
            {/* <p className="card-text" >{movie.moTa}</p> */}
          </div>
        </div>
      </div>
    );
  }
}
