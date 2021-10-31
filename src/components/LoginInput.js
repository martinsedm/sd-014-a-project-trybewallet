import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput({ name, onChange, placeholder, type, value }) {
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

LoginInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
