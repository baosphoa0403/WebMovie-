import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";

class TicketBooking extends Component {
  renderListChair = () => {
    if (this.props.listChair.danhSachGhe !== undefined) {
      if (this.props.listChair.danhSachGhe.length > 0) {
        return this.props.listChair.danhSachGhe.map(item => {
          return <button key={item.maGhe} className="btn btn-danger seat">{item.tenGhe}</button>;
        });
      }
    }
  };


  render() {
    console.log(this.props.listChair);
    
    return (
      <div>
        <h3 className="text-center">MÀN HÌNH CHIẾU</h3>
        <div className="" style={{display: "flex"}}>
          <div className="col-8">{this.renderListChair()}</div>
          <div className="col-4 pop-up">
            <h1 className="text-center">O VNĐ</h1>
            <p>Phim: </p>
            <hr/>
            <p>Địa chỉ: </p>
            <hr/>
            <p>Thời gian: </p>
            <table class="table">
              <thead>
                <tr>
                  <th>Ghế</th>
                  <th>Giá vé</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              <div className="buy-ticket">
              <button className="btn btn-danger ">Mua vé</button>
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let idMaLichChieu = this.props.match.params.idLichChieu;
    this.props.getListChairBooking(idMaLichChieu);
  }
  componentWillUnmount(){
   this.props.resetListChairBooking();
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getListChairBooking: idMaLichChieu => {
      dispatch(action.actGetListChairBookingAPI(idMaLichChieu));
    },
    resetListChairBooking : () => {
      dispatch(action.actGetListChairBooking([]));
    }
  };
};
const mapStateToProps = state => {
  return {
    listChair: state.movieReducer.listChair
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);
