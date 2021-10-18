import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';
import { fetchCurrencies, expenseThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currencyExchange } = props;
    this.state = {
      email,
      total: 0,
      currencyExchange,
      form: {
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
        currencies: [],
        categories: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
        payment: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  componentDidUpdate(previusProps, previusState) {
    const { currencies, expenses } = this.props;
    const { currencyExchange } = this.state;
    if (previusProps.currencies !== currencies) {
      this.stateUpdate('currencies', currencies);
    }
    if ((previusProps.expenses !== expenses)
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

  removeExpense(id) {
    console.log(id);
  }

  editExpense(id) {
    console.log(id);
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
    const { email, total, currencyExchange, form } = this.state;
    const { expenses } = this.props;
    return (
      <main>
        <Header data={ { email, total, currencyExchange } } />
        <section>
          <Form
            { ...form }
            onChange={ this.handleChange }
            onClick={ this.handleExpense }
          />
        </section>
        <section>
          { expenses.length !== 0
            && <Table
              expenses={ expenses }
              removeExpense={ this.removeExpense }
              editExpense={ this.editExpense }
            />}
        </section>
      </main>
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
  currencyExchange: PropTypes.string.isRequired,
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
