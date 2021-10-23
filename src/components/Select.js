import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { method, tag, onChange } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select
            value={ method }
            type="text"
            name="method"
            id="method"
            onChange={ onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
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
  method: PropTypes.string,
  onChange: PropTypes.func,
  tag: PropTypes.string,

};

Select.defaultProps = {
  tag: '',
  method: '',
  onChange: null,
};

export default Select;
