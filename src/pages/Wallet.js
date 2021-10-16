import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { categories, payment } from '../data/index';
import {
  getIntCurrenciesThunk,
  addExpenseThunk,
  removeExpenseAction,
  editExpenseModeAction,
  saveExpenseAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { user: { email }, currencyToExchange, currencies } = props;
    this.state = {
      email,
      total: 0,
      currencyToExchange,
      editorMode: false,
      form: {
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
        currencies,
        categories,
        payment,
      },
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.updateStateForm = this.updateStateForm.bind(this);
    this.calculateSum = this.calculateSum.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  componentDidMount() {
    const { getIntCurrencies } = this.props;
    getIntCurrencies();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currencies, expenses, editor, idToEdit } = this.props;
    const { currencyToExchange } = this.state;
    if (prevProps.currencies !== currencies) {
      this.updateStateForm({ currencies });
    }
    if ((prevProps.expenses !== expenses)
      || (prevState.currencyToExchange !== currencyToExchange)) {
      this.calculateSum(expenses);
    }
    if (editor && editor !== prevProps.editor) {
      const { idToEdit: { value, currency, method, tag, description } } = this.props;
      const formEdit = { value, currency, method, tag, description };
      this.updateStateForm(formEdit, { editorMode: true, idToEdit: { ...idToEdit } });
    }
  }

  calculateSum(expenses) {
    const { currencyToExchange } = this.state;
    const total = expenses.reduce((acc, { currency, value, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      const valueInReal = Math.round(100 * Number(value) * Number(ask)) / 100;
      if (currencyToExchange !== 'BRL') {
        const { ask: askAgain } = exchangeRates[currencyToExchange];
        const valueInAnother = Math.round(100 * (valueInReal / Number(askAgain))) / 100;
        return acc + valueInAnother;
      }
      return acc + valueInReal;
    }, 0);
    this.setState({
      total,
    });
  }

  updateStateForm(object, secondObj = {}) {
    const { form } = this.state;
    this.setState({
      ...secondObj,
      form: { ...form, ...object },
    });
  }

  handleExpense() {
    const { addExpense, saveExpense, editExpenseMode } = this.props;
    const { editorMode, form, idToEdit } = this.state;
    const { value, currency, method, tag, description } = form;
    if (editorMode) {
      const { id, exchangeRates } = idToEdit;
      const expense = { id, value, currency, method, tag, description, exchangeRates };
      saveExpense(expense);
      editExpenseMode('');
    } else {
      const expense = { value, currency, method, tag, description };
      addExpense(expense);
    }
    this.setState({
      editorMode: false,
      idToEdit: {},
      form: {
        ...form,
        value: 0,
        currency: '',
        method: '',
        tag: '',
        description: '',
      },
    });
  }

  editExpense(id) {
    const { editExpenseMode } = this.props;
    editExpenseMode(id);
  }

  handlechange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: value,
      },
    });
  }

  render() {
    const { email, total, currencyToExchange, form, editorMode } = this.state;
    const textButton = editorMode ? 'Editar Despesa' : 'Adicionar Despesa';
    const { expenses, removeExpense } = this.props;
    return (
      <main>
        <Header data={ { email, total, currencyToExchange } } />
        <section>
          <Form
            { ...form }
            textButton={ textButton }
            onChange={ this.handlechange }
            onClick={ this.handleExpense }
          />
        </section>
        <section>
          { expenses.length !== 0
          && <Table
            expenses={ expenses }
            removeExpense={ removeExpense }
            editExpense={ this.editExpense }
          /> }
        </section>
      </main>
    );
  }
}

Wallet.defaultProps = {
  currencyToExchange: '',
  editor: false,
  idToEdit: {},
};

Wallet.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  editor: PropTypes.bool,
  idToEdit: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencyToExchange: PropTypes.string,
  getIntCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpenseMode: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  currencies: state.wallet.currencies,
  currencyToExchange: state.wallet.currencyToExchange,
});

const mapDispatchToProps = (dispatch) => ({
  getIntCurrencies: () => dispatch(getIntCurrenciesThunk()),
  addExpense: (expense) => dispatch(addExpenseThunk(expense)),
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
  editExpenseMode: (id) => dispatch(editExpenseModeAction(id)),
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
