import { Link } from "react-router-dom";
import React from "react";
import logo from "../images/img/logo2.png";
import NavBarSrcoll from "./NavBarSrcoll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default class Navbar extends React.Component {
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
      <React.Fragment>
        <section className="menu">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="row">
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="col-3">
                  <div className="logo">
                    <a href>
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <NavBarSrcoll />
                <div className="col-3">
                  <div className="sign-language">
                    <ul>
                      {this.state.detailUser === null ? (
                        <li>
                          <i className="fa fa-user" />
                          <Link to="/form">Đăng Nhập</Link>
                        </li>
                      ) : (
                        <div className="navbarLogin">
                          <p style={{ display: "flex" }}>
                            <Link to="/inFoUserBooking">
                              <AccountCircleIcon
                                type="button"
                                style={{ margin: "5px 7px", fontSize: "28px" }}
                              />
                            </Link>
                            <h4 className="nav_NameUser">
                              {this.state.detailUser.hoTen}{" "}
                            </h4>
                            <h4 className="nav_Middle"> |</h4>
                            <h4
                              className="nav_UserOut"
                              onClick={this.handleLoginOut}
                            >
                              THOÁT
                            </h4>
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
      </React.Fragment>
    );
  }
}
