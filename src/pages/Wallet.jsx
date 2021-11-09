import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import WalletTable from '../components/WalletTable';
import currencyApi from '../services/currencyApi';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
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
    this.currencyFilter();
  }

  async currencyFilter() {
    const resultAPI = await currencyApi();
    this.setState({ exchangeRates: resultAPI });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const { id } = this.state;
    const exchangeRates = await currencyApi();
    this.setState({ exchangeRates });
    addExpense(this.state);
    this.setState({ value: '', description: '', id: (id + 1) });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderCurrencyCodes() {
    const CURRENCY_CODE_LENGTH = 3;
    const { exchangeRates } = this.state;
    const initialsCodes = Object.keys(exchangeRates)
      .filter((code) => code.length === CURRENCY_CODE_LENGTH);
    return initialsCodes.map((code) => (<option key={ code }>{code}</option>));
  }

  renderMethod() {
    return paymentMethod.map((paymentList) => (
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
          <Input
            label="Valor:"
            name="value"
            value={ value }
            handleChange={ handleChange }
          />
          <Input
            label="Descrição:"
            name="description"
            value={ description }
            handleChange={ handleChange }
          />
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              type="select"
              name="currency"
              value={ currency }
              onChange={ handleChange }
            >
              {this.renderCurrencyCodes()}
            </select>
          </label>
          <label htmlFor="payment">
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
        <WalletTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAction(expense)),
});

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
