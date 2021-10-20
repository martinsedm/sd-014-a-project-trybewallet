import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrency from './CurrencyQuery';
import { addExpense } from '../actions';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      expenses: {
        value: 0,
        description: '',
        currency: 'USD',
        tag: 'Alimentação',
        exchangeRates: {},
        method: 'Dinheiro',
      },
    };
    this.currencyMapper = this.currencyMapper.bind(this);
    this.currencyToState = this.currencyToState.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.expenseSubmit = this.expenseSubmit.bind(this);
  }

  componentDidMount() {
    this.currencyToState();
    this.currencyMapper();
  }

  formHandler({ target: { name, value } }) {
    const { expenses } = this.state;
    this.setState({ expenses: { ...expenses, [name]: value } });
  }

  async currencyToState() {
    const currencyList = Object.values(await fetchCurrency(true));
    const currCodes = currencyList.map((elem) => (elem));
    this.setState({
      currencies: currCodes,
    });
  }

  currencyMapper() {
    const { currencies, expenses } = this.state;
    const currToOptions = currencies.map((curr) => (
      <option key={ curr.code }>
        {curr.code}
      </option>
    ));
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          onChange={ this.formHandler }
          id="currency"
          value={ expenses.currency }
        >
          {currToOptions}
        </select>
      </label>
    );
  }

  async expenseSubmit(event) {
    event.preventDefault();
    let { expenses } = this.state;
    const { addExpenseDispatch } = this.props;
    const exchangeRates = await fetchCurrency(false);

    this.setState({
      expenses: { ...expenses, exchangeRates: { ...exchangeRates } },
    }, () => {
      expenses = this.state; // Vital, or it will send the state before it had exchangeRates
      addExpenseDispatch(expenses);
      this.setState({
        expenses: {
          value: 0,
          description: '',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
          exchangeRates: [],
        },
      });
    });
  }

  render() {
    const { expenses } = this.state;
    const { value, description } = expenses;
    return (
      <form onSubmit={ this.expenseSubmit }>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            isRequired
            value={ value }
            onChange={ this.formHandler }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            placeholder="Descrição de Despesas"
            id="description"
            onChange={ this.formHandler }
            value={ description }
          />
        </label>
        <br />
        <this.currencyMapper />
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.formHandler }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.formHandler }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  addExpenseDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenseDispatch: (payload) => dispatch(addExpense(payload)) });

export default connect(null, mapDispatchToProps)(WalletForm);
