import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectMethod extends Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="select-method">
        Método de pagamento
        <select name={ name } id="select-method" onChange={ onChange } value={ value }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }
}

SelectMethod.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectMethod;
