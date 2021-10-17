import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonLogin extends Component {
  render() {
    const { onClick, disabled } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

ButtonLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default ButtonLogin;
