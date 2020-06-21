import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
class DetailTime extends Component {
  changePage = () => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      this.props.history.push("/form");
    } else {
      if (this.props.time.maLichChieu) {
        this.props.history.push(`/booking/${this.props.time.maLichChieu}`);
      }
    }
  };
  render() {
    let moment = require("moment");
    let { time } = this.props;

    return (
      <div className="Time_handle">
        <span onClick={this.changePage}>
          {moment(time.ngayChieuGioChieu).format("HH:mm:A")}
        </span>
      </div>
    );
  }
}
export default withRouter(DetailTime);
