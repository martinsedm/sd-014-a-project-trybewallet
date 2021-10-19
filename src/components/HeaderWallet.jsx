import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormsAddexpense from './FormsAddExpense';

class HeaderWallet extends Component {
  componentDidMount() {
    const { addCurrenciesApi } = this.props;
    addCurrenciesApi();
  }

  TotalExpensesExchange() {
    const { getExpenses } = this.props;
    let soma = 0;
    getExpenses.forEach(({ value, currency, exchangeRates }) => {
      const exchangeBRL = Number(value) * Number(exchangeRates[currency].ask);
      soma += exchangeBRL;
    });
    return soma;
  }

  render() {
    const {
      addCurrenciesApi,
      addExpense, getEmail,
      getCurrencies,
      getExpenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`seu email: ${getEmail}`}</p>
        <p data-testid="total-field">
          { this.TotalExpensesExchange() }
          <span data-testid="header-currency-field">BRL </span>
        </p>
        <FormsAddexpense
          updateCurrencies={ addCurrenciesApi }
          getCurrencies={ getCurrencies }
          getExpenses={ getExpenses }
          addExpense={ addExpense }
        />
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  addCurrenciesApi: PropTypes.func.isRequired,
  getCurrencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default HeaderWallet;
