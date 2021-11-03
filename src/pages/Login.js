import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { setUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      const { password, email } = this.state;
      const MIN_KEY_LENGTH = 6;
      const VALID_EMAIL = email.includes('@' && '.com');
      console.log(VALID_EMAIL);
      if (password.length >= MIN_KEY_LENGTH && VALID_EMAIL) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    // const { savedEmail } = this.props;
    return (
      <form>
        <Input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          name="button"
          disabled={ isDisabled }
          label="Entrar"
          onClick={ this.onSubmitForm }
        />
      </form>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (state) => dispatch(setUser(state.email)),
});
const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
