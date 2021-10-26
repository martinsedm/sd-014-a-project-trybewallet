import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { id, value, label, handleChange, type } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          name={ id }
          onChange={ handleChange }
          value={ type === 'number' ? value : `${value}` }
          id={ id }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
