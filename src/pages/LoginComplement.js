import React, { Component } from 'react';
import '../styles/login.css';

export default class LoginComplement extends Component {
  render() {
    return (
      <div>
        <label
          htmlFor="remember-password"
          className="pull-left checkbox-inline"
        >
          <div className="input-group-prepend">
            <div className="input-group-text" id="btnGroupAddon">Remember me</div>
          </div>
          <input
            type="checkbox"
            id="remember-password"
            name="remember-password"
            className="pull-left-item checkbox-inline"
          />
        </label>
        <a
          href="http://localhost:3000/"
          className="pull-right"
        >
          Forgot Password?
        </a>
      </div>
    );
  }
}
