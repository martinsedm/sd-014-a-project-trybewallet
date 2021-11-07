import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newExpense } from '../actions';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.state = initialState;

    this.getCurrencies = this.getCurrencies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const { Expense, expenses } = this.props;
    const id = expenses.length;
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        this.setState({ id,
          exchangeRates: r,
        });
      }).catch(() => 'Error');
    Expense(this.state);
    this.clearInputs();
  }

  getCurrencies() {
    const { moedas } = this.props;
    const lista = moedas.map((moeda) => Object.keys(moeda));
    const result = lista[0].filter((moeda) => moeda !== 'USDT')
      .map((moeda) => <option key={ moeda }>{moeda}</option>);
    return result;
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clearInputs() {
    this.setState({
      value: '',
      currency: 'USD',
      method: '',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    });
  }

  inputvalor(value) {
    return (
      <label htmlFor="inputValue">
        valor
        <input
          type="number"
          name="value"
          id="inputValue"
          value={ value }
          step=".01"
          required
          onChange={ this.HandleChange }
        />
      </label>
    );
  }

  labelTag(tag) {
    return (
      <label htmlFor="tag">
        tag
        <select id="tag" name="tag" value={ tag } onChange={ this.HandleChange }>
          <option value="Alimentcao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>
      </label>
    );
  }

  methodInput(method) {
    return (
      <label htmlFor="payment">
        Método de Pagamento
        <select
          id="payment"
          name="method"
          value={ method }
          onChange={ this.HandleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, tag, method } = this.state;
    const { moedas } = this.props;
    if (moedas.length === 0) return <h2>Caregando...</h2>;
    return (
      <form onSubmit={ this.onSubmit }>
        {this.inputvalor(value)}
        <label htmlFor="moeda">
          moeda
          <select
            id="moeda"
            value={ currency }
            name="currency"
            onChange={ this.HandleChange }
          >
            {this.getCurrencies()}
          </select>
        </label>
        {this.methodInput(method)}
        {this.labelTag(tag)}
        <label htmlFor="describe">
          Descrição
          <input
            type="text"
            name="description"
            id="describe"
            value={ description }
            onChange={ this.HandleChange }
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  Expense: (value) => dispatch(newExpense(value)),
});

Forms.propTypes = ({
  moedas: PropTypes.array,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
