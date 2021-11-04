import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class DeleteButton extends React.Component {
  render() {
    const { index, expenses, dispatchDelete } = this.props;

    return (
      <button
        type="button"
        onClick={ () => {
          const newExpense = expenses.filter((iten, id) => id !== index);
          dispatchDelete(newExpense);
        } }
        data-testid="delete-btn"
      >
        Remover
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (index) => dispatch(deleteExpense(index)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

DeleteButton.propTypes = {
  expenses: PropTypes.shape({
    filter: PropTypes.func.isRequired,
  }).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
