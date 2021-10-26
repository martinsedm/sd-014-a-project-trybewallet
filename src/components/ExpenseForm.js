import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectCurrency from './selectCurrency';
import { setExpense } from '../actions';
import Select from './Select';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { getExpense } = this.props;
    const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    this.setState({ exchangeRates });
    getExpense(this.state);
  }

  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <h1>adicione nova despesa</h1>
        <label htmlFor="value">
          valor:
          <input
            type="number"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          moeda:
          <select id="currency" onChange={ this.handleChange }>
            <SelectCurrency />
          </select>
        </label>
        <Select
          label="Método de pagamento:"
          id="method"
          options={ paymentMethods }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag:"
          id="tag"
          options={ tags }
          onChange={ this.handleChange }
        />
        <button type="submit" onClick={ this.handleClick }>Adicionar Despesa</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  getExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getExpense: (state) => dispatch(setExpense(state)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
