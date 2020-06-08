import React, { Component } from "react";

export default class SeatUpLoad extends Component {
  renderSeat = () => {
    return this.props.buyTicket.map((item) => {
      return (
        <div class="col-12">
          <div class="right__left">Ghế : {item.tenGhe}</div>
          <div class="right__right">{item.giaVe} VNĐ</div>
        </div>
      );
    });
  };
  render() {
    // console.log(this.props.buyTicket);
    
    return <div>{this.renderSeat()}</div>;
  }
}
