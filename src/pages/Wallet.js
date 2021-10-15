import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import SelectCurrency from '../components/SelectCurrency';
import SelectTag from '../components/SelectTag';
import { expenseThunk } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      apiResponse: undefined,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'cash',
      tag: 'food',
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async fetchApi() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    this.setState({ apiResponse: json });
  }

  render() {
    const { email, saveExpense } = this.props;
    const { totalExpenses, apiResponse } = this.state;
    const { value, description, currency, method } = this.state;
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
              onClick={ () => saveExpense(this.state) }
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
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveExpense: (data) => dispatch(expenseThunk(data)),
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
