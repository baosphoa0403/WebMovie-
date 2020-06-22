import React from "react";
import {
  Events,
  animateScroll as scroll,
} from "react-scroll";

export default class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
    });

    Events.scrollEvent.register("end", function () {
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <React.Fragment>
        <div className="back_to_top">
          <a onClick={this.scrollToTop}>
            <i className="fa fa-arrow-up" style={{fontSize:"30px", color: "orange"}}></i>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
