import React, { Component } from "react";
import avatar1 from "../../../images/img/avatar.png";
import avatar2 from "../../../images/img/align-left.png";

export default class HeaderBooking extends Component {
 
  render() {
    let user =  JSON.parse(localStorage.getItem("user"));
    return (
      <div>
        <div class="header">
          <div class="header__content">
            <div class="row header__hideOnMobile">
              <div class="header__colLeft">
                <ul>
                  <li class="active">
                    CHỌN GHẾ & THANH TOÁN
                  </li>
                </ul>
              </div>
              <div class="header__colRight">
                <div class="header__user">
                  <img src={avatar1} alt="avatar" />
                  <span>{user.taiKhoan}</span>
                </div>
              </div>
            </div>

            <button
              class="header__mobile navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sideMenu"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <img src={avatar2} alt="" />
            </button>
            <div
              id="sideMenu"
              class="header__sideMenu collapse navbar-collapse"
            >
              <ul class="navbar-nav">
                <li class="active">
                  <span>01 </span> CHỌN GHẾ & THANH TOÁN
                </li>
                <li>
                  <span>02 </span> KẾT QUẢ ĐẶT VÉ
                </li>
              </ul>
            </div>

            <div class="header__responsivePay">
              <h6>03. THANH TOÁN</h6>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="left__content">
            <div class="left__bg">
              <div class="left__overlay"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
