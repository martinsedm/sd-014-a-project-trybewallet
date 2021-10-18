import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const { setCurrencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor :
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="Moeda">
          Moeda :
          <select id="Moeda">
            { setCurrencies.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento">
            <option value="">Dinheiro</option>
            <option value="">Cartão de crédito</option>
            <option value="">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag :
          <select id="Tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>
        <label htmlFor="Descrição">
          Descrição :
          <input type="text" name="Descrição" id="Descrição" />
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  setCurrencies: state.wallet.currencies,
});

Input.propTypes = {
  setCurrencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(Input);
