import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import Header from '../components/Header';

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
        payment: 'Dinheiro',
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
    const resultAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultAPIJson = await resultAPI.json();
    const desiredCodes = Object.values(resultAPIJson)
      .filter(({ codein }) => codein === 'BRL');
    this.setState({
      currencies: desiredCodes,
      expenses: { exchangeRates: desiredCodes } });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ expenses: { [name]: value } });
  }

  handleClick() {
    const { addExpenses } = this.props;
    const { expenses: { id } } = this.state;
    this.setState({ expenses: { id: id + 1 } });
    this.resultAPI();
    addExpenses(this.state);
  }

  render() {
    const { currencies, expenses: { value, description, currency, payment, tag } } = this.state;
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
              {currencies.map(({ code }) => (
                <option key={ code }>{code}</option>
              ))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento:
            <select id="payment" name="payment" value={ payment } onChange={ handleChange }>
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

Wallet.propTypes = {
  expenses: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(Wallet);
