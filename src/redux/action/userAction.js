import Axios from "axios";
import * as ActionType from "../constants/ActionType";
import Swal from "sweetalert2";

export const actGetListUserAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
    })
      .then((rs) => {
        dispatch(actGetListUser(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const actCheckSignInAdmin = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        console.log(rs);
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          history.push("/admin/dashboard");
        } else {
          alert("bạn không có quyền đăng nhập ");
        }
      })
      .catch((err) => {
        if (err) {
          alert("bạn đã nhập mật khẩu sai");
        }
      });
  };
};

export const actCheckSignInUser = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        console.log(rs);
        localStorage.setItem("user", JSON.stringify(rs.data));
        history.push("/");
        dispatch(actPostUser(rs.data));
        Swal.fire("Đăng nhập thành công !", "Nhấn OK để thoát!", "success");
      })
      .catch((error) => {
        Swal.fire("Đăng nhập không thành công !", error.response.data, "error");
      });
  };
};
const actGetListUser = (listUser) => {
  return {
    type: ActionType.GET_LIST_USER,
    data: listUser,
  };
};
const actPostUser = (dataUser) => {
  return {
    type: ActionType.POST_DETAIL_USER,
    data: dataUser,
  };
};
