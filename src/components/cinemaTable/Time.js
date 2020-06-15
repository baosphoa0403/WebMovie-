import React, { Component } from "react";

export default class Time extends Component {
  renderTime = () => {
    var moment = require('moment');
    if (this.props.item) {
        return (
            <div className="time">
                <a>
                <span className="info__timeBegin_Home">{moment(this.props.item.ngayChieuGioChieu).format("HH:mm")}</span>
                </a>
            </div>
        );
    }
  };
  render() {   
    return <div className="time_render">
        {this.renderTime()}
    </div>;
  }
}
