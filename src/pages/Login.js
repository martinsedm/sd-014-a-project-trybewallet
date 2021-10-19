import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { sendEmail } = this.props;
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    const REGEX_VALID_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    /* Encontrado em: https://stackoverflow.com/questions/647282/is-there-an-onselect-event-or-equivalent-for-html-select */
    return (
      <div className="flex flex-col justify-center items-center bg-gray-200 h-screen">
        <div
          className="flex flex-col h-auto w-auto p-10
          items-center border-solid border-2 border-gray-500 rounded"
        >
          <input
            className="mb-4 text-center px-10"
            placeholder="Email"
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            className="mb-8 text-center px-10"
            placeholder="Senha"
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              className="px-20 py-2 rounded bg-green-400 font-bold
              opacity-50 hover:opacity-100 duration-300"
              disabled={ password.length < MIN_LENGTH
                || !(REGEX_VALID_EMAIL.test(email)) }
              type="button"
              onClick={ () => sendEmail(email) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { sendEmail: (payload) => dispatch(setEmail(payload)) }
);

export default connect(null, mapDispatchToProps)(Login);
