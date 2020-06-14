import React, { Component } from "react";
import logo2 from "../images/img/logo2.png"
import vietinbank from "../images/img/Contact/VIETTINBANK.png"
import cinestar from "../images/img/Contact/cinestar.png"
import cnx from "../images/img/Contact/cnx.jpg"
import dcine from "../images/img/Contact/dcine.png"
import dongdacinema from "../images/img/Contact/dongdacinema.png"
import galaxycine from "../images/img/Contact/galaxycine.png"
import megags from "../images/img/Contact/megags.png"
import payoo from "../images/img/Contact/payoo.jpg"
import starlight from "../images/img/Contact/STARLIGHT.png"
import TOUCH from "../images/img/Contact/TOUCH.png"
import VCB from "../images/img/Contact/VCB.png"
import zalopay_icon from "../images/img/Contact/zalopay_icon.png"
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section
          id="the-end"
          className="footer "
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-3 footer_left">
                <div className="footer_item icon1">
                  <img src={logo2} style={{ width: 232 }}  alt="" />
                  <p>
                    Cinemax giúp bạn mua vé trực tuyến và cập nhật thường xuyên
                    các trailer, tin tức, thông tin rạp, suất chiếu, các đánh
                    giá phim, chương trình khuyến mãi từ các rạp và của riêng
                    Cinemax dành cho người sủ dụng.
                  </p>
                </div>
              </div>
              <div className="col-3 footer_left">
                <div className="footer_item icon2">
                  <h6>ABOUT US</h6>
                  <ul>
                    <li>
                      <a href>Giới thiệu</a>
                    </li>
                    <li>
                      <a href>Lịch chiếu </a>
                    </li>
                    <li>
                      <a href>Cụm rạp</a>
                    </li>
                    <li>
                      <a href>Tin tức</a>
                    </li>
                    <li>
                      <a href>Đăng nhập</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3 ">
                <div className="footer_item icon3">
                  <h6>HỖ TRỢ KHÁCH HÀNG</h6>
                  <ul>
                    <li>
                      <a href="https://tix.vn/faq">FAQs</a>
                    </li>
                    <li>
                      <a href="https://tix.vn/thoa-thuan-su-dung">
                        Thỏa thuận sử dụng
                      </a>
                    </li>
                    <li>
                      <a href="https://tix.vn/quy-che-hoat-dong">
                        Quy chế hoạt động
                      </a>
                    </li>
                    <li>
                      <a href="https://tix.vn/chinh-sach-bao-mat">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li>
                      <a href="https://tix.vn/quyen-loi-thanh-vien">
                        Quyền lợi thành viên
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-3 ">
                <div className="footer_item icon">
                  <h6>ĐỐI TÁC</h6>
                  <ul>
                    <li>
                      <a href="https://www.vietinbank.vn/web/home/vn/index.html">
                        <img src={vietinbank} alt=""  />
                      </a>
                    </li>
                    <li>
                      <a href="https://cinestar.com.vn/">
                        <img src={cinestar} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://cinemaxvn.com/">
                        <img src={cnx} alt=""  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.dcine.vn/">
                        <img src={dcine}  alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="http://ddcinema.vn/">
                        <img src={dongdacinema} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.galaxycine.vn/">
                        <img src={galaxycine}  alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.megagscinemas.vn/">
                        <img src={megags} alt=""  />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.payoo.vn/">
                        <img src={payoo} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://starlight.vn/">
                        <img src={starlight} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://touchcinema.com/">
                        <img src={TOUCH}  alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://portal.vietcombank.com.vn/Pages/Home.aspx">
                        <img src={VCB} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://zalopay.vn/">
                        <img src={zalopay_icon}  alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
