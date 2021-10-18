import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SelectPagamento extends Component {
  render() {
    const { pagamento, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" value={ pagamento } onChange={ handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoDeCredito">Cartão de Crédito</option>
            <option value="cartaoDeDebito">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectPagamento.propTypes = {
  handleChange: PropTypes.func.isRequired,
  pagamento: PropTypes.string.isRequired,
};

export default SelectPagamento;
