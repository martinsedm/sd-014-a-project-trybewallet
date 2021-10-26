import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, name, onChange, labelText, type } = this.props;
    return (
      <div>
        <label htmlFor={ `expense-${name}` }>
          {labelText}
          <input
            type={ type }
            id={ `expense-${name}` }
            name={ name }
            required
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string,
  value: PropTypes.string,
}.isRequire;

Input.defautProps = {
  type: 'text',
};
