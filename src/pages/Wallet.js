import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormSelect from '../components/FormSelect';
import { paymentOptions, tagOptions } from '../data';
import {
  setExpensesAction,
  removeExpenseAction,
  updateTotalValueAction,
} from '../actions';
import WalletHeader from '../components/WalletHeader';

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

    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.fetchCurrencyAPI = this.fetchCurrencyAPI.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.manageCurrencyOptions = this.manageCurrencyOptions.bind(this);
    this.fillTable = this.fillTable.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  componentDidMount() {
    this.manageCurrencyOptions();
  }

  async onSubmit() {
    const { setExpenses, updateTotalValue } = this.props;
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
    updateTotalValue();
    setExpenses(expenses);

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

  deleteRow({ target }) {
    const { removeExpense } = this.props;
    const { id } = target;
    removeExpense(Number(id));
  }

  fillTable() {
    const { expenses } = this.props;
    return expenses.map((exp) => (
      <tr key={ exp.id }>
        <td>{ exp.description }</td>
        <td>{ exp.tag }</td>
        <td>{ exp.method }</td>
        <td>{ exp.value }</td>
        <td>{ exp.exchangeRates[exp.currency].name }</td>
        <td>{ parseFloat(exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
        <td>{ (exp.value * exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.deleteRow }
            id={ exp.id }
          >
            X
          </button>
        </td>
      </tr>
    ));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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

  renderTable() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.length > 0 && this.fillTable() }
          </tbody>
        </table>
      </section>
    );
  }

  render() {
    return (
      <div>
        <WalletHeader />
        { this.renderForm() }
        <button
          type="button"
          onClick={ this.onSubmit }
        >
          Adicionar despesa
        </button>
        { this.renderTable() }
      </div>
    );
  }
}

Wallet.propTypes = {
  setExpenses: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  updateTotalValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  totalValue: state.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(setExpensesAction(payload)),
  removeExpense: (payload) => dispatch(removeExpenseAction(payload)),
  updateTotalValue: (payload) => dispatch(updateTotalValueAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
