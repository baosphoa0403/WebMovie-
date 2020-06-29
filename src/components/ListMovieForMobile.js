import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from "../redux/action";
import Movie from "../components/Movie";

class ListMovieForMobile extends Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 3
        }
    }
    onLoadMore = () =>  {
        this.setState({
            limit: this.state.limit + 3
        });
    }
    renderListMovie = () => {
        return this.props.listMovie.slice(0,this.state.limit).map((movie, index) => {
          return <Movie movie={movie} key={index} />;
        });
      };
    render() {
        return (
            <div className="container listMovieForMobile" >
            <section className="calendar" id="filmBlock"name="test2" >
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
                         {this.renderListMovie()}
                         <p style={{textAlign: "center"}} onClick={this.onLoadMore}>Load more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(ListMovieForMobile);