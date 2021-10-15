import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenses } from '../actions/index';

class EditButton extends React.Component {
  render() {
    const { expense, edit } = this.props;
    return (
      <button
        type="button"
        onClick={ () => edit(expense) }
        data-testid="edit-btn"
      >
        Editar

      </button>
    );
  }
}

EditButton.propTypes = {
  edit: PropTypes.func.isRequired,
  expense: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  edit: (expense) => { dispatch(editExpenses(expense)); },
});

export default connect(null, mapDispatchToProps)(EditButton);
