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
      console.log(nextProps);
      
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
  componentWillUnmount(){
     this.props.resetIdTheater()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    resetIdTheater: () => {
      let action = {
        type: ActionType.SEND_ID_THEATER,
        data: null,
      };
      dispatch(action)
    }
  };
};
const mapStateToProps = (state) => {
  return {
    listTheater: state.movieReducer.listTheater,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaLogo);
