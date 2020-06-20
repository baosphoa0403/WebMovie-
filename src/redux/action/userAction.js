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
      .catch();
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
        if (rs.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(rs.data));
          Swal.fire("Đăng nhập thành công !", "Nhấn OK để thoát!", "success");
          setTimeout(() => {
            history.push("/admin/dashboardUser");
          }, 2000);
        } else {
          Swal.fire("Bạn có quyền đăng nhập !", "Nhấn OK để thoát!", "error");
        }
      })
      .catch((error) => {
        Swal.fire("Đăng nhập không thành công !", error.response.data, "error");
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
        if (JSON.parse(localStorage.getItem("maLichChieu")) !== null) {
          Swal.fire("Đăng nhập thành công !", "Nhấn OK để thoát!", "success");
          setTimeout(() => {
            history.push(
              `/booking/${JSON.parse(localStorage.getItem("maLichChieu"))}`
            );
          }, 3000);
          localStorage.setItem("user", JSON.stringify(rs.data));
          dispatch(actPostUser(rs.data));
        } else {
          Swal.fire("Đăng nhập thành công !", "Nhấn OK để thoát!", "success");
          localStorage.setItem("user", JSON.stringify(rs.data));
          history.push("/");
          dispatch(actPostUser(rs.data));
        }
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
