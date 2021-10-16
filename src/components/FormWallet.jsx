import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FormWallet extends Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda">
            <option value="">Options</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tago">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

// FormWallet.propTypes = {
//   type: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   value: PropTypes.string,
//   name: PropTypes.string,
//   id: PropTypes.string,
//   onChange: PropTypes.func,
// };

// FormWallet.defaultProps = {
//   label: '',
//   value: '',
//   name: '',
//   id: '',
//   onChange: null,
// };

export default FormWallet;
