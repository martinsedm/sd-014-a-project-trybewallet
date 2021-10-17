import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAPI from '../helpers/fetchAPI';
import { addExpenseAction } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetchAPI().then((exchangeRates) => this.setState({ exchangeRates }));
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();

    const { addExpense } = this.props;

    addExpense(this.state);
  }

  render() {
    const { value, currency, method, tag, description, exchangeRates } = this.state;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            <option value="" disabled hidden>Moeda</option>
            { Object.values(exchangeRates).map((coins, i) => {
              if (coins.codein !== 'BRLT' && coins.code !== 'DOGE') {
                return (
                  <option key={ i }>{coins.code}</option>
                );
              }
            })}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" value={ method } onChange={ this.handleChange }>
            <option value="" disabled hidden> Método de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
            <option value="" disabled hidden>Tag</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          // disabled={ !isValid }
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

export default connect(null, mapDispatchToProps)(Form);
