import { connect } from "react-redux";
import * as action from "../../redux/action/userAction";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import Swal from "sweetalert2";
// import Modal from "./Modal";
import NavbarAdmin from "./NavbarAdmin";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightTable: {
    padding: theme.spacing(2),
  },
}));
function DashBoard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "Tên", field: "hoTen" },
      { title: "Tài Khoản", field: "taiKhoan" },
      { title: "Mật Khẩu", field: "matKhau" },
      { title: "Email", field: "email", type: "email" },
      {
        title: "Số Đt",
        field: "soDt",
        type: "numeric",
      },
      { title: "Mã loại người dùng", field: "maLoaiNguoiDung" },
    ],
    data: [],
    query: {
      pageSizeOptions: [10, 20],
    },
  });
  console.log(state.data);

  useEffect(() => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
    })
      .then((rs) => {
        // dispatch(actGetListUser(rs.data))
        setState((prevState) => {
          return { ...prevState, data: rs.data };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleDeleteUser = (user) => {
    console.log(user);
    const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`,
      },
    })
      .then((rs) => {
        Swal.fire("Xoá tài khoản thành công!", "Nhấn OK để thoát!", "success");
      })
      .catch((error) => {
        Swal.fire("Xoá tài khoản không thành công !", error.response.data, "error");
      });
  };
  // edit
  const handleEditUser = (user) => {
    console.log(user);
    const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    let userEdit = { ...user, maNhom: "GP04" };
    // console.log(userEdit);

    if (
      user.maLoaiNguoiDung !== "KhachHang" &&
      user.maLoaiNguoiDung !== "QuanTri"
    ) {
      console.log("sai ma loai ng dùng");
    } else {
      Axios({
        method: "PUT",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: userEdit,
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          Swal.fire("Sửa tài khoản thành công!", "Nhấn OK để thoát!", "success");
        })
        .catch((error) => {
          Swal.fire("Sửa tài khoản không thành công !", error.response.data, "error");
        });
    }
  };
  // add
  const handleAddUser = (user) => {
    // console.log(user);

    const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
    let userAdd = { ...user, maNhom: "GP04" };
    // console.log(userAdmin.accessToken);

    if (
      user.maLoaiNguoiDung !== "KhachHang" &&
      user.maLoaiNguoiDung !== "QuanTri"
    ) {
      console.log("sai ma loai ng dùng");
    } else {
      Axios({
        method: "POST",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        data: userAdd,
        headers: {
          Authorization: `Bearer ${userAdmin.accessToken}`,
        },
      })
        .then((rs) => {
          Swal.fire("Tạo tài khoản thành công!", "Nhấn OK để thoát!", "success");
        })
        .catch((error) => {
          Swal.fire("Tạo tài khoản không thành công !", error.response.data, "error");
        });
    }
  };
  let renderTableUser = () => {
    if (state.data.length > 0) {
      return (
        <MaterialTable
          // components={{
          //   EditRow: props => (
          //     <div>
          //       <MTableEditRow {...props} />
          //     </div>
          //   )
          // }}
          options={{
            headerStyle: {
              backgroundColor: "#212121",
              color: "#FFF",
            },
          }}
          title="Dashboard"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  handleAddUser(newData);
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  handleEditUser(newData);
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  handleDeleteUser(oldData);
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      );
    }
  };
  // renderTableMovie = () => {};

  return (
    <div>
      <Grid container spacing={3}>
        {/* <Grid  className={classes.leftTable} item xs={12} sm={2}> 
          <div className={classes.leftUp}> 
            <FaceIcon style={{ color: pink[500], fontSize:50  }}/>
          </div>
          <hr className={classes.hrS}/>
          <div>
            
          </div>
        </Grid> */}
        <NavbarAdmin />
        <Grid className={classes.rightTable} item xs={12} sm={10}>
          {renderTableUser()}
        </Grid>
      </Grid>
      {/* {renderTableUser()} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listUser: state.userReducer.listUser,
  };
};

export default connect(mapStateToProps, null)(DashBoard);
