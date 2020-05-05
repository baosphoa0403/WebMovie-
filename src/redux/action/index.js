import Axios from "axios";
import * as ActionType from "../constants/ActionType"
//  get list movie
export  const  actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
        })
        .then((rs)=>{
            // console.log(rs.data);
           dispatch(actGetListMovie(rs.data));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
// get detail Movie
export const actGetDetailMovieAPI =  (id) => {
     return dispatch => {
       Axios({
           method: "GET",
           url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
       })
       .then((rs)=>{
            dispatch(actGetDetailMovie(rs.data))
       })
       .catch((err)=>{
           console.log(err);
       })
     }
}


export const actGetListChairBookingAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
        .then((rs)=>{
            dispatch(actGetListChairBooking(rs.data))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
export const actGetListChairBooking = (listChair) => {
    return {
        type: ActionType.GET_LIST_CHAIR_BOOKING,
        data: listChair
    }
}



export const actGetListMovie = (listMovie) => {
   return {
       type: ActionType.GET_LIST_MOVIE,
       data: listMovie

   }
}

export const actGetDetailMovie = (detailMovie) =>{
     return{
         type: ActionType.GET_DETAIL_MOVIE,
         data: detailMovie
     }
}