import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    const { getExpenses } = this.props;
    return (
      <button
        type="button"
        // disabled={ }
        onClick={ () => getExpenses(this.state) }
      >
        Adicionar despesa
      </button>
    );
  }
}

AddButton.propTypes = {
  getExpenses: PropTypes.func.isRequired,
};

export default AddButton;
