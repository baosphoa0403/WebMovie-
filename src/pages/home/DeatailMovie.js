import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action";
import { Link } from "react-router-dom";
import PlayVideo from "../../images/img/play-video.png";
import avarta from "../../images/img/avatar.png";
import star from "../../images/img/s1.png";
import logoBHD from "../../images/img/Contact/bhd.png";
import logoCGV from "../../images/img/Contact/cgv.png";
import logoGalaxy from "../../images/img/Contact/galaxycine.png";
import cinemaCGV1 from "../../images/img/CineContact/cgv-aeon-binh-tan.jpg";
import cinemaCGV2 from "../../images/img/CineContact/cgv-dau-do.jpg";
import cinemaxBHD1 from "../../images/img/CineContact/bhd-star-pham-hung.jpg";
import cinemaxBHD2 from "../../images/img/CineContact/bhd-star-vincom-le-van-viet.jpg";
import cinemaxBHD3 from "../../images/img/CineContact/bhd-star-vincom-quang-trung.jpg";
import cinemaxBHD4 from "../../images/img/CineContact/bhd-star-vincom.jpg";
import cinemaxGalaxy1 from "../../images/img/CineContact/galaxy-huynh-tan-phat.jpg";
import cinemaxGalaxy2 from "../../images/img/CineContact/galaxy-linh-trung.jpg";
import cinemaxGalaxy3 from "../../images/img/CineContact/galaxy-nguyen-van-qua.jpg";
import imgCGV from "../../images/img/CineContact/cgv-aeon-binh-tan.jpg";
import imgBHD from "../../images/img/CineContact/bhd-star-vincom-quang-trung.jpg";
import imgGalaxy from "../../images/img/CineContact/galaxy-huynh-tan-phat.jpg";
import imgLotteCinima from "../../images/img/CineContact/lotte-cinema-go-vap.jpg";
import imgCineStar from "../../images/img/CineContact/ddc-dong-da.jpg";
import imgMega from "../../images/img/CineContact/mega-gs-cao-thang.jpg";
import Axios from "axios";

class DeatailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idListTheaterMovie: [],
      listTheater: [],
      listTheaterRender: [],
      idTheater: null,
      theater: {},
      img: imgCGV,
      maLichChieu: null
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    this.props.getDetailMovie(id);
    Axios({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    })
      .then((rs) => {
        // console.log(rs.data);
        this.setState({
          listTheater: rs.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleOnChangeId = (idTheater) => {
   console.log(idTheater);
   if (this.props.detailMovie) {
     let arrayTheater = this.props.detailMovie.lichChieu.filter((theater)=>{
          return theater.thongTinRap.maHeThongRap === idTheater
     })
    //  console.log(arrayTheater[0].thongTinRap);
     this.setState({
       theater: arrayTheater[0],
       idTheater: idTheater
     }, ()=>{
       console.log(this.state.theater, this.state.idTheater);
       this.renderImg();
     })
     
  }
}
renderImg = () => {
  if (this.state.idTheater) {
    let imgUpdate = null;
    switch (this.state.idTheater) {
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
  renderLogo = () => {
    if (this.state.listTheaterRender) {
      return this.state.listTheaterRender.map((theater, index) => {
        return (
          <a
           onClick = {()=>{this.handleOnChangeId(theater.maHeThongRap)}}
            key = {index}
            className="nav-link active"
            id="v-pills-CGV-tab"
            data-toggle="pill"
            href="#v-pills-CGV"
            role="tab"
            aria-controls="v-pills-CGV"
            aria-selected="true"
          >
            <img src={theater.logo} alt="logoCGV" />
          </a>
        );
      });
    }
  };
  componentWillUnmount() {
    this.props.resetDetailMovie();
  }
  renderTheater = () => {    
    if (this.state.theater.thongTinRap) {
      console.log(this.state.theater);
      
      return (
       <div className="info__items">
       <p>
         <a
           data-toggle="collapse"
           href="#VincomGV"
           role="button"
           aria-expanded="false"
           aria-controls="VincomGV"
         ></a>
       </p>
       <div className="info__cinema active">
         <a
           data-toggle="collapse"
           href="#VincomGV"
           role="button"
           aria-expanded="false"
           aria-controls="VincomGV"
         >
           <div className="info__picture">
             <img
               src={this.state.img}
               alt="CGV"
             />
           </div>
         </a>
         <div className="info__text">
           <a
             data-toggle="collapse"
             href="#VincomGV"
             role="button"
             aria-expanded="false"
             aria-controls="VincomGV"
           >
             <p className="info__nameMovieCinema">
               <span className="info__colorCinema">
                {this.state.theater.thongTinRap.maHeThongRap}
               </span>{" "}
               - {this.state.theater.thongTinRap.tenCumRap}
             </p>
             <p className="info__infoMovieCinema">
               Tầng 5 TTTM Vincom Plaza Gò Vấp, 12
               Phan Văn Trị, Phường 7, Quận Gò Vấp
             </p>
           </a>
           <p className="info__showingDetailCinema">
             <a
               data-toggle="collapse"
               href="#VincomGV"
               role="button"
               aria-expanded="false"
               aria-controls="VincomGV"
             />
             <a href="#">[chi tiết]</a>
           </p>
         </div>
         {this.renderTime()}
       </div>
       <p />
     </div>
      )
    }
  }
  renderTime = () => {
    let { detailMovie } = this.props;
    if (detailMovie.lichChieu) {
      let arr = detailMovie.lichChieu.map((item)=>{
           return (new Date(item.ngayChieuGioChieu).toLocaleTimeString())
      })
      // console.log(arr);
      let arrFilter = arr.filter((item, index) => arr.indexOf(item) === index);
      console.log(arrFilter);
      
      return arrFilter.map((time) => {
        return (
          // <tr key={movie.maLichChieu}>
          //   <td>{movie.thongTinRap.tenCumRap}</td>
          //   <td>{movie.thongTinRap.tenRap}</td>
          //   <td>{new Date(movie.ngayChieuGioChieu).toLocaleDateString()}</td>
          //   <td>{new Date(movie.ngayChieuGioChieu).toLocaleTimeString()}</td>
          //   <td>
          //     <Link
          //       className="btn btn-danger"
          //       to={`/booking/${movie.maLichChieu}`}
          //     >
          //       Chọn ghế
          //     </Link>
          //   </td>
          // </tr>
          <div className="collapse" id="VincomGV">
           <div className="info__time">
             <p className="info__2D">Ngày chiếu : 01/06/2021</p>
             <Link type="button" to={`/booking/${this.state.maLichChieu}`}>
               <span className="info__timeBegin">
                {time}
               </span>
               <span className="info__timeEnd">
                 {" "}
                 ~ 17:09
               </span>
             </Link>
           </div>
         </div>
        );
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    // console.log(this.state.listTheater);
    
    if (nextProps.detailMovie) {
      let idListTheater = nextProps.detailMovie.lichChieu.map((theater) => {
        return theater.thongTinRap.maHeThongRap;
      });
      let arr = [];
      let arrFilter = idListTheater.filter((item, index) => idListTheater.indexOf(item) === index
      );

      for (const id of arrFilter) {
        let theater = this.state.listTheater.find((theater)=>{
            return theater.maHeThongRap === id
        })
        arr.push(theater);
      }
      let arr1 = nextProps.detailMovie.lichChieu.map((rap)=>{
        return  rap.maLichChieu
       })
       console.log(arr1);
       
      // console.log(arr);
      this.setState({
        listTheaterRender: arr,
        maLichChieu: arr1[0]
      })

    }
  }

  render() {
    // console.log(this.state.idListTheaterMovie);
    // console.log(this.state.ObjectTheater);
    //vong2 lap vo cuk
    // console.log(this.props.detailMovie);
    let { detailMovie } = this.props;
    console.log(this.props.detailMovie);
    // {this.renderIdTime()}
    // if (detailMovie) {
    return (
      // <div>
      // {/* {this.renderTable()} */}
      // {/* </div> */}
      <div className="background-detail">
        <div className="name__content">
          <div className="name__background">
            <div className="name__picture">
              <img src={detailMovie.hinhAnh} />
            </div>
            <div className="name__overlay"></div>
            <div className="view">
              <div className="row">
                <div className="col-3">
                  <img className="image" src={detailMovie.hinhAnh} alt="" />
                  <img className="play" src={PlayVideo} alt="play-video" />
                </div>
                <div className="col-5">
                  <p className="day">
                    {new Date(detailMovie.ngayKhoiChieu).toLocaleTimeString()}
                  </p>
                  <span className="c18">C18</span>
                  <span className="name_movie">{detailMovie.tenPhim}</span>
                  <div className="buy-ticket_De">
                    <Link
                      to={`/booking/${this.state.maLichChieu}`}
                      className="btn_buy_ticket"
                    >
                      Mua vé
                    </Link>
                  </div>
                </div>
                <div className="col-2">
                  <div className="name__circlePercent c100 p65">
                    <div className="name__circleBorder"></div>
                    <span className="name__number">6.5</span>
                    <div className="slice">
                      <div className="bar haftCircle"></div>
                      <div className="fill haftCircle"></div>
                    </div>
                  </div>
                  <div className="start">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info__content">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Thông Tin{" "}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Đánh Gía
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-calendar-tab"
                data-toggle="pill"
                href="#pills-calendar"
                role="tab"
                aria-controls="pills-calendar"
                aria-selected="false"
              >
                Lịch Chiếu
              </a>
            </li>
          </ul>
          {/* cây navbar */}
          <div className="tab_content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row info__row1">
                <div className="col-md-6 col-sm-12 hello">
                  <div className="info">
                    <p className="info__contentTitle">Ngày phát hành</p>
                    <p className="info__contentInfo">13.03.2020</p>
                  </div>
                  <div className="info">
                    <p className="info__contentTitle">Đạo diễn</p>
                    <p className="info__contentInfo">Dave Wilson</p>
                  </div>
                  <div className="info">
                    <p className="info__contentTitle">Diễn viên</p>
                    <p className="info__contentInfo">
                      Toby Kebbell, Eiza González, Vin Diesel
                    </p>
                  </div>
                  <div className="info">
                    <p className="info__contentTitle">Thể loại</p>
                    <p className="info__contentInfo">hành động</p>
                  </div>
                  <div className="info">
                    <p className="info__contentTitle">Định dạng</p>
                    <p className="info__contentInfo">2D/Digital</p>
                  </div>
                  <div className="info">
                    <p className="info__contentTitle">Quốc Giá SX</p>
                    <p className="info__contentInfo">Mỹ</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 info__colRight">
                  <p className="info__contentTitle">Nội dung</p>
                  <p className="info__contentInfo">
                    Dựa trên bộ truyên tranh bán chạy nhất, nam diễn viên Vin
                    Diesel đảm nhận vai Ray Garrison, một người lính không may
                    bị giết trong lúc ra trận và trở lại với vai trò là siêu anh
                    hùng Bloodshot của tập đoàn RST. Với một đội quân công nghiệ
                    nano trong huyết quản, anh ta là một lực lượng không thể
                    ngăn cản, mạnh mẽ hơn bao giờ hết và có thể chữa lành ngay
                    lập tực. Nhưng trong việc kiểm soát cơ thể của mình, công ty
                    cũng đã thay đổi cả tâm trí và ký ức của anh ấy.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="infoShowReview">
                <div className="row">
                  <div className="col-12">
                    <span className="infoImgReviewer">
                      <img src={avarta} alt="avatar" />
                    </span>
                    <input
                      type="text"
                      name
                      id
                      className="info__inputReview"
                      placeholder="Bạn nghĩ gì về phim này?"
                    />
                    {/* <span className="info__imgReviewerStar">
                      <img src={star} alt="listStar" />
                    </span> */}

                    {/* 372->2388 */}
                  </div>
                </div>
              </div>
            </div>
            {/* đánh giá  */}
            <div
              className="tab-pane fade"
              id="pills-calendar"
              role="tabpanel"
              aria-labelledby="pills-calendar-tab"
            >
              <div className="info__calendar">
                <div className="row">
                  <div className="col-12">
                    <div className="parentListPCinemas">
                      
                     
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                         {this.renderLogo()}
                      </div>
                    </div>
                    <div className="listCinemas">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-CGV"
                          role="tabpanel"
                          aria-labelledby="v-pills-CGV-tab"
                        >
                          <div className="info__scope">
                            <ul
                              className="nav nav-pills mb-3"
                              id="pills-tab"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="pills-monday-tab"
                                  data-toggle="pill"
                                  href="#pills-monday"
                                  role="tab"
                                  aria-controls="pills-monday"
                                  aria-selected="true"
                                >
                                  Thứ 2
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-tuesday-tab"
                                  data-toggle="pill"
                                  href="#pills-tuesday"
                                  role="tab"
                                  aria-controls="pills-tuesday"
                                  aria-selected="false"
                                >
                                  Thứ 3
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-wednesday-tab"
                                  data-toggle="pill"
                                  href="#pills-wednesday"
                                  role="tab"
                                  aria-controls="pills-wednesday"
                                  aria-selected="false"
                                >
                                  Thứ 4
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-thursday-tab"
                                  data-toggle="pill"
                                  href="#pills-thursday"
                                  role="tab"
                                  aria-controls="pills-thursday"
                                  aria-selected="false"
                                >
                                  Thứ 5
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-friday-tab"
                                  data-toggle="pill"
                                  href="#pills-friday"
                                  role="tab"
                                  aria-controls="pills-friday"
                                  aria-selected="false"
                                >
                                  Thứ 6
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-saturday-tab"
                                  data-toggle="pill"
                                  href="#pills-saturday"
                                  role="tab"
                                  aria-controls="pills-saturday"
                                  aria-selected="false"
                                >
                                  Thứ 7
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-sunday-tab"
                                  data-toggle="pill"
                                  href="#pills-sunday"
                                  role="tab"
                                  aria-controls="pills-sunday"
                                  aria-selected="false"
                                >
                                  Chủ nhật
                                </a>
                              </li>
                            </ul>
                            <div
                              className="tab-content selectScroll"
                              id="pills-tabContent"
                            >
                              <div
                                className="tab-pane fade show active"
                                id="pills-monday"
                                role="tabpanel"
                                aria-labelledby="pills-monday-tab"
                              >
                                {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-tuesday"
                                role="tabpanel"
                                aria-labelledby="pills-tuesday-tab"
                              >
                                {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-wednesday"
                                role="tabpanel"
                                aria-labelledby="pills-wednesday-tab"
                              >
                                 {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-thursday"
                                role="tabpanel"
                                aria-labelledby="pills-thursday-tab"
                              >
                                {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-friday"
                                role="tabpanel"
                                aria-labelledby="pills-friday-tab"
                              >
                                {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-saturday"
                                role="tabpanel"
                                aria-labelledby="pills-saturday-tab"
                              >
                                  {this.renderTheater()}
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-sunday"
                                role="tabpanel"
                                aria-labelledby="pills-sunday-tab"
                              >
                                {this.renderTheater()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(action.actGetDetailMovieAPI(id));
    },
    resetDetailMovie: () => {
      dispatch(action.actGetDetailMovie({}));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    detailMovie: state.movieReducer.detailMovie,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeatailMovie);
