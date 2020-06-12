import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import * as ActionType from "../../redux/constants/ActionType";
class CinemaLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  componentDidMount() {
    this.props.getListTheater();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.listTheater) {
      this.props.sendIdTheater(nextProps.listTheater[0].maHeThongRap);
    }
  }
  handleActive = (index) => {
    this.setState({ index: index });
  };
  hanleEvent = (maHeThongRap, index) => {
    this.handleActive(index);
    this.props.sendIdTheater(maHeThongRap);
  };
  renderLogo = () => {
    if (this.props.listTheater) {
      return this.props.listTheater.map((theater, index) => {
        return (
          <button
            className={
              this.state.index === index ? "nav-link active" : "nav-link"
            }
            key={index}
            data-toggle="pill"
            href="#v-pills-CGV"
            role="tab"
            aria-controls="v-pills-CGV"
            aria-selected="true"
            onClick={() => {
              this.hanleEvent(theater.maHeThongRap, index);
            }}
          >
            <img src={theater.logo} alt={theater.maHeThongRap} />
          </button>
        );
      });
    }
  };
  render() {
    return <div>{this.renderLogo()}</div>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // lấy thông tin hệ thống lịch chiếu
    getListTheater: () => {
      dispatch(action.actGetListSystemTheaterAPI());
    },
    sendIdTheater: (maHeThongRap) => {
      let action = {
        type: ActionType.SEND_ID_THEATER,
        data: maHeThongRap,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    // lấy thông tin hệ lịch chiếu xuống
    listTheater: state.movieReducer.listTheater,
    // maHeThongRap: state.movieReducer.maHeThongRap
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaLogo);
