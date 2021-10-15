import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { value, currency, method, tag, description, handleChange } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="text"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" value={ currency } onChange={ handleChange }>
            {/* { currency.map((e, i) => (
            <option key={ i }>
              { e }
            </option>
          )) } */}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" name="method" value={ method } onChange={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" value={ tag } onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

export default Form;
