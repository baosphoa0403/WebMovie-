import React, { Component } from 'react';
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
class CinemaLogo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            maHeThongRap: null
        }
    }
    componentDidMount() {
        this.props.getListTheater();
      }
    handleOnChange = (maHeThongRap) => {
        console.log(maHeThongRap);
        this.setState({ maHeThongRap });
        this.props.getListMovieFollowTheater(maHeThongRap);
      };
      renderLogo = () => {
        if (this.props.listTheater) {
          return this.props.listTheater.map((theater) => {
            return (
              <button
                className="nav-link active"
                id={theater.maHeThongRap}
                data-toggle="pill"
                href="#v-pills-CGV"
                role="tab"
                aria-controls="v-pills-CGV"
                aria-selected="true"
                onClick={() => {
                  this.handleOnChange(theater.maHeThongRap);
                }}
              >
                <img src={theater.logo} alt={theater.maHeThongRap} />
              </button>
            );
          });
        }
      };
    render() {
        return (
            <div>{this.renderLogo()}</div>
                      
            
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getListTheater: () => {
        dispatch(action.actGetListSystemTheaterAPI());
      },
      getListMovieFollowTheater: (maHeThongRap) => {
        dispatch(action.actGetListMovieFollowTheaterAPI(maHeThongRap));
      },
      
    };
  };
  const mapStateToProps = (state) => {
    return {
      listTheater: state.movieReducer.listTheater,
      listMovieFollowTheater: state.movieReducer.listMovieFollowTheater,
      listMovie: state.movieReducer.listMovie,
      
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(CinemaLogo);