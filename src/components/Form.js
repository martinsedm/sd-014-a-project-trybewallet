import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="despesa-value">
          Valor
          <input type="text" id="despesa-value" />
        </label>
        <label htmlFor="descrição-value">
          Descrição
          <input type="text" id="descrição-value" />
        </label>
        <label htmlFor="moeda-value">
          Moeda
          <select type="text" id="moeda-value">
            Escolher moeda
          </select>
        </label>
        <label htmlFor="pagamento-value">
          Método de pagamento
          <select type="text" id="pagamento-value">
            <option valuee="dinheiro">Dinheiro</option>
            <option valuee="credito">Cartão de crédito</option>
            <option valuee="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-value">
          Tag
          <select type="text" id="tag-value">
            <option valuee="alimentacao">Alimentação</option>
            <option valuee="lazer">Lazer</option>
            <option valuee="trabalho">Trabalho</option>
            <option valuee="transporte">Transporte</option>
            <option valuee="saude">Saúde</option>
          </select>
        </label>
      </form>

    );
  }
}

export default Form;
