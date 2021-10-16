import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent {
  render() {
    const { text, onClick, testId } = this.props;
    return (
      <button
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
};

export default Button;
