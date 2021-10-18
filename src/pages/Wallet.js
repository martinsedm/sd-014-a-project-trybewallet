import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import SelectCurrency from '../components/SelectCurrency';
import SelectTag from '../components/SelectTag';
import { expenseThunk, totalExpenseAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      apiResponse: undefined,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.setupExpense = this.setupExpense.bind(this);
  }

  componentDidMount() {
    this.fetchApi(true);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async setupExpense() {
    const { value, description, currency } = this.state;
    const { method, tag } = this.state;
    const { saveExpense, totalExpenses, changeTotal } = this.props;
    changeTotal(+totalExpenses + value);
    const exchangeRates = await this.fetchApi(false);
    const answer = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    saveExpense(answer);
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

  render() {
    const { email, totalExpenses } = this.props;
    const { apiResponse, value } = this.state;
    const { description, currency, method } = this.state;
    return (
      <>
        <header className="header-wallet">
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ totalExpenses }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <form>
            <label htmlFor="value-input">
              Valor
              <input
                type="number"
                id="value-input"
                name="value"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="description-input">
              Descrição
              <input
                type="text"
                id="description-input"
                name="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            { apiResponse && <SelectCurrency result={ apiResponse } handleChange={ this.handleChange } currency={ currency } /> }
            <SelectPayment handleChange={ this.handleChange } method={ method } />
            <SelectTag handleChange={ this.handleChange } method={ method } />
            <button
              type="button"
              onClick={ this.setupExpense }
            >
              Adicionar despesa
            </button>
          </form>
        </main>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.user.email,
    totalExpenses: state.wallet.wallet.totalExpenses,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
