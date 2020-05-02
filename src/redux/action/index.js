import Axios from "axios";
import * as ActionType from "../constants/ActionType"

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

export const actGetListMovie = (listMovie) => {
   return {
       type: ActionType.GET_LIST_MOVIE,
       data: listMovie

   }
}