import React, { Component } from 'react'
import Movie from '../components/Movie';
import * as action from "../redux/action"
import {connect} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Carousel} from '3d-react-carousal';
 class ListMovie extends Component {
    renderListMovie = () => {
        return this.props.listMovie.map((movie, index)=>{
               return <Movie movie={movie} key={index}/>
        })
    }
    
    
   
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            row: 2,
            slidesPerRow: 2,
            centerPadding: "60px",

        };
        return (
            <div>
                <h1 className="text-center">ListMovie</h1>
                <div className ="container text-center">
                      {/* <div className="row" > */}
                       <Slider {...settings} >
                          {this.renderListMovie()}
                       </Slider>
                      {/* </div> */}
                </div>
            </div>
        )
    }
    componentDidMount(){
       this.props.getListMovie();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
           dispatch(action.actGetListMovieAPI())
        }
    }
}
const mapStateToProps = (state) => {
    return{
        listMovie: state.movieReducer.listMovie
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListMovie);
