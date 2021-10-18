import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ name, onChange, placeholder, type, value }) {
  return (
    <input
      data-testid={ `${name}-input` }
      name={ name }
      onChange={ onChange }
      placeholder={ placeholder }
      type={ type }
      value={ value }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
