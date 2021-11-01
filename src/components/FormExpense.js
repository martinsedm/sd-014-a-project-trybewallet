// Página de Formulário de despesa.

import React from 'react';

class FormExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;

    return (
      <form>
        <label htmlFor="valor">
          valor:
          <input
            id="valor"
            type="number"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            value={ descricao }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" value={ moeda }>
            <option name="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento:
          <select id="metodoPagamento" value={ pagamento }>
            <option id="dinheiro">Dinheiro</option>
            <option id="credito">Cartão de crédito</option>
            <option id="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" value={ tag }>
            <option id="alimentacao">Alimentação</option>
            <option id="lazer">Lazer</option>
            <option id="trabalho">Trabalho</option>
            <option id="transporte">Transporte</option>
            <option id="saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormExpense;
