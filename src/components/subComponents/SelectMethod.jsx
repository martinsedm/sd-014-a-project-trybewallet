import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectMethod extends Component {
  render() {
    const { text, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <select name={ name } id={ name } onChange={ onChange }>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartão de cŕedito">Cartão de crédito</option>
          <option value="cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SelectMethod;
