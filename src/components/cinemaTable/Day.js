import React, { Component, Fragment } from "react";
import Time from "./Time";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userChoiceDay: "",
      day: "",
    };
  }
  openTime = () => {
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };
  getDay = () => {
    if (this.props.listDay) {
      let arr = this.props.listDay.filter((item) => {
        return (
          new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
          this.state.day
        );
      });

      return arr.map((item) => {
        return <Time item={item} />;
      });
    }
  };

  renderDay = () => {
    return (
      <div className=" Home_coll">
        <div className="info__time_Home">
          <p
            className="info__2D_Home"
            onClick={() => {
              this.openTime();
              this.setState({ day: this.props.item });
            }}
          >
            Ngày chiếu : {this.props.item}
          </p>
        </div>

        <Fragment>
          {!this.state.isOpen ? (
            ""
          ) : (
            <div className="time_setup">{this.getDay()}</div>
          )}
        </Fragment>
      </div>
    );
  };

  render() {
    return <div>{this.renderDay()}</div>;
  }
}
