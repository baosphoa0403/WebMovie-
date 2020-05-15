import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div class="carousel__selectMovie">
            <div class="w30p widthByPercent dropdown selectFilm">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Phim
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Bloddshot (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Nắng 3: Lời Hứa Của Cha (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Vì ANh Vẫn Tin - I Still Believe (C13)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Siêu Vệ Sĩ Sợ Vợ - The Protector (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Ác Mộng Bên Hồ - Lake Of Death (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Truy Tìm Phép Thuật - Onward</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Dấu Ấn Vô Cực (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Loạn Nhịp - Heartbeats (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Căn Hộ Của Quỷ - 32 Malasana Street (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Kẻ Vô Hình - The Invisible Man (C18)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Cậu Bé Ma 2 - Brahms: The Boy 2 (C16)</a>
                </li>
                <li class="ng-scope">
                  <a href="#">Sát Thủ Vô Cùng Cực - Hitman: Agent Jun (C18)</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectCinema">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Rạp
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectDate">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Ngày xem
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim và rạp</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectSession">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Suất chiếu
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent">
              <button class="btn btn-primary buyTicket">MUA VÉ NGAY</button>
            </div>
          </div>
            </div>
        );
    }
}

export default SearchBar;