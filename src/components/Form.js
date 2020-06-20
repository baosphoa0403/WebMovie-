import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../redux/action/userAction";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import Axios from "axios";

const signUpUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required"),
  matKhau: yup.string().required("* Field is required"),
  hoTen: yup.string().required("* Field is required"),
  email: yup
    .string()
    .required("* Field is required")
    .email("* Email is invalid"),
  soDT: yup
    .string()
    .required("* Field is required")
    .matches(/^[0-9]+$/)
    .required("Phone is invalid")
    .min(8)
    .max(10),
});
const signInUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("* Field is required"),
  matKhau: yup.string().required("* Field is required"),
});
class FormSignIn extends Component {
  handleOnlogin = (values) => {
    this.props.checkLoginUser(values, this.props.history);
  };
  handleSubmit = (values) => {
    console.log(values);
    //   callAPI
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: values,
    })
      .then((rs) => {
        Swal.fire("Đăng kí thành công !", "Nhấn OK để thoát!", "success").then(
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((error) => {
        console.log({ ...error.response.data });
        Swal.fire("Đăng kí không thành công", error.response.data, "error");
      });
  };
  render() {
    return (
      <div className="login-admin">
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="sign-in"
              defaultChecked
            />
            <label htmlFor="tab-1" className="tab">
              Sign In
            </label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                }}
                validationSchema={signInUserSchema}
                onSubmit={this.handleOnlogin}
                render={(formilProps) => (
                  <Form>
                    <div className="sign-in-htm">
                      <div className="group">
                        <label htmlFor="user" className="label">
                          Username
                        </label>
                        <Field
                          name="taiKhoan"
                          type="text"
                          className="input"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="taiKhoan">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Password
                        </label>
                        <Field
                          name="matKhau"
                          type="password"
                          className="input"
                          data-type="password"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="matKhau">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <input
                          id="check"
                          type="checkbox"
                          className="check"
                          defaultChecked
                        />
                        <label htmlFor="check">
                          <span className="icon" /> Keep me Signed in
                        </label>
                      </div>
                      <div className="group">
                        <button
                          className="btn btn-primary"
                          style={{ width: 400, height: 40 }}
                        >
                          Submit
                        </button>
                      </div>
                      <div className="hr" />
                      <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                      </div>
                    </div>
                  </Form>
                )}
              />
              {/* sign up */}
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  hoTen: "",
                  email: "",
                  soDT: "",
                  maNhom: "GP01",
                }}
                validationSchema={signUpUserSchema}
                onSubmit={this.handleSubmit}
                render={(formilProps) => (
                  <Form>
                    <div className="sign-up-htm">
                      <div className="group">
                        <label htmlFor="user" className="label">
                          Username
                        </label>
                        <Field
                          id="user"
                          type="text"
                          className="input"
                          name="taiKhoan"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="taiKhoan">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Password
                        </label>
                        <Field
                          id="pass"
                          type="password"
                          className="input"
                          data-type="password"
                          name="matKhau"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="matKhau">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Name
                        </label>
                        <Field
                          id="pass"
                          type="text"
                          className="input"
                          name="hoTen"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="hoTen">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Email Address
                        </label>
                        <Field
                          id="pass"
                          type="text"
                          className="input"
                          name="email"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="email">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <label htmlFor="pass" className="label">
                          Phone Number
                        </label>
                        <Field
                          id="phone"
                          type="number"
                          className="input"
                          name="soDT"
                          onChange={formilProps.handleChange}
                        />
                        <ErrorMessage name="soDT">
                          {(msg) => <div className="text-danger">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div className="group">
                        <button
                          className="btn btn-primary"
                          style={{ width: 385, height: 40 }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkLoginUser: (user, history) => {
      dispatch(action.actCheckSignInUser(user, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSignIn);
