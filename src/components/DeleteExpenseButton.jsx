import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenditure } from '../actions';

class DeleteExpenseButton extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  deleteExpense() {
    const { id, deleteById } = this.props;
    deleteById(id);
  }

  render() {
    return (
      <input
        type="button"
        value="Deletar"
        data-testid="delete-btn"
        onClick={ this.deleteExpense }
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteById: (id) => dispatch(deleteExpenditure(id)),
});

DeleteExpenseButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteById: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteExpenseButton);
