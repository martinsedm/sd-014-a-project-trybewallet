import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies as fetchCurrenciesAction,
  getExpenses as getExpensesAction } from '../actions/index';

export class Forms extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentaçao',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendExpenses = this.sendExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async sendExpenses() {
    const { id, value, currency, method, tag, description } = this.state;
    const { getExpenses } = this.props;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: json,
    };

    getExpenses(expenses);

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const des = 'description';
    const hC = this.handleChange;
    const desc = description;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" value={ value } onChange={ hC } />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name={ des } id={ des } value={ desc } onChange={ hC } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" value={ currency } onChange={ hC }>
            { currencies.map((coin, index) => (
              <option value={ coin } key={ index }>{coin}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" value={ method } onChange={ hC }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" value={ tag } onChange={ hC }>
            <option value="Alimentacão">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.sendExpenses }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
  getExpenses: (payload) => dispatch(getExpensesAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
