import React from 'react';
import P from 'prop-types';

class Button extends React.Component {
  render() {
    const { props: { type = 'button', onClick, content, isDisabled = false } } = this;
    return (
      <button
        type={ type === 'button' ? 'button' : 'submit' }
        onClick={ onClick }
        disabled={ isDisabled }
      >
        {content}
      </button>
    );
  }
}

Button.propTypes = {
  type: P.string.isRequired,
  onClick: P.func.isRequired,
  content: P.string.isRequired,
  isDisabled: P.bool.isRequired,
};

export default Button;
