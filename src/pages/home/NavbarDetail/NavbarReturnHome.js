import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavbarReturnHome extends Component {
  render() {
    return (
      <div className="nav-link nav-link-detail">
        <Link style={{textDecoration:"none"}} to="/">Trang Chủ</Link>
      </div>
    );
  }
}
