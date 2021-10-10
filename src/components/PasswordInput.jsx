import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PasswordInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="password"
        name="password"
        value={ value }
        onChange={ onChange }
        placeholder="Senha"
        className="form-control"
        data-testid="password-input"
      />
    );
  }
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
