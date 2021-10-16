import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonLogin extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

ButtonLogin.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonLogin;
