import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from '../utils/currencyAPI';
import { expensesAction as expensesForm } from '../actions';
import Currencies from './Currencies';
import Tag from './Tag';

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: 'Adicione uma descrição',
      method: '',
      exchangeRates: {},
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { expensesAction } = this.props;
    const exchangeRates = await fetchCurrencies();
    this.setState({ exchangeRates });
    expensesAction(this.state);
  }

  render() {
    const { value, description, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="method">
          Método de Pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <Currencies value={ method } handleChange={ this.handleChange } />
        <Tag value={ tag } handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expensesAction: (expenses) => dispatch(expensesForm(expenses)),
});

FormAddExpenses.propTypes = {
  expensesAction: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormAddExpenses);
