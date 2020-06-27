import React, { Component } from "react"
import * as action from "../redux/action/index";
import { connect } from "react-redux";
import CinemaLogo from "./cinemaTable/CinemaLogo";
import CinemaTheater from "./cinemaTable/CinemaTheater";
import CinemaMovie from "./cinemaTable/CinemaMovie";
class Cinema extends Component {
  render() {
    return (
      <div name="test4">
        <section className="homeMovies" id="cinemaBlock">
          <div className="homeMovies__content">
            <div className="homeMovies__bg">
              <div className="row">
                <div className="col-12">
                  <div className="parentListPCinemas col-sm-12">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <CinemaLogo />
                    </div>
                  </div>
                  <div className="listCinemas col-sm-12">
                    <div
                      className="tab-content selectScroll"
                      id="v-pills-tabContent"
                    >
                      <CinemaTheater />
                    </div>
                  </div>
                  <div className="listMovies col-sm-12">
                    <div className="homeMovies__contentCinema">
                      <div
                        className="tab-content selectScroll"
                        id="v-pills-tabContent"
                      >
                       <CinemaMovie />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListTheater: () => {
      dispatch(action.actGetListSystemTheaterAPI());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listTheater: state.movieReducer.listTheater,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
