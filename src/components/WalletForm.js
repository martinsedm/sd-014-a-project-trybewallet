import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class WalletForm extends React.Component {
  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  renderCurrencyOptions() {
    const { currencies } = this.props;
    return currencies.filter((currency) => currency !== 'USDT')
      .map(((currency) => (
        <option key={ currency } value={ currency }>{currency}</option>
      )));
  }

  renderInputs() {
    return (
      <fieldset>
        <label htmlFor="expense-value">
          Valor
          <input
            type="text"
            id="expense-value"
          />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input
            type="text"
            id="expense-description"
          />
        </label>
      </fieldset>
    );
  }

  renderSelects() {
    return (
      <fieldset>
        <label htmlFor="expense-currency">
          Moeda
          <select type="text" id="expense-currency">
            { this.renderCurrencyOptions() }
          </select>
        </label>
        <label htmlFor="expense-payment">
          Método de pagamento
          <select
            type="text"
            id="expense-payment"
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-tag">
          Tag
          <select
            type="text"
            id="expense-tag"
          >
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="travel">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </fieldset>
    );
  }

  render() {
    return (
      <form>
        { this.renderInputs() }
        { this.renderSelects() }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchCurrencies()),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
