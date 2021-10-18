import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { addUserAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      // login: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkform = this.checkform.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    // const { password } = this.state;
    // const num = 6;
    // const form = document.getElementById('form-login');
    // if (form.checkValidity() && password.length >= num) {
    //   this.setState({
    //     disableButton: false,
    //   });
    // } else {
    //   this.setState({
    //     disableButton: true,
    //   });
    // }
  }

  handleClick() {
    const { email, password } = this.state;
    const { addUser, history } = this.props;
    if (email === 'alguem@email.com' && password === '123456') {
      // this.setState({
      //   login: true,
      // });
      addUser(email);
      history.push('/carteira');
    }
  }

  checkform() {
    const { password } = this.state;
    const num = 6;
    const form = document.getElementById('form-login');
    if (form != null && form.checkValidity() && password.length >= num) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    // if (login) {
    //   return (<Redirect to="/carteira" />);
    // }
    const disableButton = this.checkform();
    return (
      <section>
        <h2>TrybeWallet</h2>
        <form name="login" id="form-login">
          <fieldset>
            <legend>Entre com Email e senha</legend>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                data-testid="email-input"
                value={ email }
                required
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                id="password"
                name="password"
                minLength="6"
                data-testid="password-input"
                value={ password }
                required
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ disableButton }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({

  addUser: (email) => dispatch(addUserAction(email)),

});

export default connect(null, mapDispatchToProps)(Login);
