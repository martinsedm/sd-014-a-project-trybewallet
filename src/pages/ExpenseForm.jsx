import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCurrencies, addExpense } from '../actions';

const tagDescription = ['Alimentação', 'Transporte', 'Lazer', 'Trabalho', 'Saúde', 'Outros'];
const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
      exchangeRates: {},
    };

    this.createInput = this.createInput.bind(this);
    this.createSelect = this.createSelect.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componeneDidMount() {
    this.fetchCurrency();
  }

  eventHandler({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async clickHandler() {
    const { newExpense } = this.props;
    const response = await this.fetchCurrency();
    const filter = Object.entries(response).filter((element) => (element[0]) !== 'USDT');
    console.log(Object.fromEntries(filter));

    this.setState({
      exchangeRates: Object.fromEntries(filter),
    });

    // newExpense(this.state);
  }

  async fetchCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  }

  createInput(id, type, value, extra) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <input
              type={ type }
              name={ id }
              id={ id }
              onChange={ this.eventHandler }
              placeholder={ extra }
            />
          </label>
        </form>
        <p />
      </>
    );
  }

  createSelect(id, obj, value) {
    return (
      <>
        <form>
          <label htmlFor={ id }>
            { value }
            <select name={ id } id={ id }>
              { obj.map((element, i) => (
                <option
                  key={ i }
                  currency={ element }
                  id={ id }
                  value={ element }
                  onChange={ this.eventHandler }
                >
                  { element }
                </option>
              ))}
            </select>
          </label>
        </form>
        <p />
      </>
    );
  }

  createButton() {
    const { expenses } = this.state;
    return (
      <button
        type="button"
        value={ expenses }
        onClick={ () => {
          this.clickHandler();
        } }
      >
        Adicionar Despesa
      </button>
    );
  }

  render() {
    const { getCurrencies } = this.props;
    return (
      <div>
        <p />
        <h1>Cadastro de Despesas</h1>
        { this.createInput('value', 'number', 'Valor:', 'valor gasto') }
        { this.createInput('description', 'text', 'Descrição:', 'descrição') }
        { this.createInput('date', 'date', 'Data:') }

        { this.createSelect('currency', getCurrencies, 'Moeda:') }
        { this.createSelect('method', payment, 'Método de pagamento:') }
        { this.createSelect('tag', tagDescription, 'Tag:') }
        { this.createButton() }

      </div>
    );
  }
}

ExpenseForm.propTypes = {
  getCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  newExpense: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    login: state.user,
    expenses: state.wallet.expenses,
    getCurrencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newExpense: (data) => dispatch(addExpense(data)),
    saveCurrencies: (data) => dispatch(addCurrencies(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
