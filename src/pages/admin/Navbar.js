import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar-absolute navbar-transparent navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar">
            <ul className="navbar-nav">
              <li className="dropdown nav-item">
                <AccountCircleIcon
                  className="user"
                  style={{ color: "#eceff1" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
