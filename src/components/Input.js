import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { valor, onChange, descricao } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            value={ valor }
            type="number"
            name="valor"
            id="valor"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            value={ descricao }
            type="text"
            name="descricao"
            id="descricao"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}
Input.propTypes = {
  valor: PropTypes.string,
  descricao: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  valor: '',
  descricao: '',
  onChange: null,
};

export default Input;
