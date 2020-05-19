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
import * as action from "../redux/action/index";
import { connect } from "react-redux";
class Cinema extends Component {
  constructor(props){
     super(props);
     this.state = {
       maHeThongRap: null
     }
  }
  componentDidMount() {
    this.props.getListTheater();
  }
  handleOnChange = maHeThongRap => {
    console.log(maHeThongRap);
    this.setState({maHeThongRap})
    this.props.getListMovieFollowTheater(maHeThongRap);
  };
  renderLogo = () => {
    if (this.props.listTheater) {
      return this.props.listTheater.map(theater => {
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
        return this.props.listMovieFollowTheater.map((item)=>{
          return item.lstCumRap.map((rap)=>{
            return (
              <div
                className="tab-pane fade show active"
                id="v-pills-CGV"
                role="tabpanel"
                aria-labelledby="v-pills-CGV-tab"
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
                      <p className="homeMovies__infoMovieCinema">
                       {rap.diaChi}
                      </p>
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
                      <div
                        className="tab-pane fade"
                        id="v-pills-DDC"
                        role="tabpanel"
                        aria-labelledby="v-pills-DDC-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema active">
                            <div className="homeMovies__picture">
                              <img src={Ccontact8} alt="DDC" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema DDC">
                                  DDC
                                </span>{" "}
                                - Đống Đa
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                890 Trần Hưng Đạo, Q.5
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-MegaGS"
                        role="tabpanel"
                        aria-labelledby="v-pills-MegaGS-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema active">
                            <div className="homeMovies__picture">
                              <img src={Ccontact9} alt="MegaGS" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema MegaGS">
                                  MegaGS
                                </span>{" "}
                                - Cao Thắng
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                19 Cao Thắng, Q.3
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-Dcine"
                        role="tabpanel"
                        aria-labelledby="v-pills-Dcine-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema active">
                            <div className="homeMovies__picture">
                              <img src={Ccontact10} alt="Dcine" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema Dcine">
                                  Dcine
                                </span>{" "}
                                - Bến Thành
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-LOTTE"
                        role="tabpanel"
                        aria-labelledby="v-pills-LOTTE-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact11} alt="LOTTE" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema Lotte">
                                  Lotte
                                </span>{" "}
                                - Gò Vấp
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact12} alt="LOTTE" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema Lotte">
                                  Lotte
                                </span>{" "}
                                - Thủ Đức
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L2-Joy Citipoint, KCX Linh Trung, Thủ Đức
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>

                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact13} alt="LOTTE" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema Lotte">
                                  Lotte
                                </span>{" "}
                                - Nam Sài Gòn
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="listMovies col-sm-12">
                    <div className="homeMovies__contentCinema">
                      <p className="homeMoies__textCinema">
                        Không có suất chiếu
                      </p>
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

const mapDispatchToProps = dispatch => {
  return {
    getListTheater: () => {
      dispatch(action.actGetListSystemTheaterAPI());
    },
    getListMovieFollowTheater: maHeThongRap => {
      dispatch(action.actGetListMovieFollowTheaterAPI(maHeThongRap));
    }
  };
};
const mapStateToProps = state => {
  return {
    listTheater: state.movieReducer.listTheater,
    listMovieFollowTheater: state.movieReducer.listMovieFollowTheater
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
