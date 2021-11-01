import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { type, text, disabled, testID, id, removeExpense } = this.props;
    return (
      <button
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
        data-testid={ testID }
        onClick={ removeExpense ? () => removeExpense(id) : null }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  testID: PropTypes.string,
  removeExpense: PropTypes.func,
  id: PropTypes.number,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  testID: '',
  removeExpense: null,
  id: null,
};

export default Button;
