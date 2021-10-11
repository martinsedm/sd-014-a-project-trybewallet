import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ValueInput from './ValueInput';
import CurrencyInput from './CurrencyInput';
import PaymentInput from './PaymentInput';
import TagInput from './TagInput';
import DescriptionInput from './DescriptionInput';

import { getCurrencies } from '../utils/currenciesAPI';
import { addExpense as expense } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { currencies, ...expenseInfo } = this.state;
    const { addExpense } = this.props;
    addExpense(expenseInfo);
  }

  async fetchCurrencies() {
    const currencies = await getCurrencies();
    this.setState({ currencies });
  }

  render() {
    const { value, currency, method, tag, description, currencies } = this.state;
    return (
      <form className="expenses-form">
        <ValueInput value={ value } onChange={ this.handleChange } />
        <CurrencyInput
          onChange={ this.handleChange }
          currencies={ currencies }
          value={ currency }
        />
        <PaymentInput value={ method } onChange={ this.handleChange } />

        <TagInput value={ tag } onChange={ this.handleChange } />

        <DescriptionInput value={ description } onChange={ this.handleChange } />

        <button
          type="button"
          className="btn btn-primary"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expenseInfo) => dispatch(expense(expenseInfo)),
});

ExpensesForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpensesForm);
