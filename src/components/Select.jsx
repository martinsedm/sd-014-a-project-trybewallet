import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    const { label, name, htmlFor, options, onChange } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        { label }
        {' '}
        <select
          name={ name }
          onChange={ onChange }
          id={ htmlFor }
        >
          {options.map((currency) => (
            <option key={ currency } value={ currency }>{currency}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
