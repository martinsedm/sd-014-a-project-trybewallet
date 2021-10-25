import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { setUserData as setUserAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validate(email, password) {
    const MIN_PASS_LENGTH = 5;
    return (/\S+@\S+\.\S+/).test(email) && password.length > MIN_PASS_LENGTH;
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { setUserData, history } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            setUserData(email);
            this.setState({
              email: '',
              password: '',
            }, history.push('/carteira'));
          } }
        >
          <Input
            htmlFor="email"
            placeholder="Insert Email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <Input
            htmlFor="password"
            placeholder="Insert Password"
            value={ password }
            handleChange={ this.handleChange }
            type="password"
          />
          <Button
            type="submit"
            text="Entrar"
            disabled={ !this.validate(email, password) }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUserData: (payload) => dispatch(setUserAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
