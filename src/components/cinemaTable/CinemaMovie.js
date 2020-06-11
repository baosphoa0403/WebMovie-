import React, { Component } from "react";
import { connect } from "react-redux";
import MovieTable from "./MovieTable";
class CinemaMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTime: []
    }
  }
  renderListMovie = () => {
    if (this.props.listCumRap && this.props.maCumRap) {
      let rap = this.props.listCumRap.map(item => {
        return item.lstCumRap.find(theater => {
          return theater.maCumRap === this.props.maCumRap;
        });
      });
      if (rap) {
        return rap.map(movie => {
          if (movie) {
            return movie.danhSachPhim.map(showMovie => {
              return <MovieTable handleGetIDMovie = {this.handleGetIDMovie} listTime={this.state.listTime} showMovie={showMovie} />;
            });
          }
        });
      }
    }
  };
  handleGetIDMovie = (maPhim) => {
    let rap = this.props.listCumRap.map(item => {
      return item.lstCumRap.find(theater => {
        return theater.maCumRap === this.props.maCumRap;
      });
    });
    if (rap) {
      let movie =  rap.map((cinema)=>{
       if (cinema) {
        return cinema.danhSachPhim.find((movie)=>{
          return movie.maPhim === maPhim
        })
       }
      })
     
      let listTime = movie.map((movie)=>{
           return movie.lstLichChieuTheoPhim
      })
      this.setState({listTime})
    }
   
    

  }
  render() {
    return (
      <div className="container">
        <div className="row">
        {this.renderListMovie()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listCumRap: state.movieReducer.listCumRap,
    maCumRap: state.movieReducer.maCumRap
  };
};
export default connect(mapStateToProps, null)(CinemaMovie);