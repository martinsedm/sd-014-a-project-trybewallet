import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, value, type, onChange, textlabel } = this.props;
    return (
      <label htmlFor={ id }>
        { textlabel }
        <input
          id={ id }
          value={ value }
          type={ type }
          name={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  textlabel: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
