import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addExpenseAction,
  updateTotalValueAction,
  editExpenseAction,
  fetchCurrenciesAction,
} from '../actions';
import WalletHeader from '../components/WalletHeader';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

const INITIAL_INPUT_VALUES = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_INPUT_VALUES,
      expenseId: 0,
      editMode: false,
      editID: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.setExpense = this.setExpense.bind(this);
    this.enableEditForm = this.enableEditForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  async setExpense() {
    const { addExpense, updateTotalValue } = this.props;
    const { expenseId, value, description, currency, method, tag } = this.state;
    const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();

    const newExpense = {
      id: expenseId,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    addExpense(newExpense);
    updateTotalValue();

    this.setState({ expenseId: expenseId + 1 });
  }

  enableEditForm({ target: { id } }) {
    const { expenses } = this.props;

    const objIndex = expenses.findIndex((exp) => exp.id === Number(id));

    this.setState({
      value: expenses[objIndex].value,
      description: expenses[objIndex].description,
      currency: expenses[objIndex].currency,
      method: expenses[objIndex].method,
      tag: expenses[objIndex].tag,
      editMode: true,
      editID: id,
    });
  }

  handleEdit() {
    const { value, description, currency, method, tag, editID } = this.state;
    const { expenses, updateTotalValue, editExpense } = this.props;

    const objIndex = expenses.findIndex((exp) => exp.id === Number(editID));

    const newExpenses = expenses.slice(0);

    newExpenses[objIndex] = {
      id: Number(editID),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: newExpenses[objIndex].exchangeRates,
    };

    this.setState({
      ...INITIAL_INPUT_VALUES,
      editMode: false,
    });

    editExpense(newExpenses);
    updateTotalValue();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { editMode } = this.state;
    const { expenses } = this.props;
    return (
      <div>
        <WalletHeader />
        <WalletForm
          expense={ this.state }
          handleChange={ this.handleChange }
          onClick={ editMode ? this.handleEdit : this.setExpense }
        />
        <WalletTable
          expenses={ expenses }
          enableEditForm={ this.enableEditForm }
        />
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  updateTotalValue: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseAction(payload)),
  editExpense: (payload) => dispatch(editExpenseAction(payload)),
  updateTotalValue: () => dispatch(updateTotalValueAction()),
  fetchCurrencies: () => dispatch(fetchCurrenciesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
