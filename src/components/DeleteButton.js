import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpenseAction } from '../actions';

class DeleteButton extends Component {
  render() {
    const { idx, deleteItem, expenses } = this.props;
    return (
      <button
        data-testid="delete-btn"
        type="button"
        onClick={ () => {
          // console.log(expenses);
          expenses.splice(idx, 1);
          deleteItem(expenses);
        } }
      >
        Deletar
      </button>
    );
  }
}

DeleteButton.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  idx: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (idx) => dispatch(deleteExpenseAction(idx)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
