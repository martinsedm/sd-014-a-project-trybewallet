import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { formaPagamento, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="formaPagamento">
          Método de Pagamento
          <select
            value={ formaPagamento }
            type="text"
            name="formaPagamento"
            id="formaPagamento"
            onChange={ onChange }
          >
            <option value="Cartão de Crédito">Dinheiro</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>

          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            value={ tag }
            type="text"
            name="tag"
            id="tag"
            onChange={ onChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>

          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  formaPagamento: PropTypes.string,
  onChange: PropTypes.func,
  tag: PropTypes.string,

};

Select.defaultProps = {
  tag: '',
  formaPagamento: '',
  onChange: null,
};

export default Select;
