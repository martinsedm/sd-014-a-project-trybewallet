import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { name, label, options, onChange } = this.props;
    return (
      <label htmlFor={ label }>
        { label }
        :
        <select
          name={ name }
          onChange={ onChange }
          id={ label }
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
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
