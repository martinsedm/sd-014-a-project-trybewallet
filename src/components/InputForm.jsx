import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputForm extends Component {
  render() {
    const { name, value, change } = this.props;
    const type = (name === 'value') ? 'number' : 'text';
    const innerHTML = (name === 'value') ? 'Valor' : 'Descrição';
    return (
      <label htmlFor={ name }>
        { `${innerHTML}:` }
        <input
          type={ type }
          name={ name }
          id={ name }
          value={ value }
          onChange={ change }
        />
      </label>
    );
  }
}

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.func.isRequired,
};
