import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(theme => ({
  h4: {
    textAlign: "center"
  }
}));

export default function Modal() {
  const classes = useStyle();
  const [values, setValues] = useState({
    hoTen: "",
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP09",
    maLoaiNguoiDung: "",
    
  });
  let handleOnchange = event => {
   let {name, value} = event.target
    setValues({
      ...values,
      [name]: value
    })    
  };
  return (
    <div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className={classes.h4}>Add user</h4>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div>
                <div className="form-group">
                  <label htmlFor="hoTen">Họ Tên: </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Họ Tên"
                    id="hoTen"
                    onChange={handleOnchange}
                    name="hoTen"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                    onChange={handleOnchange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Tài khoản:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Tài khoản"
                    id="email"
                    onChange={handleOnchange}
                    name="taiKhoan"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Mật Khẩu:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter mật khẩu"
                    id="email"
                    onChange={handleOnchange}
                    name="matKhau"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Số điện thoại :</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter số điện thoại"
                    id="email"
                    onChange={handleOnchange}
                    name="soDt"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Mã loại người dùng:</label>
                  <select name="cars" class="custom-select"
                   onChange={handleOnchange}
                   name="maLoaiNguoiDung"
                  >
                    <option value="volvo">KhachHang</option>
                    <option value="fiat">QuanTri</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
