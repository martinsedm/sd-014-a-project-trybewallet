import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputPassword extends Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <div>
        <input
          type="password"
          data-testid="password-input"
          placeholder="Insira sua senha"
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </div>
    );
  }
}

InputPassword.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

InputPassword.defaultProps = {
  value: '',
  name: '',
  onChange: null,
};

export default InputPassword;
