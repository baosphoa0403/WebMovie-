import Axios from "axios";
import * as ActionType from "../constants/ActionType";
import Swal from "sweetalert2";
import { notifiSuccess, notifiError } from "../../utils/MyToys";

export const actGetListUserAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
    })
      .then((rs) => {
        dispatch(actGetListUser(rs.data));
      })
      .catch();
  };
};
export const actCheckSignInAdmin = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          notifiSuccess("Đăng nhập thành công !")
          setTimeout(() => {
            history.push("/admin/dashboardUser");
          }, 2000);
        } else {
          notifiError("Bạn có quyền đăng nhập !")
        }
      })
      .catch((error) => {
        notifiError("Đăng nhập không thành công  !" + " " + error.response.data,)
        // Swal.fire("Đăng nhập không thành công !", error.response.data, "error");
      });
  };
};

export const actCheckSignInUser = (user, history) => {
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((rs) => {
        if (JSON.parse(localStorage.getItem("maLichChieu")) !== null) {
          notifiSuccess("Đăng nhập thành công !")
          setTimeout(() => {
            history.push(
              `/booking/${JSON.parse(localStorage.getItem("maLichChieu"))}`
            );
          }, 3000);
          localStorage.setItem("user", JSON.stringify(rs.data));
          dispatch(actPostUser(rs.data));
        } else {
          notifiSuccess("Đăng nhập thành công !")
          localStorage.setItem("user", JSON.stringify(rs.data));
          setTimeout(() => {
            history.push("/");
          }, 2000);
          dispatch(actPostUser(rs.data));
        }
      })
      .catch((error) => {
        notifiError("Đăng nhập không thành công !" + " " + error.response.data)
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


const arrColor = [];