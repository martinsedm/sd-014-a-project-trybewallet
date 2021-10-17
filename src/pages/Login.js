import React from 'react';
import { connect } from 'react-redux';
import P from 'prop-types';
import { addEmailAC } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(email) {
    const { props: { addEmail, history } } = this;
    addEmail(email);
    history.push('/carteira');
  }

  render() {
    const MIN_PWD_LENGTH = 6;
    const { state: { password, email } } = this;
    const isValidPwd = password.length >= MIN_PWD_LENGTH;
    /* Regex tirada do site: */
    /* https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/ */
    const isValidEmail = email.match(/\S+@\S+\.\S+/);
    return (
      <form>
        <Input
          type="text"
          onChange={ this.handleChange }
          testId="email-input"
          value={ email }
          name="email"
          label="Email"
        />
        <Input
          type="password"
          onChange={ this.handleChange }
          testId="password-input"
          value={ password }
          name="password"
          label="Senha"
        />
        <Button
          type="button"
          onClick={ () => this.handleClick(email) }
          content="Entrar"
          isDisabled={ !isValidPwd || !isValidEmail }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(addEmailAC(email)),
});

Login.propTypes = {
  addEmail: P.func.isRequired,
  history: P.objectOf(P.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
