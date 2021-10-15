import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  saveExpenses,
  updateExpenses,
  editExpenses,
  editInput,
  addCurrencies,
} from '../actions';

import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    this.getCurrency();
  }

  getCurrency = async () => {
    const { addCurrenciesToState } = this.props;
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyList = await request.json();
    if (currencyList.USDT) delete currencyList.USDT;
    addCurrenciesToState(Object.keys(currencyList));
  }

  handleButton = () => {
    const { expensesToState } = this.props;
    const { description, currency, tag, method, value } = this.state;
    expensesToState({
      description, currency, tag, method, value,
    });
    this.setState({
      description: '',
      value: '',
      currency,
      method,
      tag,
    });
  }

  handleInput = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  renderDefaultForm = () => {
    const { value, description } = this.state;
    const { currencyList } = this.props;
    return (
      <ExpensesForm
        currencyList={ currencyList }
        handleInput={ this.handleInput }
        handleButton={ this.handleButton }
        value={ value }
        description={ description }
      />
    );
  }

  handleEditButton = () => {
    const { expenses, edit, expenseToEdit } = this.props;
    const newList = expenses.reduce((acc, exp) => {
      if (exp.id === expenseToEdit.id) {
        acc.push(expenseToEdit);
        return acc;
      }
      acc.push(exp);
      return acc;
    }, []);
    edit(newList);
  }

  handleEditInput = ({ target: { id, value } }) => {
    const { editExpenseInput } = this.props;
    editExpenseInput({ [id]: value });
  }

  renderEditForm = () => {
    const { expenseToEdit, currencyList } = this.props;
    return (
      <EditForm
        handleInput={ this.handleEditInput }
        handleButton={ this.handleEditButton }
        expense={ expenseToEdit }
        currencyList={ currencyList }
      />
    );
  }

  render() {
    const { isEditing } = this.props;
    return (
      <div>
        <Header />
        {isEditing ? this.renderEditForm() : this.renderDefaultForm()}
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  expensesToState: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.any).isRequired,
  isEditing: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  edit: PropTypes.func.isRequired,
  addCurrenciesToState: PropTypes.func.isRequired,
  editExpenseInput: PropTypes.func.isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapDispatchToState = (dispatch) => ({
  addCurrenciesToState: (currencies) => { dispatch(addCurrencies(currencies)); },
  expensesToState: (expenses) => { dispatch(saveExpenses(expenses)); },
  edit: (expenses) => {
    dispatch(updateExpenses(expenses));
    dispatch(editExpenses(null));
  },
  editExpenseInput: (input) => {
    dispatch(editInput(input));
  },
});

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  isEditing: state.edit.isEditing,
  expenseToEdit: state.edit.expense,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToState)(Wallet);
