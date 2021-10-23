import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <button type="submit" onClick={ onChange }>
          Adicionar despesas
        </button>
      </div>
    );
  }
}

ButtonAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonAdd;
