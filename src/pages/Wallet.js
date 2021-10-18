import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import SelectCurrency from '../components/SelectCurrency';
import SelectTag from '../components/SelectTag';
import { expenseThunk, totalExpenseAction } from '../actions';
import GenericInput from '../components/GenericInput';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      apiResponse: undefined,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.setupExpense = this.setupExpense.bind(this);
    this.renderGenericInputs = this.renderGenericInputs.bind(this);
  }

  componentDidMount() {
    this.fetchApi(true);
  }

  async setupExpense() {
    const { value, description, currency } = this.state;
    const { method, tag } = this.state;
    const { saveExpense, expenses } = this.props;
    const exchangeRates = await this.fetchApi(false);
    this.calculateExchange(exchangeRates);
    const answer = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    saveExpense(answer);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'cash',
    });
  }

  calculateExchange(exchangeRates) {
    const { value, currency } = this.state;
    const { totalExpenses, changeTotal } = this.props;

    const valueExchanged = exchangeRates[currency].ask * value;
    const result = parseFloat(totalExpenses) + parseFloat(valueExchanged);
    changeTotal(result);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchApi(config) {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    if (config) {
      this.setState({ apiResponse: json });
    } else {
      return json;
    }
  }

  renderGenericInputs() {
    const { value, description } = this.state;
    return (
      <>
        <GenericInput
          htmlFor="value-input"
          type="number"
          id="value-input"
          name="value"
          value={ value }
          onChange={ this.handleChange }
          text="Valor"
        />
        <GenericInput
          htmlFor="description-input"
          type="text"
          id="description-input"
          name="description"
          value={ description }
          onChange={ this.handleChange }
          text="Descrição"
        />
      </>
    );
  }

  render() {
    const { email, totalExpenses } = this.props;
    const { apiResponse } = this.state;
    const { currency, method } = this.state;
    return (
      <>
        <header className="header-wallet">
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ totalExpenses || 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <form>
            { this.renderGenericInputs() }
            { apiResponse
            && <SelectCurrency
              result={ apiResponse }
              handleChange={ this.handleChange }
              currency={ currency }
            /> }
            <SelectPayment handleChange={ this.handleChange } method={ method } />
            <SelectTag handleChange={ this.handleChange } method={ method } />
            <button
              type="button"
              onClick={ this.setupExpense }
            >
              Adicionar despesa
            </button>
          </form>
          <TableExpenses />
        </main>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    totalExpenses: state.wallet.totalExpenses,
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveExpense: (data) => dispatch(expenseThunk(data)),
    changeTotal: (data) => dispatch(totalExpenseAction(data)),
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  saveExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  totalExpenses: PropTypes.number,
  changeTotal: PropTypes.func.isRequired,
};

Wallet.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
