import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import MakeLogin from '../components/MakeLogin';
import { categories, payment } from '../data/index';
import {
  getIntCurrenciesThunk,
  addExpenseThunk,
  removeExpenseAction,
  editExpenseModeAction,
  saveExpenseAction,
  changeCurrencyExchangeAction,
  saveToLocalStorageThunk } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    const { currencies } = props;
    this.state = {
      total: 0,
      saved: false,
      form: {
        content: {
          value: 0,
          currency: '',
          method: '',
          tag: '',
          description: '',
        },
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
    this.handleExchange = this.handleExchange.bind(this);
  }

  componentDidMount() {
    const { getIntCurrencies, expenses } = this.props;
    if (expenses.length > 0) this.calculateSum(expenses);
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
      const formContent = { content: { value, currency, method, tag, description } };
      this.updateStateForm(formContent, { saved: false });
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
    this.setState({ total, saved: false });
  }

  updateStateForm(object, secondObj = {}) {
    const { form } = this.state;
    this.setState({ ...secondObj,
      form: { ...form, ...object },
    });
  }

  handleExpense() {
    const { addExpense, saveExpense, editExpenseMode, editor, idToEdit } = this.props;
    const { form } = this.state;
    const { content } = form;
    if (editor) {
      const { id, exchangeRates } = idToEdit;
      const expense = { ...content, id, exchangeRates };
      saveExpense(expense);
      editExpenseMode('');
    } else {
      const expense = { ...content };
      addExpense(expense);
    }
    this.setState({
      form: { ...form,
        content: {
          value: 0,
          currency: '',
          method: '',
          tag: '',
          description: '',
        },
      },
    });
  }

  editExpense(id) {
    const { editExpenseMode } = this.props;
    editExpenseMode(id);
  }

  saveTable() {
    const { expenses, user: { email }, saveToLocalStorage } = this.props;
    saveToLocalStorage(email, expenses);
    this.setState({ saved: true });
  }

  handlechange({ target: { name, value } }) {
    const { form } = this.state;
    this.setState({
      saved: false,
      form: { ...form,
        content: { ...form.content, [name]: value },
      },
    });
  }

  handleExchange({ target: { value } }) {
    const { changeCurrencyExchange } = this.props;
    changeCurrencyExchange(value);
  }

  render() {
    const {
      user: { email },
      expenses,
      removeExpense,
      currencyToExchange,
      editor,
      currencies,
      error: { status, message },
    } = this.props;
    const { total, saved, form } = this.state;
    const textButton = editor ? 'Editar Despesa' : 'Adicionar Despesa';
    return (
      <main>
        <Header
          data={ {
            email,
            total,
            currencies,
            currencyToExchange,
            onChange: this.handleExchange } }
        />
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
            exchange={ currencyToExchange }
            disableSave={ email === '' || editor }
            disableBtn={ editor }
            removeExpense={ removeExpense }
            editExpense={ this.editExpense }
            saveTable={ this.saveTable }
          /> }
        </section>
        { saved && <p>Lista salva</p> }
        { email.length === 0 && <MakeLogin />}
        { status && <h3>{`Erro na aplicação: '${message}'`}</h3>}
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
  error: PropTypes.objectOf(PropTypes.any).isRequired,
  getIntCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpenseMode: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  changeCurrencyExchange: PropTypes.func.isRequired,
  saveToLocalStorage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
  editor: state.control.editor,
  idToEdit: state.wallet.idToEdit,
  currencies: state.wallet.currencies,
  currencyToExchange: state.control.currencyToExchange,
  error: state.control.error,
});

const mapDispatchToProps = (dispatch) => ({
  getIntCurrencies: () => dispatch(getIntCurrenciesThunk()),
  addExpense: (expense) => dispatch(addExpenseThunk(expense)),
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
  editExpenseMode: (id) => dispatch(editExpenseModeAction(id)),
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
  changeCurrencyExchange: (exchange) => dispatch(changeCurrencyExchangeAction(exchange)),
  saveToLocalStorage: (email, expenses) => (
    dispatch(saveToLocalStorageThunk(email, expenses))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
