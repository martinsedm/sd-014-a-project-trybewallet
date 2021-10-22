import React from 'react';

class Login extends React.Component {
  render() {
    function inputGenerator(type, name) {
      return (
        <label htmlFor={ type }>
          {`${name}: `}
          <input
            id={ type }
            name={ type }
            type={ type }
            data-testid={ `${type}-input` }
          />
        </label>
      );
    }
    return (
      <fieldset>
        { inputGenerator('email', 'Email') }
        { inputGenerator('password', 'Senha') }
        <button type="submit">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
