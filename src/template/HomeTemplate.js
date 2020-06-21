import React, { Fragment, Component } from "react";
import Navbar from "../components/navbar";
import { Route } from "react-router-dom";
import Loading from "../components/Loading";
const HomeLayout = (props) => {
  return <Fragment>{props.children}</Fragment>;
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
