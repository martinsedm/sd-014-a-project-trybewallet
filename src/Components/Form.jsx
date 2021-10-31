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
        <label htmlFor="value">
          Valor
          <input name="valor" id="value" type="text" />
        </label>
        <label htmlFor="descripion">
          Descrição
          <input name="descrição" type="text" id="descripion" />
        </label>
        <label htmlFor="sigla">
          Moeda
          <select name="moeda" id="sigla" role="combobox">
            { moedas }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="Método de pagamento" id="payment">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-id">
          Tag
          <select name="tag" id="tag-id">
            <option name="Alimentação">Alimentação</option>
            <option name="Lazer">Lazer</option>
            <option name="Trabalho">Trabalho</option>
            <option name="Transporte">Transporte</option>
            <option name="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect(null, null)(Form);
