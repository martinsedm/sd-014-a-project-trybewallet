import React, { Component } from 'react';
import '../styles/login.css';

export default class LoginComplement extends Component {
  render() {
    return (
      <div className="clearfix">
        <label
          htmlFor="remember-password"
          className="pull-left checkbox-inline"
        >
          <input
            type="checkbox"
            id="remember-password"
            name="remember-password"
            className="pull-left-item"
          />
          <p>
            Remember me
          </p>
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
