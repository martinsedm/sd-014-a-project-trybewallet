import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, onChange, name, type } = this.props;
    const { children } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          {children}
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
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
