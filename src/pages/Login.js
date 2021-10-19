import React from 'react'; // refazendo tudo sem desespero pra aprender
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputLogin from '../components/InputLogin';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { changeInput, history } = this.props;
    changeInput(email);
    history.push('./carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <InputLogin
          label="E-mail"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Digite seu e-mail"
        />
        <InputLogin
          label="Password"
          name="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Digite sua senha"
        />
        <Button onClick={ this.handleClick } />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeInput: (state) => dispatch(SAVE_EMAIL(state)),
});

Login.propTypes = {
  changeInput: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
