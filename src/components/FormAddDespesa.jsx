import React from 'react';
import SelecMoeda from './SelecMoeda';

class FormAddDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filtrarMoedas = this.filtrarMoedas.bind(this);
  }

  filtrarMoedas() {
    const { moedas } = this.props;
    const keysMoedas = Object.keys(moedas);
    const moedasValidas = keysMoedas
      .filter((moeda) => moeda !== 'USDT');
    return moedasValidas;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { handleChange, filtrarMoedas } = this;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            name="valor"
            value={ valor }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            name="descricao"
            value={ descricao }
            onChange={ handleChange }
          />
        </label>
        <SelecMoeda
          moeda={ moeda }
          handleChange={ handleChange }
          filtrarMoedas={ filtrarMoedas }
        />
        <label htmlFor="pagamento">
          Método de pagamento
          <select name="pagamento" value={ pagamento } onChange={ handleChange }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" value={ tag } onChange={ handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormAddDespesa;
