import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import {Link} from "react-router-dom";
class DeatailMovie extends Component {
  renderTable = () => {
      let {detailMovie} = this.props;
     if (detailMovie.lichChieu) {
        return detailMovie.lichChieu.map((movie)=>{
            return (
                <tr key={movie.maLichChieu}>
                    <td>{movie.thongTinRap.tenCumRap}</td>
                    <td>{movie.thongTinRap.tenRap}</td>
                    <td>{new Date(movie.ngayChieuGioChieu).toLocaleDateString()}</td>
                    <td>{new Date(movie.ngayChieuGioChieu).toLocaleTimeString()}</td>
                    <td>
                        <Link className="btn btn-danger" to={`/booking/${movie.maLichChieu}`}>Chọn ghế</Link>
                    </td>
                </tr>
            )
        })
     }
  }
  render() {
    // console.log(this.props.detailMovie);
    let {detailMovie} = this.props;
    return (
      <div>
        <h3 className="text-center">DeatailMovie</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={detailMovie.hinhAnh} alt=""/>
            </div>
            <div className="col-6">
              <table class="table">
                <thead>
                  <tr>
                    <td>Tên Phim</td>
                    <td>{detailMovie.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mô tả</td>
                    <td>{detailMovie.moTa}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cụm rạp</th>
                    <th>Tên rạp</th>
                    <th>Ngày Chiếu</th>
                    <th>Gio Chiếu</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTable()}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetailMovie(id);
  }
  componentWillUnmount(){
     this.props.resetDetailMovie();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDetailMovie: (id) => {
      dispatch(action.actGetDetailMovieAPI(id));
    },
    resetDetailMovie: () => {
        dispatch(action.actGetDetailMovie({}));
    }
  };
};

const mapStateToProps = state => {
  return {
    detailMovie: state.movieReducer.detailMovie
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeatailMovie);
