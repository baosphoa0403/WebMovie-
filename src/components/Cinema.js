import React, { Component } from "react";
import contact1 from "../images/img/Contact/cgv.png";
import contact2 from "../images/img/Contact/bhd.png";
import contact3 from "../images/img/Contact/galaxycine.png";
import contact4 from "../images/img/Contact/dongdacinema.png";
import contact5 from "../images/img/Contact/megags.png";
import contact6 from "../images/img/Contact/dcine.png";
import contact7 from "../images/img/Contact/lotte.png";
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

class Cinema extends Component {
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
                      <a
                        className="nav-link active"
                        id="v-pills-CGV-tab"
                        data-toggle="pill"
                        href="#v-pills-CGV"
                        role="tab"
                        aria-controls="v-pills-CGV"
                        aria-selected="true"
                      >
                        <img src={contact1} alt="logoCGV" />
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
                        <img src={contact2} alt="logoBHD" />
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
                        <img src={contact3} alt="logoGALAXY" />
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-DDC-tab"
                        data-toggle="pill"
                        href="#v-pills-DDC"
                        role="tab"
                        aria-controls="v-pills-DDC"
                        aria-selected="false"
                      >
                        <img src={contact4} alt="logoDDC" />
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-MegaGS-tab"
                        data-toggle="pill"
                        href="#v-pills-MegaGS"
                        role="tab"
                        aria-controls="v-pills-MegaGS"
                        aria-selected="false"
                      >
                        <img src={contact5} alt="logoMegaGS" />
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-Dcine-tab"
                        data-toggle="pill"
                        href="#v-pills-Dcine"
                        role="tab"
                        aria-controls="v-pills-Dcine"
                        aria-selected="false"
                      >
                        <img src={contact6} alt="logoDcine" />
                      </a>
                      <a
                        className="nav-link"
                        id="v-pills-LOTTE-tab"
                        data-toggle="pill"
                        href="#v-pills-LOTTE"
                        role="tab"
                        aria-controls="v-pills-LOTTE"
                        aria-selected="false"
                      >
                        <img src={contact7} alt="logoLOTTE" />
                      </a>
                    </div>
                  </div>
                  <div className="listCinemas col-sm-12">
                    <div
                      className="tab-content selectScroll"
                      id="v-pills-tabContent"
                    >
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
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Aeon Bình Tân
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân,
                                Số 1 đường số 17A, khu phố 11, phường Bình Trị
                                Đông B, quận Bình Tân, TPHCM
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Hùng Vương Plaza
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 7, Hùng Vương Plaza 126 Hùng Vương Quận 5
                                Tp. Hồ Chí Minh
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Vincom Thủ Đức
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân,
                                Phường Bình Thọ, Quận Thủ Đức
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Saigonres Nguyễn Xí
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P
                                26, Q Bình Thạnh
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Trường Sơn (CGV CT Plaza)
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn,
                                P.2, Q. Tân Bình, TP.HCM, Việt Nam
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Vivo City
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Lầu 5, Trung tâm thương mại SC VivoCity - 1058
                                Nguyễn Văn Linh, Quận 7
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Sư Vạn Hạnh
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường
                                12, Quận 10
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Pandora City
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân
                                Phú TP. Hồ Chí Minh
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact1} alt="CGV" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema">
                                  CGV
                                </span>{" "}
                                - Vincom Gò Vấp
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn
                                Trị, Phường 7, Quận Gò Vấp
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
                        id="v-pills-BHD"
                        role="tabpanel"
                        aria-labelledby="v-pills-BHD-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact2} alt="BHD" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema BHD">
                                  BHD star
                                </span>{" "}
                                - Vincom Thảo Điền
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L5-Megamall, 159 XL Hà Nội, Q.2
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact3} alt="BHD" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema BHD">
                                  BHD star
                                </span>{" "}
                                - Vincom 3/2
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L5-Vincom 3/2, 3C Đường 3/2, Q.10
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>

                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact4} alt="BHD" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema BHD">
                                  BHD star
                                </span>{" "}
                                - Vincom Quang Trung
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                B1-Vincom QT, 190 Quang Trung, Gò Vấp
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
                        id="v-pills-GALAXY"
                        role="tabpanel"
                        aria-labelledby="v-pills-GALAXY-tab"
                      >
                        <div className="homeMovies__scope">
                          <div className="homeMovies__cinema active">
                            <div className="homeMovies__picture">
                              <img src={Ccontact5} alt="GLX" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema GLX">
                                  GLX
                                </span>{" "}
                                - Linh Trung
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                Siêu thị Co.opXtra Thủ Đức 934 QL1A, Phường Linh
                                Trung, Quận Thủ Đức, Hồ Chí Minh
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>
                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact6} alt="GLX" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema GLX">
                                  GLX
                                </span>{" "}
                                - Quang Trung
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp
                              </p>
                              <p className="homeMovies__showingDetailCinema">
                                <a href="#">[chi tiết]</a>
                              </p>
                            </div>
                          </div>

                          <div className="homeMovies__cinema">
                            <div className="homeMovies__picture">
                              <img src={Ccontact7} alt="GLX" />
                            </div>
                            <div className="homeMovies__text">
                              <p className="homeMovies__nameMovieCinema">
                                <span className="homeMovies__colorCinema GLX">
                                  GLX
                                </span>{" "}
                                - Nguyễn Văn Quá
                              </p>
                              <p className="homeMovies__infoMovieCinema">
                                119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12,
                                TPHCM
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
                              <img
                                src={Ccontact10}
                                alt="Dcine"
                              />
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
                              <img
                                src={Ccontact11}
                                alt="LOTTE"
                              />
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
                              <img
                                src={Ccontact12}
                                alt="LOTTE"
                              />
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
                              <img
                                src={Ccontact13}
                                alt="LOTTE"
                              />
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

export default Cinema;
