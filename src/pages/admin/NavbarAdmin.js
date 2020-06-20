import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FaceIcon from "@material-ui/icons/Face";
import { pink } from "@material-ui/core/colors";
import { black } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  leftTable: {
    color: theme.palette.common.black,
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    padding: "0 30px",
  },
  leftUp: {
    marginBottom: "30px",
    marginTop: "10px",
    textDecoration: "none",
  },
  leftUp1: {
    marginLeft: "-9px",
    marginBottom: "30px",
    marginTop: "10px",
    textDecoration: "none",
  },
  left: {
    textAlign: "center",
  },
  icon: {
    color: "#212121",
    fontSize: 200
  },
  span: {
     color: "#212121",
     width: 100,
     height: 2

  }
}));
export default function NavbarAdmin() {
  const classes = useStyles();

  return (
    <Grid className={classes.leftTable} item xs={12} sm={2}>
      <div className={classes.left}>
        <div className={classes.leftUp}>
          <FaceIcon className={classes.icon} />
        </div>
        <span className={classes.span}></span>
        <div className={classes.leftUp1}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/admin/dashboardUser"
            exact
          >
            DashBoard USER
          </NavLink>
        </div>
        <div className={classes.leftUp2}>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/admin/dashboardMovie"
            exact
          >
            DashBoard MOVIE
          </NavLink>
        </div>
      </div>
    </Grid>
  );
}
