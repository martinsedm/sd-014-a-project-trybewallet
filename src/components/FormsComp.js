import React, { Component } from 'react';

export default class FormsComp extends Component {
  render() {
    return (
      <forms>
        <label htmlFor="valor" className="form-group mr-3 ml-3">
          Valor
          <input type="text" id="valor" className="form-control" />
        </label>
        <label htmlFor="desc" className="form-group mr-3">
          Descrição
          <input type="text" id="desc" className="form-control mr-md-3" />
        </label>
        <label htmlFor="coin" className="form-group mr-md-3">
          Moeda
          <select id="coin" className="form-control">
            <option>This</option>
          </select>
        </label>
        <label htmlFor="payment" className="form-group mr-md-3">
          Método de pagamento
          <select id="payment" className="form-control">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" className="form-group mr-md-3">
          Tag
          <select id="tag" className="form-control">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </forms>
    );
  }
}
