import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="describe">
          Descrição:
          <input type="text" name="describe" id="describe" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option value="">a</option>
          </select>
        </label>

        <label htmlFor="pag">
          Método de pagamento:
          <select name="pag" id="pag">
            <option value="">Dinheiro</option>
            <option value="">Cartão de débito</option>
            <option value="">Cartão de crédito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="">Alimentação</option>
            <option value="">Lazer</option>
            <option value="">Trabalho</option>
            <option value="">Transporte</option>
            <option value="">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

export default Form;
