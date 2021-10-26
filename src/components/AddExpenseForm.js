import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addExpense as addExpenseAction,
  fetchCurrencies as fetchCurrenciesAction,
} from '../actions';
import fetchApi from '../services/api';

const INITIAL_STATE = {
  currency: '',
  description: '',
  exchangeRates: {},
  method: '',
  tag: '',
  value: '',
};

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const exchangeRates = await fetchApi();
    this.setState({ exchangeRates });
    addExpense(this.state);
    this.setState(INITIAL_STATE);
  }

  isDisabled() {
    const { currency, description, method, tag, value } = this.state;
    return !(currency && description && method && tag && value);
  }

  renderCurrencies() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          <option value="">Selecione</option>
          {currencies.map((curr) => (
            <option key={ curr } value={ curr }>
              {curr}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderMethods() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="">Selecione</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTags() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handleChange } value={ tag }>
          <option value="">Selecione</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { description, value } = this.state;
    return (
      <div>
        <h1>Cadastro de despesas</h1>
        <form>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              name="value"
              onChange={ this.handleChange }
              type="text"
              value={ value }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="description"
              onChange={ this.handleChange }
              type="text"
              value={ description }
            />
          </label>
          {this.renderCurrencies()}
          {this.renderMethods()}
          {this.renderTags()}
          <button
            disabled={ this.isDisabled() }
            onClick={ this.handleClick }
            type="button"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

AddExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
