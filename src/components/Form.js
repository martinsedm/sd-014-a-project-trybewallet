import React, { useState, useEffect } from 'react';
import Input from './Input';
import './Form.css';

const Form = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch('https://economia.awesomeapi.com.br/json/all');
      setCurrencyOptions(Object.keys(await reponse.json()));
    };
    fetchData();
  }, []);

  return (
    <form>
      <Input title="Valor:" id="value-field" type="number" />
      <Input title="Descrição:" id="description-field" type="text" />
      <label htmlFor="currency">
        <h6>Moeda:</h6>
        <select id="currency">
          { currencyOptions && currencyOptions.map((currency) => {
            if (currency === 'USDT') return null;
            return <option key={ currency }>{ currency }</option>;
          }) }
        </select>
      </label>
      <label htmlFor="payment-field">
        <h6>Método de pagamento:</h6>
        <select id="payment-field">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag-field">
        <h6>Tag:</h6>
        <select id="tag-field">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    </form>
  );
};

export default Form;
