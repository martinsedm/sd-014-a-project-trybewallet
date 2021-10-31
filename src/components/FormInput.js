import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput({ label, name, onChange, value }) {
  return (
    <label htmlFor={ name }>
      {label}
      <input
        id={ name }
        name={ name }
        onChange={ onChange }
        type="text"
        value={ value }
      />
    </label>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
