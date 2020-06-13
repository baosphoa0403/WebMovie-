import React, { Component } from "react";

export default class Time extends Component {
  renderTime = () => {
    if (this.props.arrTime) {
        return this.props.arrTime.map((time) => {
            return (
              <div className="collapse Home_coll" id="VincomGV">
                <div className="info__time_Home">
                  <p className="info__2D_Home">Ngày chiếu : {time}</p>
                  <a>
                    <span className="info__timeBegin_Home">15:20</span>
                    <span className="info__timeEnd_Home"> ~ 17:09</span>
                  </a>
                </div>
              </div>
            );
          });
    }
  };
  render() {
      console.log(this.props.arrTime);
      
    return <div>
        {this.renderTime()}
    </div>;
  }
}
