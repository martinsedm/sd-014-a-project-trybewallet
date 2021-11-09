import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenditure, setCurExpenditure as setCurExpenseAction } from '../actions';

class DeleteAndEditButton extends React.Component {
  constructor() {
    super();
    this.deleteExpense = this.deleteExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }

  deleteExpense() {
    const { id, deleteById } = this.props;
    deleteById(id);
  }

  editExpense() {
    const { id, setCurExpense } = this.props;
    setCurExpense(id);
  }

  render() {
    return (
      <>
        <input
          type="button"
          value="Deletar"
          data-testid="delete-btn"
          onClick={ this.deleteExpense }
        />
        <input
          type="button"
          value="Editar"
          data-testid="edit-btn"
          onClick={ this.editExpense }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteById: (id) => dispatch(deleteExpenditure(id)),
  setCurExpense: (id) => dispatch(setCurExpenseAction(id)),
});

DeleteAndEditButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  deleteById: PropTypes.func.isRequired,
  setCurExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DeleteAndEditButton);
