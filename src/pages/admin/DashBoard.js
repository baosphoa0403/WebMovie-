import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/userAction";
class DashBoard extends Component {
    renderTable = () => {
        return this.props.listUser.map((item, index)=>{
             return (
                 <tr key={index}>
                     <td>{index+1}</td>
                     <td>{item.hoTen}</td>
                     <td>{item.email}</td>
                     <td>{item.taiKhoan}</td>
                     <td>{item.matKhau}</td>
                     <td>{item.soDt}</td>
                     <td>{item.maLoaiNguoiDung}</td>
                     <td><button className="btn btn-danger">Xoá</button>
                     <td><button className="btn btn-success">Sửa</button></td></td>
                     
                 </tr>
             )
        })
    }
  render() {
      console.log(this.props.listUser);
      
    return (
      <div>
        {/* <h3>DashBoard</h3> */}
        <div className="wrapper">
          {/* Sidebar Holder */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>DashBoard</h3>
              <strong>BS</strong>
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <a href="#homeSubmenu">
                  <i className="fa fa-home" />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-briefcase" />
                  About
                </a>
                <a href="#pageSubmenu">
                  <i className="fa fa-files-o" />
                  Pages
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-link" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-paperclip" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-paper-plane" />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Page Content Holder */}
          <div id="content">
            
            <div className="container">
              <div className="card text-center">
                {/* Header */}
                <div className="card-header myCardHeader">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="text-left text-primary font-weight-bold">
                        List User
                      </h3>
                    </div>
                    <div className="col-md-6 text-right">
                      <button
                        className="btn btn-primary btnThem"
                        id="btnThemNV"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Thêm nhân viên
                      </button>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tên nhân viên"
                          id="searchName"
                        />
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="btnTimNV">
                            <i className="fa fa-search" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table table-bordered table-hover myTable">
                    <thead className="text-primary">
                      <tr>
                        <th className="nowrap">
                          <span className="mr-1">STT</span>
                          <i className="fa fa-arrow-up" id="SapXepTang" />
                          <i className="fa fa-arrow-down" id="SapXepGiam" />
                        </th>
                        <th>Họ Tên</th>
                        <th>Email</th>
                        <th>Tài Khoản</th>
                        <th>Mật Khẩu</th>
                        <th>Số Điện Thoại</th>
                        <th>Mã Loại Người Dùng</th>
                        <th>
                          <em className="fa fa-cog" />
                        </th>
                      </tr>
                    </thead>
                    <tbody id="tableDanhSach">
                          {this.renderTable()}
                    </tbody>
                  </table>
                </div>
                {/* Footer */}
                <div className="card-footer myCardFooter">
                  <nav>
                    <ul
                      className="pagination justify-content-center"
                      id="ulPhanTrang"
                    ></ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <header className="head-form mb-0">
                <h2 id="header-title">Log In</h2>
              </header>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-user" />
                        </span>
                      </div>
                      <input
                        type="msnv"
                        name="msnv"
                        className="form-control input-sm"
                        placeholder="Mã số nhân viên"
                        id="maSV"
                      />
                    </div>
                    <span className="sp-thongbao" id="tbMaNV" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-address-book" />
                        </span>
                      </div>
                      <input
                        type="name"
                        name="name"
                        className="form-control input-sm"
                        placeholder="Họ và tên"
                        id="tenSV"
                      />
                    </div>
                    <span className="sp-thongbao" id="tbTen" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="form-control input-sm"
                        placeholder="Email"
                        id="emailSV"
                      />
                    </div>
                    <span className="sp-thongbao" id="tbEmail" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key" />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control input-sm"
                        placeholder="Mật khẩu"
                        id="passwordSV"
                      />
                    </div>
                    <span className="sp-thongbao" id="tbMatKhau" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-calendar" />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="ngaylam"
                        className="form-control"
                        placeholder="Ngày làm"
                        id="datepicker"
                      />
                    </div>
                    <span className="sp-thongbao" id="tbNgay" />
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-briefcase" />
                        </span>
                      </div>
                      <select className="form-control" id="chucvu">
                        <option>Chọn chức vụ</option>
                        <option>Sếp</option>
                        <option>Trưởng phòng</option>
                        <option>Nhân viên</option>
                      </select>
                    </div>
                    <span className="sp-thongbao" id="tbChucVu" />
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer" id="modal-footer">
                <button
                  id="btnThemNV"
                  type="button"
                  className="btn btn-success"
                >
                  Thêm người dùng
                </button>
                <button
                  id="btnCapNhat"
                  type="button"
                  className="btn btn-success"
                >
                  Cập nhật
                </button>
                <button
                  id="btnDong"
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getListUser();
  }
}
const mapDisptachToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(action.actGetListUserAPI());
    }
  };
};
const mapStateToProps = state => {
    return {
        listUser: state.userReducer.listUser
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(DashBoard);
