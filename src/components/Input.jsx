import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, onChange, name, type, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ type }
            id={ name }
            data-testid={ `${name}-input` }
            value={ value }
            name={ name }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
