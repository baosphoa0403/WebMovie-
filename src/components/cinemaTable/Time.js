import React, { Component } from "react";
import { withRouter } from "react-router";
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maLichChieu: null
    };
  }
  handleChangePage = () => {
    if (JSON.parse(localStorage.getItem("user")) === null) {
      this.props.history.push("/form");
    }else{
      if(this.state.maLichChieu){
        this.props.history.push(`/booking/${this.state.maLichChieu}`)
      }
    }
   
  }
  renderTime = () => {
    var moment = require("moment");
    if (this.props.item) {
      return (
        <div className="time">
          <a>
            <button
              className="info__timeBegin_Home"
              onClick={()=>{
                this.setState({maLichChieu: this.props.item.maLichChieu});
                this.handleChangePage();
              }}
            >
              {moment(this.props.item.ngayChieuGioChieu).format("HH:mm:A")}
            </button>
          </a>
        </div>
      );
    }
  };

  render() {

    return <div className="time_render">{this.renderTime()}</div>;
  }
}
export default withRouter(Time);
