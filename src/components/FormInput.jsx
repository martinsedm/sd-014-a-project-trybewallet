import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { name, value, onChange, label, type } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {`${label}:`}
          <input
            type={ type }
            name={ name }
            id={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

FormInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
}.isRequired;

export default FormInput;
