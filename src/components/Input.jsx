import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { htmlFor, label, onChange, type, value } = this.props;
    return (
      <p>
        <label htmlFor={ htmlFor }>
          {label}
          <input
            id={ htmlFor }
            name={ htmlFor }
            onChange={ onChange }
            type={ type }
            value={ value }
          />
        </label>
      </p>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
