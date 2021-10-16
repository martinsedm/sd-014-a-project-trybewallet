import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, label, onChange } = this.props;
    return (
      <label htmlFor={ label }>
        { label }
        :
        <input
          type={ type }
          name={ name }
          onChange={ onChange }
          id={ label }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
