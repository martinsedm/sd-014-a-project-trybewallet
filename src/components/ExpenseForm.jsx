import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrencies as setCurrenciesAction,
  setExpenses as setExpensesAction } from '../actions/index';
import { fetchCurrency } from '../services/fetchCurrencyAPI';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makePayMethods = this.makePayMethods.bind(this);
    this.makeExpenseTags = this.makeExpenseTags.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  makePayMethods() {
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return payMethods.map((method, index) => (
      <option key={ index } value={ method }>{method}</option>
    ));
  }

  makeExpenseTags() {
    const expenseTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return expenseTags.map((tag, index) => (
      <option key={ index } value={ tag }>{ tag }</option>
    ));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { setExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const fetch = await fetchCurrency();
    console.log(fetch);
    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: fetch,
    };
    setExpenses(expense);
  }

  render() {
    const { value, description } = this.state;
    const { wallet } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="input-value">
            Valor
            <input
              name="value"
              type="text"
              value={ value }
              onChange={ this.handleInput }
              id="input-value"
            />
          </label>
          <label htmlFor="description-value">
            Descrição
            <input
              name="description"
              type="text"
              value={ description }
              onChange={ this.handleInput }
              id="description-value"
            />
          </label>
          <label htmlFor="input-moeda">
            Moeda
            <select name="currency" onChange={ this.handleInput } id="input-moeda">
              { wallet.currencies.map((currency) => currency !== 'USDT'
              && <option key={ currency } value={ currency }>{currency}</option>)}
            </select>
          </label>
          <label htmlFor="input-metodo">
            Método de pagamento
            <select name="method" onChange={ this.handleInput } id="input-metodo">
              { this.makePayMethods() }
            </select>
          </label>
          <label htmlFor="expense-tag">
            Tag
            <select name="tag" onChange={ this.handleInput } id="expense-tag">
              { this.makeExpenseTags() }
            </select>
          </label>
          <input type="submit" value="Adicionar despesa" />
        </form>
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  setCurrencies: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired,
  wallet: PropTypes.objectOf(PropTypes.any).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(setCurrenciesAction()),
  setExpenses: (payload) => dispatch(setExpensesAction(payload)),
});

const mapStateToProps = ({ wallet }) => ({
  wallet,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
