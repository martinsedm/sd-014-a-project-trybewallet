import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, onChange, type, value, labelText } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          type={ type }
          onChange={ onChange }
          id={ id }
          name={ id }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
