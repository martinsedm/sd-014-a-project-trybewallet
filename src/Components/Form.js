import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor>
          Valor:
          <input type="number" name="valor" />
        </label>
        <label htmlFor>
          Moeda:
          <select>
            <option>1</option>
          </select>
        </label>
        <label htmlFor>
          Método de pagamento:
          <select>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor>
          Tag:
          <select>
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor>
          Descrição:
          <textarea name="textbox" />
        </label>
      </form>

    );
  }
}
export default Form;
