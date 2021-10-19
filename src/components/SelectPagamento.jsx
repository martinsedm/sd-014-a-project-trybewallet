import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectPagamento extends Component {
  render() {
    const { method, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="method"
            value={ method }
            onChange={ handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectPagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default SelectPagamento;
