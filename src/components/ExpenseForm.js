import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions/index';
import { getAllCoins } from '../services/economiaAwesomeAPI';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descricao: '',
      moeda: 'USD',
      pagamento: 'dinheiro',
      tag: 'alimentacao',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addExpenseBTN = this.addExpenseBTN.bind(this);
  }

  async getCurExchangeRateThunk() {
    const { expensesCounter, dispatchAddExpense } = this.props;
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    try {
      const response = await getAllCoins();
      // const entries = Object.entries(response).filter((coin) => coin !== 'USDT');
      // console.log('Object Entries:', entries);
      const expense = {
        id: expensesCounter,
        value: valor,
        description: descricao,
        currency: moeda,
        method: pagamento,
        tag,
        exchangeRates: response,
      };
      // console.log(expense);
      dispatchAddExpense(expense);
    } catch (error) {
      console.log('Error catching the current exchange rates');
    }
  }

  addExpenseBTN() {
    this.getCurExchangeRateThunk(); // Get the current exchange rates when a expense is about to be added, to know how much it cost
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  createInputs(inputId, name, type, value) {
    return (
      <input
        id={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      />
    );
  }

  createSelectMoeda(inputId, name, type, value) {
    const { currencies } = this.props;
    return (
      <select
        id={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        { currencies.map((currency) => (
          <option key={ currency } value={ currency }>{ currency }</option>
        ))}
      </select>
    );
  }

  createSelectPagamento(inputId, name, type, value) {
    return (
      <select
        id={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  createSelectTagDespesa(inputId, name, type, value) {
    return (
      <select
        id={ inputId }
        value={ value }
        type={ type }
        name={ name }
        onChange={ this.handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor-id">
          Valor:
          {this.createInputs('valor-id', 'valor', 'text', valor)}
        </label>
        <label htmlFor="descricao-id">
          Descrição:
          {this.createInputs('descricao-id', 'descricao', 'text', descricao)}
        </label>
        <label htmlFor="moeda-Select">
          Moeda:
          {this.createSelectMoeda('moeda-Select', 'moeda', 'string', moeda)}
        </label>
        <label htmlFor="pagamento-Select">
          Método de pagamento:
          {this.createSelectPagamento(
            'pagamento-Select', 'pagamento', 'string', pagamento,
          )}
        </label>
        <label htmlFor="tag-Select">
          Tag:
          {this.createSelectTagDespesa('tag-Select', 'tag', 'string', tag)}
        </label>
        <button
          type="button"
          onClick={ this.addExpenseBTN }
          data-testid="login-submit-button"
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expensesCounter: state.wallet.expenses.length,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddExpense: (expense) => dispatch(addExpense(expense)),
  // getCurExchangeRate: () => dispatch(getCurExchangeRateThunk()),
});

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchAddExpense: PropTypes.func.isRequired,
  expensesCounter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
