import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk, expenseConstructor, updateTotalExpense } from '../actions';
import Select from './Select';
import Input from './Input';
import currenciesAPI from '../services/currenciesAPI';

// expenses: [{
//   "id": 0,
//   "value": "3",
//   "description": "Hot Dog",
//   "currency": "USD",
//   "method": "Dinheiro",
//   "tag": "Alimentação",
//   "exchangeRates": {
//     "USD": {
//       "code": "USD",
//       "name": "Dólar Comercial",
//       "ask": "5.6208",
//       ...
//     },
//     "CAD": {
//       "code": "CAD",
//       "name": "Dólar Canadense",
//       "ask": "4.2313",
//       ...
//     },
// }]

class FormWallet extends Component {
  constructor() {
    //     id: 0,
    //     value: '10',
    //     currency: 'USD',
    //     method: 'Cartão de crédito',
    //     tag: 'Lazer',
    //     description: 'Dez dólares',
    //     exchangeRates: mockData,
    super();
    this.state = {
      currencies: [],
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.makeExpenses = this.makeExpenses.bind(this);
    this.updateTotalDespenses = this.updateTotalDespenses.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
    await this.convertWalletPropToArray();
  }

  convertWalletPropToArray() {
    const { wallet: { currencies } } = this.props;
    const walletArray = Object.keys(currencies);
    const walletFiltered = walletArray.filter((currency) => currency !== 'USDT');
    this.setState({
      currencies: walletFiltered,
    });
  }

  makeExpenses(state) {
    const stateWithOutCurrencies = { ...state };
    delete stateWithOutCurrencies.currencies;
    delete stateWithOutCurrencies.total;
    return stateWithOutCurrencies;
  }

  updateTotalDespenses(currencies) {
    const { pushExpensesSome, wallet: { expenses } } = this.props;
    const total = expenses.reduce((acc, expense) => {
      const currentExpense = Number(expense.value)
      * Number(currencies[expense.currency].ask);
      return acc + currentExpense;
    }, 0);
    pushExpensesSome(total);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id } = this.state;
    const { pushExpenses } = this.props;
    const currencies = await currenciesAPI();
    await delete currencies.USDT;
    await this.setState({ id: id + 1, exchangeRates: currencies });
    await pushExpenses(this.makeExpenses(this.state));
    await this.updateTotalDespenses(currencies);
  }

  render() {
    const valuesOfTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const valuesOfPagamento = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { currencies, value, description } = this.state;
    return (
      <form>
        <Input
          id="value"
          onChange={ this.handleChange }
          type="number"
          value={ value }
          labelText="Valor"
        />
        <Input
          id="description"
          onChange={ this.handleChange }
          type="text"
          value={ description }
          labelText="Descrição"
        />
        <Select
          values={ currencies }
          id="currency"
          name="currency"
          onChange={ this.handleChange }
          labelText="Moeda"
        />
        <Select
          values={ valuesOfPagamento }
          id="method"
          onChange={ this.handleChange }
          labelText="Método de pagamento"
        />
        <Select
          values={ valuesOfTag }
          id="tag"
          onChange={ this.handleChange }
          labelText="Tag"
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  wallet,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
  pushExpenses: (payload) => dispatch(expenseConstructor(payload)),
  pushExpensesSome: (payload) => dispatch(updateTotalExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);

FormWallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  wallet: PropTypes.func.isRequired,
  pushExpenses: PropTypes.func.isRequired,
  pushExpensesSome: PropTypes.func.isRequired,
  currencies: PropTypes.func.isRequired,
};
