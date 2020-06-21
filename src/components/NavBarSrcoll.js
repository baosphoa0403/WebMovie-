import React, { Component } from 'react'
// import { Link, Events } from "react-scroll";
import { Link } from "react-router-dom";
export default class NavBarSrcoll extends Component {
    // componentDidMount() {
    //     Events.scrollEvent.register("begin", function () {});
    
    //     Events.scrollEvent.register("end", function () {});
        
    //   }
    // componentWillUnmount() {
    //     Events.scrollEvent.remove("begin");
    //     Events.scrollEvent.remove("end");
    //   }
    render() {
        return (
            <div className="col-6">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  activeClass="active"
                  className="test1 nav-link"
                  to="/"        
                >
                  Trang Chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="test2 nav-link"
                  to="/"
                >
                  Phim
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="test3 nav-link"
                  to="/"
                
                >
                  Lịch Chiếu
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="test4 nav-link"
                  to="/"
                
                >
                  Cụm rạp
                </Link>
              </li>
            </ul>
          </div>
        )
    }
}
