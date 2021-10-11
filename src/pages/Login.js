import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VVNFUl9FTUFJTA } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.aGFuZGxlQ2hhbmdl = this.aGFuZGxlQ2hhbmdl.bind(this);
    this.b25DbGlja0J0bg = this.b25DbGlja0J0bg.bind(this);
  }

  b25DbGlja0J0bg() {
    const { history, VXNlclJlZHVjZXI } = this.props;
    const { email } = this.state;
    VXNlclJlZHVjZXI(email);
    history.push('/carteira');
  }

  dmFsaWRhdGVFbWFpbA() {
    const { email } = this.state;
    const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return re.test(String(email).toLowerCase());
  }

  aGFuZGxlQ2hhbmdl({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const TUlOX1BBU1NXT1JEX0xFTkdUSA = 6;
    return (
      <div className="body">
        <div className="container">
          <div className="form-container sign-in-container">
            <div className="main-container">
              <h1>Sign In</h1>
              <input
                data-testid="email-input"
                onChange={ this.aGFuZGxlQ2hhbmdl }
                type="text"
                name="email"
                value={ email }
                placeholder="Insira seu email"
                className="input-login"
              />
              <input
                data-testid="password-input"
                onChange={ this.aGFuZGxlQ2hhbmdl }
                type="password"
                name="password"
                value={ password }
                placeholder="Insira sua senha"
                className="input-login"
              />
              <button
                type="button"
                disabled={ !this.dmFsaWRhdGVFbWFpbA()
                  || password.length < TUlOX1BBU1NXT1JEX0xFTkdUSA }
                onClick={ this.b25DbGlja0J0bg }
                className="button-login"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  VXNlclJlZHVjZXI: (state) => dispatch(VVNFUl9FTUFJTA(state)) });

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  VXNlclJlZHVjZXI: PropTypes.func.isRequired,
};
