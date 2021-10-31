import React from 'react';
import PropTypes from 'prop-types';

export default function FormSelect({ label, name, onChange, options, value }) {
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

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};
