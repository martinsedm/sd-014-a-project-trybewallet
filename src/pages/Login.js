import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // enable: false,
    };
    this.redirectPage = this.redirectPage.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  redirectPage() {
    const { history, saveUserInfo } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    saveUserInfo(email);
  }

  saveInfo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    // https://www.youtube.com/watch?v=rejqIp7ExXA&ab_channel=Ot%C3%A1vioMiranda
    const validate = /\S+@\S+\.\S+/;
    const MAGIC_NUMBER = 6;
    return (
      <form>
        <input
          onChange={ this.saveInfo }
          type="email"
          data-testid="email-input"
          value={ email }
          name="email"
        />
        <input
          onChange={ this.saveInfo }
          value={ password }
          type="password"
          data-testid="password-input"
          name="password"
        />
        <button
          onClick={ () => this.redirectPage() }
          type="button"
          name="entrar"
          disabled={ !(validate.test(email) && password.length >= MAGIC_NUMBER) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  saveUserInfo: (payload) => dispatch(saveUser(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  saveUserInfo: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
