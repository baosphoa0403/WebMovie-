import React, { Component } from "react";
import icon123 from "../../../images/img/exclamation.png";
import SeatUpLoad from "./SeatUpLoad";
import Swal from "sweetalert2";
import Axios from "axios";
import { withRouter } from "react-router";
import { notifiSuccess, notifiError } from "../../../utils/MyToys";
import { RadioGroup, FormControlLabel, Radio, Grid } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
class BuyTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maLichChieu: null,
      maGhe: null,
      giaVe: null,
      hiddenBooking: false,
      buyTicketBooking: [],
      isFlag: false,
      value: ""
    };
  }
  booking = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (this.props.buyTicket) {
      let arrBooking = [];
      arrBooking = this.props.buyTicket.map(item => {
        return { maGhe: item.maGhe, giaVe: item.giaVe };
      });
      Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu: this.state.maLichChieu,
          danhSachVe: arrBooking,
          taiKhoanNguoiDung: user.taiKhoan
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(rs => {
          if (this.props.buyTicket.length > 0) {
            notifiSuccess("Đặt vé thành công !");
            setTimeout(() => {
              this.props.history.replace("/inFoUserBooking");
            }, 2000);
          } else {
            notifiError("Đặt không vé thành công !");
          }
        })
        .catch(error => {
          notifiError("Đặt không vé thành công !");
        });
    }
  };

  renderSum = () => {
    return this.props.buyTicket.reduce((sum, item) => {
      return (sum += item.giaVe);
    }, 0);
  };

  renderInforFilm = () => {
    let { FilmInfo } = this.props;

    if (FilmInfo) {
      // console.log(this.props.FilmInfo);
      return (
        <div class="row right__filmName">
          <div class="col-12 right__text">
            <div class="right__address">
              <span class="right__pcinema">{FilmInfo.tenCumRap}</span>
              <img src={FilmInfo.hinhAnh} />
              <div class="right__hour">
                Ngày : {FilmInfo.ngayChieu} - {FilmInfo.gioChieu}
              </div>
              <p class="right__name">Phim : {FilmInfo.tenPhim}</p>
            </div>
          </div>
        </div>
      );
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      maLichChieu: nextProps.FilmInfo.maLichChieu,
      buyTicketBooking: nextProps.buyTicket,
      hiddenBooking: true
    });
  }
  handleChange = event => {
    console.log(event.target.value);
    
    this.setState({value: event.target.value,isFlag: true });
  };
  color = {
    color: "#fbbd61"
  };

  render() {
    let { buyTicket } = this.props;
    let user = JSON.parse(localStorage.getItem("user"));

    return (
      <div>
        <div class="right">
          <div class="right__content">
            <div class="row right__total">
              <div class="col-12">
                <p class="right__cash">
                  {this.renderSum().toLocaleString()} VNĐ
                </p>
              </div>
            </div>
            {this.renderInforFilm()}
            <div class="row right__chair">
              <SeatUpLoad buyTicket={buyTicket} />
            </div>
            <div class="row right__infoUser">
              <div class="col-12">
                <p>E-mail: {user.email}</p>
              </div>
            </div>
            <div class="row right__infoUser">
              <div class="col-12">
                <p>Phone: {user.soDT}</p>
              </div>
            </div>
            <div class="row right__voucher">
              <div class="col-12">
                <div class="right__left">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Nhập tại đây..."
                  />
                  <label for="voucherPromotion">Mã giảm giá</label>
                </div>
                <div class="right__right">
                  <div class="right__apply">Áp dụng</div>
                </div>
              </div>
            </div>
            <div class="row right__methodPay">
              <div class="col-12">
                <p class="right__titleMethodPay">Hình thức thanh toán</p>
                {this.props.buyTicket.length === 0 ? (
                  <p class="right__warning">
                    Vui lòng chọn ghế để hiển thị phương thức thanh toán phù
                    hợp.
                  </p>
                ) : (
                  <RadioGroup
                    aria-label="payment"
                    name="payment"
                    onChange={this.handleChange}
                    value={this.state.value}
                  >
                    <Grid container direction="row" alignItems="center">
                      <img
                        style={{ width: 34, height: 34 }}
                        src="https://s3img.vcdn.vn/123phim/2018/12/08075f42d0c4bfc8f2063a35d5b9fca7.jpg"
                      />
                      <FormControlLabel
                        value="ZaloPay"
                        control={<Radio color="default" />}
                        label="ZaloPay"
                      />
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                      <img
                        style={{ width: 34, height: 34 }}
                        src="https://developers.momo.vn/images/logo.png"
                      />

                      <FormControlLabel
                        value="MoMo"
                        control={<Radio color="default" />}
                        label="MoMo"
                      />
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                      <PaymentIcon fontSize="large" />
                      <FormControlLabel
                        value="Thanh Toán Bằng Tiền Mặt"
                        control={<Radio color="default" />}
                        label="Thanh Toán Bằng Tiền Mặt"
                      />
                    </Grid>
                  </RadioGroup>
                )}
              </div>
            </div>
            <div class="row right__notice">
              <div class="right__errorBook">
                <img src={icon123} alt="iconExclamation" />
                <span class="right__title">
                  Vé đã mua không thể đổi hoặc hoàn tiền <br />
                </span>
                <span class="right__title">
                  Mã vé sẽ được gửi qua tin nhắn
                  <span class="right__item"> SMS</span> (tin nhắn Zalo) và{" "}
                  <br />
                  <span class="right__item">Email</span> đã nhập
                </span>
              </div>
            </div>
          </div>
        
          <button   className={this.state.isFlag ? "right__button" : "left__button"} disabled={!this.state.isFlag} onClick={this.booking}>
            Đặt Vé
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(BuyTicket);
