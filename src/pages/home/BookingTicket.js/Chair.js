import React, { Component } from "react";

export default class Chair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooking: false,
    };
  }
  render() {
    let { item } = this.props;
    
    return (
      <div>
        {item.daDat === true ? (
          <div
            disabled={item.daDat}
            key={item.maGhe}
            className="seatCheckOut__item_True"
          >
            {item.tenGhe}
          </div>
        ) : (
          item.loaiGhe==="Thuong" ? (
            <div
            key={item.maGhe}
            className={
              !this.state.isBooking
                ? "seatCheckOut__item"
                : "seatCheckOut__item_Active"
            }
            onClick={() => {
              this.props.addTicket(item, this.state.isBooking);
              {
                !this.state.isBooking
                  ? this.setState({ isBooking: true })
                  : this.setState({ isBooking: false });
              }
            }}
          >
            {item.tenGhe}
          </div>
          ) : (
            <div 
            key={item.maGhe}
            className={
              !this.state.isBooking
                ? "seatCheckOut__item Vip"
                : "seatCheckOut__item_Active Vip"
            }
            onClick={() => {
              this.props.addTicket(item, this.state.isBooking);
              {
                !this.state.isBooking
                  ? this.setState({ isBooking: true })
                  : this.setState({ isBooking: false });
              }
            }}
          >
            {item.tenGhe}
          </div>
          ) 
        )}
      </div>
    );
  }
}
