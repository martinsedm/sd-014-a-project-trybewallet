import React, { Component } from 'react';
import { createOptions } from '../utils/getRatesAPI';

export default class FormsComp extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      moedas: [],
    };

    this.createCurrencies = this.createCurrencies.bind(this);
  }

  componentDidMount() {
    this.createCurrencies();
  }

  async createCurrencies() {
    const moedas = await createOptions();
    this.setState({ moedas });
  }

  render() {
    const { value, method, tag, description, moedas } = this.state;
    return (
      <forms>
        <label htmlFor="valor" className="form-group mr-3 ml-3">
          Valor
          <input type="text" id="valor" value={ value } className="form-control" />
        </label>
        <label htmlFor="coin" className="form-group mr-md-3">
          Moeda
          <select id="coin" className="form-control">
            {moedas.map((rate) => (
              <option value={ rate } key={ rate }>
                {rate}
              </option>
            ))}
            ;
          </select>
        </label>
        <label htmlFor="payment" className="form-group mr-md-3">
          Método de pagamento
          <select id="payment" value={ method } className="form-control">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" className="form-group mr-md-3">
          Tag
          <select id="tag" value={ tag } className="form-control">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="desc" className="form-group mr-3">
          Descrição
          <input
            type="text"
            id="desc"
            value={ description }
            className="form-control mr-md-3"
          />
        </label>
      </forms>
    );
  }
}
