import React, { Component } from "react";
import Movie from "../components/Movie";
import * as action from "../redux/action";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class ListMovie extends Component {
  renderListMovie = () => {
    return this.props.listMovie.map((movie, index) => {
      return <Movie movie={movie} key={index} />;
    });
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      slidesPerRow: 2,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 2900,
    };
    var settings1 = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 4,
      slidesPerRow: 2,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 2900,
    };
    return (
      <div className="container listMovie " name="test2">
        <section className="calendar" id="filmBlock">
          <div className="calendar__bg" id="homeMovies">
            <div className="calendar__content">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Đang Chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Sắp Chiếu
                  </a>
                </li>
              </ul>
              <div className=" tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active owl-carousel"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div >
                    <Slider {...settings}>{this.renderListMovie()}</Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  componentDidMount() {
    this.props.getListMovie();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listMovie: state.movieReducer.listMovie,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
