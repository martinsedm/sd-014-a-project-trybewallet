import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  render() {
    const { label, name, onChange, options, value } = this.props;

    return (
      <label htmlFor={ name }>
        {label}
        <select id={ name } name={ name } onChange={ onChange } value={ value }>
          {options.map((option) => (
            <option key={ option } value={ option }>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default FormSelect;
