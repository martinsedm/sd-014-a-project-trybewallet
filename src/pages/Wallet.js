import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction } from '../actions';
import Header from '../components/Header';
import getCurrencyRate from '../services/currencyAPI';

const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderCurrencyCodes = this.renderCurrencyCodes.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  componentDidMount() {
    this.resultAPI();
  }

  async resultAPI() {
    const resultAPI = await getCurrencyRate();
    this.setState({
      exchangeRates: resultAPI,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const { id } = this.state;
    const exchangeRates = await getCurrencyRate();
    this.setState({ exchangeRates });
    addExpense(this.state);
    this.setState({ value: '', description: '', id: (id + 1) });
  }

  renderCurrencyCodes() {
    const CURRENCY_CODE_LENGTH = 3;
    const { exchangeRates } = this.state;
    const initialsCodes = Object.keys(exchangeRates)
      .filter((code) => code.length === CURRENCY_CODE_LENGTH);
    return initialsCodes.map((code) => (<option key={ code }>{code}</option>));
  }

  renderMethod() {
    return payments.map((paymentList) => (
      <option key={ paymentList }>{paymentList}</option>));
  }

  renderTags() {
    return tags.map((tagList) => <option key={ tagList }>{tagList}</option>);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
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
              {this.renderCurrencyCodes()}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select id="method" name="method" value={ method } onChange={ handleChange }>
              {this.renderMethod()}
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
              {this.renderTags()}
            </select>
          </label>
          <button type="button" onClick={ handleClick }> Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

export default connect(null, mapDispatchToProps)(Wallet);
