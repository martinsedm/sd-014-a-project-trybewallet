import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class DeleteExpenseBtn extends React.Component {
  constructor() {
    super();
    this.removeExpense = this.removeExpense.bind(this);
  }

  removeExpense() {
    const { id, deleteById } = this.props;
    deleteById(id);
  }

  render() {
    return (
      <input
        type="button"
        value="Deletar"
        data-testid="delete-btn"
        onClick={ this.removeExpense }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteById: (id) => dispatch(deleteExpense(id)),
});

DeleteExpenseBtn.propTypes = {
  id: PropTypes.string.isRequired,
  deleteById: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteExpenseBtn);
