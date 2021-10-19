import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button type="submit" onClick={ onClick }>
          Adicionar despesas
        </button>
      </div>
    );
  }
}

ButtonAdd.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonAdd;
