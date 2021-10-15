import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { categories, payment } from '../data/index';
import { getIntCurrenciesThunk, addExpenseThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currencyToExchange } = props;
    this.state = {
      email,
      total: 0,
      currencyToExchange,
      form: {
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
        currencies: [],
        categories,
        payment,
      },
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.updateState = this.updateState.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentDidMount() {
    const { getIntCurrencies } = this.props;
    getIntCurrencies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currencies, expenses } = this.props;
    const { currencyToExchange } = this.state;
    if (prevProps.currencies.length !== currencies.length) {
      this.updateState('currencies', currencies);
    }
    if ((prevProps.expenses.length !== expenses.length)
      || (prevState.currencyToExchange !== currencyToExchange)) {
      this.calculateSum(expenses);
    }
  }

  calculateSum(expenses) {
    const { currencyToExchange } = this.state;
    const total = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      const valueInReal = Math.round(100 * Number(value) * Number(ask)) / 100;
      if (currencyToExchange !== 'BRL') {
        const { ask: aksAgain } = exchangeRates[currencyToExchange];
        const valueInAnother = Math.round(100 * (valueInReal / Number(aksAgain))) / 100;
        return acc + valueInAnother;
      }
      return acc + valueInReal;
    }, 0);
    this.setState({
      total,
    });
  }

  updateState(key, value) {
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

  removeExpense(id) {
    console.log(id);
  }

  editExpense(id) {
    console.log(id);
  }

  handlechange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currencyToExchange, form } = this.state;
    const { expenses } = this.props;
    return (
      <main>
        <Header data={ { email, total, currencyToExchange } } />
        <section>
          <Form
            { ...form }
            onChange={ this.handlechange }
            onClick={ this.handleExpense }
          />
        </section>
        <section>
          { expenses.length !== 0
          && <Table
            expenses={ expenses }
            removeExpense={ this.removeExpense }
            editExpense={ this.editExpense }
          /> }
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyToExchange: PropTypes.string.isRequired,
  getIntCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  currencyToExchange: state.wallet.currencyToExchange,
});

const mapDispatchToProps = (dispatch) => ({
  getIntCurrencies: () => dispatch(getIntCurrenciesThunk()),
  addExpense: (expense) => dispatch(addExpenseThunk(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
