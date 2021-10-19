import React from 'react';

class FormAddDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    const { handleChange } = this;
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
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" value={ moeda } onChange={ handleChange }>
            <option value="Moeda">Moeda</option>
          </select>
        </label>
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
