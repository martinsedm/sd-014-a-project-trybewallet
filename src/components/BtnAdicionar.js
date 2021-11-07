import React from 'react';
import PropTypes from 'prop-types';

class BtnAdicionar extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onChange }
        >
          Adicionar despesas
        </button>
      </div>
    );
  }
}

BtnAdicionar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BtnAdicionar;
