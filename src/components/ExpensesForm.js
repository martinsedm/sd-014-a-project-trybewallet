import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  mapCurrency,
  getApi } from '../helper';

import {
  addExpense as AddExpenseAction,
  fetchCurrencies as FetchCurrenciesAction,
} from '../actions';

const INITIAL_STATE = {
  currency: '',
  description: '',
  exchangeRates: {},
  method: '',
  tag: '',
  value: '',
};

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  updateState(state) {
    this.setState(state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const exchangeRates = await getApi();
    this.setState({ exchangeRates });
    addExpense(this.state);
    this.setState(INITIAL_STATE);
  }

  handleDisabled() {
    const { currency, description, method, tag, value } = this.state;
    return !(currency && description && method && tag && value);
  }

  renderValue() {
    const { value } = this.state;
    return (
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
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
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
    );
  }

  renderCurrencies() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          value={ currency }
        >
          { mapCurrency(currencies) }
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
        <select
          id="tag"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
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
    return (
      <div>
        <form>
          {this.renderValue()}
          {this.renderDescription()}
          {this.renderCurrencies()}
          {this.renderMethods()}
          {this.renderTags()}
          <button
            type="button"
            disabled={ this.handleDisabled() }
            onClick={ this.handleClick }
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
  addExpense: (expense) => dispatch(AddExpenseAction(expense)),
  getCurrencies: () => dispatch(FetchCurrenciesAction()),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
