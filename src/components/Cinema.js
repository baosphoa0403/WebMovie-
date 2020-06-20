import React, { Component } from "react"
import * as action from "../redux/action/index";
import { connect } from "react-redux";
import CinemaLogo from "./cinemaTable/CinemaLogo";
import CinemaTheater from "./cinemaTable/CinemaTheater";
import CinemaMovie from "./cinemaTable/CinemaMovie";
class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: null,
      maCumRap: null,
      listCumRap: [],
      tenCumRap: null
    };
  }
  componentDidMount() {
    this.props.getListTheater();
  }
  handleOnChange = (maHeThongRap) => {
    this.setState({ maHeThongRap });
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
