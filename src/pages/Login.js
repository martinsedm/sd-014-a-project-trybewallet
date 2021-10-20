import  React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <>
        <form>
          <label for="email">
            <input
              type="email"
              id="email"
              name="email"
              value=""
              data-testid="email-input"
            />
          </label>
          <label for="password">
            <input
              type="password"
              id="password"
              name="password"
              value=""
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            // onClick={this.}
            // disabled={this.props.}
          >
            Entrar
          </button>
        </form>
      </ >
    );
  }
}
