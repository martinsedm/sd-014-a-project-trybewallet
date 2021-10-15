import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  newExpense,
  updateExpenses,
  editExpense,
  editInput,
  currenciesToState,
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
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { currencyNamesToState } = this.props;
    currencyNamesToState();
  }

  handleButton = () => {
    const { saveNewExpense } = this.props;
    saveNewExpense(this.state);
    this.setState({ description: '', value: '' });
  }

  handleDefaultInput = ({ target: { id, value } }) => this.setState({ [id]: value });

  handleEditButton = () => {
    const { expenses, saveUpdatedList, expenseToEdit } = this.props;
    const newList = expenses.reduce((acc, exp) => {
      if (exp.id === expenseToEdit.id) {
        acc.push(expenseToEdit);
        return acc;
      }
      acc.push(exp);
      return acc;
    }, []);
    saveUpdatedList(newList);
  }

  handleEditInput = ({ target: { id, value } }) => {
    const { editExpenseInput } = this.props;
    editExpenseInput({ [id]: value });
  }

  renderEditForm = (expenseToEdit, currencyList) => (
    <EditForm
      handleInput={ this.handleEditInput }
      handleButton={ this.handleEditButton }
      expense={ expenseToEdit }
      currencyList={ currencyList }
    />
  )

  renderDefaultForm = (currencyList, value, description) => (
    <ExpensesForm
      handleInput={ this.handleDefaultInput }
      handleButton={ this.handleButton }
      currencyList={ currencyList }
      value={ value }
      description={ description }
    />
  )

  render() {
    const { isEditing, currencyList, expenseToEdit } = this.props;
    const { value, description } = this.state;
    return (
      <div>
        <Header />
        {isEditing
          ? this.renderEditForm(expenseToEdit, currencyList)
          : this.renderDefaultForm(currencyList, value, description)}
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  saveNewExpense: PropTypes.func.isRequired,
  currencyNamesToState: PropTypes.func.isRequired,
  saveUpdatedList: PropTypes.func.isRequired,
  editExpenseInput: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencyList: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditing: PropTypes.bool.isRequired,
};

const mapDispatchToState = (dispatch) => ({
  currencyNamesToState: () => { dispatch(currenciesToState()); },
  saveNewExpense: (expenses) => { dispatch(newExpense(expenses)); },
  saveUpdatedList: (expenses) => {
    dispatch(updateExpenses(expenses));
    dispatch(editExpense(null));
  },
  editExpenseInput: (input) => {
    dispatch(editInput(input));
  },
});

const mapStateToProps = (state) => ({
  currencyList: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isEditing: state.edit.isEditing,
  expenseToEdit: state.edit.expense,
});

export default connect(mapStateToProps, mapDispatchToState)(Wallet);
