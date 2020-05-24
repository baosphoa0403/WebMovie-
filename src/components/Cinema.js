import React, { Component } from "react";
import Ccontact1 from "../images/img/CineContact/cgv-aeon-binh-tan.jpg";
import Ccontact2 from "../images/img/CineContact/bhd-star-vincom.jpg";
import Ccontact3 from "../images/img/CineContact/bhd-star-pham-hung.jpg";
import Ccontact4 from "../images/img/CineContact/bhd-star-vincom-quang-trung.jpg";
import Ccontact5 from "../images/img/CineContact/galaxy-linh-trung.jpg";
import Ccontact6 from "../images/img/CineContact/galaxy-quang-trung.jpg";
import Ccontact7 from "../images/img/CineContact/galaxy-nguyen-van-qua.jpg";
import Ccontact8 from "../images/img/CineContact/ddc-dong-da.jpg";
import Ccontact9 from "../images/img/CineContact//mega-gs-cao-thang.jpg";
import Ccontact10 from "../images/img/CineContact/dcine-ben-thanh.png";
import Ccontact11 from "../images/img/CineContact/lotte-cinema-go-vap.jpg";
import Ccontact12 from "../images/img/CineContact/lotte-cinema-thu-duc.jpg";
import Ccontact13 from "../images/img/CineContact/lotte-cinema-phu-tho.jpg";
import TextField from "@material-ui/core/TextField";
import * as action from "../redux/action/index";
import { connect } from "react-redux";
class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: null,
    };
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
              onClick={() => {
                this.handleOnChange(rap.maHeThongRap);
              }}
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

  renderSuatChieu = () => {
    let { heThongRapChieu } = this.props.listShowTimes;
    if (heThongRapChieu) {
      let index = heThongRapChieu.findIndex((rap) => {
        return rap.tenHeThongRap === this.state.values.tenHeThongRap;
      });
      // console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu);
      // console.log(this.state.values.tenRap);
      let indexTenRap = heThongRapChieu[index].cumRapChieu.findIndex(
        (tenRapChiTiet) => {
          return tenRapChiTiet.tenCumRap === this.state.values.tenRap;
        }
      );
      return (
        <div>
          <p>{tenRapChiTiet.tenRap}</p>
          <p>{tenRapChiTiet.maRap}</p>
          <p>{tenRapChiTiet.giaVe}</p>
        </div>
      );
      // console.log(this.props.listShowTimes.heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim);
      // convert to day and filter day duplicate
      // const listDay = new Set(
      //   heThongRapChieu[index].cumRapChieu[indexTenRap].lichChieuPhim.map(
      //     (lichChieu) => {
      //       return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
      //     }
      //   )
      // );
      // console.log(listDay);

      // const listDayUpdate = [...listDay];
      // return (
      // <div style={{ width: 200 }} className="input">
      //   <Autocomplete
      //     onChange={this.handleOnchangeNgayXem}
      //     options={listDayUpdate.map((time) => {
      //       return time;
      //     })}
      //     renderInput={(params) => {
      //       return (
      //         <TextField
      //           {...params}
      //           label="Ngày Chiếu"
      //           margin="normal"
      //           variant="outlined"
      //         />
      //       );
      //     }}
      //   />
      // </div>

      // );
    } else {
      return (
        <div>
          <p>Không có suất chiếu hôm lay</p>
        </div>
      );
    }
  };

  render() {
    console.log(this.props.listMovieFollowTheater);

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
                      {this.renderLogo()}
                    </div>
                  </div>
                  <div className="listCinemas col-sm-12">
                    <div
                      className="tab-content selectScroll"
                      id="v-pills-tabContent"
                    >
                      {this.renderListRap()}
                    </div>
                  </div>
                  <div className="listMovies col-sm-12">
                    <div className="homeMovies__contentCinema">
                      <div
                        className="tab-content selectScroll"
                        id="v-pills-tabContent"
                      >
                        {this.renderSuatChieu()}
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
    getListMovieFollowTheater: (maHeThongRap) => {
      dispatch(action.actGetListMovieFollowTheaterAPI(maHeThongRap));
    },
    actGetInformationShowTimes: (idMovie) => {
      dispatch(action.actGetInformationShowTimesAPI(idMovie));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listTheater: state.movieReducer.listTheater,
    listMovieFollowTheater: state.movieReducer.listMovieFollowTheater,
    listMovie: state.movieReducer.listMovie,
    listShowTimes: state.movieReducer.listShowTimes,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
