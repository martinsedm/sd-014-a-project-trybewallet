import React from 'react';

const FormAddDebt = () => (
  <form>
    <label htmlFor="valor">
      Valor
      <input type="text" name="valor" id="valor" />
    </label>
    <label htmlFor="descricao">
      Descrição
      <input type="text" name="descricao" id="descricao" />
    </label>
    <label htmlFor="moeda">
      Moeda
      <select id="moeda">
        {/* <option value="mango">Mango</option> */}
      </select>
    </label>
    <label htmlFor="pagamendo">
      Método de pagamento
      <select id="pagamendo">
        <option value="dinheiro">Dinheiro</option>
        <option value="credito">Cartão de crédito</option>
        <option value="debito">Cartão de débito</option>
      </select>
    </label>
    <label htmlFor="tag">
      Tag
      <select id="tag">
        <option value="alimentacao">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>
    </label>
  </form>
);

export default FormAddDebt;
