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
import Axios from "axios";

class DeatailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idListTheaterMovie: [],
      listTheater: [],
      listTheaterRender: [],
      
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
    //  let 
  }
  
  }
  renderLogo = (arr) => {
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

  // renderTable = () => {
  //   let { detailMovie } = this.props;
  //   if (detailMovie.lichChieu) {
  //     return detailMovie.lichChieu.map((movie) => {
  //       return (
  //         <tr key={movie.maLichChieu}>
  //           <td>{movie.thongTinRap.tenCumRap}</td>
  //           <td>{movie.thongTinRap.tenRap}</td>
  //           <td>{new Date(movie.ngayChieuGioChieu).toLocaleDateString()}</td>
  //           <td>{new Date(movie.ngayChieuGioChieu).toLocaleTimeString()}</td>
  //           <td>
  //             <Link
  //               className="btn btn-danger"
  //               to={`/booking/${movie.maLichChieu}`}
  //             >
  //               Chọn ghế
  //             </Link>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   }
  // };
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
      // console.log(arr);
      this.setState({
        listTheaterRender: arr
      })
     
      

      // this.setState({
      //   idListTheaterMovie: arrFilter
      // })
    }
  }

  render() {
    // console.log(this.state.idListTheaterMovie);
    // console.log(this.state.ObjectTheater);
    //vong2 lap vo cuk
    // console.log(this.props.detailMovie);
    let { detailMovie } = this.props;
    console.log(this.props.detailMovie);

    // if (detailMovie) {
    return (
      // <div>
      // {/* {this.renderTable()} */}
      // {/* </div> */}
      <div className="background-detail">
        <h3 className="text-center">DeatailMovie</h3>
        <div className="name__content">
          <div className="name__background">
            <div className="name__picture">
              <img src={detailMovie.hinhAnh} />
            </div>
            <div className="name__overlay"></div>
            <div className="view">
              <div className="row">
                <div className="col-3">
                  <img src={detailMovie.hinhAnh} alt="" />
                  <img className="play" src={PlayVideo} alt="play-video" />
                </div>
                <div className="col-5">
                  <p className="day">
                    {new Date(detailMovie.ngayKhoiChieu).toLocaleTimeString()}
                  </p>
                  <span className="c18">C18</span>
                  <span className="name_movie">{detailMovie.tenPhim}</span>
                  <div className="buy-ticket">
                    <Link
                      to={`/booking/${detailMovie.maLichChieu}`}
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
                        {/* <a
                          className="nav-link active"
                          id="v-pills-CGV-tab"
                          data-toggle="pill"
                          href="#v-pills-CGV"
                          role="tab"
                          aria-controls="v-pills-CGV"
                          aria-selected="true"
                        >
                          <img src={logoCGV} alt="logoCGV" />
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-BHD-tab"
                          data-toggle="pill"
                          href="#v-pills-BHD"
                          role="tab"
                          aria-controls="v-pills-BHD"
                          aria-selected="false"
                        >
                          <img src={logoBHD} alt="logoBHD" />
                        </a>
                        <a
                          className="nav-link"
                          id="v-pills-GALAXY-tab"
                          data-toggle="pill"
                          href="#v-pills-GALAXY"
                          role="tab"
                          aria-controls="v-pills-GALAXY"
                          aria-selected="false"
                        >
                          <img src={logoGalaxy} alt="logoGALAXY" />
                        </a> */}
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
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonBinhTan"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonBinhTan"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonBinhTan"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonBinhTan"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaCGV1} />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#AeonBinhTan"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="AeonBinhTan"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Aeon Bình Tân
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 3, Trung tâm thương mại Aeon Mall
                                          Bình Tân, Số 1 đường số 17A, khu phố
                                          11, phường Bình Trị Đông B, quận Bình
                                          Tân, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#AeonBinhTan"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="AeonBinhTan"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="AeonBinhTan">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#HungVuongPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HungVuongPlaza"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#HungVuongPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HungVuongPlaza"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaCGV2} alt="CGV" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#HungVuongPlaza"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="HungVuongPlaza"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Hùng Vương Plaza
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 7, Hùng Vương Plaza 126 Hùng
                                          Vương Quận 5 Tp. Hồ Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#HungVuongPlaza"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="HungVuongPlaza"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="HungVuongPlaza"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaCGV1} alt="CGV" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#VincomThuDuc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="VincomThuDuc"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Vincom Thủ Đức
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, TTTM Vincom Thủ Đức, 216 Võ
                                          Văn Ngân, Phường Bình Thọ, Quận Thủ
                                          Đức
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#VincomThuDuc"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="VincomThuDuc"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="VincomThuDuc">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-tuesday"
                                role="tabpanel"
                                aria-labelledby="pills-tuesday-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#SuVanHanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="SuVanHanh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#SuVanHanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="SuVanHanh"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#SuVanHanh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="SuVanHanh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Sư Vạn Hạnh
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh,
                                          Phường 12, Quận 10
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#SuVanHanh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="SuVanHanh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="SuVanHanh">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#Pandora"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="Pandora"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#Pandora"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="Pandora"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#Pandora"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="Pandora"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Pandora City
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Lầu 3, Pandora City 1/1 Trường Chinh
                                          Quận Tân Phú TP. Hồ Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#Pandora"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="Pandora"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="Pandora">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#PearlPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="PearlPlaza"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#PearlPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="PearlPlaza"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#PearlPlaza"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="PearlPlaza"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Pearl Plaza
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, Pearl Plaza, 516A Điện Biên
                                          Phủ, P.25, Q.Bình Thạnh, TP.HCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#PearlPlaza"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="PearlPlaza"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="PearlPlaza">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-wednesday"
                                role="tabpanel"
                                aria-labelledby="pills-wednesday-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#SatraCuChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="SatraCuChi"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#SatraCuChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="SatraCuChi"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/290284596e800086d4f06054e56f26fa.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#SatraCuChi"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="SatraCuChi"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Satra Củ Chi
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 3, TTTM Satra Củ Chi, Số 1239,
                                          Tỉnh Lộ 8, Ấp Thạnh An, Xã Trung An,
                                          Huyện Củ Chi, TP.HCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#SatraCuChi"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="SatraCuChi"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="SatraCuChi">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonTanPhu"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonTanPhu"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonTanPhu"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonTanPhu"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#AeonTanPhu"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="AeonTanPhu"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Aeon Tân Phú
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng,
                                          P. Sơn Kỳ Quận Tân Phú TP. Hồ Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#AeonTanPhu"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="AeonTanPhu"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="AeonTanPhu">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#ParKsonDongKhoi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="ParKsonDongKhoi"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#ParKsonDongKhoi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="ParKsonDongKhoi"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#ParKsonDongKhoi"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="ParKsonDongKhoi"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Parkson Đồng Khởi
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, số 35 bis-45, đường Lê Thánh
                                          Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ
                                          Chí Minh, Việt Nam
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#ParKsonDongKhoi"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="ParKsonDongKhoi"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="ParKsonDongKhoi"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-thursday"
                                role="tabpanel"
                                aria-labelledby="pills-thursday-tab"
                              >
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
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
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
                                            CGV
                                          </span>{" "}
                                          - Vincom Gò Vấp
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
                                    <div className="collapse" id="VincomGV">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomLandmark81"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomLandmark81"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomLandmark81"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomLandmark81"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#VincomLandmark81"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="VincomLandmark81"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Vincom Center Landmark 81
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng B1, TTTM Vincom Center Landmark
                                          81, 772 Điện Biên Phủ, P.22, Q. Bình
                                          Thạnh, HCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#VincomLandmark81"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="VincomLandmark81"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="VincomLandmark81"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#CrescentMall"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="CrescentMall"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#CrescentMall"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="CrescentMall"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#CrescentMall"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="CrescentMall"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Crescent Mall
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Lầu 5, Crescent Mall Đại lộ Nguyễn Văn
                                          Linh, Phú Mỹ Hưng Quận 7 TP. Hồ Chí
                                          Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#CrescentMall"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="CrescentMall"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="CrescentMall">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-friday"
                                role="tabpanel"
                                aria-labelledby="pills-friday-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#LyChinhThang"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="LyChinhThang"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#LyChinhThang"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="LyChinhThang"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/290284596e800086d4f06054e56f26fa.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#LyChinhThang"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="LyChinhThang"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Lý Chính Thắng
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 3, 83 Lý Chính Thắng, Phường 8,
                                          Q.3, TP.HCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#LyChinhThang"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="LyChinhThang"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="LyChinhThang">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#HoangVanThu"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HoangVanThu"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#HoangVanThu"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HoangVanThu"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#HoangVanThu"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="HoangVanThu"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Hoàng Văn Thụ
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 1 và 2, Gala Center, số 415,
                                          Hoàng Văn Thụ, Phường 2, Quận Tân
                                          Bình, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#HoangVanThu"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="HoangVanThu"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="HoangVanThu">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#VincomThuDuc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="VincomThuDuc"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Vincom Thủ Đức
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, TTTM Vincom Thủ Đức, 216 Võ
                                          Văn Ngân, Phường Bình Thọ, Quận Thủ
                                          Đức
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#VincomThuDuc"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="VincomThuDuc"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="VincomThuDuc">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-saturday"
                                role="tabpanel"
                                aria-labelledby="pills-saturday-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonBinhTan"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonBinhTan"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#AeonBinhTan"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="AeonBinhTan"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#AeonBinhTan"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="AeonBinhTan"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Aeon Bình Tân
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 3, Trung tâm thương mại Aeon Mall
                                          Bình Tân, Số 1 đường số 17A, khu phố
                                          11, phường Bình Trị Đông B, quận Bình
                                          Tân, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#AeonBinhTan"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="AeonBinhTan"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="AeonBinhTan">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GigaMallThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GigaMallThuDuc"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GigaMallThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GigaMallThuDuc"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/290284596e800086d4f06054e56f26fa.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GigaMallThuDuc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GigaMallThuDuc"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Giga Mall Thủ Đức
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 6, TTTM GIGAMALL, 240-242 Phạm
                                          Văn Đồng, P. Hiệp Bình Chánh, Q. Thủ
                                          Đức, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GigaMallThuDuc"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GigaMallThuDuc"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GigaMallThuDuc"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#VincomThuDuc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="VincomThuDuc"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Vincom Thủ Đức
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, TTTM Vincom Thủ Đức, 216 Võ
                                          Văn Ngân, Phường Bình Thọ, Quận Thủ
                                          Đức
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#VincomThuDuc"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="VincomThuDuc"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="VincomThuDuc">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-sunday"
                                role="tabpanel"
                                aria-labelledby="pills-sunday-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#ThaoDienPearl"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="ThaoDienPearl"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#ThaoDienPearl"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="ThaoDienPearl"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#ThaoDienPearl"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="ThaoDienPearl"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Thảo Điền Pearl
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 2, Thảo Điền Mall, 12 Quốc Hương,
                                          Phường Thảo Điền, Quận 2, TP. Hồ Chí
                                          Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#ThaoDienPearl"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="ThaoDienPearl"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="ThaoDienPearl"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#HungVuongPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HungVuongPlaza"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#HungVuongPlaza"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="HungVuongPlaza"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#HungVuongPlaza"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="HungVuongPlaza"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Hùng Vương Plaza
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 7, Hùng Vương Plaza 126 Hùng
                                          Vương Quận 5 Tp. Hồ Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#HungVuongPlaza"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="HungVuongPlaza"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="HungVuongPlaza"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#VincomThuDuc"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="VincomThuDuc"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/cgv-aeon-binh-tan-15380175062534.jpg"
                                          alt="CGV"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#VincomThuDuc"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="VincomThuDuc"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema">
                                            CGV
                                          </span>{" "}
                                          - Vincom Thủ Đức
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Tầng 5, TTTM Vincom Thủ Đức, 216 Võ
                                          Văn Ngân, Phường Bình Thọ, Quận Thủ
                                          Đức
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#VincomThuDuc"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="VincomThuDuc"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="VincomThuDuc">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-BHD"
                          role="tabpanel"
                          aria-labelledby="v-pills-BHD-tab"
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
                                  id="pills-mondayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-mondayBHD"
                                  role="tab"
                                  aria-controls="pills-mondayBHD"
                                  aria-selected="true"
                                >
                                  Thứ 2
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-tuesdayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-tuesdayBHD"
                                  role="tab"
                                  aria-controls="pills-tuesdayBHD"
                                  aria-selected="false"
                                >
                                  Thứ 3
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-wednesdayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-wednesdayBHD"
                                  role="tab"
                                  aria-controls="pills-wednesdayBHD"
                                  aria-selected="false"
                                >
                                  Thứ 4
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-thursdayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-thursdayBHD"
                                  role="tab"
                                  aria-controls="pills-thursdayBHD"
                                  aria-selected="false"
                                >
                                  Thứ 5
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-fridayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-fridayBHD"
                                  role="tab"
                                  aria-controls="pills-fridayBHD"
                                  aria-selected="false"
                                >
                                  Thứ 6
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-saturdayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-saturdayBHD"
                                  role="tab"
                                  aria-controls="pills-saturdayBHD"
                                  aria-selected="false"
                                >
                                  Thứ 7
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-sundayBHD-tab"
                                  data-toggle="pill"
                                  href="#pills-sundayBHD"
                                  role="tab"
                                  aria-controls="pills-sundayBHD"
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
                                id="pills-mondayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-mondayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD1} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD2} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincom3th2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincom3th2"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom 3/2
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Vincom 3/2, 3C Đường 3/2, Q.10
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincom3th2"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincom3th2"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincom3th2"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD1} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDPhamHung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDPhamHung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Phạm Hùng
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Satra Phạm Hùng, C6/27 Phạm Hùng,
                                          Bình Chánh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDPhamHung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDPhamHung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="BHDPhamHung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-tuesdayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-tuesdayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-quang-trung-15379536724871.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          B1-Vincom QT, 190 Quang Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-le-van-viet-15379553262189.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomLeVanViet"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomLeVanViet"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Lê Văn Việt
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomLeVanViet"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomLeVanViet"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomLeVanViet"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD1} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-wednesdayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-wednesdayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD1} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxBHD1} alt="BHD" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincom3th2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincom3th2"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom 3/2
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Vincom 3/2, 3C Đường 3/2, Q.10
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincom3th2"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincom3th2"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincom3th2"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-pham-hung-15379533093101.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDPhamHung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDPhamHung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Phạm Hùng
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Satra Phạm Hùng, C6/27 Phạm Hùng,
                                          Bình Chánh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDPhamHung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDPhamHung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="BHDPhamHung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-thursdayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-thursdayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-quang-trung-15379536724871.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          B1-Vincom QT, 190 Quang Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-le-van-viet-15379553262189.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomLeVanViet"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomLeVanViet"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Lê Văn Việt
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomLeVanViet"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomLeVanViet"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomLeVanViet"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-fridayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-fridayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-3-2-15379527367766.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincom3th2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincom3th2"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom 3/2
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Vincom 3/2, 3C Đường 3/2, Q.10
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincom3th2"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincom3th2"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincom3th2"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-pham-hung-15379533093101.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDPhamHung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDPhamHung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Phạm Hùng
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Satra Phạm Hùng, C6/27 Phạm Hùng,
                                          Bình Chánh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDPhamHung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDPhamHung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="BHDPhamHung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-saturdayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-saturdayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-quang-trung-15379536724871.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          B1-Vincom QT, 190 Quang Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomLeVanViet"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomLeVanViet"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-le-van-viet-15379553262189.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomLeVanViet"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomLeVanViet"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Lê Văn Việt
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomLeVanViet"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomLeVanViet"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomLeVanViet"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-sundayBHD"
                                role="tabpanel"
                                aria-labelledby="pills-sundayBHD-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincomThaoDien"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincomThaoDien"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincomThaoDien"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincomThaoDien"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom Thảo Điền
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Megamall, 159 XL Hà Nội, Q.2
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincomThaoDien"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincomThaoDien"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincomThaoDien"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDVincom3th2"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDVincom3th2"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-vincom-3-2-15379527367766.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDVincom3th2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDVincom3th2"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Vincom 3/2
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L5-Vincom 3/2, 3C Đường 3/2, Q.10
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDVincom3th2"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDVincom3th2"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="BHDVincom3th2"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#BHDPhamHung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="BHDPhamHung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/bhd-star-pham-hung-15379533093101.jpg"
                                          alt="BHD"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#BHDPhamHung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="BHDPhamHung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema BHD">
                                            BHD star
                                          </span>{" "}
                                          - Phạm Hùng
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L4-Satra Phạm Hùng, C6/27 Phạm Hùng,
                                          Bình Chánh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#BHDPhamHung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="BHDPhamHung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="BHDPhamHung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-GALAXY"
                          role="tabpanel"
                          aria-labelledby="v-pills-GALAXY-tab"
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
                                  id="pills-mondayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-mondayGALAXY"
                                  role="tab"
                                  aria-controls="pills-mondayGALAXY"
                                  aria-selected="true"
                                >
                                  Thứ 2
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-tuesdayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-tuesdayGALAXY"
                                  role="tab"
                                  aria-controls="pills-tuesdayGALAXY"
                                  aria-selected="false"
                                >
                                  Thứ 3
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-wednesdayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-wednesdayGALAXY"
                                  role="tab"
                                  aria-controls="pills-wednesdayGALAXY"
                                  aria-selected="false"
                                >
                                  Thứ 4
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-thursdayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-thursdayGALAXY"
                                  role="tab"
                                  aria-controls="pills-thursdayGALAXY"
                                  aria-selected="false"
                                >
                                  Thứ 5
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-fridayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-fridayGALAXY"
                                  role="tab"
                                  aria-controls="pills-fridayGALAXY"
                                  aria-selected="false"
                                >
                                  Thứ 6
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-saturdayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-saturdayGALAXY"
                                  role="tab"
                                  aria-controls="pills-saturdayGALAXY"
                                  aria-selected="false"
                                >
                                  Thứ 7
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-sundayGALAXY-tab"
                                  data-toggle="pill"
                                  href="#pills-sundayGALAXY"
                                  role="tab"
                                  aria-controls="pills-sundayGALAXY"
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
                                id="pills-mondayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-mondayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy1} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXLinhTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXLinhTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Linh Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Siêu thị Co.opXtra Thủ Đức 934 QL1A,
                                          Phường Linh Trung, Quận Thủ Đức, Hồ
                                          Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXLinhTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXLinhTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXLinhTrung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy2} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L3-Co.opmart Foodcosa, 304A Quang
                                          Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy3} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXTrungChanh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXTrungChanh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Trung Chánh
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          TTVH Q12-Q9, QL22, Trung Mỹ Tây, Q.12
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXTrungChanh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXTrungChanh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXTrungChanh"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-tuesdayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-tuesdayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXNguyenVanQua"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXNguyenVanQua"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXNguyenVanQua"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXNguyenVanQua"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-nguyen-van-qua-15381052937743.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXNguyenVanQua"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXNguyenVanQua"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Nguyễn Văn Quá
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          119B Nguyễn Văn Quá, Đông Hưng Thuận,
                                          Q.12, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXNguyenVanQua"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXNguyenVanQua"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXNguyenVanQua"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXPhamVanChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXPhamVanChi"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXPhamVanChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXPhamVanChi"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-pham-van-chi-15381059548289.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXPhamVanChi"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXPhamVanChi"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Phạm Văn Chí
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Lầu 5, TTTM Platinum Plaza, 634 Phạm
                                          Văn Chí, Q.6
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXPhamVanChi"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXPhamVanChi"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXPhamVanChi"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTanBinh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTanBinh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTanBinh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTanBinh"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-tan-binh-15381063333729.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXTanBinh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXTanBinh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Tân Bình
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          246 Nguyễn Hồng Đào, Tân Bình
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXTanBinh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXTanBinh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXTanBinh">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-wednesdayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-wednesdayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXKinhDuongVuong"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXKinhDuongVuong"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXKinhDuongVuong"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXKinhDuongVuong"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-kinh-duong-vuong-15381065563489.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXKinhDuongVuong"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXKinhDuongVuong"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Kinh Dương Vương
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          718bis Kinh Dương Vương, Q.6
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXKinhDuongVuong"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXKinhDuongVuong"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXKinhDuongVuong"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXHuynhTanPhat"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXHuynhTanPhat"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXHuynhTanPhat"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXHuynhTanPhat"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-huynh-tan-phat-15381070102598.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXHuynhTanPhat"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXHuynhTanPhat"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Huỳnh Tấn Phát
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q.7
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXHuynhTanPhat"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXHuynhTanPhat"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXHuynhTanPhat"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy1} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXLinhTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXLinhTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Linh Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Siêu thị Co.opXtra Thủ Đức 934 QL1A,
                                          Phường Linh Trung, Quận Thủ Đức, Hồ
                                          Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXLinhTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXLinhTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXLinhTrung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-thursdayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-thursdayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy1} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXLinhTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXLinhTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Linh Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Siêu thị Co.opXtra Thủ Đức 934 QL1A,
                                          Phường Linh Trung, Quận Thủ Đức, Hồ
                                          Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXLinhTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXLinhTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXLinhTrung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-quang-trung-15381040745219.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L3-Co.opmart Foodcosa, 304A Quang
                                          Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-trung-chanh-15381048160387.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXTrungChanh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXTrungChanh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Trung Chánh
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          TTVH Q12-Q9, QL22, Trung Mỹ Tây, Q.12
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXTrungChanh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXTrungChanh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXTrungChanh"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-fridayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-fridayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXNguyenVanQua"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXNguyenVanQua"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXNguyenVanQua"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXNguyenVanQua"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-nguyen-van-qua-15381052937743.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXNguyenVanQua"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXNguyenVanQua"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Nguyễn Văn Quá
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          119B Nguyễn Văn Quá, Đông Hưng Thuận,
                                          Q.12, TPHCM
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXNguyenVanQua"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXNguyenVanQua"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXNguyenVanQua"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXPhamVanChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXPhamVanChi"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXPhamVanChi"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXPhamVanChi"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-pham-van-chi-15381059548289.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXPhamVanChi"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXPhamVanChi"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Phạm Văn Chí
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Lầu 5, TTTM Platinum Plaza, 634 Phạm
                                          Văn Chí, Q.6
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXPhamVanChi"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXPhamVanChi"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXPhamVanChi"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTanBinh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTanBinh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTanBinh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTanBinh"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-tan-binh-15381063333729.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXTanBinh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXTanBinh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Tân Bình
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          246 Nguyễn Hồng Đào, Tân Bình
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXTanBinh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXTanBinh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXTanBinh">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-saturdayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-saturdayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXKinhDuongVuong"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXKinhDuongVuong"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXKinhDuongVuong"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXKinhDuongVuong"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-kinh-duong-vuong-15381065563489.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXKinhDuongVuong"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXKinhDuongVuong"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Kinh Dương Vương
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          718bis Kinh Dương Vương, Q.6
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXKinhDuongVuong"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXKinhDuongVuong"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXKinhDuongVuong"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXHuynhTanPhat"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXHuynhTanPhat"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXHuynhTanPhat"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXHuynhTanPhat"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-huynh-tan-phat-15381070102598.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXHuynhTanPhat"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXHuynhTanPhat"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Huỳnh Tấn Phát
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q.7
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXHuynhTanPhat"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXHuynhTanPhat"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXHuynhTanPhat"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    >
                                      <div className="info__picture">
                                        <img src={cinemaxGalaxy1} alt="GLX" />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXLinhTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXLinhTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Linh Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Siêu thị Co.opXtra Thủ Đức 934 QL1A,
                                          Phường Linh Trung, Quận Thủ Đức, Hồ
                                          Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXLinhTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXLinhTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXLinhTrung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-sundayGALAXY"
                                role="tabpanel"
                                aria-labelledby="pills-sundayGALAXY-tab"
                              >
                                <div className="info__items">
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema active">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXLinhTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXLinhTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-linh-trung-15791435324335.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXLinhTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXLinhTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Linh Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          Siêu thị Co.opXtra Thủ Đức 934 QL1A,
                                          Phường Linh Trung, Quận Thủ Đức, Hồ
                                          Chí Minh
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXLinhTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXLinhTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div className="collapse" id="GLXLinhTrung">
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXQuangTrung"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXQuangTrung"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-quang-trung-15381040745219.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXQuangTrung"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXQuangTrung"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Quang Trung
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          L3-Co.opmart Foodcosa, 304A Quang
                                          Trung, Gò Vấp
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXQuangTrung"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXQuangTrung"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXQuangTrung"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
                                  <p>
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    ></a>
                                  </p>
                                  <div className="info__cinema">
                                    <a
                                      data-toggle="collapse"
                                      href="#GLXTrungChanh"
                                      role="button"
                                      aria-expanded="false"
                                      aria-controls="GLXTrungChanh"
                                    >
                                      <div className="info__picture">
                                        <img
                                          src="../img/galaxy-trung-chanh-15381048160387.jpg"
                                          alt="GLX"
                                        />
                                      </div>
                                    </a>
                                    <div className="info__text">
                                      <a
                                        data-toggle="collapse"
                                        href="#GLXTrungChanh"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="GLXTrungChanh"
                                      >
                                        <p className="info__nameMovieCinema">
                                          <span className="info__colorCinema GLX">
                                            GLX
                                          </span>{" "}
                                          - Trung Chánh
                                        </p>
                                        <p className="info__infoMovieCinema">
                                          TTVH Q12-Q9, QL22, Trung Mỹ Tây, Q.12
                                        </p>
                                      </a>
                                      <p className="info__showingDetailCinema">
                                        <a
                                          data-toggle="collapse"
                                          href="#GLXTrungChanh"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="GLXTrungChanh"
                                        />
                                        <a href="#">[chi tiết]</a>
                                      </p>
                                    </div>
                                    <div
                                      className="collapse"
                                      id="GLXTrungChanh"
                                    >
                                      <div className="info__time">
                                        <p className="info__2D">2D Digital</p>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            15:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 17:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            17:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 19:09
                                          </span>
                                        </a>
                                        <a type="button" href="./checkout.html">
                                          <span className="info__timeBegin">
                                            19:30
                                          </span>
                                          <span className="info__timeEnd">
                                            {" "}
                                            ~ 21:30
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <p />
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
