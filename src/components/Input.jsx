import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, desc, change, value } = this.props;
    return (
      <label htmlFor={ name }>
        { desc }
        <input
          type={ type }
          name={ name }
          id={ name }
          onChange={ change }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  change: PropTypes.func,
  desc: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default Input;
