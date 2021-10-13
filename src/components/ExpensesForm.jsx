import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import ExpensesList from './ExpensesList';

class ExpensesForm extends Component {
  render() {
    const { isFetching, editor } = this.props;
    return (
      <>
        { editor ? <EditExpense /> : <AddExpense />}
        { isFetching && <h3>Carregando</h3>}
        <ExpensesList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.wallet.isFetching,
  editor: state.wallet.editor,
});

ExpensesForm.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  editor: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(ExpensesForm);
