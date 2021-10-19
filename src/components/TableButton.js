import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TableButton extends Component {
  render() {
    const { handleClick, idBtn, text, testId } = this.props;
    return (
      <div>
        <button
          data-testid={ testId }
          id={ idBtn }
          type="button"
          onClick={ handleClick }
        >
          {text}
        </button>
      </div>
    );
  }
}

TableButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  idBtn: PropTypes.number.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TableButton;
