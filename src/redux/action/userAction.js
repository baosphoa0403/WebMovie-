import Axios from "axios";
import * as ActionType from "../constants/ActionType"
export const actGetListUserAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04"
        }).then((rs)=>{
           dispatch(actGetListUser(rs.data))
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}
const actGetListUser = (listUser) => {
    return {
        type: ActionType.GET_LIST_USER ,
        data: listUser
    }
}