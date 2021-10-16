import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormSelect from '../components/FormSelect';
import { paymentOptions, tagOptions } from '../data';
import { setExpensesAction, setTotalValueAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currencies: [],
      expensesCount: 0,
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.fetchCurrencyAPI = this.fetchCurrencyAPI.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.manageCurrencyOptions = this.manageCurrencyOptions.bind(this);
  }

  componentDidMount() {
    this.manageCurrencyOptions();
  }

  async onSubmit() {
    const { dispatchExpense, updateTotalValue, totalValue } = this.props;
    const { expensesCount, value, description, currency, method, tag } = this.state;
    const exchangeRates = await this.fetchCurrencyAPI();

    const expense = {
      id: expensesCount,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    const { expenses } = this.props;
    expenses.push(expense);

    updateTotalValue(totalValue + Number(value) * (expense.exchangeRates[currency].ask));
    dispatchExpense(expenses);

    this.setState({
      expensesCount: expensesCount + 1,
    });
  }

  async fetchCurrencyAPI() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const currencies = await (await fetch(URL)).json();

    return currencies;
  }

  async manageCurrencyOptions() {
    const currencies = await this.fetchCurrencyAPI();

    // stack overflow
    delete currencies.USDT;

    this.setState({
      currencies: Object.keys(currencies),
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    let { totalValue } = this.props;
    const { email } = this.props;

    if (!totalValue) {
      totalValue = 0;
    }

    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalValue }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderForm() {
    const { value, description, currency, method, tag, currencies } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            onChange={ this.handleChange }
            value={ value }
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            onChange={ this.handleChange }
            value={ description }
            id="description"
          />
        </label>
        <FormSelect
          id="currency"
          infoArray={ currencies }
          onChange={ this.handleChange }
          label="Moeda"
          value={ currency }
        />
        <FormSelect
          id="method"
          infoArray={ paymentOptions }
          onChange={ this.handleChange }
          label="Método de pagamento"
          value={ method }
        />
        <FormSelect
          id="tag"
          infoArray={ tagOptions }
          onChange={ this.handleChange }
          label="Tag"
          value={ tag }
        />
      </form>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderForm() }
        <button
          type="button"
          onClick={ this.onSubmit }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  dispatchExpense: PropTypes.func.isRequired,
  updateTotalValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalValue: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalValue: state.wallet.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (payload) => dispatch(setExpensesAction(payload)),
  updateTotalValue: (payload) => dispatch(setTotalValueAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
