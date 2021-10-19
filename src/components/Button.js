import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component { // fazendo diferente para aprender
  render() {
    const { onClick, disabled } = this.props;
    return (
      <button type="button" onClick={ onClick } disabled={ disabled }>
        Entrar
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}.isRequired;
