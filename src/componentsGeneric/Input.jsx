import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, handleChange, id, name, value, TextLabel } = this.props;
    return (
      <label htmlFor={ id }>
        {TextLabel}
        <input
          type={ type }
          onChange={ handleChange }
          id={ id }
          name={ name }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  TextLabel: PropTypes.string.isRequired,
};

export default Input;
