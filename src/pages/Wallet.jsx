import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import fetchCurrencyApi from '../services/currencyAPI';
import FormAddExpense from '../components/FormAddExpense';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      currency: 'BRL',
      currencies: [],

    };

    this.fetchCurrencyApi = this.fetchCurrencyApi.bind(this);
    this.getFilterCurrencies = this.getFilterCurrencies.bind(this);
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencyApi();
  }

  getFilterCurrencies(response) {
    const arrayCurrency = Object.keys(response);
    const filterCurrency = arrayCurrency.filter((cur) => cur !== 'USDT');
    return (filterCurrency);
  }

  fetchCurrencyApi() {
    fetch('https://economia.awesomeapi.com.br/json/all').then((response) => {
      response.json()
        .then((json) => this.setState({ currencies: this.getFilterCurrencies(json) }));
    });
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const currencyPrice = exchangeRates[currency].ask;
      return value * currencyPrice + acc;
    }, 0);
    this.setState({
      totalExpense: (sum).toFixed(2),
    });
  }

  render() {
    const { savedEmail } = this.props;
    const { totalExpense, currency, currencies } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <h3 data-testid="email-field">{`Email: ${savedEmail}`}</h3>
          <h3 data-testid="total-field">{`Despesa Total: ${totalExpense}`}</h3>
          <h3 data-testid="header-currency-field">{currency}</h3>
        </header>
        <FormAddExpense currencies={ currencies } sum={ this.sumExpenses } />
        <TableExpense />
      </div>
    );
  }
}

Wallet.propTypes = {
  savedEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  savedEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
