import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, onChange, name, type = 'text', label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {label}
          <input
            type={ type }
            value={ value }
            onChange={ onChange }
            name={ name }
            id={ name }
            data-testid={ `${name}-input` }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
