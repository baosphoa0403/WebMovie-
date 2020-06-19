import React from "react";
import {NavLink} from "react-router-dom"
export default function NavbarAdmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" >
              hello admin
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/admin/dashboardUser" exact>
              dashboard USER
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/dashboardMovie" exact>
              dashboard MOVIE
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
