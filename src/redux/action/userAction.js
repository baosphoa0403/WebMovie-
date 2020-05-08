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
export const actCheckSignInAdmin = (user, history) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        }).then((rs)=>{
           console.log(rs);
           if (rs.data.maLoaiNguoiDung === "QuanTri") {
               localStorage.getItem("userAdmin", JSON.stringify(rs.data));
               history.push("/admin/dashboard"); 
           }else{
               alert("bạn không có quyền đăng nhập ");
           }
        })
        .catch((err)=>{
           if (err) {
               alert("bạn đã nhập sai");
           }
        })
    }
}

export const actCheckSignInUser = () => {
    return dispatch => {    
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        }).then((rs)=>{
           console.log(rs);
           if (rs.data.maLoaiNguoiDung === "KhachHang") {
               localStorage.getItem("userAdmin", JSsd là ;gvcxvp  \][  /.,ok0polbnm[['
               ghm4rhjkl;'';,l ..lkjkl
               l/.,msjkl;'
               'ON.stringify(rs.data));
               history.push("/admin/dashboard"); 
           }else {
               alert("tài khoản bị sai");
           }
        })    
    }
}
const actGetListUser = (listUser) => {
    return {
        type: ActionType.GET_LIST_USER ,
        data: listUser
    }
}