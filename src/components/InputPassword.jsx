import React, { Component } from 'react';

class InputPassword extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="password-input"
          placeholder="Insira sua senha"
        />
      </div>
    );
  }
}

export default InputPassword;
