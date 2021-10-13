import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ValueInput from './ValueInput';
import CurrencyInput from './CurrencyInput';
import PaymentInput from './PaymentInput';
import TagInput from './TagInput';
import DescriptionInput from './DescriptionInput';
import ExpensesList from './ExpensesList';

import { addExpense as expense, setCurrencies as fetchCurrencies } from '../actions';

class ExpensesForm extends Component {
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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies, isFetching } = this.props;
    return (
      <>
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
        { isFetching && <h3>Carregando</h3>}
        <ExpensesList />

      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expenseInfo) => dispatch(expense(expenseInfo)),
  setCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

ExpensesForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  setCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
