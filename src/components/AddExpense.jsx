import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ValueInput from './ValueInput';
import CurrencyInput from './CurrencyInput';
import PaymentInput from './PaymentInput';
import TagInput from './TagInput';
import DescriptionInput from './DescriptionInput';

import { addExpense as expense, setCurrencies as fetchCurrencies } from '../actions';

class AddExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies, addExpense } = this.props;
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
          onClick={ () => addExpense(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expenseInfo) => dispatch(expense(expenseInfo)),
  setCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

AddExpense.propTypes = {
  addExpense: PropTypes.func.isRequired,
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
