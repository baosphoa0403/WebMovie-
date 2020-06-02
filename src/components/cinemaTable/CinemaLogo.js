import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import Axios from 'axios';
import * as ActionType from "../../redux/constants/ActionType"
class CinemaLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: null,
    };
  }
  // nếu maHethong lúc đầu lấy trên store về mà ko có thì 
  componentDidMount() {
    this.props.getListTheater();
    // if (!this.props.maHeThongRap) {
    //   //  this.props.maHeThongRap =
    //    console.log(this.props.maHeThongRap);
    //    this.props.sendIdTheater("BHDStar");

    // }
  }
  // renderFirst = () => {
  //    if (!this.props.maHeThongRap) {
  //     //  this.props.maHeThongRap =
  //      console.log(this.props.maHeThongRap);
  //     //  this.props.sendIdTheater("BHDStar");
  //    }

  // }
  renderLogo = () => {
    if (this.props.listTheater) {
      return this.props.listTheater.map((theater,index) => {
        return (
          <button
            className="nav-link "
            key = {index}
            data-toggle="pill"
            href="#v-pills-CGV"
            role="tab"
            aria-controls="v-pills-CGV"
            aria-selected="true"
            onClick={(index === 0 ? ( this.props.sendIdTheater(theater.maHeThongRap)) : ("")) , () => {
              this.props.sendIdTheater(theater.maHeThongRap)
            }}
          >
            <img src={theater.logo} alt={theater.maHeThongRap} />
          </button>
        );
      });
    }
  };
  render() {
    // console.log(this.state.listCumRap);
   
    
    return <div>
    {this.renderLogo()}
    {this.checkDefault}
    </div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // lấy thông tin hệ thống lịch chiếu
    getListTheater: () => {
      dispatch(action.actGetListSystemTheaterAPI());
    },
    sendIdTheater: (maHeThongRap) => {
      let action = {
        type: ActionType.SEND_ID_THEATER,
        data: maHeThongRap
      }
      dispatch(action);
    }
    // getListMovieFollowTheater: maHeThongRap => {
    //   dispatch(action.actGetListMovieFollowTheaterAPI(maHeThongRap));
    // }
  };
};
const mapStateToProps = state => {
  return {
    // lấy thông tin hệ lịch chiếu xuống 
    listTheater: state.movieReducer.listTheater,
    maHeThongRap: state.movieReducer.maHeThongRap
    // listMovieFollowTheater: state.movieReducer.listMovieFollowTheater,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaLogo);
