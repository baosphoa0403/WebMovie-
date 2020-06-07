import React, { Component } from "react";
import Ccontact1 from "../images/img/CineContact/cgv-aeon-binh-tan.jpg";
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
  handleGetIDCumRap = (value) => {
    this.setState({
      maCumRap: value
    })   
  }
  renderListRapDefault = () => {
    return this.state.listCumRap.map((item) => {
      return item.lstCumRap.map((rap) => {
        return (
          <div
            className="tab-pane fade show active"
            id="v-pills-CGV"
            role="tabpanel"
            aria-labelledby="v-pills-CGV-tab"
            onClick={() => { this.handleGetIDCumRap(rap.maCumRap) }}
          >

            <div className="homeMovies__scope">
              <div className="homeMovies__cinema active">
                <div className="homeMovies__picture">
                  <img src={Ccontact1} alt="CGV" />
                </div>
                <div className="homeMovies__text">
                  <p className="homeMovies__nameMovieCinema">
                    {rap.tenCumRap}
                  </p>
                  <p className="homeMovies__infoMovieCinema">{rap.diaChi}</p>
                  <p className="homeMovies__showingDetailCinema">
                    <a href="#">[chi tiết]</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    })
  }
  renderListRap = () => {
    if (this.props.listMovieFollowTheater) {
      return this.props.listMovieFollowTheater.map((item) => {
        return item.lstCumRap.map((rap) => {
          return (
            <div
              className="tab-pane fade show active"
              id="v-pills-CGV"
              role="tabpanel"
              aria-labelledby="v-pills-CGV-tab"
              onClick={() => { this.handleGetIDCumRap(rap.maCumRap) }}
            >

              <div className="homeMovies__scope">
                <div className="homeMovies__cinema active">
                  <div className="homeMovies__picture">
                    <img src={Ccontact1} alt="CGV" />
                  </div>
                  <div className="homeMovies__text">
                    <p className="homeMovies__nameMovieCinema">
                      {rap.tenCumRap}
                    </p>
                    <p className="homeMovies__infoMovieCinema">{rap.diaChi}</p>
                    <p className="homeMovies__showingDetailCinema">
                      <a href="#">[chi tiết]</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      });
    }
  };
  renderListPhim = () => {
    if (this.props.listMovieFollowTheater && this.state.maHeThongRap && this.state.maCumRap ) {
      let rap = this.props.listMovieFollowTheater.map((item) => {
        return item.lstCumRap.find((theater) => {
          return theater.maCumRap === this.state.maCumRap
        })
      })
      return rap.map((movie) => {
        return movie.danhSachPhim.map((showMovie) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-3">
                <div className="card text-left">
                  <img className="card-img-top" src={showMovie.hinhAnh}  style={{witdh: 100}}alt />
                  <div className="card-body">
                    <h4 className="card-title">{showMovie.tenPhim}</h4>
                  </div>
                </div>
                </div>
              </div>
            </div>
          )
        })
      })
    }
  }
  render() {
    return (
      <div>
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
