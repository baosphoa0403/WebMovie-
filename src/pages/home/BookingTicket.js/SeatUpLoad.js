import React, { Component } from "react";

export default class SeatUpLoad extends Component {
  renderSeat = () => {
    return this.props.buyTicket.map((item) => {
      return (
        <div class="col-12">
          <div class="right__left">Ghế : {item.tenGhe}</div>
          <div class="right__right">{item.giaVe.toLocaleString()} VNĐ</div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderSeat()}</div>;
  }
}
