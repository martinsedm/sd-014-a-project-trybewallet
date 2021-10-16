import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { label, type, name, htmlFor, onChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        :
        <input
          type={ type }
          name={ name }
          onChange={ onChange }
          id={ htmlFor }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
