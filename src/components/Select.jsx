import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { id, value, onChange, options, textlabel } = this.props;
    return (
      <label htmlFor={ id }>
        { textlabel }
        <select
          id={ id }
          value={ value }
          name={ id }
          onChange={ onChange }
        >
          { options() }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  textlabel: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  options: PropTypes.func,
}.isRequired;
