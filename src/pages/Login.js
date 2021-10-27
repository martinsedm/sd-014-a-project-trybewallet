import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          email
          <input
            type="email"
            // name={ email }
            data-testid="email-input"
            id="email"
            // onChange={ handleChange }
          />
        </label>
        <label htmlFor="senha">
          senha
          <input
            type="password"
            // name={ email }
            data-testid="password-input"
            id="senha"
            // onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          // onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
