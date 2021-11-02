import React from 'react';

class WalletFormulario extends React.Component {
  constructor() {
    super();
    this.ContinuaçãoDoForm = this.ContinuaçãoDoForm.bind(this);
  }

  ContinuaçãoDoForm() {
    return (
      <label htmlFor="Tag">
        Tag:
        <select id="Tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>);
  }

  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor:
          <input type="number" id="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input type="text" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="Pagamento">
          Método De Pagamento:
          <select id="Pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        {this.ContinuaçãoDoForm()}
      </form>
    );
  }
}

export default WalletFormulario;
