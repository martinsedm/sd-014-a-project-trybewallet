import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import { fetchCurrencies, expenseThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currency } = props;
    this.state = {
      email,
      total: 0,
      currency,
      form: {
        value: 0,
        description: '',
        currency: '',
        currencies: [],
        method: '',
        tag: '',
        categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
        payment: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate(previusProps, previusState) {
    const { currencies, expenses } = this.props;
    const { currencyExchange } = this.state;
    if (previusProps.currencies.length !== currencies.length) {
      this.stateUpdate('currencies', currencies);
    }
    if ((previusProps.expenses.length !== expenses.length)
      || (previusState.currencyExchange !== currencyExchange)) {
      this.calculateSum(expenses);
    }
  }

  calculateSum(expenses) {
    const { currencyExchange } = this.state;
    const total = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      const valueReal = Math.round(100 * Number(value) * Number(ask)) / 100;
      if (currencyExchange !== 'BRL') {
        const { ask: askAgain } = exchangeRates[currencyExchange];
        const valueAnother = Math.round(100 * (valueReal / Number(askAgain))) / 100;
        return acc + valueAnother;
      }
      return acc + valueReal;
    }, 0);
    this.setState({
      total,
    });
  }

  stateUpdate(key, value) {
    const { form } = this.state;
    this.setState({
      form: { ...form, [key]: value },
    });
  }

  handleExpense() {
    const { addExpense } = this.props;
    const { form } = this.state;
    const { value, currency, method, tag, description } = form;
    const expense = { value, currency, method, tag, description };
    addExpense(expense);
    this.setState({
      form: {
        ...form,
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    });
  }

  handleChange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currency, form } = this.state;
    return (
      <div>
        <Header data={ { email, total, currency } } />
        <div>
          <Form
            { ...form }
            onChange={ this.handleChange }
            onClick={ this.handleExpense }
          />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  currency: state.wallet.currency,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (expense) => dispatch(expenseThunk(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
