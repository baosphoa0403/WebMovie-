import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));
function HomeIcon(props) {
  return (
    <ArrowUpwardIcon {...props}>
      {/* <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> */}
    </ArrowUpwardIcon>
  );
}
export default function BackToTop() {
  const classes = useStyles();
  return (
    <div>
      <div className="back_to_top">
        <a href="#" className="back_to_top_link cd-top text-replace js-cd-top">
          <div className={classes.root}>
            <HomeIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
