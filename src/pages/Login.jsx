import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionFunc as funcAction } from '../actions';

class Login extends Component {
  // eventHandler = (event) => {
  //   const { value } = event.target;

  //   this.setState({
  //     name: value,
  //   });
  // }

  // logging() {
  //   let { disabled } = this.props;
  //   const senha = document.querySelector('#senha').value;
  //   const email = document.querySelector('#email').value;
  //   if (email === 'tryber@teste.com' && senha === '123456') {
  //     disabled = true;
  //   } else {
  //     disabled = false;
  //   }
  // }

  render() {
    // const { user } = this.props;
    // const { value } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="loginArea">
            Email:
            <input
              type="textarea"
              // value={ value }
              onChange={ this.eventHandler }
              data-testid="email-input"
              id="email"

            />
          </label>

          <label htmlFor="pwdArea">
            Password:
            <input
              type="textarea"
              // value={ value }
              // onChange={ this.eventHandler }
              data-testid="password-input"
              id="password"
            />
          </label>

          <button
            type="button"
            // onClick={ onClick }
            data-testid="login-submit-button"
            disabled
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

// const VALID_EMAIL = 'alguem@email.com';
// const VALID_PASSWORD = '123456';

const mapStateToProps = (state) => ({
  user: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  test: (func, func2) => dispatch(funcAction(func, func2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
