import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent {
  render() {
    const { text, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
