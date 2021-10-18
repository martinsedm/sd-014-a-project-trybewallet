import React, { Component } from 'react';

class Form extends Component {
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
        <label htmlFor="campo-valor">
          Valor:
          <input
            id="campo-valor"
            type="number"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            value={ descricao }
            id="descricao"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" value={ moeda }>
            <option name="BRL">BRL</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select id="pagamento" value={ pagamento }>
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

export default Form;
