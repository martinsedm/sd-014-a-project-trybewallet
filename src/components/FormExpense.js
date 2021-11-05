// Página de Formulário de despesa.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrencySelect from './CurrencySelect';
import fetchAPIMoeda from '../services/APIMoeda';
import { definirValorDespesaAction } from '../actions';

class FormExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selecionarPagamento = this.selecionarPagamento.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick() {
    const { definirValorDespesa } = this.props;
    const exchangeRates = await fetchAPIMoeda();
    this.setState({
      exchangeRates,
    });
    definirValorDespesa(this.state);
  }

  selecionarPagamento() {
    const { method, tag } = this.state;
    return (
      <div>
        <label htmlFor="method">
          Método de pagamento
          <select
            name="method"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro"> Dinheiro </option>
            <option value="Cartão de crédito"> Cartão de crédito </option>
            <option value="Cartão de débito"> Cartão de débito </option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            name="tag"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <CurrencySelect handleChange={ this.handleChange } />
        <div>{ this.selecionarPagamento() }</div>
        <button type="button" onClick={ this.handleClick }> Adicionar despesa </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  definirValorDespesa: (expenses) => dispatch(definirValorDespesaAction(expenses)),
});

FormExpense.propTypes = {
  definirValorDespesa: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormExpense);
