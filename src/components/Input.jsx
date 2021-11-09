import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { label, name, value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <input
            id={ name }
            name={ name }
            value={ value }
            type="text"
            onChange={ handleChange }
          />
        </label>

      </div>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
