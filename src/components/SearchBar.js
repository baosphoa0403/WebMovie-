import React, { Component } from 'react';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phim: "phim",

        }
    }
    renderNameMovie = () => {
        return this.props.listMovie.map((movie)=>{
            return (
                <li class="ng-scope">
                  <a href="#">{movie.tenPhim}</a>
                </li>
            )
        })
    }
    render() {
        console.log(this.props.listMovie);
        
        return (
            <div>
                <div class="carousel__selectMovie">
            <div class="w30p widthByPercent dropdown selectFilm">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
               
              >
                {this.state.phim}
              </div>
              <ul class="dropdown-menu selectSroll">
                {this.renderNameMovie()}
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectCinema">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Rạp
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectDate">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Ngày xem
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim và rạp</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent dropdown selectSession">
              <div
                class="dropdown-toggle selectMenu"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Suất chiếu
              </div>
              <ul class="dropdown-menu selectSroll">
                <li class="ng-scope">
                  <a href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </li>
              </ul>
            </div>
            <div class="smallBlock widthByPercent">
              <button class="btn btn-primary buyTicket">MUA VÉ NGAY</button>
            </div>
          </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}

export default connect(mapStateToProps, null) (SearchBar);