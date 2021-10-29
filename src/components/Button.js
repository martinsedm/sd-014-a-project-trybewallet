import React from 'react';
import PropsTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { name, onClick, disabled, label } = this.props;
    return (
      <button
        type="button"
        data-testid={ `${name}-input` }
        disabled={ disabled }
        onClick={ onClick }
      >
        {label}
      </button>

    );
  }
}

Button.propTypes = {
  label: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired,
  disabled: PropsTypes.bool.isRequired,
};

export default Button;
