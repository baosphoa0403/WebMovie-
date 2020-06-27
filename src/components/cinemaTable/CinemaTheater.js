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
      img: imgCGV,
      index: 0
    };
  }
  fetchDataListTheater = data => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${data}&maNhom=GP09`
    })
      .then(rs => {
        this.setState(
          {
            listCumRap: rs.data
          },
          () => {
            this.props.sendListCumRap(this.state.listCumRap);
            this.renderImg()
          }
        );
      })
      .catch((err) => {
      });
  };
  componentWillReceiveProps(nextProps) {  
    if (nextProps && nextProps.maHeThong) {
      console.log(nextProps.maHeThong);
      
      this.setState({
        maCumRap: nextProps
      }, ()=>{
        this.fetchDataListTheater(nextProps.maHeThong);
       
      });
     
    }
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
      this.setState({img: imgUpdate})
    }
  };
  handleActive = (index) => {
    this.setState({index: index})
  }
  renderListRap = () => {
    if (this.state.listCumRap.length > 0 && this.props.maHeThong) {
      return this.state.listCumRap.map(item => {
        return item.lstCumRap.map((rap, index) => {
          return (
            <div
              className="tab-pane fade show active"
              key = {index}
              id="v-pills-CGV"
              role="tabpanel"
              aria-labelledby="v-pills-CGV-tab"
              onClick={() => {
                this.props.handleGetIDCumRap(rap.maCumRap);
              }}
            >
              <div 
              className="homeMovies__scope"
             
              >
                <div className={this.state.index === index ? ("homeMovies__cinema active") : ("homeMovies__cinema ")}
                 onClick={()=>{
                  this.handleActive(index)
                }}>
                  <div className="homeMovies__picture">
                    <img src={this.state.img} alt="CGV" />
                  </div>
                  <div className="homeMovies__text">
                    <p className="homeMovies__nameMovieCinema">
                      {rap.tenCumRap}
                    </p>
                    <p className="homeMovies__infoMovieCinema">{rap.diaChi}</p>
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
    // console.log(this.props.listCumRap);
    
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
