import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import MakeLogin from '../components/MakeLogin';
import { categories, payment } from '../data/index';
import { saveToLocalStorage } from '../services';
import {
  getIntCurrenciesThunk,
  addExpenseThunk,
  removeExpenseAction,
  editExpenseModeAction,
  saveExpenseAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    const { currencies } = props;
    this.state = {
      total: 0,
      saved: false,
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
    this.saveTable = this.saveTable.bind(this);
  }

  componentDidMount() {
    const { getIntCurrencies, expenses } = this.props;
    if (expenses.length > 0) {
      this.calculateSum(expenses);
    }
    getIntCurrencies();
  }

  componentDidUpdate(prevProps) {
    const { currencies, expenses, currencyToExchange, editor } = this.props;
    if (prevProps.currencies !== currencies) {
      this.updateStateForm({ currencies }, { saved: false });
    }
    if ((prevProps.expenses !== expenses)
      || (prevProps.currencyToExchange !== currencyToExchange)) {
      this.calculateSum(expenses);
    }
    if (editor && editor !== prevProps.editor) {
      const { idToEdit: { value, currency, method, tag, description } } = this.props;
      const formEdit = { value, currency, method, tag, description };
      this.updateStateForm(formEdit, { saved: false });
    }
  }

  calculateSum(expenses) {
    const { currencyToExchange } = this.props;
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
      saved: false,
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
    const { addExpense, saveExpense, editExpenseMode, editor, idToEdit } = this.props;
    const { form } = this.state;
    const { value, currency, method, tag, description } = form;
    if (editor) {
      const { id, exchangeRates } = idToEdit;
      const expense = { id, value, currency, method, tag, description, exchangeRates };
      saveExpense(expense);
      editExpenseMode('');
    } else {
      const expense = { value, currency, method, tag, description };
      addExpense(expense);
    }
    this.setState({
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

  saveTable() {
    const { expenses, user: { email } } = this.props;
    saveToLocalStorage(email, expenses);
    this.setState({ saved: true });
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
    const {
      user: { email },
      expenses,
      removeExpense,
      currencyToExchange,
      editor } = this.props;
    const { total, saved, form } = this.state;
    const textButton = editor ? 'Editar Despesa' : 'Adicionar Despesa';
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
            disableSave={ email === '' }
            disableBtn={ editor }
            removeExpense={ removeExpense }
            editExpense={ this.editExpense }
            saveTable={ this.saveTable }
          /> }
        </section>
        { saved && <p>Lista salva</p> }
        { email.length === 0 && <MakeLogin />}
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
