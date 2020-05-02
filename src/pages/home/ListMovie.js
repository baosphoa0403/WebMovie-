import React, { Component } from 'react'
import Movie from '../../components/Movie';
import Axios from "axios";
import * as action from "../../redux/action"
import {connect} from "react-redux";
 class ListMovie extends Component {
    renderListMovie = () => {
        return this.props.listMovie.map((movie)=>{
               return <Movie movie={movie}/>
        })
    }
    render() {
        console.log(this.props.listMovie);
        return (
            <div>
                <h1 className="text-center">ListMovie</h1>
                <div className ="container text-center">
                      <div className="row">
                       {this.renderListMovie()}
                      </div>
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
