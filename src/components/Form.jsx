import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" id="valor" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" id="descricao" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select id="moeda" name="moeda">
            <option>Default</option>
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" name="metodo">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

export default Form;
