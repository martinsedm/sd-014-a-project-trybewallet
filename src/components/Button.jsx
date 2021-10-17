import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { text, onClick, testId, disabled } = this.props;
    return (
      <button
        disabled={ disabled }
        type="button"
        onClick={ onClick }
        data-testid={ testId }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
