import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCurrencies } from '../utils/currencyAPI';
import { expensesAction as expensesForm } from '../actions';
import Currencies from './Currencies';
import Tag from './Tag';

import '../css/form.css';

class FormAddExpenses extends Component {
  constructor(props) {
    super(props);
    const { currency } = this.props;
    this.state = {
      value: '',
      description: '',
      method: '',
      exchangeRates: {},
      tag: '',
      currency,
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
    const { newExpense } = this.props;
    const exchangeRates = await fetchCurrencies();
    this.setState({ exchangeRates });
    newExpense(this.state);
  }

  render() {
    const { value, description, method, tag, currency } = this.state;
    return (
      <form className="form-container">
        <label htmlFor="value">
          <h5>Valor: </h5>
          <input
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          <h5>Descrição: </h5>
          <textarea
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="method">
          <h5>Método de Pagamento: </h5>
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <Currencies value={ currency } handleChange={ this.handleChange } />
        <Tag value={ tag } handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newExpense: (state) => dispatch(expensesForm(state)),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currency,
});

FormAddExpenses.propTypes = {
  newExpense: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpenses);
