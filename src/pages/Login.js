import React from 'react';

function Login() {
    return (
      <div>
        <label for="email-input">Email:
          <input type="email" data-testid="email-input" id="email-input" />
        </label>
        <label for="password-input">Password:
          <input type="password" data-testid="password-input" id="password-input" />
        </label>
        <button type='button'>Entrar</button>
      </div>
    );
};

export default Login;
