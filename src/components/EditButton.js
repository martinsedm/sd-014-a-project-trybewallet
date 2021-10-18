import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initOrFinishEdit } from '../actions';

class EditButton extends Component {
  render() {
    const { idx, changeIdxState, editing } = this.props;
    return (
      <button
        type="button"
        data-testid="edit-btn"
        disabled={ editing }
        onClick={ () => {
          changeIdxState(idx, editing);
        } }
      >
        Editar
      </button>
    );
  }
}

EditButton.propTypes = {
  changeIdxState: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  idx: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeIdxState: (idx, boolean) => dispatch(initOrFinishEdit(idx, boolean)),
});

const mapStateToProps = (state) => ({
  editing: state.edit.editing,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
