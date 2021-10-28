import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import { categories, inputs, methods } from '../data';
import { fetchCurrency, URL } from '../services/awesomeAPI';
import {
  fetchCurrencies as currencyAction,
  saveExpense as expenseAction,
} from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      payment: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  fireSaveExpense() {
    const { value, description, currency, payment: method, category: tag } = this.state;
    const { expenses, saveExpense } = this.props;
    fetchCurrency(URL)
      .then((exchangeRates) => {
        saveExpense({
          id: expenses.length,
          value,
          description,
          currency,
          method,
          tag,
          exchangeRates });
      });
  }

  renderInputs() {
    const { value, description } = this.state;
    return Object.values(inputs).map(({ htmlFor, text, type }) => (
      <Input
        key={ htmlFor }
        htmlFor={ htmlFor }
        text={ text }
        value={ htmlFor === 'value' ? value : description }
        type={ type || '' }
        handleChange={ this.handleChange }
      />
    ));
  }

  render() {
    const {
      currency,
      payment,
      category,
    } = this.state;
    const { currencies, loading } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <Header />
        <form
          onSubmit={ (e) => {
            e.preventDefault();
            this.fireSaveExpense();
          } }
        >
          { this.renderInputs() }
          <Select
            htmlFor="currency"
            text="Moeda"
            options={ loading ? ['loading'] : currencies }
            value={ currency }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="payment"
            text="Método de pagamento"
            options={ methods }
            value={ payment }
            handleChange={ this.handleChange }
          />
          <Select
            htmlFor="category"
            text="Tag"
            options={ categories }
            value={ category }
            handleChange={ this.handleChange }
          />
          <Button
            type="submit"
            text="Adicionar despesa"
          />
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (payload) => dispatch(expenseAction(payload)),
  fetchCurrencies: () => dispatch(currencyAction()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  loading: state.wallet.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
