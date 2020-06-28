import React, { Component } from "react";
import * as action from "../../redux/action/userAction"
import {connect} from "react-redux";
class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    }
  }
  handleOnChange = (event) => {
    let {name, value} = event.target;
    this.setState({
      [name]: value
    });
     
  }
  handleOnlogin = (event) => {
      event.preventDefault();
      this.props.checkLoginAdmin(this.state, this.props.history);

  }
  render() {
    return (
      <div className ="login-admin">
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
              {/* Sign Up */}
            </label>
            <div className="login-form">
              <form onSubmit={this.handleOnlogin}>
              <div className="sign-in-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input name="taiKhoan" type="text" className="input" onChange={this.handleOnChange} />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    name="matKhau"
                    type="password"
                    className="input"
                    data-type="password"
                    onChange={this.handleOnChange}
                  />
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
                  <input
                    type="submit"
                    className="button"
                    defaultValue="Sign In"
                  />
                </div>
                <div className="hr" />
                <div className="foot-lnk">
                  <a href="#forgot">Forgot Password?</a>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const  mapDispatchToProps = (dispatch) =>{
  return {
    checkLoginAdmin: (user, history) => {
      dispatch(action.actCheckSignInAdmin(user, history))
    }
  }
}
export default connect(null, mapDispatchToProps)(Admin);
