import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maLichChieu: null
    };
  }
  renderTime = () => {
    var moment = require("moment");
    if (this.props.item) {
      return (
        <div className="time">
          <a>
            <Link
              className="info__timeBegin_Home"
              to={`/booking/${this.props.item.maLichChieu}`}
            >
              {moment(this.props.item.ngayChieuGioChieu).format("HH:mm:A")}
            </Link>
          </a>
        </div>
      );
    }
  };

  render() {
    console.log(this.props.item.maLichChieu);
   
    
    return <div className="time_render">{this.renderTime()}</div>;
  }
}
export default Time;
