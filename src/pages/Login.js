import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Buttons from '../Component/Buttons';
import { addEmail } from '../actions';

import Inputs from '../Component/Inputs';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleOnChancge = this.handleOnChancge.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  handleOnChancge({ target }) {
    const { name } = target;
    const value = target.value === 'checkbox' ? target.cheked : target.value;
    this.setState({
      [name]: value,
    });
  }

  clickButton() {
    const { history, dispatchEmail } = this.props;
    const { email } = this.state;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    // Regex para verificar caracteres ref. 'https://www.devmedia.com.br/iniciando-expressoes-regulares/6557'
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const validEmail = regexEmail.test(email);
    const SENHA_MINIMA = 6;
    return (
      <div>
        <Inputs
          type="email"
          name="email"
          value={ email }
          dataTestid="email-input"
          onChange={ this.handleOnChancge }
        />
        <Inputs
          type="password"
          name="senha"
          value={ senha }
          dataTestid="password-input"
          placeholder="Senha"
          onChange={ this.handleOnChancge }
          onKeyUp={ this.loginValidation }
        />
        <Buttons
          disabled={ !(senha.length >= SENHA_MINIMA && validEmail) }
          onClick={ this.clickButton }
          msg="Entrar"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (valueEmail) => dispatch(addEmail(valueEmail)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
