import React, { Component } from "react";
import { connect } from "react-redux";
import imgCGV from "../../images/img/CineContact/cgv-aeon-binh-tan.jpg";
import imgBHD from "../../images/img/CineContact/bhd-star-vincom-quang-trung.jpg";
import imgGalaxy from "../../images/img/CineContact/galaxy-huynh-tan-phat.jpg";
import imgLotteCinima from "../../images/img/CineContact/lotte-cinema-go-vap.jpg";
import imgCineStar from "../../images/img/CineContact/ddc-dong-da.jpg";
import imgMega from "../../images/img/CineContact/mega-gs-cao-thang.jpg";
import Axios from "axios";
import * as ActionType from "../../redux/constants/ActionType";

class CinemaTheater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCumRap: [],
      maCumRap: null,
      img: imgCGV
    };
  }
  fetchDataListTheater = data => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${data}&maNhom=GP09`
    })
      .then(rs => {
        // console.log(rs.data);
        this.setState(
          {
            listCumRap: rs.data
          },
          () => {
            this.props.sendListCumRap(this.state.listCumRap);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.maHeThong) {
      this.setState({
        maCumRap: nextProps
      });
      this.fetchDataListTheater(nextProps.maHeThong);
      this.renderImg()
    }
    console.log(nextProps);
  }
  renderImg = () => {
    if (this.props.maHeThong) {
      let imgUpdate = null;
      switch (this.props.maHeThong) {
        case "BHDStar":
          imgUpdate = imgBHD;
          break;
        case "CGV":
          imgUpdate = imgCGV;
          break;
        case "CineStar":
          imgUpdate = imgCineStar;
          break;
        case "Galaxy":
          imgUpdate = imgGalaxy;
          break;
        case "LotteCinima":
          imgUpdate = imgLotteCinima;
          break;
        case "MegaGS":
          imgUpdate = imgMega;
          break;
        default:
          break;
     
      }
      console.log(this.props.maHeThong);
      this.setState({img: imgUpdate})
    }
  };
  renderListRap = () => {
    if (this.state.listCumRap.length > 0 && this.props.maHeThong) {
      return this.state.listCumRap.map(item => {
        return item.lstCumRap.map(rap => {
          return (
            <div
              className="tab-pane fade show active"
              id="v-pills-CGV"
              role="tabpanel"
              aria-labelledby="v-pills-CGV-tab"
              onClick={() => {
                this.props.handleGetIDCumRap(rap.maCumRap);
              }}
            >
              <div className="homeMovies__scope">
                <div className="homeMovies__cinema active">
                  <div className="homeMovies__picture">
                    <img src={this.state.img} alt="CGV" />
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
    // }
  };
  render() {
    // console.log(this.props.listMovieFollowTheater);
    console.log(this.props.maHeThong);

    return <div>{this.renderListRap()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    maHeThong: state.movieReducer.maHeThong
  };
};
// gửi lên store cái maCumRap vs cái listCumRap
const mapDispatchToProps = dispatch => {
  return {
    handleGetIDCumRap: maCumRap => {
      let action = {
        type: ActionType.SEND_ID_LIST_THEATER,
        data: maCumRap
      };
      dispatch(action);
    },
    sendListCumRap: listCumRap => {
      let action = {
        type: ActionType.SEND_LIST_THEATER,
        data: listCumRap
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CinemaTheater);
