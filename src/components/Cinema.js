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
import CinemaLogo from "./cinemaTable/CinemaLogo";
import CinemaTheater from "./cinemaTable/CinemaTheater";
class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: null,
      maCumRap: null
    };
  }
  // componentDidMount() {d
  //   this.props.getListTheater();
  // }
  // handleOnChange = (maHeThongRap) => {
  //   console.log(maHeThongRap);
  //   this.setState({ maHeThongRap });
  //   this.props.getListMovieFollowTheater(maHeThongRap);
  // };
  // renderLogo = () => {
  //   if (this.props.listTheater) {
  //     return this.props.listTheater.map((theater) => {
  //       return (
  //         <button
  //           className="nav-link active"
  //           id={theater.maHeThongRap}
  //           data-toggle="pill"
  //           href="#v-pills-CGV"
  //           role="tab"
  //           aria-controls="v-pills-CGV"
  //           aria-selected="true"
  //           onClick={() => {
  //             this.handleOnChange(theater.maHeThongRap);
  //           }}
  //         >
  //           <img src={theater.logo} alt={theater.maHeThongRap} />
  //         </button>
  //       );
  //     });
  //   }
  // };
  // handleGetIDCumRap = (value, maPhim) => {
  //  console.log(value);
  //  this.setState({maCumRap: value})
  //  console.log(maPhim);
   
   
  // }
  // renderListRap = () => {
  //   if (this.props.listMovieFollowTheater) {
  //     return this.props.listMovieFollowTheater.map((item) => {
  //       return item.lstCumRap.map((rap) => {
  //         return (
  //           <button
  //             className="tab-pane fade show active"
  //             id="v-pills-CGV"
  //             role="tabpanel"
  //             aria-labelledby="v-pills-CGV-tab"
  //             onClick={()=>{this.handleGetIDCumRap(rap.maCumRap)}}
  //           >
             
  //             <div className="homeMovies__scope">
  //               <div className="homeMovies__cinema active">
  //                 <div className="homeMovies__picture">
  //                   <img src={Ccontact1} alt="CGV" />
  //                 </div>
  //                 <div className="homeMovies__text">
  //                   <p className="homeMovies__nameMovieCinema">
  //                     {rap.tenCumRap}
  //                   </p>
  //                   <p className="homeMovies__infoMovieCinema">{rap.diaChi}</p>
  //                   <p className="homeMovies__showingDetailCinema">
  //                     <a href="#">[chi tiết]</a>
  //                   </p>
  //                 </div>
  //               </div>
  //             </div> 
  //           </button>
  //         );
  //       });
  //     });
  //   }
  // };

  renderSuatChieu = () => {
  // let index = this.props.listMovieFollowTheater.findIndex((rap)=>{
  //   return rap.maHeThongRap === this.state.maHeThongRap
  // })
  //   console.log(this.props.listMovieFollowTheater[index]);
    if (this.props.listMovieFollowTheater  && this.state.maCumRap) {
      // return this.props.listMovieFollowTheater.map((item) => {
      //   return item.lstCumRap.map((rap) => {
      //     return rap.danhSachPhim.map((listDay)=>{
      //       return listDay.tenPhim
      //     })
      //   })
      // })
      let cumRap = this.props.listMovieFollowTheater.map((item)=>{
        return item.lstCumRap.find((rap)=>{
            return rap.maCumRap === this.state.maCumRap
        })
      })
      return cumRap.map((movie)=>{
        return movie.danhSachPhim.map((showMovie)=>{
          return ( 
          <div>
            <img src={showMovie.hinhAnh}/>
            <p>{showMovie.tenPhim}</p>
            
         </div>)
        })
      })
      // console.log(cumRap);
      
    }
  };

  render() {
    console.log(this.props.listMovieFollowTheater)
   
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
                      {/* {this.renderLogo()} */}
                      <CinemaLogo />
                    </div>
                  </div>
                  <div className="listCinemas col-sm-12">
                    <div
                      className="tab-content selectScroll"
                      id="v-pills-tabContent"
                    >
                      {/* {this.renderListRap()} */}
                      <CinemaTheater />
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
    
  };
};
const mapStateToProps = (state) => {
  return {
    listTheater: state.movieReducer.listTheater,
    listMovieFollowTheater: state.movieReducer.listMovieFollowTheater,
    listMovie: state.movieReducer.listMovie,
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cinema);
