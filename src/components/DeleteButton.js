import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/index';

class DeleteButton extends React.Component {
  render() {
    const { id, deleteFromId } = this.props;
    return (
      <button
        type="button"
        onClick={ () => deleteFromId(id) }
        data-testid="delete-btn"
      >
        Deletar

      </button>
    );
  }
}

DeleteButton.propTypes = {
  deleteFromId: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteFromId: (id) => { dispatch(deleteExpense(id)); },
});

export default connect(null, mapDispatchToProps)(DeleteButton);
