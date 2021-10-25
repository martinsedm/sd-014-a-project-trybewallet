import React from 'react';
import MoedaApi from './MoedaApi';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: '',
      descrição: '',
      moeda: '',
      metodo: '',
      tag: '',
    };
    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, descrição, moeda, metodo, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="valor" onChange={ this.handle } value={ valor } />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            id="descrição"
            name="descrição"
            onChange={ this.handle }
            value={ descrição }
          />
        </label>

        <MoedaApi handle={ this.handle } value={ moeda } />

        <label htmlFor="metodo">
          Método de pagamento
          <select
            id="metodo"
            name="metodo"
            onChange={ this.handle }
            value={ metodo }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handle } value={ tag }>
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
