import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, getCurrencyThunk } from '../actions/index';

import InputGen from './InputGen';
import Currency from './Currency';
import PaymentForm from './PaymentForm';
import Tag from './Tag';

class AddExpenses extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      value: 0,
      description: '',
      tag: 'Lazer',
      currency: 'USD',
      method: 'Cartão de Crédito',
      exchangeRates: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  async onClickBtn() {
    const { expenses, currencies, getCurrencies, sendExpense } = this.props;
    await getCurrencies();
    const { id, value, description, tag, currency, method, exchangeRates } = this.state;
    const expense = { id, value, description, tag, currency, method, exchangeRates };
    expense.id = expenses.length;
    expense.exchangeRates = Object.fromEntries(currencies);
    sendExpense(expense);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description,
      tag, currency, method } = this.state;
    return (
      <section className="expense-container">
        <form className="expense">
          <InputGen
            config={ ['number', 'value', 'value-Input', value,
              false, this.handleChange, 'Valor', 'input-wallet'] }
          />
          <InputGen
            config={ ['text', 'description', 'description-Input', description,
              false, this.handleChange, 'Descrição', 'input-wallet'] }
          />
          <Currency
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          />
          <PaymentForm
            name="method"
            value={ method }
            onChange={ this.handleChange }
          />
          <Tag name="tag" value={ tag } onChange={ this.handleChange } />
          <button onClick={ this.onClickBtn } type="button">Adicionar despesa</button>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
    currencies: state.wallet.currencies,
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (payload) => dispatch(addExpense(payload)),
  getCurrencies: () => dispatch(getCurrencyThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);

AddExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  sendExpense: PropTypes.func.isRequired,
};
