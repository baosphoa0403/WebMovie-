import React, { Component } from 'react';
import { connect } from "react-redux";
import Ccontact1 from "../../images/img/CineContact/cgv-aeon-binh-tan.jpg";
class CinemaTheater extends Component {
    constructor(props){
        super(props);
        this.state={
            maCumRap: null
        }
    }
    handleGetIDCumRap = (value, maPhim) => {
        console.log(value);
        this.setState({maCumRap: value})
        console.log(maPhim);
        
        
       }
       renderListRap = () => {
         if (this.props.listMovieFollowTheater) {
           return this.props.listMovieFollowTheater.map((item) => {
             return item.lstCumRap.map((rap) => {
               return (
                 <button
                   className="tab-pane fade show active"
                   id="v-pills-CGV"
                   role="tabpanel"
                   aria-labelledby="v-pills-CGV-tab"
                   onClick={()=>{this.handleGetIDCumRap(rap.maCumRap)}}
                 >

                   <div className="homeMovies__scope">
                     <div className="homeMovies__cinema active">
                       <div className="homeMovies__picture">
                         <img src={Ccontact1} alt="CGV" />
                       </div>
                       <div className="homeMovies__text">
                         <p className="homeMovies__nameMovieCinema">
                           {rap.tenCumRap}
                         </p>
                         <p className="homeMovies__infoMovieCinema">{rap.diaChi}</p>
                         <p className="homeMovies__showingDetailCinema">
                           <a href="#">[chi tiết]</a>
                         </p>
                       </div>
                     </div>
                   </div> 
                 </button>
               );
             });
           });
         }
       };
    render() {
        return (
            <div>
                {this.renderListRap()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      listTheater: state.movieReducer.listTheater,
      listMovieFollowTheater: state.movieReducer.listMovieFollowTheater,
      listMovie: state.movieReducer.listMovie,
      
    };
  };

export default connect(mapStateToProps,null)(CinemaTheater);