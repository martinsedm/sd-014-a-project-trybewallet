import React from 'react';
import { connect } from 'react-redux';

import fetchApi from '../services';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.renderValueOption = this.renderValueOption.bind(this);
  }

  componentDidMount() {
    this.renderValueOption();
  }

  async renderValueOption() {
    const request = await fetchApi();
    delete request.USDT;
    const keys = Object.keys(request);
    const options = [];

    for (let i = 0; i < keys.length; i += 1) {
      const option = (
        <option value={ request[keys[i]].code } key={ request[keys[i]].name }>
          { request[keys[i]].code }
        </option>
      );
      options.push(option);
    }

    this.setState({
      moedas: options,
    });
  }

  render() {
    const { moedas } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input name="valor" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input name="description" type="text" />
        </label>
        <label htmlFor="sigla">
          Moeda
          <select name="moeda" id="sigla" role="combobox">
            { moedas }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tage">
          Tag
          <select name="tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="healthy">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect(null, null)(Form);
