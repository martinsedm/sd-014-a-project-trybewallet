import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  render() {
    const { label, name, onChange, value } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <input
          id={ name }
          name={ name }
          onChange={ onChange }
          type="text"
          value={ value }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormInput;
