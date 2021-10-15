import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor='email'>
          Email:  
        <input 
          type='email'
          data-testid="email-input"
          name='email'
          />
        </label>
        <label htmlFor='password'>
          Senha: 
        <input 
          type='text'
          data-testid="password-input"
          name='password'
          />
        </label>
        <button>Entrar</button>
      </form>
    );
  }
}

export default Login;
