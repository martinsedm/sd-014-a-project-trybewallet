import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputEmail extends Component {
  render() {
    const { name, value, onChange } = this.props;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name={ name }
          value={ value }
          onChange={ onChange }
          placeholder="Insira seu e-mail"
        />
      </div>
    );
  }
}

InputEmail.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
InputEmail.defaultProps = {
  value: '',
  name: '',
  onChange: null,
};

export default InputEmail;
