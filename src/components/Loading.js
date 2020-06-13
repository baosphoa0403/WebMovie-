import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div class="loading">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="base">
            <span></span>
            <div class="face"></div>
          </div>
        </div>
        <div class="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Redirecting</h1>
      </div>
    );
  }
}
