import React, { Fragment, Component } from "react";
import Navbar from "../components/navbar";
import { Route } from "react-router-dom";
import Loading from "../components/Loading";

class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading  ? (<div>{this.renderLoading()}</div>) : ("")}
        <Navbar />
        {this.props.children}
      </Fragment>
    );
  }
  renderLoading = () => {
    return (
      <div>
        <Loading />
      </div>
    );
  };

  componentWillUnmount() {
    //chổ này em hiển thị loading
    this.renderLoading();
  }
  componentDidMount() {
    //chổ này em tắt loading nè nó áp dụng tất cả các route luôn
    //Chứ h có 100 trang k lẻ vô 100 cái axios viết
    this.setState({
      isLoading: false,
    });
  }
}
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
