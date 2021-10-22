import React from 'react';
import { connect } from 'react-redux';
import { savePersonalEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',

    };
  }

  handleChange = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  }

  handleClick = () => {
    const { email } = this.state;
    const { setSavePersonalEmail,history } = this.props;
    setSavePersonalEmail(email);
    history.push('/carteira')
    

  }

  validationInput = () => {
    const { email } = this.state;
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z.]+$/i;
    const result = regex.test(email)
    return !result;
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <fieldset>
          <label
            htmlFor="email"
            >
            Email:
            <input
              type="text"
              data-testid="email-input" 
              id='email'
              value={ email }
              onChange={ this.handleChange }
              
            />
          </label>

          <label
            htmlFor="senha"
            >
            Senha:
            <input
              type="password"
              data-testid="password-input"
              id='senha'
              value={ senha }
              onChange={ this.handleChange }
            />
          </label>
          
          <button
            type="submit"
            disabled={ this.validationInput() || senha.length < 6 }
            onClick={ this.handleClick }
          >
            Entrar

          </button>

        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
   setSavePersonalEmail: (payload) => { dispatch(savePersonalEmail(payload)); },

});

export default connect(null, mapDispatchToProps)(Login);
