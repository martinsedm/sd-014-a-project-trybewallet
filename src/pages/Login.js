import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { gravaEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailValido: 'alguem@email.com',
      email: '',
      password: '',
      desabilitador: true,
    };
    this.habilitador = this.habilitador.bind(this);
    this.login = this.login.bind(this);
  }

  habilitador(event) {
    const MAXLENGTH = 4;
    const { email, password, emailValido } = this.state;
    if (email === emailValido && password.length > MAXLENGTH) {
      this.setState({ desabilitador: false });
    } else {
      this.setState({ desabilitador: true });
    }
    this.setState({ [event.target.type]: event.target.value });
  }

  login() {
    const { changerMail, history } = this.props;
    const { email } = this.state;
    changerMail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, desabilitador } = this.state;
    return (
      <main>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.habilitador }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.habilitador }
        />
        <button
          type="submit"
          disabled={ desabilitador }
          onClick={ this.login }
        >
          Entrar
        </button>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  changerMail: (user) => dispatch(gravaEmail(user)),
});
Login.propTypes = {
  changerMail: PropTypes.func.isRequired,
  history: PropTypes.objectOf.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
