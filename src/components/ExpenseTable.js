import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseTable = () => {
  const expenses = useSelector((state) => state.wallet.expenses);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        { expenses
          .map(({ description, tag, method, value, exchangeRates, currency }, i) => (
            <tr key={ i }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
              <td>{ (Number(exchangeRates[currency].ask)) * Number(value) }</td>
              <td>Real</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
};

export default ExpenseTable;
