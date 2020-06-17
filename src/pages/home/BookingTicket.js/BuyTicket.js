import React, { Component } from "react";
import icon123 from "../../../images/img/exclamation.png";
import SeatUpLoad from "./SeatUpLoad";
import Swal from "sweetalert2";
export default class BuyTicket extends Component {
  handleSuccess = () => {
    Swal.fire("Đặt vé thành công !", "Nhấn OK để thoát!", "success");
  };
  renderSum = () => {
    return this.props.buyTicket.reduce((sum, item) => {
      return (sum += item.giaVe);
    }, 0);
  };

  renderInforFilm = () => {
    let { FilmInfo } = this.props;

    if (FilmInfo) {
      console.log(this.props.FilmInfo);
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
    console.log(this.props.BuyTicket);
    console.log(nextProps);
  }
  render() {
    let { buyTicket } = this.props;
    return (
      <div>
        <div class="right">
          <div class="right__content">
            <div class="row right__total">
              <div class="col-12">
                <p class="right__cash">{this.renderSum().toLocaleString()} VNĐ</p>
              </div>
            </div>
            {this.renderInforFilm()}
            <div class="row right__chair">
              <SeatUpLoad buyTicket={buyTicket} />
            </div>
            <div class="row right__infoUser">
              <div class="col-12">
                <input type="text" name="" id="" class="content" />
                <label for="emailCheckout">E-Mail</label>
              </div>
            </div>
            <div class="row right__infoUser">
              <div class="col-12">
                <input type="text" name="" id="" class="content" />
                <label for="phoneCheckout">Phone</label>
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
                <p class="right__warning">
                  Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                </p>
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
          <div class="right__button" onClick={this.handleSuccess}>
            Đặt Vé
          </div>
        </div>
      </div>
    );
  }
}
