import React, { Component } from "react";
import logo from "../images/img/logo2.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailUser: {},
    };
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.setState({
        detailUser: JSON.parse(localStorage.getItem("user")),
      });
    } else {
      this.setState({
        detailUser: null,
      });
    }
  }
  handleLoginOut = () => {
    localStorage.removeItem("user");
    this.setState({
      detailUser: null,
    });
  };

  render() {
    return (
      <div>
        <section className="menu">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            {/* Brand */}
            {/* Toggler/collapsibe Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Navbar links */}
            <div className="row">
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="col-3">
                  <div className="logo">
                    <a href>
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <ul className="navbar-nav">
                    <li className="nav-item ">
                      <a className="nav-link " href="#">
                        Trang Chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#stadium">
                        Phim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#stadium">
                        Lịch Chiếu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#cinemaBlock">
                        Cụm rạp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <div className="sign-language">
                    <ul>
                      {this.state.detailUser === null ? (
                        <li>
                          <i className="fa fa-user" />
                          <Link to="/form">Đăng Nhập</Link>
                        </li>
                      ) : (
                       
                        <div className="navbarLogin" >
                          <p style={{display: 'flex'}}>
                            <h4 className="nav_NameUser">{this.state.detailUser.hoTen} </h4>
                            <h4 className="nav_Middle"> |</h4>
                            <h4 className="nav_UserOut" onClick={this.handleLoginOut}>THOÁT</h4>
                          </p>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
