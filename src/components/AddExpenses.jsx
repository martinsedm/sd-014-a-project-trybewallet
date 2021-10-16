import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, getCurrencyThunk, changeEditState,
  setEditedExpense } from '../actions/index';

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
    this.setExpenseToEdit = this.setExpenseToEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  componentDidUpdate() {
    const { editor, idToEdit } = this.props;
    if (editor) {
      this.setExpenseToEdit(idToEdit);
    }
  }

  async onClickBtn() {
    const { expenses, getCurrencies, sendExpense, isFetching,
      setEditState, setEdtExpense, toExchangeRates } = this.props;
    if (isFetching) {
      const { id, value, description, tag, currency, method, exchangeRates } = this.state;
      const edtExpense = { id, value, description, tag, currency, method, exchangeRates };
      setEdtExpense(edtExpense);
      return setEditState({
        load: false,
        newSet: false,
        expense: null,
      });
    }
    await getCurrencies();
    const { id, value, description, tag, currency, method, exchangeRates } = this.state;
    const expense = { id, value, description, tag, currency, method, exchangeRates };
    expense.id = expenses.length;
    expense.exchangeRates = toExchangeRates;
    await sendExpense(expense);
  }

  async setExpenseToEdit(idToEdit) {
    const { expenses, setEditState } = this.props;
    const toEdit = expenses.find((exp) => exp.id === idToEdit);
    const { id, value, description, tag, currency, method, exchangeRates } = toEdit;
    this.setState({ id, value, description, tag, currency, method, exchangeRates });
    await setEditState({
      load: false,
      newSet: true,
      expense: id,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description,
      tag, currency, method } = this.state;
    const { isFetching } = this.props;
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
          <button onClick={ this.onClickBtn } type="button">
            {isFetching ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
    toExchangeRates: state.wallet.toExchangeRates,
    editor: state.wallet.editor,
    idToEdit: state.wallet.idToEdit,
    isFetching: state.wallet.isFetching,
  };
}

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (payload) => dispatch(addExpense(payload)),
  setEdtExpense: (payload) => dispatch(setEditedExpense(payload)),
  getCurrencies: () => dispatch(getCurrencyThunk()),
  setEditState: (payload) => dispatch(changeEditState(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);

AddExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  editor: PropTypes.bool,
  isFetching: PropTypes.bool,
  idToEdit: PropTypes.number,
  getCurrencies: PropTypes.func.isRequired,
  setEditState: PropTypes.func.isRequired,
  setEdtExpense: PropTypes.func.isRequired,
  toExchangeRates: PropTypes.objectOf(PropTypes.any),
  sendExpense: PropTypes.func.isRequired,
};

AddExpenses.defaultProps = {
  toExchangeRates: {},
  editor: false,
  isFetching: false,
  idToEdit: 0,
};
