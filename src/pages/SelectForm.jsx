import React, { Component } from 'react';

class SelectForm extends Component {
  render() {
    return (
      <>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {/* As opções do select serão
              preenchidas através da consulta à API.
              Isso será feito em um requisito mais a frente.
              Nesse momento você pode deixar o `<select>`
              vazio.
              <option value="xablau">Xablau</option>
              */}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

export default SelectForm;
