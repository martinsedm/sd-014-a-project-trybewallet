import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction, fetchInstantRate } from '../actions';
import Header from '../components/Header';
import getCurrencyRate from '../services/currencyAPI';

const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const payments = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      expenses: {
        id: 0,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.resultAPI();
  }

  async resultAPI() {
    const CURRENCY_CODE_LENGTH = 3;
    const resultAPI = await getCurrencyRate();
    const initialsCodes = Object.keys(resultAPI)
      .filter((code) => code.length === CURRENCY_CODE_LENGTH);
    this.setState({
      currencies: initialsCodes,
    });
  }

  handleChange({ target: { name, value } }) {
    const { expenses } = this.state;
    this.setState({ expenses: { ...expenses, [name]: value } });
  }

  async handleClick() {
    const { expenses, expenses: { id, value, description, currency, method, tag } } = this.state;
    const { getInstantRate, instantRate, addExpense } = this.props;
    await getInstantRate();
    // this.setState({

    // });
    // addExpense({ id, value, description, currency, method, tag });
  }

  render() {
    const { currencies, expenses: { value, description, currency, method, tag } } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="value">
            Valor:
            <input id="value" type="text" name="value" value={ value } onChange={ handleChange } />
          </label>
          <label htmlFor="description">
            Descrição:
            <input id="description" type="text" name="description" value={ description } onChange={ handleChange } />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select id="currency" type="select" name="currency" value={ currency } onChange={ handleChange }>
              {currencies.map((code) => (
                <option key={ code }>{code}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" name="method" value={ method } onChange={ handleChange }>
              {payments.map((paymentList) => (
                <option key={ paymentList }>{paymentList}</option>))}
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
              {tags.map((tagList) => <option key={ tagList }>{tagList}</option>)}
            </select>
          </label>
          <button type="button" onClick={ handleClick }> Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
  getInstantRate: () => dispatch(fetchInstantRate()),
});

const mapStateToProps = (state) => ({
  instantRate: state.wallet.exchangeRates,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
